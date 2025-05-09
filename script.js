// Удален объект translations отсюда, теперь он будет загружаться из файла


// Объявляем переменную translations, которая будет заполнена после загрузки файла
let translations = {};

// Функция для загрузки переводов из файла local.txt
async function loadTranslations(langFile = 'local.txt') {
    try {
        const response = await fetch(langFile);
        if (!response.ok) {
            // Если файл не найден или другая HTTP ошибка, выводим ошибку
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        parseTranslations(text);
        console.log("Translations loaded and parsed from", langFile);
    } catch (error) {
        console.error("Failed to load translations from", langFile, ":", error);
        // Fallback: Если загрузка файла не удалась, можно использовать пустой объект
        // или, если есть резервные переводы (хотя мы их убрали), использовать их.
        // Сейчас просто оставляем translations как пустой объект, getTranslation будет использовать ключи.
    }
}

// Функция для разбора текста из local.txt и заполнения объекта translations
function parseTranslations(text) {
    const lines = text.split('\n');
    let currentLang = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        // Пропускаем пустые строки и строки комментариев, начинающиеся с #
        if (!trimmedLine || trimmedLine.startsWith('#')) {
            continue;
        }

        // Проверяем, является ли строка заголовком секции языка, например [en]
        const langMatch = trimmedLine.match(/^\[([a-z]{2})\]$/);
        if (langMatch) {
            currentLang = langMatch[1];
            // Убеждаемся, что для этого языка существует объект в translations
            if (!translations[currentLang]) {
                translations[currentLang] = {};
            }
            continue; // Переходим к следующей строке после заголовка секции
        }

        // Если мы находимся внутри секции языка
        if (currentLang) {
            // Ищем разделитель ключ=значение
            const separatorIndex = trimmedLine.indexOf('=');
            if (separatorIndex > 0) { // Убедимся, что = не в самом начале
                const key = trimmedLine.substring(0, separatorIndex).trim();
                const value = trimmedLine.substring(separatorIndex + 1).trim();
                 if (key) { // Убедимся, что ключ не пустой
                    translations[currentLang][key] = value;
                 }
            } else {
                 console.warn(`Skipping malformed translation line in [${currentLang}]: ${trimmedLine}`);
            }
        } else {
             // Если строка с переводом найдена до заголовка секции языка
             console.warn(`Skipping translation line outside of a language section: ${trimmedLine}`);
        }
    }
    // console.log("Parsed translations object:", translations); // Опционально: вывести результат парсинга
}


// --- Объявление КОНСТАНТ и глобальных ПЕРЕМЕННЫХ в самом начале ---
const DEFAULT_SPEED_GPS = 10; // Скорость по умолчанию в поколений/сек
const MIN_SPEED_GPS = 1;
const MAX_SPEED_GPS = 20; // Максимальная скорость для слайдера

const MIN_GRID_SIZE = 10; // Минимальные/максимальные значения для слайдеров размера
const MAX_GRID_SIZE_SLIDER = 200;
const DEFAULT_GRID_SIZE = 50; // Размер по умолчанию

// Определяем начальный язык. Сначала из localStorage, затем из языка браузера, по умолчанию английский.
// currentLanguage будет использоваться функцией getTranslation, но объект translations
// будет заполнен только после загрузки файла.
let currentLanguage = localStorage.getItem('preferredLanguage') || (navigator.language.startsWith('ru') ? 'ru' : 'en');

// Цвета и видимость сетки теперь снова используются напрямую для отрисовки
let liveCellColor = '#000000'; // Инициализируем значением по умолчанию (будут обновлены из HTML/localStorage)
let deadCellColor = '#ffffff'; // Инициализируем значением по умолчанию (будут обновлены из HTML/localStorage)
let gridLineColor = '#cccccc'; // Инициализируем значением по умолчанию (будут обновлены из HTML/localStorage)
let showGridLines = true; // Инициализируется позже (будет обновлен из HTML/localStorage)


let isToroidal = false;
let neighborhoodType = 'moore';

let birthRules = [3];
let survivalRules = [2, 3];

// Переменные состояния игры (инициализируются в initializeGrid)
const resolution = 10; // Размер клетки в пикселях
let COLS; // Количество столбцов
let ROWS; // Количество строк
let grid; // Сетка игры
let intervalId; // Используем setInterval для контроля скорости
let isRunning = false;
let isDrawing = false; // Флаг для рисования мышью
let drawState = 1; // Состояние (0 или 1), в которое мы РИСУЕМ
let generation = 0; // Текущее поколение
let liveCellsCount = 0;


// --- Получение ссылок на элементы (до DOMContentLoaded) ---
const canvas = document.getElementById('gameCanvas');
// Восстанавливаем контекст 2D Canvas
const ctx = canvas ? canvas.getContext('2d') : null; // Проверка на null

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const settingsButton = document.getElementById('settingsButton');

const speedInput = document.getElementById('speedInput');
const speedSlider = document.getElementById('speedSlider');

const generationCountSpan = document.getElementById('generationCount');
const liveCellCountSpan = document.getElementById('liveCellCount');

const settingsModal = document.getElementById('settingsModal');
const closeModalButtons = document.querySelectorAll('.close-button');

const liveColorPicker = document.getElementById('liveColorPicker');
const deadColorPicker = document.getElementById('deadColorPicker');
const gridColorPicker = document.getElementById('gridColorPicker'); // Актуально для 2D
const toggleGridLines = document.getElementById('toggleGridLines'); // Актуально для 2D

const gridWidthInput = document.getElementById('gridWidthInput');
const gridWidthSlider = document.getElementById('gridWidthSlider');
const gridHeightInput = document.getElementById('gridHeightInput');
const gridHeightSlider = document.getElementById('gridHeightSlider');

const applySizeButton = document.getElementById('applySizeButton');
const toggleToroidal = document.getElementById('toggleToroidal');

const neighborhoodSelect = document.getElementById('neighborhoodSelect');

const rulesInput = document.getElementById('rulesInput');
const applyRulesButton = document.getElementById('applyRulesButton');

const saveToJsonButton = document.getElementById('saveToJsonButton');
const loadFromJsonInput = document.getElementById('loadFromJsonInput');

const languageSelect = document.getElementById('languageSelect');


// --- Функции локализации ---
function getTranslation(key, replacements = {}) {
    // Ищем перевод сначала для текущего языка, затем для английского, иначе возвращаем сам ключ
    let text = translations[currentLanguage] && translations[currentLanguage][key] !== undefined
               ? translations[currentLanguage][key]
               : (translations['en'] && translations['en'][key] !== undefined ? translations['en'][key] : key);

    // Применяем замены плейсхолдеров, если есть
    for (const placeholder in replacements) {
        const regex = new RegExp(`{${placeholder}}`, 'g');
        text = text.replace(regex, replacements[placeholder]);
    }
    return text;
}

// Обновление UI элементов на основе текущего языка и загруженных переводов
function updateUI_Language() {
    console.log("Updating UI language to:", currentLanguage);
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    console.log("Found elements to translate:", elementsToTranslate.length);
    // Напоминание: Убедитесь, что ваши HTML элементы имеют атрибут data-lang-key,
    // соответствующий ключам в объекте translations, чтобы локализация работала.


    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = getTranslation(key);
        // Опционально: выводите в консоль каждую примененную локализацию для отладки
        // console.log(`Translating key "${key}" to "${translation}" для элемента`, element);
        element.textContent = translation;
    });

     // Обновляем текст для опций в select'е типа соседства вручную, т.к. они не имеют data-lang-key
     const mooreOption = document.querySelector('#neighborhoodSelect option[value="moore"]');
     const vonneumannOption = document.querySelector('#neighborhoodSelect option[value="vonneumann"]');
     if (mooreOption) mooreOption.textContent = getTranslation('mooreNeighborhood');
     if (vonneumannOption) vonneumannOption.textContent = getTranslation('vonneumannNeighborhood');

     // Обновляем плейсхолдеры, заголовки и другие специфичные элементы
     if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`; // Правила не меняются при смене языка
     if(document.title) document.title = getTranslation('gameTitle'); // Заголовок страницы

     // Метки цвета и видимости сетки теперь снова отображаются (убеждаемся, что display не none)
     const gridColorLabelElement = document.querySelector('label[for="gridColorPicker"]');
     const showGridLinesLabelElement = document.querySelector('label[for="toggleGridLines"]');
     const gridColorPickerElement = document.getElementById('gridColorPicker');
     const toggleGridLinesElement = document.getElementById('toggleGridLines');

     if (gridColorLabelElement) gridColorLabelElement.textContent = getTranslation('gridColorLabel');
     if (showGridLinesLabelElement) showGridLinesLabelElement.textContent = getTranslation('showGridLinesLabel');

     // Убеждаемся, что эти элементы видимы
     if (gridColorPickerElement) gridColorPickerElement.style.display = '';
     if (toggleGridLinesElement) toggleGridLinesElement.style.display = '';
     if (gridColorLabelElement) gridColorLabelElement.style.display = '';
     if (showGridLinesLabelElement) showGridLinesLabelElement.style.display = '';
}

function setLanguagePreference(lang) {
    // Проверяем, есть ли переводы для выбранного языка, прежде чем устанавливать его
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang); // Сохраняем выбор пользователя в localStorage
        updateUI_Language(); // Обновляем интерфейс
    } else {
        console.warn(`Translations for language "${lang}" not found.`);
        // Можно остаться на текущем языке или вернуться к английскому
        // alert(`Translations for language "${lang}" not available.`);
        // Возвращаем select к текущему активному языку, если выбранный не найден
        if(languageSelect) languageSelect.value = currentLanguage;
    }
}


// --- Функции состояния игры и логики (возвращаемся к 2D Canvas отрисовке) ---

// Функция для конвертации поколений/сек в миллисекунды на поколение
function gpsToMps(gps) {
    const speed = parseInt(gps);
    if (isNaN(speed) || speed <= 0) return 1000;
    return 1000 / speed;
}

// Инициализация размеров канваса и сетки (для 2D Canvas)
function initializeGrid(width, height) {
    isRunning = false;
    clearInterval(intervalId);
    generation = 0;
    updateInfoDisplay();

    if (canvas && ctx) {
        // Размеры сетки в клетках
        COLS = width;
        ROWS = height;

        // Добавляем проверку на корректность размеров
        if (COLS <= 0 || ROWS <= 0) {
            console.error("Invalid grid dimensions provided, resetting to default:", { COLS, ROWS });
             // Переинициализируем с размерами по умолчанию, чтобы избежать ошибок
            COLS = DEFAULT_GRID_SIZE;
            ROWS = DEFAULT_GRID_SIZE;
             console.warn(`Resetting dimensions to default: ${COLS}x${ROWS}`);
        }

         // Устанавливаем размеры канваса в пикселях для 2D Canvas после определения COLS/ROWS
         canvas.width = COLS * resolution;
         canvas.height = ROWS * resolution;


        grid = createGrid(); // Создаем новую сетку данных (массив 0/1)
        drawGrid(grid); // Отрисовываем начальную сетку на 2D Canvas
    } else {
        console.error("Canvas or 2D rendering context not found!");
        // Можно показать сообщение об ошибке пользователю
    }
}


// Функция для создания пустой сетки (остается прежней)
function createGrid() {
     if (COLS === undefined || ROWS === undefined || COLS <= 0 || ROWS <= 0) {
         console.error("Cannot create grid: COLS or ROWS are not defined or invalid.", {COLS, ROWS});
         return null;
     }
    liveCellsCount = 0;
    const newGrid = new Array(COLS);
    for(let i = 0; i < COLS; i++) {
        newGrid[i] = new Array(ROWS).fill(0);
    }
    return newGrid;
}

// Функция для заполнения сетки случайными значениями (остается прежней, но отрисовывает на 2D Canvas)
function randomGrid() {
     if (COLS === undefined || ROWS === undefined || COLS <= 0 || ROWS <= 0) {
          console.error("Cannot create random grid: COLS or ROWS are not defined or invalid.", {COLS, ROWS});
         return null;
     }
    generation = 0;
    liveCellsCount = 0;
     const newGrid = new Array(COLS);
     for(let i = 0; i < COLS; i++) {
         newGrid[i] = new Array(ROWS).fill(null).map(() => Math.random() > 0.7 ? 1 : 0);
     }

     for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
            if (newGrid[col][row] === 1) {
                liveCellsCount++;
            }
        }
    }
    drawGrid(newGrid); // Отрисовываем случайное поле на 2D Canvas
    return newGrid;
}

// Функция для отрисовки сетки (ВОССТАНОВЛЕНА для 2D Canvas)
function drawGrid(grid) {
    if (!ctx || !grid || COLS === undefined || ROWS === undefined || COLS <= 0 || ROWS <= 0) {
        console.error("Cannot draw grid: 2D context, grid or dimensions missing or invalid.");
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
            const cell = grid[col][row];

            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution);
            ctx.fillStyle = cell ? liveCellColor : deadCellColor;
            ctx.fill();

            if (showGridLines) {
                ctx.strokeStyle = gridLineColor;
                ctx.stroke();
            }
        }
    }
    updateInfoDisplay();
}

// Функция для вычисления следующего поколения (остается прежней, но отрисовывает на 2D Canvas)
function nextGeneration(grid) {
    if (!grid || COLS === undefined || ROWS === undefined || COLS <= 0 || ROWS <= 0) {
        console.error("Cannot compute next generation: grid or dimensions are missing or invalid.", {COLS, ROWS, grid_is_array: Array.isArray(grid)});
        return grid;
    }

    const nextGrid = new Array(COLS);
     for(let i = 0; i < COLS; i++) {
         nextGrid[i] = new Array(ROWS).fill(0);
     }

    let currentLiveCells = 0;

    for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
            const cell = grid[col][row];
            let numNeighbors = 0;

            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }

                    if (neighborhoodType === 'vonneumann' && Math.abs(i) + Math.abs(j) !== 1) {
                         continue;
                    }

                    let x_cell = col + i;
                    let y_cell = row + j;

                    if (isToroidal) { // Используем актуальное значение isToroidal
                         x_cell = (x_cell % COLS + COLS) % COLS;
                         y_cell = (y_cell % ROWS + ROWS) % ROWS;
                    } else {
                        if (x_cell < 0 || y_cell < 0 || x_cell >= COLS || y_cell >= ROWS) {
                             continue;
                        }
                    }

                    // Проверяем границы перед доступом к grid в соседе (на всякий случай)
                    if (x_cell >= 0 && x_cell < COLS && y_cell >= 0 && y_cell < ROWS) {
                         const currentNeighbor = grid[x_cell] !== undefined ? grid[x_cell][y_cell] : 0;
                         numNeighbors += currentNeighbor;
                    }
                }
            }

            if (cell === 1) {
                if (survivalRules.includes(numNeighbors)) {
                    nextGrid[col][row] = 1;
                    currentLiveCells++;
                } else {
                    nextGrid[col][row] = 0;
                }
            } else {
                if (birthRules.includes(numNeighbors)) {
                     nextGrid[col][row] = 1;
                     currentLiveCells++;
                } else {
                    nextGrid[col][row] = 0;
                }
            }
        }
    }

    generation++;
    liveCellsCount = currentLiveCells;
    drawGrid(nextGrid); // Отрисовываем новое поколение на 2D Canvas
    return nextGrid;
}

// Обновление отображения информации (остается прежней)
function updateInfoDisplay() {
     if(generationCountSpan) generationCountSpan.textContent = generation;
     if(liveCellCountSpan) liveCellCountSpan.textContent = liveCellsCount;
}

// --- Ручное рисование на канвасе (ВОССТАНОВЛЕНА для 2D Canvas, добавлена поддержка касаний) ---
function setCellState(col, row, state) {
     // Проверка на наличие контекста 2D Canvas
     if (ctx && grid && COLS !== undefined && ROWS !== undefined && COLS > 0 && ROWS > 0 && col >= 0 && col < COLS && row >= 0 && row < ROWS && (state === 0 || state === 1)) {
         const currentState = grid[col][row];
         if (currentState !== state) {
             grid[col][row] = state; // Обновляем массив данных

             if (state === 1) {
                 liveCellsCount++;
             } else {
                 liveCellsCount--;
             }

             // Отрисовываем только измененную клетку на 2D Canvas
             const color = state === 1 ? liveCellColor : deadCellColor; // Используем актуальные цвета
             ctx.fillStyle = color;
             ctx.fillRect(col * resolution, row * resolution, resolution, resolution);

             // Если сетка видна, отрисовываем границы вокруг измененной клетки
             if (showGridLines) { // Используем актуальное значение showGridLines
                 ctx.strokeStyle = gridLineColor; // Используем актуальный цвет сетки
                 ctx.strokeRect(col * resolution, row * resolution, resolution, resolution);
             }

             updateInfoDisplay(); // Обновляем счетчик живых клеток
         }
     } else {
          console.warn("Cannot set cell state: 2D context not ready or invalid coordinates/state.", { ctx: !!ctx, grid: !!grid, col, row, COLS, ROWS, state });
     }
}

// Функция запуска симуляции с учетом скорости (остается прежней, использует nextGeneration и drawGrid)
function startSimulation() {
    // Проверяем наличие контекста 2D Canvas
    if (!isRunning && ctx && grid && COLS !== undefined && ROWS !== undefined && COLS > 0 && ROWS > 0) {
        isRunning = true;
        clearInterval(intervalId);

        const currentSpeedGPS = speedInput ? parseInt(speedInput.value) : DEFAULT_SPEED_GPS; // Используем актуальное значение скорости
        const intervalTime = gpsToMps(currentSpeedGPS);
        const safeIntervalTime = Math.max(1, intervalTime);

        intervalId = setInterval(() => {
            grid = nextGeneration(grid); // nextGeneration отрисовывает на 2D Canvas
        }, safeIntervalTime);
    } else if (!ctx) {
         console.warn("Cannot start simulation: 2D Canvas context not initialized.");
    } else if (!grid) {
         console.warn("Cannot start simulation: Grid is not initialized.");
    }
    else {
         console.warn("Cannot start simulation: Grid dimensions are invalid.", {COLS, ROWS});
    }
}


// --- Функционал внутри модального окна настроек ---

// Функция инициализации игры с параметрами по умолчанию (возвращена к 2D Canvas)
function initializeGameWithDefaults() {
    // Инициализируем игру с параметрами по умолчанию
    initializeGrid(DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE);

    // Устанавливаем начальные значения для всех элементов управления интерфейса настроек
    // Переменные игры (цвета, правила, тороидальность, соседство) уже инициализированы в начале скрипта
    // или будут обновлены обработчиками событий при взаимодействии пользователя
     if(speedInput) speedInput.value = DEFAULT_SPEED_GPS;
     if(speedSlider) speedSlider.value = DEFAULT_SPEED_GPS;

     if(gridWidthInput) gridWidthInput.value = COLS; // Используем фактические COLS/ROWS после initializeGrid
     if(gridWidthSlider) gridWidthSlider.value = COLS;
     if(gridHeightInput) gridHeightInput.value = ROWS;
     if(gridHeightSlider) gridHeightSlider.value = ROWS;

     // Начальные значения для тороидальности и соседства уже заданы в глобальных переменных.
     // Их состояние в UI будет обновлено при открытии модалки или здесь.
     if(toggleToroidal) toggleToroidal.checked = isToroidal;
     if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType;

     if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`; // Правила по умолчанию

     // Начальные цвета и видимость сетки уже заданы в глобальных переменных.
     // Их состояние в UI будет обновлено при открытии модалки или здесь.
     if(liveColorPicker) liveColorPicker.value = liveCellColor;
     if(deadColorPicker) deadColorPicker.value = deadCellColor;
     if(gridColorPicker) gridColorPicker.value = gridLineColor;
     if(toggleGridLines) toggleGridLines.checked = showGridLines;


     // updateUI_Language(); // Обновляем UI здесь или после установки начального языка в DOMContentLoaded
}


// --- Инициализация игры при загрузке страницы (возвращена к 2D Canvas) ---
function initializeGameOnLoad() {
    // Инициализация игры с параметрами по умолчанию на 2D Canvas
    // initializeGameWithDefaults вызывает initializeGrid
    initializeGameWithDefaults();


    // updateUI_Language() вызывается в DOMContentLoaded после загрузки переводов
}


// --- Функция для генерации случайной строки ---
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// --- Функция для генерации случайной строки цифр ---
function generateRandomDigitString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10).toString(); // Генерируем случайную цифру от 0 до 9
    }
    return result;
}


// Запускаем логику после полной загрузки DOM
document.addEventListener('DOMContentLoaded', async () => {

    // --- Загрузка переводов из local.txt ---
    await loadTranslations(); // Ждем загрузки и разбора переводов

    // --- Инициализация Игры (на 2D Canvas) ---
    // initializeGameOnLoad вызывает initializeGrid с параметрами по умолчанию
    initializeGameOnLoad();

    // Устанавливаем начальные значения для переключателя языка после загрузки переводов
     if(languageSelect) {
        // Убедимся, что текущий определенный язык (из localStorage или браузера) существует в переводах
        if (!translations[currentLanguage]) {
            console.warn(`Preferred language "${currentLanguage}" not found in translations, falling back to English.`);
            currentLanguage = 'en'; // Возврат к английскому, если предпочтительный язык не найден
        }
        // Убедимся, что английский язык существует как минимум
        if (!translations['en']) {
             console.error("English translations ('en') not found in local.txt! Localization will not work correctly.");
             // Переводы останутся пустыми, getTranslation будет возвращать ключи
        }

        languageSelect.value = currentLanguage; // Устанавливаем значение в UI
        updateUI_Language(); // Обновляем UI с использованием загруженных переводов и текущего языка
     } else {
         console.warn("Language select element not found.");
         // Если элемента выбора языка нет, все равно обновляем UI на основе текущего языка
         updateUI_Language();
     }


    // --- Привязка всех обработчиков событий ---

    // --- Обработчики событий КНОПОК УПРАВЛЕНИЯ ---
    if(startButton) startButton.addEventListener('click', startSimulation);
    if(pauseButton) pauseButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
    });
    if(randomButton) randomButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
        grid = randomGrid(); // randomGrid отрисовывает на 2D Canvas
    });
    if(clearButton) clearButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
        grid = createGrid(); // createGrid создает пустой массив
        drawGrid(grid); // Отрисовываем
        generation = 0;
        updateInfoDisplay();
    });
    if(settingsButton) settingsButton.addEventListener('click', () => {
        isRunning = false; clearInterval(intervalId);
         if(settingsModal) settingsModal.style.display = 'flex';
        // Обновляем значения полей в модалке ПЕРЕД ее открытием,
        // чтобы они отражали текущие активные настройки игры
         if(gridWidthInput) gridWidthInput.value = COLS;
         if(gridWidthSlider) gridWidthSlider.value = COLS;
         if(gridHeightInput) gridHeightInput.value = ROWS;
         if(gridHeightSlider) gridHeightSlider.value = ROWS;
         if(toggleToroidal) toggleToroidal.checked = isToroidal; // Обновляем состояние чекбокса
         if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType; // Обновляем выбранный тип соседства
         if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`; // Обновляем поле правил
         if(liveColorPicker) liveColorPicker.value = liveCellColor; // Обновляем цвет в color picker
         if(deadColorPicker) deadColorPicker.value = deadCellColor; // Обновляем цвет в color picker
         if(gridColorPicker) gridColorPicker.value = gridLineColor; // Обновляем цвет сетки в color picker
         if(toggleGridLines) toggleGridLines.checked = showGridLines; // Обновляем состояние чекбокса сетки

         if(loadFromJsonInput) loadFromJsonInput.value = ''; // Сбрасываем поле выбора файла
    });


    // Обработчики синхронизации полей ввода/слайдеров СКОРОСТИ
    if(speedSlider) speedSlider.addEventListener('input', () => {
        const sliderSpeed = parseInt(speedSlider.value);
        if(speedInput) speedInput.value = sliderSpeed;
        // Скорость применяется при следующем запуске симуляции или сразу, если симуляция уже идет
        if (isRunning) {
            startSimulation(); // Перезапускаем с новой скоростью
        }
    });
     if(speedInput) speedInput.addEventListener('input', () => {
        let inputSpeed = parseInt(speedInput.value);
         if (isNaN(inputSpeed) || inputSpeed < MIN_SPEED_GPS) {
            inputSpeed = MIN_SPEED_GPS;
             if(speedInput) speedInput.value = inputSpeed;
        }
         // Ограничиваем значение input максимальной скоростью слайдера при вводе
         if(inputSpeed > MAX_SPEED_GPS) {
             inputSpeed = MAX_SPEED_GPS;
             if(speedInput) speedInput.value = inputSpeed;
         }
         if(speedSlider) speedSlider.value = inputSpeed; // Синхронизируем слайдер
        // Скорость применяется при следующем запуске симуляции или сразу, если симуляция уже идет
        if (isRunning) {
            startSimulation(); // Перезапускаем с новой скоростью
        }
    });

    // Обработчики синхронизации полей ввода/слайдеров ШИРИНЫ СЕТКИ
    if(gridWidthInput) gridWidthInput.addEventListener('input', () => {
        let inputVal = parseInt(gridWidthInput.value);
         if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) {
             inputVal = MIN_GRID_SIZE;
             if(gridWidthInput) gridWidthInput.value = inputVal;
        }
          const MAX_INPUT_GRID_SIZE = 500; // Максимальное значение для поля ввода ширины
          if (inputVal > MAX_INPUT_GRID_SIZE) {
              inputVal = MAX_INPUT_GRID_SIZE;
               if(gridWidthInput) gridWidthInput.value = inputVal;
          }
         // Синхронизируем слайдер, ограничивая его значениями MIN_GRID_SIZE и MAX_GRID_SIZE_SLIDER
         if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal));
    });
    if(gridWidthSlider) gridWidthSlider.addEventListener('input', () => {
        const sliderVal = parseInt(gridWidthSlider.value);
        if(gridWidthInput) gridWidthInput.value = sliderVal; // Синхронизируем поле ввода
    });

    // Обработчики синхронизации полей ввода/слайдеров ВЫСОТЫ СЕТКИ
    if(gridHeightInput) gridHeightInput.addEventListener('input', () => {
        let inputVal = parseInt(gridHeightInput.value);
         if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) {
             inputVal = MIN_GRID_SIZE;
             if(gridHeightInput) gridHeightInput.value = inputVal;
        }
          const MAX_INPUT_GRID_SIZE = 500; // Максимальное значение для поля ввода высоты
          if (inputVal > MAX_INPUT_GRID_SIZE) {
              inputVal = MAX_INPUT_GRID_SIZE;
               if(gridHeightInput) gridHeightInput.value = inputVal;
          }
         // Синхронизируем слайдер, ограничивая его значениями MIN_GRID_SIZE и MAX_GRID_SIZE_SLIDER
         if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal));
    });
    if(gridHeightSlider) gridHeightSlider.addEventListener('input', () => {
        const sliderVal = parseInt(gridHeightSlider.value);
        if(gridHeightInput) gridHeightInput.value = sliderVal; // Синхронизируем поле ввода
    });


    // --- Ручное рисование на канвасе (ВОССТАНОВЛЕНА для 2D Canvas, добавлена поддержка касаний) ---
     if(canvas) {
        // Вспомогательная функция для получения координат события (мышь или касание)
        function getEventCoords(event) {
            const rect = canvas.getBoundingClientRect();
            let clientX, clientY;

            // Проверяем тип события: мышь или касание
            if (event.clientX !== undefined && event.clientY !== undefined) {
                // Событие мыши
                clientX = event.clientX;
                clientY = event.clientY;
            } else if (event.touches && event.touches.length > 0) {
                // Событие касания, берем первое касание
                clientX = event.touches[0].clientX;
                clientY = event.touches[0].clientY;
            } else {
                // Неизвестный тип события или нет касаний
                return null;
            }

            // Вычисляем координаты относительно канваса
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            // Конвертируем пиксельные координаты в координаты сетки (клетки)
            const col = Math.floor(x / resolution);
            const row = Math.floor(y / resolution);

            // Возвращаем координаты сетки и флаг, было ли событие обработано успешно
            return { col, row, valid: col >= 0 && col < COLS && row >= 0 && row < ROWS };
        }


        // Обработчики событий мыши
        canvas.addEventListener('mousedown', (event) => {
             // Проверяем наличие контекста 2D Canvas и что игра не запущена
             if (!isRunning && ctx && grid) { // Добавлена проверка на наличие grid
                const coords = getEventCoords(event);
                if (coords && coords.valid) {
                     isDrawing = true;
                     // Определяем состояние, в которое будем рисовать (инвертируем текущее состояние клетки)
                     drawState = grid[coords.col][coords.row] === 1 ? 0 : 1;
                     setCellState(coords.col, coords.row, drawState); // setCellState теперь обновляет 2D Canvas
                } else if (coords) {
                     console.warn("Mouse down outside grid bounds.", { col: coords.col, row: coords.row, COLS, ROWS });
                }
             } else if (!ctx) {
                  console.warn("Mouse down ignored: 2D Canvas context not initialized.");
             } else if (!grid) {
                 console.warn("Mouse down ignored: Grid not initialized.");
             }
             else if (isRunning) {
                 // Опционально: показать сообщение, что рисование доступно только на паузе
                 // console.log("Manual drawing is only available when the simulation is paused.");
             }
        });

        canvas.addEventListener('mousemove', (event) => {
            // Рисование только если кнопка мыши зажата И игра на паузе И контекст готов И сетка готова
            if (isDrawing && !isRunning && ctx && grid) {
                const coords = getEventCoords(event);
                 if (coords && coords.valid) {
                     // Проверяем, что состояние клетки отличается от drawState
                     if (grid[coords.col][coords.row] !== drawState) {
                          setCellState(coords.col, coords.row, drawState); // setCellState теперь обновляет 2D Canvas
                     }
                 }
            }
        });

        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        canvas.addEventListener('mouseout', () => {
            isDrawing = false;
        });


        // --- Обработчики событий касания (Touch Events) ---
        canvas.addEventListener('touchstart', (event) => {
            // Предотвращаем стандартное действие браузера (например, прокрутку или масштабирование)
            event.preventDefault();
             // Проверяем наличие контекста 2D Canvas и что игра не запущена И сетка готова
             if (!isRunning && ctx && grid) {
                const coords = getEventCoords(event);
                if (coords && coords.valid) {
                     isDrawing = true;
                     // Определяем состояние, в которое будем рисовать (инвертируем текущее состояние клетки)
                     drawState = grid[coords.col][coords.row] === 1 ? 0 : 1;
                     setCellState(coords.col, coords.row, drawState); // setCellState теперь обновляет 2D Canvas
                } else if (coords) {
                     console.warn("Touch start outside grid bounds.", { col: coords.col, row: coords.row, COLS, ROWS });
                }
             } else if (!ctx) {
                  console.warn("Touch start ignored: 2D Canvas context not initialized.");
             } else if (!grid) {
                  console.warn("Touch start ignored: Grid not initialized.");
             }
             else if (isRunning) {
                 // Опционально: сообщение
                 // console.log("Manual drawing is only available when the simulation is paused.");
             }
        }, { passive: false }); // Use passive: false to allow preventDefault


        canvas.addEventListener('touchmove', (event) => {
            // Предотвращаем стандартное действие браузера
            event.preventDefault();
            // Рисование только если isDrawing активно И игра на паузе И контекст готов И сетка готова
            if (isDrawing && !isRunning && ctx && grid) {
                const coords = getEventCoords(event);
                 if (coords && coords.valid) {
                     // Проверяем, что состояние клетки отличается от drawState
                     if (grid[coords.col][coords.row] !== drawState) {
                          setCellState(coords.col, coords.row, drawState); // setCellState теперь обновляет 2D Canvas
                     }
                 }
            }
        }, { passive: false }); // Use passive: false to allow preventDefault


        canvas.addEventListener('touchend', () => {
            isDrawing = false;
        });

        canvas.addEventListener('touchcancel', () => {
            isDrawing = false;
        });
     }


    // Управление модальными окнами
    closeModalButtons.forEach(button => {
         if(button) {
            button.addEventListener('click', () => {
                // Находим ближайший родительский элемент с классом modal
                const modalElement = button.closest('.modal');
                 if(modalElement) {
                     modalElement.style.display = 'none';
                      // После закрытия модалки, если контекст 2D Canvas и сетка готовы, перерисовываем сцену
                     if (ctx && grid) {
                          drawGrid(grid); // Отрисовываем на 2D Canvas (нужно для применения цветов, если они изменились)
                     }
                 }
            });
         }
    });

     // Обработчик клика вне модалок
    window.addEventListener('click', (event) => {
        // Проверяем, был ли клик непосредственно по элементу с классом modal (полупрозрачный фон)
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
             // После закрытия модалки, если контекст 2D Canvas и сетка готовы, перерисовываем сцену
            if (ctx && grid) {
                 drawGrid(grid); // Отрисовываем на 2D Canvas (нужно для применения цветов)
            }
        }
    });

    // Обработчики смены ЦВЕТА в настройках (теперь напрямую влияют на отрисовку 2D Canvas)
    if(liveColorPicker) liveColorPicker.addEventListener('input', (event) => {
        liveCellColor = event.target.value;
        if (ctx && grid) drawGrid(grid); // Перерисовываем при смене цвета на 2D Canvas
    });
    if(deadColorPicker) deadColorPicker.addEventListener('input', (event) => {
        deadCellColor = event.target.value;
        if (ctx && grid) drawGrid(grid); // Перерисовываем при смене цвета на 2D Canvas
    });
     // Обработчики для gridColorPicker и toggleGridLines теперь снова актуальны для 2D Canvas
     if(gridColorPicker) gridColorPicker.addEventListener('input', (event) => {
         gridLineColor = event.target.value;
         if(ctx && grid) drawGrid(grid); // Перерисовываем при смене цвета сетки
    });
     if(toggleGridLines) toggleGridLines.addEventListener('change', (event) => {
         showGridLines = event.target.checked;
         if(ctx && grid) drawGrid(grid); // Перерисовываем при изменении видимости сетки
    });

    // Обработчик изменения ТИПА СОСЕДСТВА
    if(neighborhoodSelect) {
        neighborhoodSelect.addEventListener('change', (event) => {
            neighborhoodType = event.target.value;
            console.log("Neighborhood type set to:", neighborhoodType, "(Applies to next generation)");
            // При изменении типа соседства, обычно сбрасывают поле, т.к. правила игры меняются фундаментально
            isRunning = false;
            clearInterval(intervalId);
            grid = createGrid(); // Сбросить поле
            drawGrid(grid); // Отрисовать сброшенное поле
            generation = 0;
            updateInfoDisplay();
            alert(getTranslation('alertNeighborhoodChange', { type: neighborhoodType === 'moore' ? getTranslation('mooreNeighborhood') : getTranslation('vonneumannNeighborhood') }));
        });
    }

    // Обработчик изменения ТОРОИДАЛЬНОСТИ (границ)
    if(toggleToroidal) {
        toggleToroidal.addEventListener('change', (event) => {
            isToroidal = event.target.checked;
            console.log("Toroidal mode set to:", isToroidal, "(Applies to next generation)");
            // Этот параметр влияет на расчет следующего поколения, не требует немедленной перерисовки поля
            // (Если не добавлена визуальная индикация на поле)
        });
    }


     if(applySizeButton) applySizeButton.addEventListener('click', () => {
        const newWidth = parseInt(gridWidthInput.value);
        const newHeight = parseInt(gridHeightInput.value);

        if (!isNaN(newWidth) && newWidth >= MIN_GRID_SIZE && !isNaN(newHeight) && newHeight >= MIN_GRID_SIZE) {
            // Применяем размер поля и обновляем isToroidal из чекбокса
            isToroidal = toggleToroidal ? toggleToroidal.checked : false; // Убедимся, что берем актуальное значение
            initializeGrid(newWidth, newHeight); // Инициализируем 2D Canvas и grid с новым размером
            // initializeGrid сбрасывает игру и вызывает drawGrid
        } else {
            alert(getTranslation('alertInvalidSizeInput', { minSize: MIN_GRID_SIZE }));
        }
    });

    if(applyRulesButton) applyRulesButton.addEventListener('click', () => {
        const rulesString = rulesInput.value.trim();
        const parts = rulesString.split('/');

        if (parts.length === 2) {
            const birthPart = parts[0].trim();
            const survivalPart = parts[1].trim();

            const newBirthRules = birthPart.split('').map(Number).filter(n => !isNaN(n));
            const newSurvivalRules = survivalPart.split('').map(Number).filter(n => !isNaN(n));

            const isValidRuleSet = (rules) => rules.every(rule => rule >= 0 && rule <= 8);

            if (newBirthRules.length > 0 && newSurvivalRules.length > 0 && isValidRuleSet(newBirthRules) && isValidRuleSet(newSurvivalRules)) {
                birthRules = newBirthRules.sort((a, b) => a - b);
                survivalRules = newSurvivalRules.sort((a, b) => a - b);
                alert(getTranslation('alertRulesUpdated', { birth: birthRules.join(', '), survival: survivalRules.join(', ') }));

                // При изменении правил, обычно сбрасывают поле, т.к. правила игры меняются фундаментально
                isRunning = false;
                clearInterval(intervalId);
                grid = createGrid(); // Сбросить поле
                drawGrid(grid); // Отрисовать сброшенное поле
                generation = 0;
                updateInfoDisplay();
            } else {
                alert(getTranslation('alertInvalidRulesFormat'));
            }
        } else {
            alert(getTranslation('alertInvalidRulesFormat'));
        }
    });


    // --- Сохранение в JSON файл ---
     if(saveToJsonButton) saveToJsonButton.addEventListener('click', () => {
         // Проверяем наличие grid и корректные размеры перед сохранением
         if (!grid || COLS === undefined || ROWS === undefined || COLS <= 0 || ROWS <= 0 || speedInput === null) {
            console.error("Cannot save to JSON: grid, dimensions, or speedInput are missing or invalid.", {COLS, ROWS, grid_is_array: Array.isArray(grid), speedInput: !!speedInput});
             alert("Не удалось сохранить в файл: данные игры отсутствуют или неполные.");
            return;
         }

        // Преобразуем сетку в одну строку нулей и единиц для уменьшения размера
        const gridString = grid.flat().join('');

        // Генерируем случайную строку цифр для хэша
        const randomHash = generateRandomDigitString(30);

        const gameState = {
            cols: COLS,
            rows: ROWS,
            isToroidal: isToroidal, // Сохраняем актуальное значение
            neighborhoodType: neighborhoodType, // Сохраняем актуальное значение
            birthRules: birthRules, // Сохраняем актуальное значение
            survivalRules: survivalRules, // Сохраняем актуальное значение
            generation: generation,
            liveCellsCount: liveCellsCount,
            liveCellColor: liveCellColor, // Сохраняем актуальное значение
            deadCellColor: deadCellColor, // Сохраняем актуальное значение
            gridLineColor: gridLineColor, // Сохраняем актуальное значение
            showGridLines: showGridLines, // Сохраняем актуальное значение
            speedGPS: speedInput ? parseInt(speedInput.value) : DEFAULT_SPEED_GPS, // Сохраняем актуальное значение скорости
            grid: gridString, // Сохраняем сетку как строку (для уменьшения размера)
            hash: randomHash // Добавляем поле hash со случайной строкой цифр
        };

        const jsonString = JSON.stringify(gameState, null, 2);

        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        // Добавлена случайная строка в имя файла
        const randomPart = generateRandomString(16);
        a.download = `gameOfLife${COLS}x${ROWS}_${randomPart}.json`; // Формат по запросу пользователя
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // --- Загрузка из JSON файла ---
     if(loadFromJsonInput) loadFromJsonInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const loadedState = JSON.parse(e.target.result);

                // --- Валидация загруженных данных ---
                if (typeof loadedState !== 'object' || loadedState === null) { throw new Error(getTranslation('errorInvalidDataFormat')); }
                if (typeof loadedState.cols !== 'number' || loadedState.cols < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidCols')); }
                if (typeof loadedState.rows !== 'number' || loadedState.rows < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidRows')); }
                if (typeof loadedState.isToroidal !== 'boolean') { throw new Error(getTranslation('errorInvalidToroidal')); }
                if (typeof loadedState.neighborhoodType !== 'string' || !['moore', 'vonneumann'].includes(loadedState.neighborhoodType)) { throw new Error(getTranslation('errorInvalidNeighborhood')); }
                if (!Array.isArray(loadedState.birthRules) || !loadedState.birthRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidBirthRules')); }
                if (!Array.isArray(loadedState.survivalRules) || !loadedState.survivalRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidSurvivalRules')); }

                // Валидация и преобразование данных сетки (строка -> массив)
                const expectedSize = loadedState.cols * loadedState.rows;
                let loadedGridData;

                if (typeof loadedState.grid === 'string') {
                    if (loadedState.grid.length !== expectedSize) {
                         throw new Error(getTranslation('errorInvalidGridDataSize', { expected: expectedSize, found: loadedState.grid.length }));
                    }
                     // Преобразуем строку обратно в массив чисел
                    loadedGridData = loadedState.grid.split('').map(Number);
                     // Проверяем, что все элементы - 0 или 1 после преобразования
                     if (!loadedGridData.every(cell => cell === 0 || cell === 1)) {
                         throw new Error("Invalid grid data format: Contains non-binary values after string conversion.");
                     }
                } else if (Array.isArray(loadedState.grid)) {
                     // Обработка старого формата (массив чисел) - для совместимости с файлами, сохраненными до этой версии
                     if (loadedState.grid.length !== expectedSize) {
                          throw new Error(getTranslation('errorInvalidGridDataSize', { expected: expectedSize, found: loadedState.grid.length }));
                     }
                     // Проверяем, что все элементы - 0 или 1 в старом формате
                     if (!loadedState.grid.every(cell => cell === 0 || cell === 1)) {
                         throw new Error("Invalid grid data format: Array contains non-binary values.");
                     }
                     loadedGridData = loadedState.grid;

                } else {
                     // Если данные сетки ни строка, ни массив
                     throw new Error(getTranslation('errorInvalidDataFormat') + " Invalid grid data type.");
                }

                const loadedGeneration = (typeof loadedState.generation === 'number' && loadedState.generation >= 0) ? loadedState.generation : 0;
                // Пересчитываем liveCellsCount на основе загруженной сетки
                const calculatedLiveCount = loadedGridData.reduce((sum, cell) => sum + (cell === 1 ? 1 : 0), 0);


                // Загружаем цвета и состояние сетки
                const loadedLiveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : (liveColorPicker ? liveColorPicker.value : '#000000');
                const loadedDeadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : (deadColorPicker ? deadColorPicker.value : '#ffffff');
                const loadedGridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : (gridColorPicker ? gridColorPicker.value : '#cccccc');
                const loadedShowGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : (toggleGridLines ? toggleGridLines.checked : true);
                const loadedSpeedGPS = (typeof loadedState.speedGPS === 'number' && loadedState.speedGPS >= MIN_SPEED_GPS) ? loadedState.speedGPS : DEFAULT_SPEED_GPS;


                // --- Применение загруженного состояния к игровым переменным и UI ---
                isRunning = false;
                clearInterval(intervalId);

                 neighborhoodType = loadedState.neighborhoodType; // Применяем тип соседства
                 isToroidal = loadedState.isToroidal; // Применяем тороидальность

                initializeGrid(loadedState.cols, loadedState.rows); // Инициализируем новую сетку (и 2D Canvas) с правильными размерами

                // Копируем загруженные данные в новую сетку данных (массив)
                grid = new Array(COLS); // Пересоздаем структуру массива grid
                let cellIndex = 0;
                for (let col = 0; col < COLS; col++) {
                     grid[col] = new Array(ROWS); // Инициализируем внутренний массив
                    for (let row = 0; row < ROWS; row++) {
                        grid[col][row] = loadedGridData[cellIndex];
                        cellIndex++;
                    }
                }

                birthRules = loadedState.birthRules.sort((a, b) => a - b); // Применяем правила
                survivalRules = loadedState.survivalRules.sort((a, b) => a - b); // Применяем правила
                generation = loadedGeneration;
                liveCellsCount = calculatedLiveCount; // Используем пересчитанное значение

                liveCellColor = loadedLiveCellColor; // Применяем цвет
                deadCellColor = loadedDeadCellColor; // Применяем цвет
                gridLineColor = loadedGridLineColor; // Применяем цвет
                showGridLines = loadedShowGridLines; // Применяем видимость сетки

                // Обновляем элементы интерфейса настроек, чтобы они соответствовали загруженному состоянию
                if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
                 if(liveColorPicker) liveColorPicker.value = liveCellColor;
                 if(deadColorPicker) deadColorPicker.value = deadCellColor;
                 if(gridColorPicker) gridColorPicker.value = gridLineColor;
                 if(toggleGridLines) toggleGridLines.checked = showGridLines;
                 if(toggleToroidal) toggleToroidal.checked = isToroidal; // Обновляем состояние чекбокса тороидальности
                 if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType; // Обновляем выбранный тип соседства


                 if(gridWidthInput) gridWidthInput.value = COLS;
                 if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, COLS));
                 if(gridHeightInput) gridHeightInput.value = ROWS;
                 if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, ROWS));

                if(speedInput) speedInput.value = loadedSpeedGPS;
                if(speedSlider) speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, loadedSpeedGPS));

                // Хэш не используется при загрузке

                drawGrid(grid); // Отрисовываем сцену на 2D Canvas с загруженными данными
                updateInfoDisplay(); // Обновляем счетчики

                alert(getTranslation('alertFileLoadSuccess'));
                 if(settingsModal) settingsModal.style.display = 'none';


            } catch (error) {
                console.error("Error loading game state from file:", error);
                alert(getTranslation('alertFileLoadError', { message: error.message || error }));
                 if(loadFromJsonInput) loadFromJsonInput.value = ''; // Сбрасываем input file
            }
        };

        reader.onerror = (e) => {
            console.error("FileReader error:", e);
            alert("Ошибка чтения файла.");
             if(loadFromJsonInput) loadFromJsonInput.value = ''; // Сбрасываем input file
        };


        reader.readAsText(file);
    });


    // --- Логика инициализации страницы после загрузки DOM ---

    // Устанавливаем начальные значения для переключателя языка
     if(languageSelect) languageSelect.value = currentLanguage;

     // Обработчик смены языка
     if(languageSelect) languageSelect.addEventListener('change', (event) => {
        setLanguagePreference(event.target.value); // setLanguagePreference вызывает updateUI_Language
     });

    // Инициализация игры на 2D Canvas с параметрами по умолчанию
    // initializeGameOnLoad вызывает initializeGrid, которая использует глобальные переменные
    initializeGameOnLoad();

    // Инициализация цветов и видимости сетки из HTML после загрузки DOM (нужно для отрисовки)
    // Эти переменные будут обновлены при загрузке из файла или установлены initializeGameWithDefaults
    // Просто убедимся, что они имеют начальные значения из HTML
    // Note: These are initialized here as fallbacks, but the actual values used for drawing
    // depend on the current value of the global variables (liveCellColor, etc.) which
    // are updated by the settings change handlers or file loading.
    if(liveColorPicker) liveCellColor = liveColorPicker.value;
    if(deadColorPicker) deadCellColor = deadColorPicker.value;
    if(gridColorPicker) gridLineColor = gridColorPicker.value; // Цвет сетки
    if(toggleGridLines) showGridLines = toggleGridLines.checked; // Состояние чекбокса сетки

});
