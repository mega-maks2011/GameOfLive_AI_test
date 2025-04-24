// Весь предыдущий JavaScript код БЕЗ ИЗМЕНЕНИЙ.
// Код исправления моргания и скрытия модалки по умолчанию
// уже должен быть в нем.

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const randomButton = document.getElementById('randomButton');
const clearButton = document.getElementById('clearButton');
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

// *** Обработчики событий ***

startButton.addEventListener('click', startSimulation);
pauseButton.addEventListener('click', () => { isRunning = false; clearInterval(intervalId); });
randomButton.addEventListener('click', () => {
    isRunning = false; clearInterval(intervalId);
    grid = randomGrid();
    drawGrid(grid);
    updateInfoDisplay();
});
clearButton.addEventListener('click', () => {
    isRunning = false; clearInterval(intervalId);
    grid = createGrid();
    drawGrid(grid);
    generation = 0;
    updateInfoDisplay();
});

settingsButton.addEventListener('click', () => {
    isRunning = false; clearInterval(intervalId);
    settingsModal.style.display = 'block';

    gridWidthInput.value = COLS;
    gridWidthSlider.value = COLS;
    gridHeightInput.value = ROWS;
    gridHeightSlider.value = ROWS;

    toggleToroidal.checked = isToroidal;
    neighborhoodSelect.value = neighborhoodType;
    rulesInput.value = `${birthRules.join('')}/${survivalRules.join('')}`;

    loadFromJsonInput.value = '';
});


// *** Синхронизация поля ввода и слайдера скорости ***
speedSlider.addEventListener('input', () => {
    const sliderSpeed = parseInt(speedSlider.value);
    speedInput.value = sliderSpeed;
    if (isRunning) {
        startSimulation();
    }
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
});

speedInput.value = DEFAULT_SPEED_GPS;
speedSlider.value = DEFAULT_SPEED_GPS;


// *** Синхронизация поля ввода и слайдера ШИРИНЫ поля ***
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


// *** Синхронизация поля ввода и слайдера ВЫСОТЫ поля ***
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


// *** Ручное рисование на канвасе (4) - ИСПРАВЛЕНИЕ БАГА МОРГАНИЯ ***
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
             setCellState(col, row, drawState);
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
             setCellState(col, row, drawState);
        }
    }
});

canvas.addEventListener('mouseup', () => { isDrawing = false; });
canvas.addEventListener('mouseout', () => { isDrawing = false; });

// Вспомогательная функция для УСТАНОВКИ состояния клетки (не переключения)
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


// *** Управление модальным окном настроек ***
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modal;
        document.getElementById(modalId).style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});


// *** Функционал внутри модального окна настроек ***

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
     alert(`Тип соседства изменен на "${neighborhoodType === 'moore' ? 'Мур (8)' : 'Фон Нейман (4)'}". Поле сброшено.`);
});


// Изменение размера поля и применение границ
applySizeButton.addEventListener('click', () => {
    const newWidth = parseInt(gridWidthInput.value);
    const newHeight = parseInt(gridHeightInput.value);

    if (!isNaN(newWidth) && newWidth >= MIN_GRID_SIZE && !isNaN(newHeight) && newHeight >= MIN_GRID_SIZE) {
        initializeGrid(newWidth, newHeight);
    } else {
        alert(`Пожалуйста, введите корректные положительные числа для ширины и высоты (минимум ${MIN_GRID_SIZE}).`);
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
            alert(`Правила успешно обновлены:\nРождение при ${birthRules.join(', ')} соседях\nВыживание при ${survivalRules.join(', ')} соседях.`);

            isRunning = false;
            clearInterval(intervalId);
            grid = createGrid();
            drawGrid(grid);
            generation = 0;
            updateInfoDisplay();

        } else {
            alert('Некорректный формат или значения правил. Используйте формат B/S (например "3/23") с цифрами от 0 до 8.');
        }
    } else {
        alert('Некорректный формат правил. Используйте формат B/S, например "3/23".');
    }
});


// *** Сохранение в JSON файл ***
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

// *** Загрузка из JSON файла ***
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
            if (typeof loadedState !== 'object' || loadedState === null) { throw new Error("Неверный формат данных (не объект)."); }
            if (typeof loadedState.cols !== 'number' || loadedState.cols < MIN_GRID_SIZE) { throw new Error(`Неверное значение ширины поля (минимум ${MIN_GRID_SIZE}).`); }
            if (typeof loadedState.rows !== 'number' || loadedState.rows < MIN_GRID_SIZE) { throw new Error(`Неверное значение высоты поля (минимум ${MIN_GRID_SIZE}).`); }
            if (typeof loadedState.isToroidal !== 'boolean') { throw new Error("Неверное значение режима границ."); }
            if (typeof loadedState.neighborhoodType !== 'string' || !['moore', 'vonneumann'].includes(loadedState.neighborhoodType)) { throw new Error("Неверное значение типа соседства."); }
            if (!Array.isArray(loadedState.birthRules) || !loadedState.birthRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error("Неверный формат правил рождения."); }
            if (!Array.isArray(loadedState.survivalRules) || !loadedState.survivalRules.every(n => typeof n === 'number' && n >= 0 && n <= 8)) { throw new Error("Неверный формат правил выживания."); }
            if (!Array.isArray(loadedState.grid) || loadedState.grid.length !== loadedState.cols * loadedState.rows) { throw new Error(`Неверные данные сетки или несоответствие размера. Ожидается ${loadedState.cols * loadedState.rows} клеток, найдено ${loadedState.grid.length}.`); }

            const loadedGeneration = (typeof loadedState.generation === 'number' && loadedState.generation >= 0) ? loadedState.generation : 0;
            const calculatedLiveCount = loadedState.grid.reduce((sum, cell) => sum + (cell === 1 ? 1 : 0), 0);
            const loadedLiveCellsCount = (typeof loadedState.liveCellsCount === 'number' && loadedState.liveCellsCount >= 0 && loadedState.liveCellsCount <= loadedState.cols * loadedState.rows) ? loadedState.liveCellsCount : calculatedLiveCount;

            const loadedLiveCellColor = (typeof loadedState.liveCellColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.liveCellColor)) ? loadedState.liveCellColor : '#000000';
            const loadedDeadCellColor = (typeof loadedState.deadCellColor === 'string' && /^#([0-9A-F]{3}){1{1,2}$/i.test(loadedState.deadCellColor)) ? loadedState.deadCellColor : '#ffffff'; // Исправлена опечатка в regex
            const loadedGridLineColor = (typeof loadedState.gridLineColor === 'string' && /^#([0-9A-F]{3}){1,2}$/i.test(loadedState.gridLineColor)) ? loadedState.gridLineColor : '#cccccc';
            const loadedShowGridLines = (typeof loadedState.showGridLines === 'boolean') ? loadedState.showGridLines : true;
            const loadedSpeedGPS = (typeof loadedState.speedGPS === 'number' && loadedState.speedGPS >= MIN_SPEED_GPS) ? loadedState.speedGPS : DEFAULT_SPEED_GPS;


            // --- Применение загруженного состояния ---
            isRunning = false;
            clearInterval(intervalId);

             neighborhoodType = loadedState.neighborhoodType;
             neighborhoodSelect.value = neighborhoodType;
             isToroidal = loadedState.isToroidal;
             toggleToroidal.checked = isToroidal;


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


            drawGrid(grid);
            updateInfoDisplay();

            alert('Состояние игры успешно загружено!');
            settingsModal.style.display = 'none';

        } catch (error) {
            console.error("Error loading or parsing game state:", error);
            alert(`Ошибка при загрузке состояния игры: ${error.message}\nПожалуйста, убедитесь, что файл создан этой версией игры.`);
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


// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initializeGrid(50, 50);

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

    liveCellColor = liveColorPicker.value;
    deadCellColor = deadColorPicker.value;
    gridLineColor = gridColorPicker.value;
    showGridLines = toggleGridLines.checked;
});
