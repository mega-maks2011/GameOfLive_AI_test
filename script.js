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

        // Сообщения об ошибках валидации (внутренние, показываются в alert) - ОБНОВЛЕНЫ
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

let currentLanguage = localStorage.getItem('preferredLanguage') || (navigator.language.startsWith('ru') ? 'ru' : 'en'); // Определяем язык из localStorage или браузера
let hasConsent = localStorage.getItem('consentGiven') === 'true'; // Проверяем согласие в localStorage
const CONSENT_KEY = 'consentGiven'; // Ключ для согласия в localStorage


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const randomButton = document.getElementById('randomButton');
const clearButton = documentgetElementById('clearButton');
const settingsButton = document.getElementById('settingsButton');

// Элементы управления скоростью
const speedInput = document.getElementById('speedInput');
const speedSlider = document.getElementById('speedSlider');
const DEFAULT_SPEED_GPS = 10; // Скорость по умолчанию в поколений/сек
const MIN_SPEED_GPS = 1;
const MAX_SPEED_GPS = 20; // Максимальная скорость для слайдера

const generationCountSpan = document.getElementById('generationCount');
const liveCellCountSpan = document.getElementById('liveCellCount');

// Модальное окно настроек и его элементы
const settingsModal = document.getElementById('settingsModal');
const closeModalButtons = document.querySelectorAll('.close-button');

// Элементы настроек отображения
const liveColorPicker = document.getElementById('liveColorPicker');
const deadColorPicker = document.getElementById('deadColorPicker');
const gridColorPicker = document.getElementById('gridColorPicker');
const toggleGridLines = document.getElementById('toggleGridLines');
let liveCellColor = liveColorPicker.value;
let deadCellColor = deadColorPicker.value;
let gridLineColor = gridColorPicker.value;
let showGridLines = toggleGridLines.checked;

// Элементы настроек размера поля
const gridWidthInput = document.getElementById('gridWidthInput');
const gridWidthSlider = document.getElementById('gridWidthSlider');
const gridHeightInput = document.getElementById('gridHeightInput');
const gridHeightSlider = document.getElementById('gridHeightSlider');

const applySizeButton = document.getElementById('applySizeButton');
const toggleToroidal = document.getElementById('toggleToroidal');
let isToroidal = toggleToroidal.checked;

// Элементы правил соседства
const neighborhoodSelect = document.getElementById('neighborhoodSelect');
let neighborhoodType = neighborhoodSelect.value;


// Элементы настроек правил (рождения/выживания)
const rulesInput = document.getElementById('rulesInput');
const applyRulesButton = document.getElementById('applyRulesButton');
let birthRules = [3];
let survivalRules = [2, 3];

// Элементы сохранения/загрузки
const saveToJsonButton = document.getElementById('saveToJsonButton');
const loadFromJsonInput = document.getElementById('loadFromJsonInput');
const clearSessionButton = document.getElementById('clearSessionButton');
const forceSaveButton = document.getElementById('forceSaveButton'); // НОВАЯ ССЫЛКА

// Элементы модального окна согласия - НОВЫЕ ССЫЛКИ
const consentModal = document.getElementById('consentModal');
const acceptConsentButton = document.getElementById('acceptConsentButton');
const declineConsentButton = document.getElementById('declineConsentButton');

// Элемент переключателя языка - НОВАЯ ССЫЛКА
const languageSelect = document.getElementById('languageSelect');


// Ключ для сохранения в localStorage
const LOCAL_STORAGE_KEY = 'gameOfLifeState';


const resolution = 10; // Размер клетки в пикселях
let COLS; // Количество столбцов
let ROWS; // Количество строк

let grid;
let intervalId; // Используем setInterval для контроля скорости
let isRunning = false;
let isDrawing = false; // Флаг для рисования мышью
let drawState = 1; // Состояние (0 или 1), в которое мы РИСУЕМ


let generation = 0;
let liveCellsCount = 0;

// Минимальные/максимальные значения для слайдеров размера (для синхронизации)
const MIN_GRID_SIZE = 10;
const MAX_GRID_SIZE_SLIDER = 200;


// --- Функции локализации ---

// Функция для получения перевода по ключу
function getTranslation(key, replacements = {}) {
    let text = translations[currentLanguage] && translations[currentLanguage][key] !== undefined
               ? translations[currentLanguage][key]
               : (translations['en'][key] !== undefined ? translations['en'][key] : key); // Fallback: current lang -> en -> key

    // Применяем замены
    for (const placeholder in replacements) {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return text;
}

// Функция для обновления всего текста в UI
function updateUI_Language() {
    // Обновляем элементы с атрибутом data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = getTranslation(key);

        // Отдельно обрабатываем OPTION элементы
        if (element.tagName === 'OPTION') {
             // Находим select родителя и обновляем options внутри него
             // Этот подход может быть избыточен, т.к. мы обновляем select по ID напрямую
             // Давайте просто обновим текст у уже существующих опций с data-lang-key
        } else {
            element.textContent = translation;
        }
    });

     // Специальный случай для опций в select'ах, у которых тоже есть data-lang-key
     // Можно было бы использовать data-lang-key на option напрямую, но иногда удобнее в коде JS
     // Давайте обновим текст для опций соседства
     document.querySelector('#neighborhoodSelect option[value="moore"]').textContent = getTranslation('mooreNeighborhood');
     document.querySelector('#neighborhoodSelect option[value="vonneumann"]').textContent = getTranslation('vonneumannNeighborhood');

     // Обновляем value поля правил, т.к. оно может быть сброшено при локализации
     rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;

     // Обновляем title страницы
     document.title = getTranslation('gameTitle');

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

    canvas.width = width * resolution;
    canvas.height = height * resolution;
    COLS = width;
    ROWS = height;
    grid = createGrid();
    drawGrid(grid);
}


// Функция для создания пустой сетки
function createGrid() {
    liveCellsCount = 0;
    const newGrid = new Array(COLS);
    for(let i = 0; i < COLS; i++) {
        newGrid[i] = new Array(ROWS).fill(0);
    }
    return newGrid;
}

// Функция для заполнения сетки случайными значениями
function randomGrid() {
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

                    const currentNeighbor = grid[x_cell][y_cell];
                    numNeighbors += currentNeighbor;

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
    generationCountSpan.textContent = generation;
    liveCellCountSpan.textContent = liveCellsCount;
}

// Функция запуска симуляции с учетом скорости
function startSimulation() {
    if (!isRunning) {
        isRunning = true;
        clearInterval(intervalId);

        const currentSpeedGPS = parseInt(speedInput.value);
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
        // console.log("Consent not given, skipping save."); // Опционально
        return; // Не сохраняем, если нет согласия
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
            speedGPS: parseInt(speedInput.value),
            grid: grid.flat()
        };
        const jsonString = JSON.stringify(gameState);
        localStorage.setItem(LOCAL_STORAGE_KEY, jsonString);
        // console.log("Game state saved to localStorage.");
    } catch (e) {
        console.error("Error saving game state to localStorage:", e);
        // alert(getTranslation('errorSavingSession')); // Можно добавить сообщение об ошибке сохранения
    }
}

// Функция загрузки состояния из localStorage
// Возвращает true, если состояние успешно загружено, false иначе
function loadSessionState() {
     if (!hasConsent) {
        // console.log("Consent not given, skipping load."); // Опционально
        return false; // Не загружаем, если нет согласия
     }
    try {
        const savedStateString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!savedStateString) {
            // console.log("No saved game state found in localStorage.");
            return false; // Нет сохраненного состояния
        }

        const loadedState = JSON.parse(savedStateString);

        // --- Валидация загруженных данных (аналогично загрузке из файла) ---
        if (typeof loadedState !== 'object' || loadedState === null) { throw new Error(getTranslation('errorInvalidDataFormat')); }
        if (typeof loadedState.cols !== 'number' || loadedState.cols < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidCols')); }
        if (typeof loadedState.rows !== 'number' || loadedState.rows < MIN_GRID_SIZE) { throw new Error(getTranslation('errorInvalidRows')); }
        if (typeof loadedState.isToroidal !== 'boolean') { throw new Error(getTranslation('errorInvalidToroidal')); }
        if (typeof loadedState.neighborhoodType !== 'string' || !['moore', 'vonneumann'].includes(loadedState.neighborhoodType)) { throw new Error(getTranslation('errorInvalidNeighborhood')); }
        if (!Array.isArray(loadedState.birthRules) || !loadedState.birthRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidBirthRules')); }
        if (!Array.isArray(loadedState.survivalRules) || !loadedState.survivalRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error(getTranslation('errorInvalidSurvivalRules')); }
        if (!Array.isArray(loadedState.grid) || loadedState.grid.length !== loadedState.cols * loadedState.rows) { throw new Error(getTranslation('errorInvalidGridDataSize', { expected: loadedState.cols * loadedState.rows, found: loadedState.grid.length })); }


        // --- Применение загруженного состояния ---
        isRunning = false;
        clearInterval(intervalId);

         neighborhoodType = loadedState.neighborhoodType;
         isToroidal = loadedState.isToroidal;

        initializeGrid(loadedState.cols, loadedState.rows); // Это сбросит grid, generation, liveCellsCount


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


        liveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : liveColorPicker.value;
        deadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : deadColorPicker.value;
        gridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : gridColorPicker.value;
        showGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : toggleGridLines.checked;

        // Обновляем элементы интерфейса (будут обновлены после загрузки состояния)


        const loadedSpeedGPS = (typeof loadedState.speedGPS === 'number' && loadedState.speedGPS >= MIN_SPEED_GPS) ? loadedState.speedGPS : DEFAULT_SPEED_GPS;
        speedInput.value = loadedSpeedGPS;
        speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, loadedSpeedGPS));


        drawGrid(grid);
        updateInfoDisplay();

        // Обновляем элементы интерфейса, которые не сбрасываются initializeGrid
         neighborhoodSelect.value = neighborhoodType;
         toggleToroidal.checked = isToroidal;
         rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
         liveColorPicker.value = liveCellColor;
         deadColorPicker.value = deadCellColor;
         gridColorPicker.value = gridLineColor;
         toggleGridLines.checked = showGridLines;
         gridWidthInput.value = COLS;
         gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, COLS));
         gridHeightInput.value = ROWS;
         gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, ROWS));


        // alert(getTranslation('alertSessionLoadSuccess')); // Опционально уведомить пользователя
        return true; // Состояние успешно загружено

    } catch (error) {
        console.error("Error loading game state from localStorage:", error);
        // Если произошла ошибка загрузки или парсинга, очистим некорректные данные
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        // alert(getTranslation('alertSessionLoadError', { message: error.message || error })); // Опционально
        return false; // Ошибка при загрузке
    }
}

// Функция для очистки сохраненного состояния
function clearSessionState() {
    if (!hasConsent) {
         // Нельзя очистить то, что не сохраняли без согласия
         return;
    }
    try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(CONSENT_KEY); // Очищаем и согласие
        hasConsent = false; // Сбрасываем переменную согласия

        alert(getTranslation('alertSessionCleared'));
         // После очистки сбрасываем игру и скрываем/отключаем кнопки сохранения сессии
         initializeGrid(50, 50); // Сброс игры
         // Сброс UI элементов до значений по умолчанию
         speedInput.value = DEFAULT_SPEED_GPS;
         speedSlider.value = DEFAULT_SPEED_GPS;
         toggleToroidal.checked = false;
         isToroidal = false;
         neighborhoodSelect.value = 'moore';
         neighborhoodType = 'moore';
          rulesInput.value = '3/23';
          birthRules = [3];
          survivalRules = [2, 3];
           liveCellColor = liveColorPicker.value = '#000000';
           deadCellColor = deadColorPicker.value = '#ffffff';
           gridLineColor = gridColorPicker.value = '#cccccc';
           showGridLines = toggleGridLines.checked = true;

         drawGrid(grid);
         updateInfoDisplay();

         // Скрываем кнопки сохранения сессии
         clearSessionButton.style.display = 'none';
         forceSaveButton.style.display = 'none';

         // Показываем модалку согласия снова
         consentModal.style.display = 'flex';

    } catch (e) {
        console.error("Error clearing localStorage:", e);
        alert("Не удалось очистить сохраненную сессию.");
    }
}

// Функция для обновления видимости кнопок сохранения сессии в модалке настроек
function updateSessionButtonsVisibility() {
    if (hasConsent) {
        clearSessionButton.style.display = 'block';
        forceSaveButton.style.display = 'block';
    } else {
        clearSessionButton.style.display = 'none';
        forceSaveButton.style.display = 'none';
    }
}

// --- Обработчики событий ---

startButton.addEventListener('click', startSimulation);
pauseButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(intervalId);
    if (hasConsent) saveSessionState(); // Сохраняем при паузе, если есть согласие
});
randomButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(intervalId);
    grid = randomGrid(); // randomGrid теперь сам вызывает saveSessionState
    drawGrid(grid);
});
clearButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(intervalId);
    grid = createGrid();
    drawGrid(grid);
    generation = 0;
    updateInfoDisplay();
    if (hasConsent) saveSessionState(); // Сохраняем при очистке, если есть согласие
});

settingsButton.addEventListener('click', () => {
    isRunning = false; clearInterval(intervalId);
     // Обновляем видимость кнопок сессии перед открытием модалки
    updateSessionButtonsVisibility();
    settingsModal.style.display = 'flex'; // Используем flex для центрирования

    // Обновляем значения полей ввода в модалке текущими значениями
    gridWidthInput.value = COLS;
    gridWidthSlider.value = COLS;
    gridHeightInput.value = ROWS;
    gridHeightSlider.value = ROWS;

    toggleToroidal.checked = isToroidal;
    neighborhoodSelect.value = neighborhoodType;
    rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;

    liveColorPicker.value = liveCellColor;
    deadColorPicker.value = deadCellColor;
    gridColorPicker.value = gridLineColor;
    toggleGridLines.checked = showGridLines;

    loadFromJsonInput.value = ''; // Сбрасываем поле выбора файла
});

// Сохраняем состояние при закрытии вкладки/окна, если есть согласие
window.addEventListener('beforeunload', () => {
     if (hasConsent) saveSessionState();
});


// --- Обработчики синхронизации полей ввода/слайдеров ---
speedSlider.addEventListener('input', () => {
    const sliderSpeed = parseInt(speedSlider.value);
    speedInput.value = sliderSpeed;
    if (isRunning) {
        startSimulation();
    }
    if (hasConsent) saveSessionState(); // Сохраняем при изменении скорости
});

speedInput.addEventListener('input', () => {
    let inputSpeed = parseInt(speedInput.value);

    if (isNaN(inputSpeed) || inputSpeed < MIN_SPEED_GPS) {
        inputSpeed = MIN_SPEED_GPS;
        speedInput.value = inputSpeed;
    }

    speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, inputSpeed));

    if (isRunning) {
        startSimulation();
    }
    if (hasConsent) saveSessionState(); // Сохраняем при изменении скорости
});

gridWidthInput.addEventListener('input', () => {
    let inputVal = parseInt(gridWidthInput.value);
     if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) {
         inputVal = MIN_GRID_SIZE;
         gridWidthInput.value = inputVal;
     }
      const MAX_INPUT_GRID_SIZE = 500;
      if (inputVal > MAX_INPUT_GRID_SIZE) {
          inputVal = MAX_INPUT_GRID_SIZE;
          gridWidthInput.value = inputVal;
      }
    gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal));
});

gridWidthSlider.addEventListener('input', () => {
    const sliderVal = parseInt(gridWidthSlider.value);
    gridWidthInput.value = sliderVal;
});


gridHeightInput.addEventListener('input', () => {
    let inputVal = parseInt(gridHeightInput.value);
     if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) {
         inputVal = MIN_GRID_SIZE;
         gridHeightInput.value = inputVal;
     }
      const MAX_INPUT_GRID_SIZE = 500;
      if (inputVal > MAX_INPUT_GRID_SIZE) {
          inputVal = MAX_INPUT_GRID_SIZE;
          gridHeightInput.value = inputVal;
      }
    gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal));
});

gridHeightSlider.addEventListener('input', () => {
    const sliderVal = parseInt(gridHeightSlider.value);
    gridHeightInput.value = sliderVal;
});


// --- Ручное рисование на канвасе ---
canvas.addEventListener('mousedown', (event) => {
     if (!isRunning) {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const col = Math.floor(x / resolution);
        const row = Math.floor(y / resolution);

        if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
             drawState = grid[col][row] === 1 ? 0 : 1;
             setCellState(col, row, drawState); // setCellState вызывает drawGrid и updateInfoDisplay
        }
     }
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing && !isRunning) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const col = Math.floor(x / resolution);
        const row = Math.floor(y / resolution);

        if (col >= 0 && col < COLS && row >= 0 && row < ROWS && grid[col][row] !== drawState) {
             setCellState(col, row, drawState); // setCellState вызывает drawGrid и updateInfoDisplay
        }
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    if (hasConsent) saveSessionState(); // Сохраняем после завершения рисования, если есть согласие
});
canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

function setCellState(col, row, state) {
     if (col >= 0 && col < COLS && row >= 0 && row < ROWS && (state === 0 || state === 1)) {
         const currentState = grid[col][row];
         if (currentState !== state) {
             grid[col][row] = state;
             if (state === 1) {
                 liveCellsCount++;
             } else {
                 liveCellsCount--;
             }
             drawGrid(grid);
         }
     }
}


// --- Управление модальными окнами ---
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modal;
        document.getElementById(modalId).style.display = 'none';
        if (hasConsent) saveSessionState(); // Сохраняем при закрытии настроек, если есть согласие
    });
});

window.addEventListener('click', (event) => {
    // Закрытие модалок при клике вне их содержимого, только если это не модалка согласия
    if (event.target.classList.contains('modal') && event.target.id !== 'consentModal') {
        event.target.style.display = 'none';
        if (hasConsent) saveSessionState(); // Сохраняем, если есть согласие
    }
});

// Обработчики кнопок модального окна согласия
acceptConsentButton.addEventListener('click', () => {
    hasConsent = true;
    localStorage.setItem(CONSENT_KEY, 'true'); // Сохраняем согласие
    consentModal.style.display = 'none'; // Скрываем модалку согласия
    // Теперь, когда согласие получено, пробуем загрузить состояние или инициализируем по умолчанию
     attemptLoadOrCreateGame();
     // Обновляем видимость кнопок сохранения сессии в настройках
     updateSessionButtonsVisibility();
});

declineConsentButton.addEventListener('click', () => {
    hasConsent = false;
    localStorage.setItem(CONSENT_KEY, 'false'); // Сохраняем отказ
    consentModal.style.display = 'none'; // Скрываем модалку согласия
     // Инициализируем игру с нуля, так как сохранять/загружать нельзя
    initializeGameWithDefaults();
     // Скрываем кнопки сохранения сессии
    updateSessionButtonsVisibility();
});


// --- Функционал внутри модального окна настроек ---

// Настройки отображения
liveColorPicker.addEventListener('input', (event) => { liveCellColor = event.target.value; drawGrid(grid); });
deadColorPicker.addEventListener('input', (event) => { deadCellColor = event.target.value; drawGrid(grid); });
gridColorPicker.addEventListener('input', (event) => { gridLineColor = event.target.value; if(showGridLines) { drawGrid(grid); } });
toggleGridLines.addEventListener('change', (event) => { showGridLines = event.target.checked; drawGrid(grid); });

// Состояние бесконечного поля
toggleToroidal.addEventListener('change', (event) => { isToroidal = event.target.checked; });

// Тип соседства
neighborhoodSelect.addEventListener('change', (event) => {
    neighborhoodType = event.target.value;
     isRunning = false;
     clearInterval(intervalId);
     grid = createGrid();
     drawGrid(grid);
     generation = 0;
     updateInfoDisplay();
     alert(getTranslation('alertNeighborhoodChange', { type: neighborhoodType === 'moore' ? getTranslation('mooreNeighborhood') : getTranslation('vonneumannNeighborhood') }));
     if (hasConsent) saveSessionState(); // Сохраняем, если есть согласие
});


// Изменение размера поля и применение границ
applySizeButton.addEventListener('click', () => {
    const newWidth = parseInt(gridWidthInput.value);
    const newHeight = parseInt(gridHeightInput.value);

    if (!isNaN(newWidth) && newWidth >= MIN_GRID_SIZE && !isNaN(newHeight) && newHeight >= MIN_GRID_SIZE) {
        initializeGrid(newWidth, newHeight);
        if (hasConsent) saveSessionState(); // Сохраняем, если есть согласие
    } else {
        alert(getTranslation('alertInvalidSizeInput', { minSize: MIN_GRID_SIZE }));
    }
});

// Изменение правил
applyRulesButton.addEventListener('click', () => {
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
            if (hasConsent) saveSessionState(); // Сохраняем, если есть согласие

        } else {
            alert(getTranslation('alertInvalidRulesFormat'));
        }
    } else {
        alert(getTranslation('alertInvalidRulesFormat'));
    }
});


// --- Сохранение в JSON файл ---
saveToJsonButton.addEventListener('click', () => {
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

// --- Загрузка из JSON файла ---
loadFromJsonInput.addEventListener('change', (event) => {
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
            if (!Array.isArray(loadedState.grid) || loadedState.grid.length !== loadedState.cols * loadedState.rows) { throw new Error(getTranslation('errorInvalidGridDataSize', { expected: loadedState.cols * loadedState.rows, found: loadedState.grid.length })); }

            const loadedGeneration = (typeof loadedState.generation === 'number' && loadedState.generation >= 0) ? loadedState.generation : 0;
            const calculatedLiveCount = loadedState.grid.reduce((sum, cell) => sum + (cell === 1 ? 1 : 0), 0);

            const loadedLiveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : liveColorPicker.value;
            const loadedDeadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : deadColorPicker.value;
            const loadedGridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : gridColorPicker.value;
            const loadedShowGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : toggleGridLines.checked;
            const loadedSpeedGPS = (typeof loadedState.speedGPS === 'number' && loadedState.speedGPS >= MIN_SPEED_GPS) ? loadedState.speedGPS : DEFAULT_SPEED_GPS;


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
            rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
            liveColorPicker.value = liveCellColor;
            deadColorPicker.value = deadCellColor;
            gridColorPicker.value = gridLineColor;
            toggleGridLines.checked = showGridLines;

             gridWidthInput.value = COLS;
             gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, COLS));
             gridHeightInput.value = ROWS;
             gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, ROWS));

            speedInput.value = loadedSpeedGPS;
            speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, loadedSpeedGPS));

            neighborhoodSelect.value = neighborhoodType;
            toggleToroidal.checked = isToroidal;


            drawGrid(grid);
            updateInfoDisplay();

            alert(getTranslation('alertFileLoadSuccess'));
            settingsModal.style.display = 'none';

             // Сохраняем загруженное состояние в локальную сессию, если есть согласие
            if (hasConsent) saveSessionState();

        } catch (error) {
            console.error("Error loading game state from file:", error);
            alert(getTranslation('alertFileLoadError', { message: error.message || error }));
             loadFromJsonInput.value = '';
        }
    };

    reader.onerror = (e) => {
        console.error("FileReader error:", e);
        alert("Ошибка чтения файла.");
         loadFromJsonInput.value = '';
    };


    reader.readAsText(file);
});

// Обработчик кнопки очистки локального сохранения
clearSessionButton.addEventListener('click', clearSessionState);

// Обработчик кнопки принудительного сохранения
forceSaveButton.addEventListener('click', () => {
    if (hasConsent) {
        saveSessionState();
        alert(getTranslation('alertForceSaveSuccess'));
    }
    // Если согласия нет, кнопка должна быть скрыта, поэтому дополнительная проверка не нужна
});


// --- Инициализация игры при загрузке страницы ---

// Функция инициализации игры с параметрами по умолчанию
function initializeGameWithDefaults() {
    initializeGrid(50, 50); // Начальный размер

    // Устанавливаем начальные значения для всех элементов управления
    speedInput.value = DEFAULT_SPEED_GPS;
    speedSlider.value = DEFAULT_SPEED_GPS;

    gridWidthInput.value = 50;
    gridWidthSlider.value = 50;
    gridHeightInput.value = 50;
    gridHeightSlider.value = 50;

    toggleToroidal.checked = false;
    isToroidal = false;

    neighborhoodSelect.value = 'moore';
    neighborhoodType = 'moore';

     rulesInput.value = '3/23'; // Значение правил по умолчанию
     birthRules = [3];
     survivalRules = [2, 3];

     // Устанавливаем начальные цвета и видимость сетки из HTML
     liveCellColor = liveColorPicker.value;
     deadCellColor = deadColorPicker.value;
     gridLineColor = gridColorPicker.value;
     showGridLines = toggleGridLines.checked;

     // Обновляем UI на основе начальных значений
     updateUI_Language(); // Применяем локализацию
     updateSessionButtonsVisibility(); // Скрываем/показываем кнопки сессии
}

// Функция, которая пытается загрузить сессию или инициализирует игру
function attemptLoadOrCreateGame() {
     updateUI_Language(); // Применяем локализацию перед попыткой загрузки/инициализации
     if (hasConsent) {
        const sessionLoaded = loadSessionState(); // Пробуем загрузить состояние

        if (!sessionLoaded) {
            // Если локальное состояние не найдено или не загрузилось
            initializeGameWithDefaults(); // Инициализируем по умолчанию
             // Сохраняем начальное состояние в локальную сессию, т.к. согласие есть
            saveSessionState();
        }
        // Если загружено успешно, UI уже обновлен внутри loadSessionState
     } else {
         // Если согласия нет, инициализируем игру с нуля
         initializeGameWithDefaults();
     }
      // Обновляем видимость кнопок сессии после всех инициализаций
      updateSessionButtonsVisibility();
}


// Запускаем логику при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Сначала проверяем согласие. Если уже есть, сразу пытаемся загрузить/инициализировать.
    // Если нет, показываем модалку согласия.
    if (hasConsent) {
        attemptLoadOrCreateGame();
    } else {
        // Нет согласия, показываем модалку
        consentModal.style.display = 'flex';
         // Инициализируем по умолчанию, но без сохранения, пока не получим согласие
         //initializeGameWithDefaults(); // Лучше инициализировать после согласия/отказа
    }

     // Устанавливаем начальные значения для переключателя языка
     languageSelect.value = currentLanguage;

     // Обработчик смены языка
     languageSelect.addEventListener('change', (event) => {
        setLanguagePreference(event.target.value);
     });

});
