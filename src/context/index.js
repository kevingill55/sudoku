import React, { useState, useEffect, createContext } from 'react';

import {
  handleNewBoard,
  handleBoardReset,
  handleSquareSelection,
  handleSudokuKeyDown,
} from './handlers';

import { initializeBoard, initializeSudokuStore } from './utils';

const SudokuGenerator = require('js-sudoku-generator').SudokuGenerator;
const generatedBoard = SudokuGenerator.generate(1)[0].getSheet(0);

// const generatedBoard = [
//   ["", 5, "", 3, 2, "", "", "", 8],
//   ["", 6, "", 9, "", "", "", 7, 2],
//   [3, 2, "", "", 1, "", "", 5, ""],
//   ["", 8, "", 1, 9, "", 2, "", ""],
//   ["", "", 1, "", 3, "", "", 9, 5],
//   [2, "", "", "", "", 8, "", 1, 3],
//   ["", 1, 2, "", 8, "", "", "", 4],
//   ["", "", 9, "", "", 1, 7, "", 6],
//   [5, "", "", 2, "", 3, "", 8, ""],
// ];

const emptyBoard = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

const SudokuContext = createContext();
const SudokuProvider = ({ children }) => {
  const [board, setBoard] = useState(emptyBoard);
  const [originalBoard, setOriginalBoard] = useState(generatedBoard);
  const [activeValue, setActiveValue] = useState('');
  const [activeRow, setActiveRow] = useState(0);  
  const [activeCol, setActiveCol] = useState(0);
  const [activeBox, setActiveBox] = useState(0);
  const [sudokuRowStore, setSudokuRowStore] = useState(emptyBoard);
  const [sudokuColumnStore, setSudokuColumnStore] = useState(emptyBoard);
  const [sudokuBoxStore, setSudokuBoxStore] = useState(emptyBoard);
  const [sudokuKey, setSudokuKey] = useState([1,2,3,4,5,6,7,8,9]);
  const [renderBoard, setRenderBoard] = useState(false);
  useEffect(() => {
    initializeBoard(setBoard, setRenderBoard, originalBoard);
    initializeSudokuStore(setSudokuRowStore, setSudokuColumnStore, setSudokuBoxStore, originalBoard);
  }, [originalBoard]);
  const context = {
    board,
    activeValue,
    activeRow,
    activeCol,
    activeBox,
    sudokuRowStore,
    sudokuColumnStore,
    sudokuBoxStore,
    sudokuKey,
    onNewBoard: handleNewBoard(
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
    ),
    onBoardReset: handleBoardReset(
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
    ),
    onSquareSelection: handleSquareSelection(
      board,
      setActiveRow,
      setActiveCol,
      setActiveBox,
      setActiveValue
    ),
    onSudokuKeyDown: handleSudokuKeyDown(
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
    ),
  };
  return (
    <SudokuContext.Provider value={context}>
      { renderBoard && (children) }
    </SudokuContext.Provider>
  );
};

export { SudokuContext, SudokuProvider };
