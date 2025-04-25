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
        // Grid color label might be less relevant in WebGL if lines are hard to implement initially
        'gridColorLabel': 'Grid line color (2D only):', // Modified label
        'showGridLinesLabel': 'Show grid lines (2D only):', // Modified label

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

        'saveLoadTitle': 'Save / Load (JSON File)', // Заголовок остался, т.к. есть сохранение в файл
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

        // Validation error messages
        'errorInvalidDataFormat': 'Invalid data format.',
        'errorInvalidCols': 'Invalid field width value.',
        'errorInvalidRows': 'Invalid field height value.',
        'errorInvalidToroidal': 'Invalid border mode value.',
        'errorInvalidNeighborhood': 'Invalid neighborhood type value.',
        'errorInvalidBirthRules': 'Invalid birth rules format.',
        'errorInvalidSurvivalRules': 'Invalid survival rules format.',
        'errorInvalidGridDataSize': 'Invalid grid data or size mismatch. Expected {expected} cells, found {found}.',
        'errorWebGLNotSupported': 'Your browser does not support WebGL.', // New error message
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
        // Modified label
        'gridColorLabel': 'Цвет сетки (только 2D):',
        // Modified label
        'showGridLinesLabel': 'Показывать сетку (только 2D):',

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

        // Валидация error messages
        'errorInvalidDataFormat': 'Неверный формат данных.',
        'errorInvalidCols': 'Неверное значение ширины поля.',
        'errorInvalidRows': 'Неверное значение высоты поля.',
        'errorInvalidToroidal': 'Неверное значение режима границ.',
        'errorInvalidNeighborhood': 'Неверное значение типа соседства.',
        'errorInvalidBirthRules': 'Неверный формат правил рождения.',
        'errorInvalidSurvivalRules': 'Неверный формат правил выживания.',
        'errorInvalidGridDataSize': 'Неверные данные сетки или несоответствие размера. Ожидается {expected} клеток, найдено {found}.',
        'errorWebGLNotSupported': 'Ваш браузер не поддерживает WebGL.', // New error message
    }
};

// --- Объявление КОНСТАНТ и глобальных ПЕРЕМЕННЫХ в самом начале ---
const DEFAULT_SPEED_GPS = 10; // Скорость по умолчанию в поколений/сек
const MIN_SPEED_GPS = 1;
const MAX_SPEED_GPS = 20; // Максимальная скорость для слайдера

const MIN_GRID_SIZE = 10; // Минимальные/максимальные значения для слайдеров размера
const MAX_GRID_SIZE_SLIDER = 200;
const DEFAULT_GRID_SIZE = 50; // Размер по умолчанию

let currentLanguage = localStorage.getItem('preferredLanguage') || (navigator.language.startsWith('ru') ? 'ru' : 'en');

let liveCellColor = '#000000'; // Инициализируем значением по умолчанию (будут обновлены из HTML)
let deadCellColor = '#ffffff'; // Инициализируем значением по умолчанию (будут обновлены из HTML)
let gridLineColor = '#cccccc'; // Инициализируем значением по умолчанию (будут обновлены из HTML) - В WebGL пока не используется явно для линий
let showGridLines = true; // Инициализируется позже (будет обновлен из HTML) - В WebGL пока не используется явно для линий

let isToroidal = false;
let neighborhoodType = 'moore';

let birthRules = [3];
let survivalRules = [2, 3];

// Переменные состояния игры (инициализируются в initializeGrid)
const resolution = 10; // Размер клетки в пикселях - В WebGL resolution будет влиять на размер канваса, но не напрямую на отрисовку клеток
let COLS; // Количество столбцов
let ROWS; // Количество строк
let grid; // Сетка игры (массив 0/1)
let intervalId;
let isRunning = false;
let isDrawing = false;
let drawState = 1;
let generation = 0;
let liveCellsCount = 0;


// --- Переменные для WebGL ---
let gl = null; // Контекст WebGL
let shaderProgram = null; // Программа шейдеров
let vertexBuffer = null; // Буфер вершин для квада
let texture = null; // Текстура для состояния сетки
let liveColorUniformLocation = null; // Расположение uniform для цвета живых клеток
let deadColorUniformLocation = null; // Расположение uniform для цвета мертвых клеток
let textureSamplerLocation = null; // Расположение uniform для текстуры

// --- Получение ссылок на элементы (до DOMContentLoaded) ---
const canvas = document.getElementById('gameCanvas');
// ctx больше не нужен для WebGL

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
const gridColorPicker = document.getElementById('gridColorPicker'); // В WebGL пока не используется для линий
const toggleGridLines = document.getElementById('toggleGridLines'); // В WebGL пока не используется для линий

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
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = getTranslation(key);
        element.textContent = translation;
    });

     const mooreOption = document.querySelector('#neighborhoodSelect option[value="moore"]');
     const vonneumannOption = document.querySelector('#neighborhoodSelect option[value="vonneumann"]');
     if (mooreOption) mooreOption.textContent = getTranslation('mooreNeighborhood');
     if (vonneumannOption) vonneumannOption.textContent = getTranslation('vonneumannNeighborhood');

     if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
     if(document.title) document.title = getTranslation('gameTitle');

     // Скрываем или отключаем элементы управления сеткой, если они не поддерживаются в WebGL
     const gridColorLabelElement = document.querySelector('label[for="gridColorPicker"]');
     const showGridLinesLabelElement = document.querySelector('label[for="toggleGridLines"]');
     const gridColorPickerElement = document.getElementById('gridColorPicker');
     const toggleGridLinesElement = document.getElementById('toggleGridLines');

     if (gridColorLabelElement) gridColorLabelElement.textContent = getTranslation('gridColorLabel');
     if (showGridLinesLabelElement) showGridLinesLabelElement.textContent = getTranslation('showGridLinesLabel');

     // В этой базовой WebGL версии они не работают, можно их отключить или скрыть
     if (gridColorPickerElement) gridColorPickerElement.style.display = 'none';
     if (toggleGridLinesElement) toggleGridLinesElement.style.display = 'none';
     if (gridColorLabelElement) gridColorLabelElement.style.display = 'none';
     if (showGridLinesLabelElement) showGridLinesLabelElement.style.display = 'none';

}

function setLanguagePreference(lang) {
    currentLanguage = lang;
    updateUI_Language();
}


// --- Функции WebGL setup и отрисовки ---

// Шейдеры (GLSL)
const vsSource = `
    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;
    void main() {
        gl_Position = a_position;
        v_texCoord = a_texCoord;
    }
`;

const fsSource = `
    precision mediump float;
    varying vec2 v_texCoord;
    uniform sampler2D u_gridTexture;
    uniform vec3 u_liveColor;
    uniform vec3 u_deadColor;

    void main() {
        // Получаем состояние клетки из текстуры (0.0 или 1.0)
        float cellState = texture2D(u_gridTexture, v_texCoord).r;

        // Интерполируем между цветом мертвой и живой клетки
        gl_FragColor = vec4(mix(u_deadColor, u_liveColor, cellState), 1.0);
    }
`;

// Функция для компиляции шейдера
function compileShader(gl, source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// Функция для инициализации шейдерной программы
function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = compileShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) {
        return null;
    }

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

// Функция для инициализации WebGL
function initWebGL(canvas) {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        alert(getTranslation('errorWebGLNotSupported'));
        return null;
    }

    shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) {
        gl = null; // Очищаем контекст, если программа не создана
        return null;
    }

    // Получаем расположения атрибутов и униформов
    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.texCoordAttribute = gl.getAttribLocation(shaderProgram, 'a_texCoord');
    gl.enableVertexAttribArray(shaderProgram.texCoordAttribute);

    textureSamplerLocation = gl.getUniformLocation(shaderProgram, 'u_gridTexture');
    liveColorUniformLocation = gl.getUniformLocation(shaderProgram, 'u_liveColor');
    deadColorUniformLocation = gl.getUniformLocation(shaderProgram, 'u_deadColor');

    // Создаем буфер вершин для квада, покрывающего весь канвас
    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    const vertices = new Float32Array([
        -1.0, -1.0,  0.0, 0.0, // Левый нижний угол (позиция и тек.координаты)
         1.0, -1.0,  1.0, 0.0, // Правый нижний
        -1.0,  1.0,  0.0, 1.0, // Левый верхний
         1.0,  1.0,  1.0, 1.0, // Правый верхний
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Создаем текстуру для сетки
    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Устанавливаем параметры текстуры
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); // Отключаем сглаживание
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST); // Отключаем сглаживание

    // Инициализируем текстуру пустыми данными с начальным размером по умолчанию
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, null);


    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Цвет очистки

    return gl;
}

// Функция для обновления данных текстуры сетки из массива grid
function updateGridTexture(grid) {
    if (!gl || !texture || !grid || COLS === undefined || ROWS === undefined) {
        console.error("Cannot update texture: WebGL context, texture, grid or dimensions missing.");
        return;
    }

    // Преобразуем 2D массив grid в плоский Uint8Array (0 или 1)
    const textureData = new Uint8Array(COLS * ROWS);
    let index = 0;
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
             if (grid[col] !== undefined && grid[col][row] !== undefined) {
                 textureData[index++] = grid[col][row]; // 0 или 1
             } else {
                  // Заполняем нулем, если данные отсутствуют (на всякий случай)
                 textureData[index++] = 0;
             }
        }
    }

    // --- ЛОГИРОВАНИЕ ДЛЯ ОТЛАДКИ ---
    console.log("WebGL Texture Update Info:");
    console.log("COLS:", COLS);
    console.log("ROWS:", ROWS);
    console.log("COLS * ROWS:", COLS * ROWS);
    console.log("textureData.length:", textureData.length);
    // --- КОНЕЦ ЛОГИРОВАНИЯ ---


    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Используем texImage2D для полной загрузки данных текстуры.
    // Это должно гарантировать, что размер текстуры соответствует COLS и ROWS.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, COLS, ROWS, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, textureData);
}


// Функция для отрисовки сетки с использованием WebGL
function drawGridWebGL() {
    if (!gl || !shaderProgram || !vertexBuffer || !texture || !grid || COLS === undefined || ROWS === undefined) {
        // console.error("Cannot draw WebGL: WebGL context, program, buffer, texture, grid or dimensions missing.");
        return; // Молча выходим, если WebGL не готов
    }

    // Убедимся, что размеры вьюпорта соответствуют размерам канваса
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(shaderProgram);

    // Привязываем текстуру к текстурному модулю 0
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(textureSamplerLocation, 0); // Сообщаем шейдеру, что текстура в модуле 0

    // Передаем цвета в шейдер
    const liveRGB = hexToRgb(liveCellColor);
    const deadRGB = hexToRgb(deadCellColor);
    if (liveColorUniformLocation && deadColorUniformLocation) {
         gl.uniform3f(liveColorUniformLocation, liveRGB.r / 255.0, liveRGB.g / 255.0, liveRGB.b / 255.0);
         gl.uniform3f(deadColorUniformLocation, deadRGB.r / 255.0, deadRGB.g / 255.0, deadRGB.b / 255.0);
    }


    // Указываем WebGL, как брать данные вершин из буфера
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    // Позиции
    const numComponentsPosition = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 4 * Float32Array.BYTES_PER_ELEMENT; // Общий размер данных на вершину (x, y, u, v)
    const offsetPosition = 0; // Позиции начинаются с начала буфера
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, numComponentsPosition, type, normalize, stride, offsetPosition);

    // Текстурные координаты
    const numComponentsTexCoord = 2;
    const offsetTexCoord = 2 * Float32Array.BYTES_PER_ELEMENT; // Тек.координаты начинаются после позиций (2 * размер float)
    gl.vertexAttribPointer(shaderProgram.texCoordAttribute, numComponentsTexCoord, type, normalize, stride, offsetTexCoord);


    // Отрисовываем квад (2 треугольника)
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexCount);

     updateInfoDisplay(); // Обновляем счетчики
}

// Вспомогательная функция для конвертации HEX в RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}


// --- Функции состояния игры и логики (большинство остаются прежними, но используют drawGridWebGL) ---

// Инициализация размеров канваса и сетки - Обновлена для WebGL
function initializeGrid(width, height) {
    isRunning = false;
    clearInterval(intervalId);
    generation = 0;

    if (canvas) {
         // Устанавливаем размеры канваса в пикселях
         canvas.width = width * resolution;
         canvas.height = height * resolution;

        // Размеры сетки в клетках
        COLS = width;
        ROWS = height;

         // Если WebGL контекст еще не инициализирован, инициализируем его
         if (!gl) {
             if (!initWebGL(canvas)) {
                 console.error("Failed to initialize WebGL.");
                 alert(getTranslation('errorWebGLNotSupported'));
                 return; // Не можем продолжить без WebGL
             }
         }

        // ВАЖНО: При изменении размера сетки, текстуру WebGL нужно пересоздать с новыми размерами
         if (gl && texture) {
             gl.bindTexture(gl.TEXTURE_2D, texture);
             // Пересоздаем текстуру с новыми размерами, но пока с null данными
             // updateGridTexture затем загрузит реальные данные
             gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, COLS, ROWS, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, null);
         }


        grid = createGrid(); // Создаем новую сетку данных (массив 0/1)
        updateGridTexture(grid); // Обновляем данные в текстуре WebGL
        drawGridWebGL(); // Отрисовываем сцену
    } else {
        console.error("Canvas element not found!");
    }
}


// Функция для создания пустой сетки (остается прежней)
function createGrid() {
     if (COLS === undefined || ROWS === undefined) {
         console.error("Cannot create grid: COLS or ROWS are not defined.");
         return null;
     }
    liveCellsCount = 0;
    const newGrid = new Array(COLS);
    for(let i = 0; i < COLS; i++) {
        newGrid[i] = new Array(ROWS).fill(0);
    }
    return newGrid;
}

// Функция для заполнения сетки случайными значениями (остается прежней)
function randomGrid() {
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
    updateGridTexture(newGrid); // Обновляем текстуру после создания случайного поля
    return newGrid;
}

// Функция для отрисовки сетки - ТЕПЕРЬ ИСПОЛЬЗУЕТ WebGL
function drawGrid() {
     drawGridWebGL(); // Просто вызываем функцию отрисовки WebGL
}

// Функция для вычисления следующего поколения - Обновлена для WebGL
function nextGeneration(grid) {
    if (!grid || COLS === undefined || ROWS === undefined) {
        console.error("Cannot compute next generation: grid or dimensions are missing.");
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

                    if (isToroidal) {
                         x_cell = (x_cell % COLS + COLS) % COLS;
                         y_cell = (y_cell % ROWS + ROWS) % ROWS;
                    } else {
                        if (x_cell < 0 || y_cell < 0 || x_cell >= COLS || y_cell >= ROWS) {
                             continue;
                        }
                    }

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
    updateGridTexture(nextGrid); // Обновляем текстуру с новым поколением
    return nextGrid;
}

// Обновление отображения информации (остается прежней)
function updateInfoDisplay() {
     if(generationCountSpan) generationCountSpan.textContent = generation;
     if(liveCellCountSpan) liveCellCountSpan.textContent = liveCellsCount;
}

// --- Ручное рисование на канвасе ---
function setCellState(col, row, state) {
     if (gl && grid && col >= 0 && col < COLS && row >= 0 && row < ROWS && (state === 0 || state === 1)) {
         const currentState = grid[col][row];
         if (currentState !== state) {
             grid[col][row] = state; // Обновляем массив данных

             if (state === 1) {
                 liveCellsCount++;
             } else {
                 liveCellsCount--;
             }

             // Обновляем только соответствующий пиксель в текстуре WebGL
             if (texture) {
                 gl.bindTexture(gl.TEXTURE_2D, texture);
                 // Используем texSubImage2D для частичного обновления
                 // Данные должны быть в Uint8Array
                 const pixelData = new Uint8Array([state]); // Uint8Array с одним байтом (0 или 1)
                 gl.texSubImage2D(gl.TEXTURE_2D, 0, col, row, 1, 1, gl.LUMINANCE, gl.UNSIGNED_BYTE, pixelData);
             }

             // Отрисовываем сцену заново
             drawGridWebGL();
         }
     } else {
          console.warn("Cannot set cell state: WebGL not ready or invalid coordinates/state.", { gl: !!gl, grid: !!grid, col, row, COLS, ROWS, state });
     }
}

// Функция запуска симуляции с учетом скорости (остается прежней, использует nextGeneration и drawGrid)
function startSimulation() {
    if (!isRunning && gl) { // Проверяем наличие WebGL контекста перед запуском
        isRunning = true;
        clearInterval(intervalId);

        const currentSpeedGPS = speedInput ? parseInt(speedInput.value) : DEFAULT_SPEED_GPS;
        const intervalTime = gpsToMps(currentSpeedGPS);
        const safeIntervalTime = Math.max(1, intervalTime);

        intervalId = setInterval(() => {
            grid = nextGeneration(grid); // nextGeneration уже обновляет текстуру
            drawGridWebGL(); // Просто отрисовываем
        }, safeIntervalTime);
    } else if (!gl) {
         console.warn("Cannot start simulation: WebGL not initialized.");
    }
}


// --- Функционал внутри модального окна настроек ---

// Функция инициализации игры с параметрами по умолчанию (обновлена)
function initializeGameWithDefaults() {
    // initializeGrid теперь сама инициализирует/обновляет WebGL
    initializeGrid(DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE);

    // Устанавливаем начальные значения для всех элементов управления
     if(speedInput) speedInput.value = DEFAULT_SPEED_GPS;
     if(speedSlider) speedSlider.value = DEFAULT_SPEED_GPS;

     if(gridWidthInput) gridWidthInput.value = DEFAULT_GRID_SIZE;
     if(gridWidthSlider) gridWidthSlider.value = DEFAULT_GRID_SIZE;
     if(gridHeightInput) gridHeightInput.value = DEFAULT_GRID_SIZE;
     if(gridHeightSlider) gridHeightSlider.value = DEFAULT_GRID_SIZE;

     if(toggleToroidal) toggleToroidal.checked = false;
    isToroidal = false;

     if(neighborhoodSelect) neighborhoodSelect.value = 'moore';
    neighborhoodType = 'moore';

     if(rulesInput) rulesInput.value = '3/23'; // Значение правил по умолчанию
     birthRules = [3];
     survivalRules = [2, 3];

     // Устанавливаем начальные цвета из HTML (нужны для шейдера)
     if(liveColorPicker) liveCellColor = liveColorPicker.value;
     if(deadColorPicker) deadCellColor = deadColorPicker.value;
     if(gridColorPicker) gridLineColor = gridColorPicker.value; // Читаем значение, но не используем для линий в WebGL

     // Читаем состояние чекбокса сетки, но не используем для линий в WebGL
     if(toggleGridLines) showGridLines = toggleGridLines.checked;


     updateUI_Language(); // Обновляем UI, включая метки сетки
}


// --- Инициализация игры при загрузке страницы ---
function initializeGameOnLoad() {
    // Инициализация WebGL и игры с параметрами по умолчанию
    if (canvas) {
         if (initWebGL(canvas)) {
            initializeGameWithDefaults(); // Инициализация игры после успешной инициализации WebGL
         } else {
             // Если WebGL не поддерживается, можно здесь переключиться на 2D Canvas
             // или показать сообщение об ошибке. Сейчас просто выходим.
             console.error("Game cannot run without WebGL.");
             alert(getTranslation('errorWebGLNotSupported')); // Показываем сообщение об ошибке
             return; // Не продолжаем
         }
    } else {
         console.error("Canvas element not found! Cannot initialize game.");
         return; // Не продолжаем без канваса
    }

    updateUI_Language(); // Обновляем язык интерфейса после инициализации
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

    // --- Инициализация WebGL и Игры ---
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
        grid = randomGrid(); // randomGrid уже обновляет текстуру
        drawGridWebGL(); // Просто отрисовываем
    });
    if(clearButton) clearButton.addEventListener('click', () => {
        isRunning = false;
        clearInterval(intervalId);
        grid = createGrid(); // createGrid создает пустой массив
        updateGridTexture(grid); // Обновляем текстуру
        drawGridWebGL(); // Отрисовываем
        generation = 0;
        updateInfoDisplay();
    });
    if(settingsButton) settingsButton.addEventListener('click', () => {
        isRunning = false; clearInterval(intervalId);
         if(settingsModal) settingsModal.style.display = 'flex';
        // Обновляем значения полей в модалке
         if(gridWidthInput) gridWidthInput.value = COLS;
         if(gridWidthSlider) gridWidthSlider.value = COLS;
         if(gridHeightInput) gridHeightInput.value = ROWS;
         if(gridHeightSlider) gridHeightSlider.value = ROWS;
         if(toggleToroidal) toggleToroidal.checked = isToroidal;
         if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType;
         if(rulesInput) rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;
         // Цвета в настройках напрямую связаны с переменными, которые передаются в шейдер
         if(liveColorPicker) liveColorPicker.value = liveCellColor;
         if(deadColorPicker) deadCellColor = deadCellColor;
         if(gridColorPicker) gridColorPicker.value = gridLineColor; // Читаем значение
         if(toggleGridLines) toggleGridLines.checked = showGridLines; // Читаем состояние

         if(loadFromJsonInput) loadFromJsonInput.value = ''; // Сбрасываем поле выбора файла
    });


    // Удален обработчик beforeunload


    // Обработчики синхронизации полей ввода/слайдеров
    if(speedSlider) speedSlider.addEventListener('input', () => {
        const sliderSpeed = parseInt(speedSlider.value);
        if(speedInput) speedInput.value = sliderSpeed;
        if (isRunning) {
            startSimulation();
        }
    });
     if(speedInput) speedInput.addEventListener('input', () => {
        let inputSpeed = parseInt(inputSpeed.value); // ОШИБКА: Использована inputSpeed.value вместо speedInput.value
         if (isNaN(inputSpeed) || inputSpeed < MIN_SPEED_GPS) {
            inputSpeed = MIN_SPEED_GPS;
             if(speedInput) speedInput.value = inputSpeed;
        }
         if(speedSlider) speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, inputSpeed));
        if (isRunning) {
            startSimulation();
        }
    });

    if(gridWidthInput) gridWidthInput.addEventListener('input', () => {
        let inputVal = parseInt(gridWidthInput.value);
         if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) {
             inputVal = MIN_GRID_SIZE;
             if(gridWidthInput) gridWidthInput.value = inputVal;
        }
         const MAX_INPUT_GRID_SIZE = 500;
          if (inputVal > MAX_INPUT_GRID_SIZE) {
              inputVal = MAX_INPUT_GRID_SIZE;
               if(gridWidthInput) gridWidthInput.value = inputVal;
          }
         if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal));
    });
    if(gridWidthSlider) gridWidthSlider.addEventListener('input', () => {
        const sliderVal = parseInt(gridWidthSlider.value);
        if(gridWidthInput) gridWidthInput.value = sliderVal;
    });

    if(gridHeightInput) gridHeightInput.addEventListener('input', () => {
        let inputVal = parseInt(gridHeightInput.value);
         if (isNaN(inputVal) || inputVal < MIN_GRID_SIZE) {
             inputVal = MIN_GRID_SIZE;
             if(gridHeightInput) gridHeightInput.value = inputVal;
        }
          const MAX_INPUT_GRID_SIZE = 500;
          if (inputVal > MAX_INPUT_GRID_SIZE) {
              inputVal = MAX_INPUT_GRID_SIZE;
               if(gridHeightInput) gridHeightInput.value = inputVal;
          }
         if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, inputVal));
    });
    if(gridHeightSlider) gridHeightSlider.addEventListener('input', () => {
        const sliderVal = parseInt(gridHeightSlider.value);
        if(gridHeightInput) gridHeightInput.value = sliderVal;
    });


    // Ручное рисование на канвасе (теперь обновляет WebGL текстуру)
     if(canvas) {
        canvas.addEventListener('mousedown', (event) => {
             if (!isRunning && gl) { // Проверяем наличие WebGL контекста
                isDrawing = true;
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                // Конвертируем пиксельные координаты в координаты сетки (клетки)
                const col = Math.floor(x / resolution);
                const row = Math.floor(y / resolution);


                if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
                     drawState = grid[col][row] === 1 ? 0 : 1;
                     setCellState(col, row, drawState); // setCellState теперь обновляет текстуру и вызывает отрисовку
                } else {
                     console.warn("Mouse down outside grid bounds.", { col, row, COLS, ROWS });
                }
             } else if (!gl) {
                  console.warn("Mouse down ignored: WebGL not initialized.");
             }
        });

        canvas.addEventListener('mousemove', (event) => {
            if (isDrawing && !isRunning && gl) { // Проверяем наличие WebGL контекста
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.clientX; // ОШИБКА: Использована clientX вместо rect.left
                const y = event.clientY - rect.clientY; // ОШИБКА: Использована clientY вместо rect.top
                const col = Math.floor(x / resolution);
                const row = Math.floor(y / resolution);

                // Проверяем, что координаты внутри сетки и состояние клетки изменилось
                if (col >= 0 && col < COLS && row >= 0 && row < ROWS && grid[col][row] !== drawState) {
                     setCellState(col, row, drawState); // setCellState теперь обновляет текстуру и вызывает отрисовку
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
                const modalId = button.dataset.modal;
                 const modalElement = document.getElementById(modalId);
                 if(modalElement) modalElement.style.display = 'none';
                // После закрытия модалки, если WebGL готов, перерисовываем сцену
                if (gl) {
                     drawGridWebGL();
                }
            });
         }
    });

     // Обработчик клика вне модалок
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
             // После закрытия модалки, если WebGL готов, перерисовываем сцену
            if (gl) {
                 drawGridWebGL();
            }
        }
    });

    // Обработчики смены цвета в настройках (теперь напрямую влияют на отрисовку WebGL)
    if(liveColorPicker) liveColorPicker.addEventListener('input', (event) => {
        liveCellColor = event.target.value;
        if (gl) drawGridWebGL(); // Перерисовываем при смене цвета
    });
    if(deadColorPicker) deadColorPicker.addEventListener('input', (event) => {
        deadCellColor = event.target.value;
        if (gl) drawGridWebGL(); // Перерисовываем при смене цвета
    });
     // Обработчики для gridColorPicker и toggleGridLines пока остаются, но не используются в WebGL
     if(gridColorPicker) gridColorPicker.addEventListener('input', (event) => {
         gridLineColor = event.target.value;
         // В WebGL пока нет отрисовки линий сетки
         // if(showGridLines && gl) drawGridWebGL(); // Если бы линии были в шейдере
    });
     if(toggleGridLines) toggleGridLines.addEventListener('change', (event) => {
         showGridLines = event.target.checked;
         // В WebGL пока нет отрисовки линий сетки
         // if(gl) drawGridWebGL(); // Если бы линии были в шейдере
    });


     if(applySizeButton) applySizeButton.addEventListener('click', () => {
        const newWidth = parseInt(gridWidthInput.value);
        const newHeight = parseInt(gridHeightInput.value);

        if (!isNaN(newWidth) && newWidth >= MIN_GRID_SIZE && !isNaN(newHeight) && newHeight >= MIN_GRID_SIZE) {
            // initializeGrid теперь сама инициализирует/обновляет WebGL
            initializeGrid(newWidth, newHeight);
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

                isRunning = false;
                clearInterval(intervalId);
                grid = createGrid(); // Создаем пустую сетку
                updateGridTexture(grid); // Обновляем текстуру
                drawGridWebGL(); // Отрисовываем
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
         if (!grid || COLS === undefined || ROWS === undefined || speedInput === null) {
            console.error("Cannot save to JSON: grid, dimensions, or speedInput are missing.");
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
            isToroidal: isToroidal,
            neighborhoodType: neighborhoodType,
            birthRules: birthRules,
            survivalRules: survivalRules,
            generation: generation,
            liveCellsCount: liveCellsCount,
            liveCellColor: liveCellColor,
            deadCellColor: deadCellColor,
            gridLineColor: gridLineColor, // Сохраняем цвет сетки, даже если не используем его в WebGL
            showGridLines: showGridLines, // Сохраняем состояние чекбокса, даже если не используем в WebGL
            speedGPS: parseInt(speedInput.value),
            grid: gridString, // Сохраняем сетку как строку
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


                // Загружаем цвета и состояние сетки, даже если они не используются в WebGL отрисовке линий
                const loadedLiveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : (liveColorPicker ? liveColorPicker.value : '#000000');
                const loadedDeadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : (deadColorPicker ? deadColorPicker.value : '#ffffff');
                const loadedGridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : (gridColorPicker ? gridColorPicker.value : '#cccccc');
                const loadedShowGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : (toggleGridLines ? toggleGridLines.checked : true);
                const loadedSpeedGPS = (typeof loadedState.speedGPS === 'number' && loadedState.speedGPS >= MIN_SPEED_GPS) ? loadedState.speedGPS : DEFAULT_SPEED_GPS;


                // --- Применение загруженного состояния ---
                isRunning = false;
                clearInterval(intervalId);

                 neighborhoodType = loadedState.neighborhoodType;
                 isToroidal = loadedState.isToroidal;

                initializeGrid(loadedState.cols, loadedState.rows); // Инициализируем новую сетку (и WebGL) с правильными размерами

                // Копируем загруженные данные в новую сетку данных (массив)
                let cellIndex = 0;
                for (let col = 0; col < COLS; col++) {
                    for (let row = 0; row < ROWS; row++) {
                        grid[col][row] = loadedGridData[cellIndex];
                        cellIndex++;
                    }
                }

                birthRules = loadedState.birthRules.sort((a, b) => a - b);
                survivalRules = loadedState.survivalRules.sort((a, b) => a - b);
                generation = loadedGeneration;
                liveCellsCount = calculatedLiveCount; // Используем пересчитанное значение

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
                 if(gridWidthSlider) gridWidthSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, COLS));
                 if(gridHeightInput) gridHeightInput.value = ROWS;
                 if(gridHeightSlider) gridHeightSlider.value = Math.max(MIN_GRID_SIZE, Math.min(MAX_GRID_SIZE_SLIDER, ROWS));

                if(speedInput) speedInput.value = loadedSpeedGPS;
                if(speedSlider) speedSlider.value = Math.max(MIN_SPEED_GPS, Math.min(MAX_SPEED_GPS, loadedSpeedGPS));

                if(neighborhoodSelect) neighborhoodSelect.value = neighborhoodType;
                if(toggleToroidal) toggleToroidal.checked = isToroidal;

                // Хэш не используется при загрузке

                updateGridTexture(grid); // Обновляем текстуру WebGL с загруженными данными
                drawGridWebGL(); // Перерисовываем сцену
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

    // Инициализация WebGL и игры
    initializeGameOnLoad();

    // Инициализация цветов и видимости сетки из HTML после загрузки DOM (нужно для WebGL)
    // Эти переменные будут обновлены при загрузке из файла или установлены initializeGameWithDefaults
    // Просто убедимся, что они имеют начальные значения из HTML
    if(liveColorPicker) liveCellColor = liveColorPicker.value;
    if(deadColorPicker) deadCellColor = deadColorPicker.value;
    if(gridColorPicker) gridLineColor = gridColorPicker.value; // Цвет сетки
    if(toggleGridLines) showGridLines = toggleGridLines.checked; // Состояние чекбокса сетки

});
