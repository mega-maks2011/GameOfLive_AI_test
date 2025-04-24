// --- Переводы ---
const translations = {
    'en': {
        'gameTitle': 'Game of Life',
        'startButton': 'Start',
        'pauseButton': 'Pause',
        'randomButton': 'Random',
        'clearButton': 'Clear',
        'settingsButton': 'Settings', // Shortened for space if needed, otherwise keep as is
        'speedLabel': 'Speed (gen/sec):',
        'generationLabel': 'Generation',
        'liveCellsLabel': 'Live cells', // No colon here as used in a sentence structure
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
        'rulesLabel': 'Rules:',
        'applyRulesButton': 'Apply Rules (resets simulation)',

        'saveLoadTitle': 'Save / Load (JSON File)',
        'saveToFileButton': 'Save to File',
        'loadFileLabel': 'Load from file:',
        'loadFileHint': '(Loading a file automatically applies state)',
        'forceSaveButton': 'Force save session', // New button
        'clearSessionButton': 'Clear saved session',
        'clearSessionHint': '(Remove data from browser)',

        // Consent Modal - NEW
        'consentModalTitle': 'Privacy Consent',
        'consentMessage': 'This game saves its state (grid, settings, etc.) locally in your browser using Local Storage so you can resume your session later. Do you consent to this?',
        'acceptConsentButton': 'Accept',
        'declineConsentButton': 'Decline',
         'authorsText': 'Authors: Gemini and M-998', // Authors text

        // Alert messages - UPDATED TO USE PLACEHOLDERS
        'alertInvalidSizeInput': 'Please enter valid positive numbers for width and height (minimum {minSize}).',
        'alertNeighborhoodChange': 'Neighborhood type changed to "{type}". Field reset.',
        'alertRulesUpdated': 'Rules successfully updated:\nBirth on {birth} neighbors\nSurvival on {survival} neighbors.',
        'alertInvalidRulesFormat': 'Incorrect rules format. Use B/S format (e.g., "3/23") with digits from 0 to 8.',
        'alertFileLoadSuccess': 'Game state successfully loaded from file!',
        'alertFileLoadError': 'Error loading game state from file: {message}\nPlease ensure the file was created by this version of the game.',
        'alertSessionLoadError': 'Error loading saved state: {message}\nLocal state will be reset.',
        'alertSessionCleared': 'Saved session cleared!',
        'alertForceSaveSuccess': 'State saved!', // Success message for force save

        // Validation error messages (internal, shown in alert)
        'errorInvalidDataFormat': 'Invalid data format.',
        'errorInvalidCols': 'Invalid field width value.',
        'errorInvalidRows': 'Invalid field height value.',
        'errorInvalidToroidal': 'Invalid border mode value.',
        'errorInvalidNeighborhood': 'Invalid neighborhood type value.',
        'errorInvalidBirthRules': 'Invalid birth rules format.',
        'errorInvalidSurvivalRules': 'Invalid survival rules format.',
        'errorInvalidGridDataSize': 'Invalid grid data or size mismatch. Expected {expected} cells, found {found}.',

    },
    'ru': {
        'gameTitle': 'Игра "Жизнь"',
        'startButton': 'Старт',
        'pauseButton': 'Пауза',
        'randomButton': 'Случайно',
        'clearButton': 'Очистить',
        'settingsButton': 'Настройки', // Сокращено
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
        'forceSaveButton': 'Принудительно сохранить', // Сокращено
        'clearSessionButton': 'Очистить сессию', // Сокращено
        'clearSessionHint': '(Удалить данные из браузера)',

         // Модальное окно согласия - НОВОЕ
        'consentModalTitle': 'Согласие на данные', // Сокращено
        'consentMessage': 'Эта игра сохраняет свое состояние (сетку, настройки и т.д.) локально в вашем браузере с помощью Local Storage, чтобы вы могли продолжить играть позже. Вы даете согласие на это?',
        'acceptConsentButton': 'Принять',
        'declineConsentButton': 'Отказаться',
         'authorsText': 'Авторы: Gemini и M-998', // Текст авторов

        // Сообщения для пользователя (всплывающие alert) - ОБНОВЛЕНЫ
        'alertInvalidSizeInput': 'Пожалуйста, введите корректные положительные числа для ширины и высоты (минимум {minSize}).',
        'alertNeighborhoodChange': 'Тип соседства изменен на "{type}". Поле сброшено.',
        'alertRulesUpdated': 'Правила успешно обновлены:\nРождение при {birth} соседях\nВыживание при {survival} соседях.',
        'alertInvalidRulesFormat': 'Некорректный формат правил. Используйте формат B/S (например "3/23") с цифрами от 0 до 8.',
        'alertFileLoadSuccess': 'Состояние игры успешно загружено из файла!',
        'alertFileLoadError': 'Ошибка при загрузке состояния игры из файла: {message}\nПожалуйста, убедитесь, что файл создан этой версией игры.',
        'alertSessionLoadError': 'Ошибка при загрузке сохраненного состояния: {message}\nЛокальное состояние будет сброшено.',
        'alertSessionCleared': 'Сохраненная сессия очищена!',
        'alertForceSaveSuccess': 'Состояние сохранено!', // Сообщение об успехе

        // Валидация error messages (internal, shown in alert) - UPDATED
        'errorInvalidDataFormat': 'Неверный формат данных.',
        'errorInvalidCols': 'Неверное значение ширины поля.',
        'errorInvalidRows': 'Неверное значение высоты поля.',
        'errorInvalidToroidal': 'Неверное значение режима границ.',
        'errorInvalidNeighborhood': 'Неверное значение типа соседства.',
        'errorInvalidBirthRules': 'Неверный формат правил рождения.',
        'errorInvalidSurvivalRules': 'Неверный формат правил выживания.',
        'errorInvalidGridDataSize': 'Неверные данные сетки или несоответствие размера. Ожидается {expected} клеток, найдено {found}.',

    }
};

// --- Объявление КОНСТАНТ и глобальных ПЕРЕМЕННЫХ в самом начале ---
// ИСПРАВЛЕНО: Перемещены сюда объявления констант скорости
const DEFAULT_SPEED_GPS = 10; // Скорость по умолчанию в поколений/сек
const MIN_SPEED_GPS = 1;
const MAX_SPEED_GPS = 20; // Максимальная скорость для слайдера

const MIN_GRID_SIZE = 10; // Минимальные/максимальные значения для слайдеров размера
const MAX_GRID_SIZE_SLIDER = 200;
const DEFAULT_GRID_SIZE = 50; // Размер по умолчанию

const CONSENT_KEY = 'consentGiven'; // Ключ для согласия в localStorage
const LOCAL_STORAGE_KEY = 'gameOfLifeState'; // Ключ для сохранения игры

// Переменные, которые будут инициализированы после определения констант
let currentLanguage = localStorage.getItem('preferredLanguage') || (navigator.language.startsWith('ru') ? 'ru' : 'en');
let hasConsent = localStorage.getItem(CONSENT_KEY) === 'true';

let liveCellColor = '#000000'; // Инициализируем значением по умолчанию (будут обновлены из HTML/localStorage)
let deadCellColor = '#ffffff'; // Инициализируем значением по умолчанию (будут обновлены из HTML/localStorage)
let gridLineColor = '#cccccc'; // Инициализируем значением по умолчанию (будут обновлены из HTML/localStorage)
let showGridLines = true; // Инициализируется позже (будет обновлен из HTML/localStorage)

let isToroidal = false; // Инициализируется позже (будет обновлен из HTML/localStorage)
let neighborhoodType = 'moore'; // Инициализируется позже (будет обновлен из HTML/localStorage)

let birthRules = [3]; // Инициализируется позже (будут обновлены из правил по умолчанию/localStorage)
let survivalRules = [2, 3]; // Инициализируется позже (будут обновлены из правил по умолчанию/localStorage)

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
let liveCellsCount = 0; // Количество живых клеток


// --- Получение ссылок на элементы (до DOMContentLoaded) ---
// Эти переменные будут доступны в глобальной области видимости.
// Обработчики событий должны назначаться внутри DOMContentLoaded.
const canvas = document.getElementById('gameCanvas');
const ctx = canvas ? canvas.getContext('2d') : null; // Проверка на null

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
const settingsButton = document.getElementById('settingsButton');

// Элементы управления скоростью
const speedInput = document.getElementById('speedInput');
const speedSlider = document.getElementById('speedSlider');

const generationCountSpan = document.getElementById('generationCount');
const liveCellCountSpan = document.getElementById('liveCellCount');

// Модальное окно настроек и его элементы
const settingsModal = document.getElementById('settingsModal');
const closeModalButtons = document.querySelectorAll('.close-button'); // Кнопки закрытия модалок по классу

// Элементы настроек отображения
const liveColorPicker = document.getElementById('liveColorPicker');
const deadColorPicker = document.getElementById('deadColorPicker');
const gridColorPicker = document.getElementById('gridColorPicker');
const toggleGridLines = document.getElementById('toggleGridLines');

// Элементы настроек размера поля
const gridWidthInput = document.getElementById('gridWidthInput');
const gridWidthSlider = document.getElementById('gridWidthSlider');
const gridHeightInput = document.getElementById('gridHeightInput');
const gridHeightSlider = document.getElementById('gridHeightSlider');

const applySizeButton = document.getElementById('applySizeButton');
const toggleToroidal = document.getElementById('toggleToroidal');

// Элементы правил соседства
const neighborhoodSelect = document.getElementById('neighborhoodSelect');

// Элементы настроек правил (рождения/выживания)
const rulesInput = document.getElementById('rulesInput');
const applyRulesButton = document.getElementById('applyRulesButton');

// Элементы сохранения/загрузки
const saveToJsonButton = document.getElementById('saveToJsonButton');
const loadFromJsonInput = document.getElementById('loadFromJsonInput');
const clearSessionButton = document.getElementById('clearSessionButton');
const forceSaveButton = document.getElementById('forceSaveButton');

// Элементы модального окна согласия
const consentModal = document.getElementById('consentModal');
const acceptConsentButton = document.getElementById('acceptConsentButton');
const declineConsentButton = document.getElementById('declineConsentButton');

// Элемент переключателя языка
const languageSelect = document.getElementById('languageSelect');


// --- Функции локализации ---

// Функция для получения перевода по ключу
function getTranslation(key, replacements = {}) {
    let text = translations[currentLanguage] && translations[currentLanguage][key] !== undefined
               ? translations[currentLanguage][key]
               : (translations['en'][key] !== undefined ? translations['en'][key] : key); // Fallback: current lang -> en -> key

    // Применяем замены
    for (const placeholder in replacements) {
        const regex = new RegExp(`{${placeholder}}`, 'g');
        text = text.replace(regex, replacements[placeholder]);
    }
    return text;
}

// Функция для обновления всего текста в UI
function updateUI_Language() {
    // Обновляем элементы с атрибутом data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = getTranslation(key);

        // Обновляем текст
        element.textContent = translation;
    });

     // Специальный случай для опций в select'ах
     const mooreOption = document.querySelector('#neighborhoodSelect option[value="moore"]');
     const vonneumannOption = document.querySelector('#neighborhoodSelect option[value="vonneumann"]');

     if (mooreOption) mooreOption.textContent = getTranslation('mooreNeighborhood');
     if (vonneumannOption) vonneumannOption.textContent = getTranslation('vonneumannNeighborhood');

     // Обновляем value поля правил
     if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;

     // Обновляем title страницы
     if(document.title) document.title = getTranslation('gameTitle');

}

// Функция для установки предпочтительного языка
function setLanguagePreference(lang) {
    currentLanguage = lang;
    if (hasConsent) { // Сохраняем предпочтение только если есть согласие
        localStorage.setItem('preferredLanguage', lang);
    }
    updateUI_Language();
}


// --- Функции состояния игры и логики ---

// Функция для конвертации поколений/сек в миллисекунды на поколение
function gpsToMps(gps) {
    const speed = parseInt(gps);
    if (isNaN(speed) || speed <= 0) return 1000;
    return 1000 / speed;
}

// Инициализация размеров канваса и сетки
function initializeGrid(width, height) {
    isRunning = false;
    clearInterval(intervalId);
    generation = 0;
    updateInfoDisplay();

    if (canvas && ctx) {
        canvas.width = width * resolution;
        canvas.height = height * resolution;
        COLS = width;
        ROWS = height;
        grid = createGrid();
        drawGrid(grid);
    } else {
        console.error("Canvas or rendering context not found!");
        // Можно предпринять действия, если канвас недоступен, например, показать сообщение об ошибке пользователю
    }
}


// Функция для создания пустой сетки
function createGrid() {
     // Проверяем, что COLS и ROWS определены
     if (COLS === undefined || ROWS === undefined) {
         console.error("Cannot create grid: COLS or ROWS are not defined.");
         return null; // Возвращаем null в случае ошибки
     }
    liveCellsCount = 0;
    const newGrid = new Array(COLS);
    for(let i = 0; i < COLS; i++) {
        newGrid[i] = new Array(ROWS).fill(0);
    }
    return newGrid;
}

// Функция для заполнения сетки случайными значениями
function randomGrid() {
     // Проверяем, что COLS и ROWS определены
     if (COLS === undefined || ROWS === undefined) {
          console.error("Cannot create random grid: COLS or ROWS are not defined.");
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
    // Сохраняем состояние после случайного заполнения, если есть согласие
    if (hasConsent) saveSessionState();
    return newGrid;
}

// Функция для отрисовки сетки
function drawGrid(grid) {
     // Проверяем, что ctx и grid существуют перед отрисовкой
    if (!ctx || !grid) {
        // console.error("Cannot draw grid: context or grid is missing."); // Может быть слишком много сообщений
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

// Функция для вычисления следующего поколения
function nextGeneration(grid) {
     // Проверяем, что grid, COLS и ROWS определены
    if (!grid || COLS === undefined || ROWS === undefined) {
        console.error("Cannot compute next generation: grid or dimensions are missing.");
        return grid; // Возвращаем текущую сетку, чтобы не сломать дальше
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

                    if (isToroidal) {
                         x_cell = (x_cell % COLS + COLS) % COLS;
                         y_cell = (y_cell % ROWS + ROWS) % ROWS;
                    } else {
                        if (x_cell < 0 || y_cell < 0 || x_cell >= COLS || y_cell >= ROWS) {
                             continue;
                        }
                    }

                    // Проверяем границы перед доступом к grid
                    if (x_cell >= 0 && x_cell < COLS && y_cell >= 0 && y_cell < ROWS) {
                         const currentNeighbor = grid[x_cell][y_cell];
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
    return nextGrid;
}

// Обновление отображения информации
function updateInfoDisplay() {
     // Проверяем, что span элементы существуют перед обновлением
     if(generationCountSpan) generationCountSpan.textContent = generation;
     if(liveCellCountSpan) liveCellCountSpan.textContent = liveCellsCount;
}

// Функция запуска симуляции с учетом скорости
function startSimulation() {
    if (!isRunning) {
        isRunning = true;
        clearInterval(intervalId);

        // Проверяем существование speedInput перед чтением value
        const currentSpeedGPS = speedInput ? parseInt(speedInput.value) : DEFAULT_SPEED_GPS; // DEFAULT_SPEED_GPS теперь объявлен
        const intervalTime = gpsToMps(currentSpeedGPS);
        const safeIntervalTime = Math.max(1, intervalTime);

        intervalId = setInterval(() => {
            grid = nextGeneration(grid);
            drawGrid(grid);
        }, safeIntervalTime);
    }
}

// --- Функции сохранения и загрузки из localStorage (ТОЛЬКО ЕСЛИ hasConsent === true) ---

// Функция сохранения состояния в localStorage
function saveSessionState() {
    if (!hasConsent) {
        return; // Не сохраняем, если нет согласия
    }
     // Проверяем наличие grid перед сохранением
     if (!grid || COLS === undefined || ROWS === undefined || speedInput === null) { // Добавлена проверка speedInput
        console.error("Cannot save state: grid, dimensions, or speedInput are missing.");
        return;
     }
    try {
        const gameState = {
            cols: COLS,
            rows: ROWS,
            isToroidal: isToroidal,
            neighborhoodType: neighborhoodType,
            birthRules: birthRules,
            survivalRules: survivalRules,
            generation: generation,
            liveCellsCount: liveCellsCount,
            liveCellColor: liveCellColor,
            deadCellColor: deadCellColor,
            gridLineColor: gridLineColor,
            showGridLines: showGridLines,
            speedGPS: parseInt(speedInput.value), // Уверены, что speedInput не null здесь
            grid: grid.flat()
        };
        const jsonString = JSON.stringify(gameState);
        localStorage.setItem(LOCAL_STORAGE_KEY, jsonString);
    } catch (e) {
        console.error("Error saving game state to localStorage:", e);
         // Можно добавить alert пользователю, если сохранение не удалось
         // alert("Не удалось сохранить состояние игры в браузере.");
    }
}

// Функция загрузки состояния из localStorage
// Возвращает true, если состояние успешно загружено, false иначе
function loadSessionState() {
     if (!hasConsent) {
        return false; // Не загружаем, если нет согласия
     }
    try {
        const savedStateString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!savedStateString) {
            return false; // Нет сохраненного состояния
        }

        const loadedState = JSON.parse(savedStateString);

        // --- Валидация загруженных данных ---
        if (typeof loadedState !== 'object' || loadedState === null) { throw new Error(getTranslation('errorInvalidDataFormat')); }
        if (typeof loadedState.cols !== 'number' || loadedState.cols < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidCols')); } // MIN_GRID_SIZE теперь объявлен
        if (typeof loadedState.rows !== 'number' || loadedState.rows < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidRows')); }
        if (typeof loadedState.isToroidal !== 'boolean') { throw new Error(getTranslation('errorInvalidToroidal')); }
        if (typeof loadedState.neighborhoodType !== 'string' || !['moore', 'vonneumann'].includes(loadedState.neighborhoodType)) { throw new Error(getTranslation('errorInvalidNeighborhood')); }
        if (!Array.isArray(loadedState.birthRules) || !loadedState.birthRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidBirthRules')); }
        if (!Array.isArray(loadedState.survivalRules) || !loadedState.survivalRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidSurvivalRules')); }
        if (!Array.isArray(loadedState.grid) || loadedState.grid.length !== loadedState.cols * loadedState.rows) { throw new Error(getTranslation('errorInvalidGridDataSize', { expected: loadedState.cols * loadedState.rows, found: loadedState.grid.length })); }

        // Валидация скорости
         if (typeof loadedState.speedGPS !== 'number' || loadedState.speedGPS < MIN_SPEED_GPS) { // MIN_SPEED_GPS теперь объявлен
             console.warn("Loaded speedGPS is invalid, using default.");
             loadedState.speedGPS = DEFAULT_SPEED_GPS; // DEFAULT_SPEED_GPS теперь объявлен
         }


        // --- Применение загруженного состояния ---
        isRunning = false;
        clearInterval(intervalId);

         neighborhoodType = loadedState.neighborhoodType;
         isToroidal = loadedState.isToroidal;

        initializeGrid(loadedState.cols, loadedState.rows);


        let cellIndex = 0;
         let actualLiveCount = 0;
        for (let col = 0; col < COLS; col++) {
            for (let row = 0; row < ROWS; row++) {
                const cellState = loadedState.grid[cellIndex];
                grid[col][row] = (cellState === 1) ? 1 : 0;
                if (grid[col][row] === 1) {
                    actualLiveCount++;
                }
                cellIndex++;
            }
        }

        birthRules = loadedState.birthRules.sort((a, b) => a - b);
        survivalRules = loadedState.survivalRules.sort((a, b) => a - b);
        generation = (typeof loadedState.generation === 'number' && loadedState.generation >= 0) ? loadedState.generation : 0;
        liveCellsCount = actualLiveCount;


        liveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : (liveColorPicker ? liveColorPicker.value : '#000000');
        deadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : (deadColorPicker ? deadColorPicker.value : '#ffffff');
        gridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : (gridColorPicker ? gridColorPicker.value : '#cccccc');
        showGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : (toggleGridLines ? toggleGridLines.checked : true);


        const loadedSpeedGPS = loadedState.speedGPS; // Скорость уже проверена выше
        if(speedInput) speedInput.value = loadedSpeedGPS;
        if(speedSlider) speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, loadedSpeedGPS));


        drawGrid(grid);
        updateInfoDisplay();

        // Обновляем элементы интерфейса, которые не сбрасываются initializeGrid
         if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType;
         if(toggleToroidal) toggleToroidal.checked = isToroidal;
         if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
         if(liveColorPicker) liveColorPicker.value = liveCellColor;
         if(deadColorPicker) deadColorPicker.value = deadCellColor;
         if(gridColorPicker) gridColorPicker.value = gridLineColor;
         if(toggleGridLines) toggleGridLines.checked = showGridLines;
         if(gridWidthInput) gridWidthInput.value = COLS;
         if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, COLS));
         if(gridHeightInput) gridHeightInput.value = ROWS;
         if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, ROWS));


        return true; // Состояние успешно загружено

    } catch (error) {
        console.error("Error loading game state from localStorage:", error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
         // Можно добавить alert пользователю, если загрузка не удалась
         // alert(getTranslation('alertSessionLoadError', { message: error.message || error }));
        return false; // Ошибка при загрузке
    }
}

// Функция для очистки сохраненного состояния
function clearSessionState() {
    // Очистку разрешаем всегда, даже если согласие не было дано на сохранение
    try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(CONSENT_KEY); // Очищаем и согласие
        hasConsent = false; // Сбрасываем переменную согласия

        alert(getTranslation('alertSessionCleared'));
         // После очистки сбрасываем игру до начального состояния
         initializeGameWithDefaults();
         // Показываем модалку согласия снова (чтобы пользователь мог принять или отклонить заново)
         if(consentModal) consentModal.style.display = 'flex';

    } catch (e) {
        console.error("Error clearing localStorage:", e);
        alert("Не удалось очистить сохраненную сессию."); // Это сообщение не локализовано
    }
}

// Функция для обновления видимости кнопок сохранения сессии в модалке настроек
function updateSessionButtonsVisibility() {
     // Проверяем, что кнопки существуют перед попыткой изменить их стиль
    if (clearSessionButton && forceSaveButton) {
        if (hasConsent) {
            clearSessionButton.style.display = 'block';
            forceSaveButton.style.display = 'block';
        } else {
            // Скрываем кнопки, если согласия нет
            clearSessionButton.style.display = 'none';
            forceSaveButton.style.display = 'none';
        }
    } else {
         console.warn("Session save buttons not found in DOM.");
    }
}

// --- Обработчики событий (привязываются внутри DOMContentLoaded) ---

// --- Инициализация игры при загрузке страницы ---

// Функция инициализации игры с параметрами по умолчанию
function initializeGameWithDefaults() {
    // DEFAULT_GRID_SIZE теперь объявлен
    initializeGrid(DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE); // Начальный размер

    // Устанавливаем начальные значения для всех элементов управления
    // Проверяем существование элементов перед установкой значений
     if(speedInput) speedInput.value = DEFAULT_SPEED_GPS; // DEFAULT_SPEED_GPS теперь объявлен
     if(speedSlider) speedSlider.value = DEFAULT_SPEED_GPS; // DEFAULT_SPEED_GPS теперь объявлен

     if(gridWidthInput) gridWidthInput.value = DEFAULT_GRID_SIZE; // DEFAULT_GRID_SIZE теперь объявлен
     if(gridWidthSlider) gridWidthSlider.value = DEFAULT_GRID_SIZE; // DEFAULT_GRID_SIZE теперь объявлен
     if(gridHeightInput) gridHeightInput.value = DEFAULT_GRID_SIZE; // DEFAULT_GRID_SIZE теперь объявлен
     if(gridHeightSlider) gridHeightSlider.value = DEFAULT_GRID_SIZE; // DEFAULT_GRID_SIZE теперь объявлен

     if(toggleToroidal) toggleToroidal.checked = false;
    isToroidal = false;

     if(neighborhoodSelect) neighborhoodSelect.value = 'moore';
    neighborhoodType = 'moore';

     if(rulesInput) rulesInput.value = '3/23'; // Значение правил по умолчанию
     birthRules = [3];
     survivalRules = [2, 3];

     // Устанавливаем начальные цвета и видимость сетки из HTML
     // Проверяем существование элементов перед чтением значений
     liveCellColor = liveColorPicker ? liveColorPicker.value : '#000000';
     deadCellColor = deadColorPicker ? deadColorPicker.value : '#ffffff';
     gridLineColor = gridColorPicker ? gridColorPicker.value : '#cccccc';
     showGridLines = toggleGridLines ? toggleGridLines.checked : true;

     // Обновляем UI на основе начальных значений
     // updateUI_Language() вызывается до этого в attemptLoadOrCreateGame
     // updateSessionButtonsVisibility() вызывается до этого в attemptLoadOrCreateGame
}

// Функция, которая пытается загрузить сессию или инициализирует игру
function attemptLoadOrCreateGame() {
     updateUI_Language(); // Применяем локализацию перед попыткой загрузки/инициализации
     if (hasConsent) {
        const sessionLoaded = loadSessionState(); // Пробуем загрузить состояние

        if (!sessionLoaded) {
            initializeGameWithDefaults();
             // Сохраняем начальное состояние, т.к. согласие есть
            saveSessionState();
        }
     } else {
         initializeGameWithDefaults();
     }
      updateSessionButtonsVisibility(); // Обновляем видимость кнопок сессии
}


// Запускаем логику при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // --- Привязка обработчиков событий КНОПОК ---
    // Теперь, когда DOM готов, ссылки на элементы гарантированно не null

    // Проверяем существование кнопок перед привязкой
    if(startButton) startButton.addEventListener('click', startSimulation);
    if(pauseButton) pauseButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
        if (hasConsent) saveSessionState();
    });
    if(randomButton) randomButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
        grid = randomGrid();
        drawGrid(grid);
    });
    if(clearButton) clearButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
        grid = createGrid();
        drawGrid(grid);
        generation = 0;
        updateInfoDisplay();
        if (hasConsent) saveSessionState();
    });
    if(settingsButton) settingsButton.addEventListener('click', () => {
        isRunning = false; clearInterval(intervalId);
        updateSessionButtonsVisibility();
         if(settingsModal) settingsModal.style.display = 'flex'; // Используем flex
        // Обновляем значения полей в модалке
         if(gridWidthInput) gridWidthInput.value = COLS;
         if(gridWidthSlider) gridWidthSlider.value = COLS;
         if(gridHeightInput) gridHeightInput.value = ROWS;
         if(gridHeightSlider) gridHeightSlider.value = ROWS;
         if(toggleToroidal) toggleToroidal.checked = isToroidal;
         if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType;
         if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
         if(liveColorPicker) liveColorPicker.value = liveCellColor;
         if(deadColorPicker) deadColorPicker.value = deadCellColor;
         if(gridColorPicker) gridColorPicker.value = gridLineColor;
         if(toggleGridLines) toggleGridLines.checked = showGridLines;
         if(loadFromJsonInput) loadFromJsonInput.value = ''; // Сбрасываем поле выбора файла
    });


    // Сохраняем состояние при закрытии вкладки/окна, если есть согласие
    window.addEventListener('beforeunload', () => {
         if (hasConsent) saveSessionState();
    });

    // Обработчики синхронизации полей ввода/слайдеров (проверяем существование элементов)
    if(speedSlider) speedSlider.addEventListener('input', () => {
        const sliderSpeed = parseInt(speedSlider.value);
        if(speedInput) speedInput.value = sliderSpeed;
        if (isRunning) {
            startSimulation();
        }
        if (hasConsent) saveSessionState();
    });
     if(speedInput) speedInput.addEventListener('input', () => {
        let inputSpeed = parseInt(speedInput.value);
         if (isNaN(inputSpeed) || inputSpeed < MIN_SPEED_GPS) { // MIN_SPEED_GPS теперь объявлен
            inputSpeed = MIN_SPEED_GPS; // MIN_SPEED_GPS теперь объявлен
             if(speedInput) speedInput.value = inputSpeed;
        }
         if(speedSlider) speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, inputSpeed)); // MIN_SPEED_GPS, MAX_SPEED_GPS теперь объявлены
        if (isRunning) {
            startSimulation();
        }
        if (hasConsent) saveSessionState();
    });

    if(gridWidthInput) gridWidthInput.addEventListener('input', () => {
        let inputVal = parseInt(gridWidthInput.value);
         if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) { // MIN_GRID_SIZE теперь объявлен
             inputVal = MIN_GRID_SIZE; // MIN_GRID_SIZE теперь объявлен
             if(gridWidthInput) gridWidthInput.value = inputVal;
        }
         const MAX_INPUT_GRID_SIZE = 500; // Эта константа только здесь, можно оставить или перенести наверх
          if (inputVal > MAX_INPUT_GRID_SIZE) {
              inputVal = MAX_INPUT_GRID_SIZE;
               if(gridWidthInput) gridWidthInput.value = inputVal;
          }
         if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal)); // MIN_GRID_SIZE, MAX_GRID_SIZE_SLIDER теперь объявлены
    });
    if(gridWidthSlider) gridWidthSlider.addEventListener('input', () => {
        const sliderVal = parseInt(gridWidthSlider.value);
        if(gridWidthInput) gridWidthInput.value = sliderVal;
    });

    if(gridHeightInput) gridHeightInput.addEventListener('input', () => {
        let inputVal = parseInt(gridHeightInput.value);
         if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) { // MIN_GRID_SIZE теперь объявлен
             inputVal = MIN_GRID_SIZE; // MIN_GRID_SIZE теперь объявлен
             if(gridHeightInput) gridHeightInput.value = inputVal;
        }
          const MAX_INPUT_GRID_SIZE = 500; // Эта константа только здесь
          if (inputVal > MAX_INPUT_GRID_SIZE) {
              inputVal = MAX_INPUT_GRID_SIZE;
               if(gridHeightInput) gridHeightInput.value = inputVal;
          }
         if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal)); // MIN_GRID_SIZE, MAX_GRID_SIZE_SLIDER теперь объявлены
    });
    if(gridHeightSlider) gridHeightSlider.addEventListener('input', () => {
        const sliderVal = parseInt(gridHeightSlider.value);
        if(gridHeightInput) gridHeightInput.value = sliderVal;
    });


    // Ручное рисование на канвасе (проверяем существование canvas)
     if(canvas) {
        canvas.addEventListener('mousedown', (event) => {
             if (!isRunning) {
                isDrawing = true;
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left; // Correct calculation relative to canvas
                const y = event.clientY - rect.top;  // Correct calculation relative to canvas
                const col = Math.floor(x / resolution); // resolution теперь объявлен
                const row = Math.floor(y / resolution); // resolution теперь объявлен

                if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
                     drawState = grid[col][row] === 1 ? 0 : 1;
                     setCellState(col, row, drawState);
                }
             }
        });

        canvas.addEventListener('mousemove', (event) => {
            if (isDrawing && !isRunning) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left; // Correct calculation relative to canvas
                const y = event.clientY - rect.top;  // Correct calculation relative to canvas
                const col = Math.floor(x / resolution); // resolution теперь объявлен
                const row = Math.floor(y / resolution); // resolution теперь объявлен

                if (col >= 0 && col < COLS && row >= 0 && row < ROWS && grid[col][row] !== drawState) {
                     setCellState(col, row, drawState);
                }
            }
        });

        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
            if (hasConsent) saveSessionState();
        });
        canvas.addEventListener('mouseout', () => {
            isDrawing = false;
        });
     }


    // Управление модальными окнами (проверяем существование кнопок закрытия и модалки настроек)
    closeModalButtons.forEach(button => {
         if(button) {
            button.addEventListener('click', () => {
                const modalId = button.dataset.modal;
                 const modalElement = document.getElementById(modalId);
                 if(modalElement) modalElement.style.display = 'none';
                if (hasConsent) saveSessionState();
            });
         }
    });

     // Обработчик клика вне модалок (проверяем существование модалки согласия)
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal') && (!consentModal || event.target.id !== 'consentModal')) {
            event.target.style.display = 'none';
            if (hasConsent) saveSessionState();
        }
    });


    // Обработчики кнопок модального окна согласия (привязываются здесь, внутри DOMContentLoaded)
    if(acceptConsentButton) {
        acceptConsentButton.addEventListener('click', () => {
            hasConsent = true;
            localStorage.setItem(CONSENT_KEY, 'true'); // CONSENT_KEY теперь объявлен
             if(consentModal) consentModal.style.display = 'none';
            attemptLoadOrCreateGame(); // Пробуем загрузить или инициализируем игру
        });
    }

    if(declineConsentButton) {
        declineConsentButton.addEventListener('click', () => {
            hasConsent = false;
            localStorage.setItem(CONSENT_KEY, 'false'); // CONSENT_KEY теперь объявлен
             if(consentModal) consentModal.style.display = 'none';
             initializeGameWithDefaults();
             updateSessionButtonsVisibility();
        });
    }


    // Функционал внутри модального окна настроек (проверяем существование элементов)
     if(liveColorPicker) liveColorPicker.addEventListener('input', (event) => { liveCellColor = event.target.value; drawGrid(grid); });
     if(deadColorPicker) deadColorPicker.addEventListener('input', (event) => { deadCellColor = event.target.value; drawGrid(grid); });
     if(gridColorPicker) gridColorPicker.addEventListener('input', (event) => { gridLineColor = event.target.value; if(showGridLines) { drawGrid(grid); } });
     if(toggleGridLines) toggleGridLines.addEventListener('change', (event) => { showGridLines = event.target.checked; drawGrid(grid); });

     if(toggleToroidal) toggleToroidal.addEventListener('change', (event) => { isToroidal = event.target.checked; });

     if(neighborhoodSelect) neighborhoodSelect.addEventListener('change', (event) => {
        neighborhoodType = event.target.value;
         isRunning = false;
         clearInterval(intervalId);
         grid = createGrid();
         drawGrid(grid);
         generation = 0;
         updateInfoDisplay();
         alert(getTranslation('alertNeighborhoodChange', { type: getTranslation(neighborhoodType === 'moore' ? 'mooreNeighborhood' : 'vonneumannNeighborhood') }));
         if (hasConsent) saveSessionState();
    });


     if(applySizeButton) applySizeButton.addEventListener('click', () => {
        const newWidth = parseInt(gridWidthInput.value);
        const newHeight = parseInt(gridHeightInput.value);

        if (!isNaN(newWidth) && newWidth >= MIN_GRID_SIZE && !isNaN(newHeight) && newHeight >= MIN_GRID_SIZE) { // MIN_GRID_SIZE теперь объявлен
            initializeGrid(newWidth, newHeight);
            if (hasConsent) saveSessionState();
        } else {
            alert(getTranslation('alertInvalidSizeInput', { minSize: MIN_GRID_SIZE })); // MIN_GRID_SIZE теперь объявлен
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

                isRunning = false;
                clearInterval(intervalId);
                grid = createGrid();
                drawGrid(grid);
                generation = 0;
                updateInfoDisplay();
                if (hasConsent) saveSessionState();

            } else {
                alert(getTranslation('alertInvalidRulesFormat'));
            }
        } else {
            alert(getTranslation('alertInvalidRulesFormat'));
        }
    });


    // Сохранение в JSON файл (проверяем существование кнопки)
     if(saveToJsonButton) saveToJsonButton.addEventListener('click', () => {
         // Проверяем наличие данных перед сохранением
        if (!grid || COLS === undefined || ROWS === undefined || speedInput === null) {
            console.error("Cannot save to JSON: grid, dimensions, or speedInput are missing.");
             alert("Не удалось сохранить в файл: данные игры отсутствуют или неполные."); // Сообщение пользователю
            return;
         }
        const gameState = {
            cols: COLS,
            rows: ROWS,
            isToroidal: isToroidal,
            neighborhoodType: neighborhoodType,
            birthRules: birthRules,
            survivalRules: survivalRules,
            generation: generation,
            liveCellsCount: liveCellsCount,
            liveCellColor: liveCellColor,
            deadCellColor: deadCellColor,
            gridLineColor: gridLineColor,
            showGridLines: showGridLines,
            speedGPS: parseInt(speedInput.value),
            grid: grid.flat()
        };

        const jsonString = JSON.stringify(gameState, null, 2);

        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `game_of_life_state_${COLS}x${ROWS}_gen${generation}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Загрузка из JSON файла (проверяем существование input)
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
                if (typeof loadedState.cols !== 'number' || loadedState.cols < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidCols')); } // MIN_GRID_SIZE объявлен
                if (typeof loadedState.rows !== 'number' || loadedState.rows < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidRows')); } // MIN_GRID_SIZE объявлен
                if (typeof loadedState.isToroidal !== 'boolean') { throw new Error(getTranslation('errorInvalidToroidal')); }
                if (typeof loadedState.neighborhoodType !== 'string' || !['moore', 'vonneumann'].includes(loadedState.neighborhoodType)) { throw new Error(getTranslation('errorInvalidNeighborhood')); }
                if (!Array.isArray(loadedState.birthRules) || !loadedState.birthRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidBirthRules')); }
                if (!Array.isArray(loadedState.survivalRules) || !loadedState.survivalRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidSurvivalRules')); }
                if (!Array.isArray(loadedState.grid) || loadedState.grid.length !== loadedState.cols * loadedState.rows) { throw new Error(getTranslation('errorInvalidGridDataSize', { expected: loadedState.cols * loadedState.rows, found: loadedState.grid.length })); }

                const loadedGeneration = (typeof loadedState.generation === 'number' && loadedState.generation >= 0) ? loadedState.generation : 0;
                const calculatedLiveCount = loadedState.grid.reduce((sum, cell) => sum + (cell === 1 ? 1 : 0), 0);

                const loadedLiveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : (liveColorPicker ? liveColorPicker.value : '#000000');
                const loadedDeadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : (deadColorPicker ? deadColorPicker.value : '#ffffff');
                const loadedGridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : (gridColorPicker ? gridColorPicker.value : '#cccccc');
                const loadedShowGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : (toggleGridLines ? toggleGridLines.checked : true);
                const loadedSpeedGPS = (typeof loadedState.speedGPS === 'number' && loadedState.speedGPS >= MIN_SPEED_GPS) ? loadedState.speedGPS : DEFAULT_SPEED_GPS; // MIN_SPEED_GPS, DEFAULT_SPEED_GPS объявлены


                // --- Применение загруженного состояния ---
                isRunning = false;
                clearInterval(intervalId);

                 neighborhoodType = loadedState.neighborhoodType;
                 isToroidal = loadedState.isToroidal;

                initializeGrid(loadedState.cols, loadedState.rows);

                let cellIndex = 0;
                for (let col = 0; col < COLS; col++) {
                    for (let row = 0; row < ROWS; row++) {
                        const cellState = loadedState.grid[cellIndex];
                        grid[col][row] = (cellState === 1) ? 1 : 0;
                        cellIndex++;
                    }
                }

                birthRules = loadedState.birthRules.sort((a, b) => a - b);
                survivalRules = loadedState.survivalRules.sort((a, b) => a - b);
                generation = loadedGeneration;
                liveCellsCount = calculatedLiveCount;

                liveCellColor = loadedLiveCellColor;
                deadCellColor = loadedDeadCellColor;
                gridLineColor = loadedGridLineColor;
                showGridLines = loadedShowGridLines;

                // Обновляем элементы интерфейса
                if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
                 if(liveColorPicker) liveColorPicker.value = liveCellColor;
                 if(deadColorPicker) deadColorPicker.value = deadCellColor;
                 if(gridColorPicker) gridColorPicker.value = gridLineColor;
                 if(toggleGridLines) toggleGridLines.checked = showGridLines;

                 if(gridWidthInput) gridWidthInput.value = COLS;
                 if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, COLS)); // MIN_GRID_SIZE, MAX_GRID_SIZE_SLIDER объявлены
                 if(gridHeightInput) gridHeightInput.value = ROWS;
                 if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, ROWS)); // MIN_GRID_SIZE, MAX_GRID_SIZE_SLIDER объявлены

                if(speedInput) speedInput.value = loadedSpeedGPS;
                if(speedSlider) speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, loadedSpeedGPS)); // MIN_SPEED_GPS, MAX_SPEED_GPS объявлены

                if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType;
                if(toggleToroidal) toggleToroidal.checked = isToroidal;


                drawGrid(grid);
                updateInfoDisplay();

                alert(getTranslation('alertFileLoadSuccess'));
                 if(settingsModal) settingsModal.style.display = 'none';

                 // Сохраняем загруженное состояние в локальную сессию, если есть согласие
                if (hasConsent) saveSessionState();

            } catch (error) {
                console.error("Error loading game state from file:", error);
                alert(getTranslation('alertFileLoadError', { message: error.message || error }));
                 if(loadFromJsonInput) loadFromJsonInput.value = '';
            }
        };

        reader.onerror = (e) => {
            console.error("FileReader error:", e);
            alert("Ошибка чтения файла.");
             if(loadFromJsonInput) loadFromJsonInput.value = '';
        };


        reader.readAsText(file);
    });

    // Обработчик кнопки очистки локального сохранения (проверяем существование кнопки)
     if(clearSessionButton) clearSessionButton.addEventListener('click', clearSessionState);

    // Обработчик кнопки принудительного сохранения (проверяем существование кнопки)
     if(forceSaveButton) forceSaveButton.addEventListener('click', () => {
        if (hasConsent) {
            saveSessionState();
            alert(getTranslation('alertForceSaveSuccess'));
        } else {
             alert("Сохранение сессии недоступно без вашего согласия."); // Сообщение, если согласие не дано
        }
    });


    // --- Логика инициализации страницы после загрузки DOM ---

    // Устанавливаем начальные значения для переключателя языка
     if(languageSelect) languageSelect.value = currentLanguage;

     // Обработчик смены языка
     if(languageSelect) languageSelect.addEventListener('change', (event) => {
        setLanguagePreference(event.target.value); // setLanguagePreference вызывает updateUI_Language
     });


    // Проверяем согласие. Если уже есть, сразу пытаемся загрузить/инициализировать.
    // Если нет, показываем модалку согласия.
    const consentStatus = localStorage.getItem(CONSENT_KEY);

    if (consentStatus === 'true') {
        hasConsent = true;
        attemptLoadOrCreateGame();
    } else if (consentStatus === 'false') {
        hasConsent = false;
        initializeGameWithDefaults();
        updateSessionButtonsVisibility(); // Скрываем кнопки сессии
    }
    else {
        hasConsent = false;
         if(consentModal) consentModal.style.display = 'flex';
        // Игра пока не инициализируется, ждем выбора пользователя
        // UI элементы, которые не инициализируются в initializeGameWithDefaults, могут остаться в состоянии по умолчанию
        // updateSessionButtonsVisibility() скроет кнопки сессии.
        updateSessionButtonsVisibility();
    }

    // Инициализация цветов и видимости сетки из HTML после загрузки DOM
    if(liveColorPicker) liveCellColor = liveColorPicker.value;
    if(deadColorPicker) deadCellColor = deadColorPicker.value;
    if(gridColorPicker) gridColorPicker.value = gridLineColor; // Fix: read from picker, not assign
    if(gridColorPicker) gridLineColor = gridColorPicker.value; // Corrected order
    if(toggleGridLines) showGridLines = toggleGridLines.checked; // Fix: read from checkbox
});
