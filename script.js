// --- Переводы ---
const translations = {
    'en': {
        'gameTitle': 'Game of Life',
        'startButton': 'Start',
        'pauseButton': 'Pause',
        'randomButton': 'Random',
        'clearButton': 'Clear',
        'settingsButton': 'Settings',
        'speedLabel': 'Speed (gen/sec):',
        'generationLabel': 'Generation',
        'liveCellsLabel': 'Live cells',
        'manualDrawHint': 'Click cells to toggle them (works when paused). Click and drag to draw.',

        'settingsModalTitle': 'Settings',
        'displaySettingsTitle': 'Display',
        'liveColorLabel': 'Live cell color:',
        'deadColorLabel': 'Dead cell color:',
        'gridColorLabel': 'Grid line color:',
        'showGridLinesLabel': 'Show grid lines:',

        'sizeSettingsTitle': 'Field Size and Borders',
        'widthLabel': 'Width (cells):',
        'heightLabel': 'Height (cells):',
        'toroidalLabel': 'Infinite field (toroidal):',
        'applySizeButton': 'Apply Size/Borders (clears field)',

        'neighborhoodSettingsTitle': 'Neighborhood Rules',
        'neighborhoodTypeLabel': 'Neighborhood type:',
        'mooreNeighborhood': 'Moore (8 neighbors)',
        'vonneumannNeighborhood': 'Von Neumann (4 neighbors)',

        'rulesSettingsTitle': 'Rules (B/S)',
        'rulesFormatHint': 'Format: B (birth) / S (survival). E.g., for standard Life: 3/23',
        'rulesLabel': 'Правила:',
        'applyRulesButton': 'Применить правила (сбросит симуляцию)',

        'saveLoadTitle': 'Save / Load (JSON File)',
        'saveToFileButton': 'Save to File',
        'loadFileLabel': 'Load from file:',
        'loadFileHint': '(Loading a file automatically applies state)',

         'authorsText': 'Authors: Gemini and M-998',

        // Alert messages
        'alertInvalidSizeInput': 'Please enter valid positive numbers for width and height (minimum {minSize}).',
        'alertNeighborhoodChange': 'Neighborhood type changed to "{type}". Field reset.',
        'alertRulesUpdated': 'Rules successfully updated:\nBirth on {birth} neighbors\nSurvival on {survival} neighbors.',
        'alertInvalidRulesFormat': 'Incorrect rules format. Use B/S format (e.g., "3/23") with digits from 0 to 8.',
        'alertFileLoadSuccess': 'Game state successfully loaded from file!',
        'alertFileLoadError': 'Error loading game state from file: {message}\nPlease ensure the file was created by this version of the game.',
    },
    'ru': {
        'gameTitle': 'Игра "Жизнь"',
        'startButton': 'Старт',
        'pauseButton': 'Пауза',
        'randomButton': 'Случайно',
        'clearButton': 'Очистить',
        'settingsButton': 'Настройки',
        'speedLabel': 'Скорость (поколений/сек):',
        'generationLabel': 'Поколение',
        'liveCellsLabel': 'Живых клеток',
        'manualDrawHint': 'Нажмите на клетки на поле, чтобы установить или убрать их вручную (работает в режиме паузы). Зажмите и ведите мышь для рисования.',

        'settingsModalTitle': 'Настройки',
        'displaySettingsTitle': 'Отображение',
        'liveColorLabel': 'Цвет живых клеток:',
        'deadColorLabel': 'Цвет мертвых клеток:',
        'gridColorLabel': 'Цвет сетки:',
        'showGridLinesLabel': 'Показывать сетку:',

        'sizeSettingsTitle': 'Размер поля и границы',
        'widthLabel': 'Ширина (клеток):',
        'heightLabel': 'Высота (клеток):',
        'toroidalLabel': 'Бесконечное поле (тороидальное):',
        'applySizeButton': 'Применить размер/границы (очистит поле)',

        'neighborhoodSettingsTitle': 'Правила соседства',
        'neighborhoodTypeLabel': 'Тип соседства:',
        'mooreNeighborhood': 'Мур (8 соседей)',
        'vonneumannNeighborhood': 'Фон Нейман (4 соседа)',

        'rulesSettingsTitle': 'Правила (B/S)',
        'rulesFormatHint': 'Формат: B (рождение) / S (выживание). Например, для стандартной Жизни: 3/23',
        'rulesLabel': 'Правила:',
        'applyRulesButton': 'Применить правила (сбросит симуляцию)',

        'saveLoadTitle': 'Сохранить / Загрузить (файл JSON)',
        'saveToFileButton': 'Сохранить в файл',
        'loadFileLabel': 'Загрузить из файла:',
        'loadFileHint': '(Загрузка файла автоматически применит состояние)',

         'authorsText': 'Авторы: Gemini и M-998',

        // Сообщения для пользователя (всплывающие alert)
        'alertInvalidSizeInput': 'Пожалуйста, введите корректные положительные числа для ширины и высоты (минимум {minSize}).',
        'alertNeighborhoodChange': 'Тип соседства изменен на "{type}". Поле сброшено.',
        'alertRulesUpdated': 'Правила успешно обновлены:\nРождение при {birth} соседях\nВыживание при {survival} соседях.',
        'alertInvalidRulesFormat': 'Некорректный формат правил. Используйте формат B/S (например "3/23") с цифрами от 0 до 8.',
        'alertFileLoadSuccess': 'Состояние игры успешно загружено из файла!',
        'alertFileLoadError': 'Ошибка при загрузке состояния игры из файла: {message}\nПожалуйста, убедитесь, что файл создан этой версией игры.',
    }
};

// --- Объявление КОНСТАНТ и глобальных ПЕРЕМЕННЫХ в самом начале ---
const DEFAULT_SPEED_GPS = 10; // Скорость по умолчанию в поколений/сек
const MIN_SPEED_GPS = 1;
const MAX_SPEED_GPS = 20; // Максимальная скорость для слайдера

const MIN_GRID_SIZE = 10; // Минимальные/максимальные значения для слайдеров размера
const MAX_GRID_SIZE_SLIDER = 200;
const DEFAULT_GRID_SIZE = 50; // Размер по умолчанию

// Определяем начальный язык. Сначала из localStorage, затем из языка браузера, по умолчанию английский.
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
    let text = translations[currentLanguage] && translations[currentLanguage][key] !== undefined
               ? translations[currentLanguage][key]
               : (translations['en'][key] !== undefined ? translations['en'][key] : key);

    for (const placeholder in replacements) {
        const regex = new RegExp(`{${placeholder}}`, 'g');
        text = text.replace(regex, replacements[placeholder]);
    }
    return text;
}

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

     const mooreOption = document.querySelector('#neighborhoodSelect option[value="moore"]');
     const vonneumannOption = document.querySelector('#neighborhoodSelect option[value="vonneumann"]');
     if (mooreOption) mooreOption.textContent = getTranslation('mooreNeighborhood');
     if (vonneumannOption) vonneumannOption.textContent = getTranslation('vonneumannNeighborhood');

     if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
     if(document.title) document.title = getTranslation('gameTitle');

     // Метки цвета и видимости сетки теперь снова отображаются
     const gridColorLabelElement = document.querySelector('label[for="gridColorPicker"]');
     const showGridLinesLabelElement = document.querySelector('label[for="toggleGridLines"]');
     const gridColorPickerElement = document.getElementById('gridColorPicker');
     const toggleGridLinesElement = document.getElementById('toggleGridLines');

     if (gridColorLabelElement) gridColorLabelElement.textContent = getTranslation('gridColorLabel');
     if (showGridLinesLabelElement) showGridLinesLabelElement.textContent = getTranslation('showGridLinesLabel');

     // Элементы управления сеткой снова видимы (удалены WebGL-специфичные display: none)
     if (gridColorPickerElement) gridColorPickerElement.style.display = '';
     if (toggleGridLinesElement) toggleGridLinesElement.style.display = '';
     if (gridColorLabelElement) gridColorLabelElement.style.display = '';
     if (showGridLinesLabelElement) showGridLinesLabelElement.style.display = '';
}

function setLanguagePreference(lang) {
    currentLanguage = lang;
    // localStorage.setItem('preferredLanguage', lang); // Убрано сохранение в localStorage
    updateUI_Language();
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

// --- Ручное рисование на канвасе (ВОССТАНОВЛЕНА для 2D Canvas) ---
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
     if(deadColorPicker) deadCellColor = deadCellColor;
     if(gridColorPicker) gridLineColor = gridColorPicker.value;
     if(toggleGridLines) toggleGridLines.checked = showGridLines;


     updateUI_Language(); // Обновляем UI, включая метки сетки (теперь снова видимы)
}


// --- Инициализация игры при загрузке страницы (возвращена к 2D Canvas) ---
function initializeGameOnLoad() {
    // Инициализация игры с параметрами по умолчанию на 2D Canvas
    // initializeGameWithDefaults теперь вызывает initializeGrid
    initializeGameWithDefaults();


    updateUI_Language(); // Обновляем язык интерфейса
     // Привязка всех обработчиков событий происходит в DOMContentLoaded
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


// Запускаем логику при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {

    // --- Инициализация Игры (на 2D Canvas) ---
    initializeGameOnLoad();


    // --- Привязка обработчиков событий КНОПОК ---
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


    // Ручное рисование на канвасе (ВОССТАНОВЛЕНА для 2D Canvas)
     if(canvas) {
        canvas.addEventListener('mousedown', (event) => {
             // Проверяем наличие контекста 2D Canvas и что игра не запущена
             if (!isRunning && ctx) {
                isDrawing = true;
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                // Конвертируем пиксельные координаты в координаты сетки (клетки)
                const col = Math.floor(x / resolution);
                const row = Math.floor(y / resolution);


                if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
                     // Определяем состояние, в которое будем рисовать (инвертируем текущее состояние клетки)
                     drawState = grid[col][row] === 1 ? 0 : 1;
                     setCellState(col, row, drawState); // setCellState теперь обновляет 2D Canvas
                } else {
                     console.warn("Mouse down outside grid bounds.", { col, row, COLS, ROWS });
                }
             } else if (!ctx) {
                  console.warn("Mouse down ignored: 2D Canvas context not initialized.");
             } else if (isRunning) {
                 // Опционально: показать сообщение, что рисование доступно только на паузе
                 // console.log("Manual drawing is only available when the simulation is paused.");
             }
        });

        canvas.addEventListener('mousemove', (event) => {
            // Рисование только если кнопка мыши зажата И игра на паузе И контекст готов
            if (isDrawing && !isRunning && ctx) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const col = Math.floor(x / resolution);
                const row = Math.floor(y / resolution);

                // Проверяем, что координаты внутри сетки и состояние клетки отличается от drawState
                if (col >= 0 && col < COLS && row >= 0 && row < ROWS && grid[col][row] !== drawState) {
                     setCellState(col, row, drawState); // setCellState теперь обновляет 2D Canvas
                }
            }
        });

        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        canvas.addEventListener('mouseout', () => {
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
    if(liveColorPicker) liveCellColor = liveColorPicker.value;
    if(deadColorPicker) deadCellColor = deadColorPicker.value;
    if(gridColorPicker) gridLineColor = gridColorPicker.value; // Цвет сетки
    if(toggleGridLines) showGridLines = toggleGridLines.checked; // Состояние чекбокса сетки

});
