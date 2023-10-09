const colorNames = [
  "red",
  "lime",
  "blue",
  "yellow",
  "cyan",
  "magenta",
  "orange",
  "pink",
];

function timer({ durationMs, callback, intervalMs = 100 }) {
  let totalMs = 0;
  const interval = setInterval(() => {
    totalMs += intervalMs;
    callback?.();
    if (totalMs >= durationMs) clearInterval(interval);
  }, intervalMs);
  return interval;
}

function getRandomIndex(max = 1) {
  return Math.floor(Math.random() * max);
}

function generateBoardCells(size = 0, showCoords = false) {
  let html = "";
  for (let rowId = 0; rowId < size; rowId++) {
    for (let colId = 0; colId < size; colId++) {
      html += `<span class="board-cell" data-coords="${rowId}-${colId}">
      ${showCoords ? `${rowId}-${colId}` : ""}
      </span>`;
    }
  }
  return html;
}

function addCellColor(cell) {
  const color = colorNames[getRandomIndex(colorNames.length)];
  cell.style.backgroundColor = `var(--${color})`;
  cell.classList.add("colored");
  cell.style.boxShadow = `0 0 2px var(--${color}), 0 0 10px var(--${color})`;
}

function removeCellColor(cell) {
  cell.style.backgroundColor = `var(--gray)`;
  cell.style.boxShadow = `0 0 2px var(--black), 0 0 10px var(--black)`;
}

function createBoard(element, { size, transitionMs, coords = [] }) {
  element.innerHTML = generateBoardCells(size);
  element.style.transitionDuration = `${transitionMs}ms`;
  element.style.gridTemplateColumns = "1fr ".repeat(size);

  function writeCellByCoords({ x, y }) {
    const cell = element.querySelector(`[data-coords="${x}-${y}"]`);
    addCellColor(cell);
  }

  let index = 0;
  const interval = 50;

  timer({
    durationMs: coords.length * interval,
    intervalMs: interval,
    callback: function () {
      const [x, y] = coords[index].split("-");
      writeCellByCoords({ x, y });
      index += 1;
    },
  });
}

const coords = [
  /* F */
  "0-0",
  "0-1",
  "0-2",
  "1-0",
  "2-0",
  "3-0",
  "3-1",
  "4-0",
  "5-0",
  "6-0",
  /* E */
  "0-4",
  "0-5",
  "0-6",
  "1-4",
  "2-4",
  "3-4",
  "3-5",
  "4-4",
  "5-4",
  "6-4",
  "6-5",
  "6-6",
  /* L */
  "0-8",
  "1-8",
  "2-8",
  "3-8",
  "4-8",
  "5-8",
  "6-10",
  "6-8",
  "6-9",
  /* I */
  "0-12",
  "2-12",
  "3-12",
  "4-12",
  "5-12",
  "6-12",
  /* Z */
  "0-14",
  "0-15",
  "0-16",
  "0-17",
  "1-17",
  "2-16",
  "4-15",
  "5-14",
  "6-14",
  "6-15",
  "6-16",
  "6-17",
  /* */
  "10-0",
  "11-0",
  "12-0",
  "13-0",
  "14-0",
  "15-0",
  "15-1",
  "15-2",
  "9-0",
  "9-1",
  "9-2",
  /* U */
  "10-4",
  "10-6",
  "11-4",
  "11-6",
  "12-4",
  "12-6",
  "13-4",
  "13-6",
  "14-4",
  "14-6",
  "15-4",
  "15-5",
  "15-6",
  "9-4",
  "9-6",
  /* P */
  "10-11",
  "10-12",
  "10-8",
  "10-9",
  "11-10",
  "11-12",
  "11-8",
  "12-12",
  "12-8",
  "13-12",
  "13-8",
  "14-12",
  "14-8",
  "15-12",
  "15-8",
  "9-12",
  "9-8",
  /* P */
  "10-14",
  "10-16",
  "11-14",
  "11-16",
  "12-14",
  "12-15",
  "12-16",
  "13-14",
  "14-14",
  "15-14",
  "9-14",
  "9-15",
  "9-16",
  /* L */
  "10-18",
  "11-18",
  "12-18",
  "13-18",
  "14-18",
  "15-18",
  "15-19",
  "15-20",
  "9-18",
  /* E */
  "10-22",
  "11-22",
  "12-22",
  "12-23",
  "13-22",
  "14-22",
  "15-22",
  "15-23",
  "15-24",
  "9-22",
  "9-23",
  "9-24",
  /* A */
  "18-0",
  "18-1",
  "18-2",
  "19-0",
  "19-2",
  "20-0",
  "20-2",
  "21-0",
  "21-1",
  "21-2",
  "22-0",
  "22-2",
  "23-0",
  "23-2",
  "24-0",
  "24-2",
  /* N */
  "18-4",
  "18-5",
  "18-6",
  "19-4",
  "19-6",
  "20-4",
  "20-6",
  "21-4",
  "21-6",
  "22-4",
  "22-6",
  "23-4",
  "23-6",
  "24-4",
  "24-6",
  /* G */
  "18-10",
  "18-11",
  "18-12",
  "18-8",
  "18-9",
  "19-8",
  "20-8",
  "21-10",
  "21-11",
  "21-12",
  "21-8",
  "22-12",
  "22-8",
  "23-12",
  "23-8",
  "24-10",
  "24-11",
  "24-8",
  "24-9",
  "24-12",
  /* E */
  "18-14",
  "18-15",
  "18-16",
  "19-14",
  "20-14",
  "21-14",
  "21-15",
  "21-16",
  "22-14",
  "23-14",
  "24-14",
  "24-15",
  "24-16",
  /* L */
  "18-18",
  "19-18",
  "20-18",
  "21-18",
  "22-18",
  "23-18",
  "24-18",
  "24-19",
  "24-20",
];

createBoard(document.getElementById("board"), {
  size: 30,
  transitionMs: 600,
  coords,
});
