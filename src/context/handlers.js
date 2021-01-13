import {
  initializeBoard,
  initializeSudokuStore,
  resetBoardState,
  isKeyStrokeValid,
  addOneCopyToStore,
  removeOneCopyFromStore,
  calculateBox,
} from './utils';

export const handleSquareSelection = (
  board,
  setActiveRow,
  setActiveCol,
  setActiveBox,
  setActiveValue,
) => (newRow, newCol) => {
  setActiveRow(newRow);
  setActiveCol(newCol);
  setActiveBox(calculateBox(newRow, newCol));
  setActiveValue(board[newRow][newCol].number);
};

export const handleBoardReset = (
  originalBoard,
  setBoard,
  setRenderBoard,
  setSudokuKey,
  setSudokuRowStore,
  setSudokuColumnStore,
  setSudokuBoxStore,
  setActiveRow,
  setActiveCol,
  setActiveBox,
  setActiveValue,
) => () => {
  setRenderBoard(false);
  initializeBoard(setBoard, setRenderBoard, originalBoard);
  initializeSudokuStore(
    setSudokuRowStore,
    setSudokuColumnStore,
    setSudokuBoxStore,
    originalBoard,
  );
  resetBoardState(
    setSudokuKey,
    setActiveRow,
    setActiveCol,
    setActiveBox,
    setActiveValue,
  );
};

export const handleNewBoard = (
  setBoard,
  setOriginalBoard,
  setRenderBoard,
  setSudokuKey,
  setSudokuRowStore,
  setSudokuColumnStore,
  setSudokuBoxStore,
  setActiveRow,
  setActiveCol,
  setActiveBox,
  setActiveValue,
) => (difficulty) => {
  setRenderBoard(false);
  const SudokuGenerator = require('js-sudoku-generator').SudokuGenerator;
  const newBoard = SudokuGenerator.generate(1)[0].getSheet(difficulty);
  setOriginalBoard(newBoard);
  initializeBoard(setBoard, setRenderBoard, newBoard);
  initializeSudokuStore(setSudokuRowStore, setSudokuColumnStore, setSudokuBoxStore, newBoard);
  resetBoardState(
    setSudokuKey,
    setActiveRow,
    setActiveCol,
    setActiveBox,
    setActiveValue,
  );
};

export const handleSudokuKeyDown = (
  board,
  sudokuKey,
  activeRow,
  activeValue,
  activeCol,
  activeBox,
  sudokuRowStore,
  sudokuColumnStore,
  sudokuBoxStore,
  setActiveValue,
  setSudokuKey,
) => (newKey) => {
  
  if (board[activeRow][activeCol].fixed) {
    return;
  }

  if (newKey === 'Backspace') {
    if (typeof activeValue === 'number') {
      Object.assign(board[activeRow][activeCol], { number : '', error: false });
      removeOneCopyFromStore(
        activeValue,
        activeRow,
        activeCol,
        activeBox,
        sudokuRowStore,
        sudokuColumnStore,
        sudokuBoxStore,
        sudokuKey,
        setSudokuKey,
      );
      setActiveValue('');
    }
    return;
  }

  const num = Number(newKey);

  if (!isKeyStrokeValid(activeValue, num)) {
    return;
  }

  const newSquare = { number: num, error: false };

  if (sudokuRowStore[activeRow].includes(num)
      || sudokuColumnStore[activeCol].includes(num)
      || sudokuBoxStore[activeBox].includes(num)) {
    newSquare.error = true;
  }

  if (typeof activeValue === 'number') {
    removeOneCopyFromStore(
      activeValue,
      activeRow,
      activeCol,
      activeBox,
      sudokuRowStore,
      sudokuColumnStore,
      sudokuBoxStore,
      sudokuKey,
      setSudokuKey,
    );
  }

  Object.assign(board[activeRow][activeCol], newSquare);
  addOneCopyToStore(
    num,
    activeRow,
    activeCol,
    activeBox,
    sudokuRowStore,
    sudokuColumnStore,
    sudokuBoxStore,
    sudokuKey,
    setSudokuKey,
  );
  setActiveValue(num);
};
