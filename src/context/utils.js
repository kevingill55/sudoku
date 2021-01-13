export const initializeBoard = (setBoard, setRenderBoard, originalBoard) => {
  const newBoard = [];
  originalBoard.forEach((row, rowIndex) => {
    const newRow = [];
    row.forEach((square, columnIndex) => {
      const sudokuSquare = {
        row: rowIndex,
        col: columnIndex,
        error: false,
        fixed: false,
        number: '',
      };
      if (typeof square === 'number') {
        sudokuSquare.fixed = true;
        sudokuSquare.number = square;
      }
      newRow.push(sudokuSquare);
    });
    newBoard.push(newRow);
  });
  setBoard(newBoard);
  setRenderBoard(true);
};

const removeOneCopy = (value, array) => {
  if (array.includes(value)) {
    let counter = 0;
    const resArray = [];
    for(let i = 0; i < array.length; i = i + 1) {
      array[i] === value ? counter++ : resArray.push(array[i]);
    }
    while (counter > 1) {
      resArray.push(value);
      counter--;
    }
    return resArray;
  } else {
    return array;
  }
};

export const addOneCopyToStore = (
  activeValue,
  activeRow,
  activeCol,
  activeBox,
  sudokuRowStore,
  sudokuColumnStore,
  sudokuBoxStore,
  sudokuKey,
  setSudokuKey,
) => {
  sudokuRowStore[activeRow].push(activeValue);
  sudokuColumnStore[activeCol].push(activeValue);
  sudokuBoxStore[activeBox].push(activeValue);
  if (checkValueForCompletion(activeValue, sudokuRowStore, sudokuColumnStore, sudokuBoxStore)) {
    const updatedKey = [...sudokuKey.filter(item => item !== activeValue)];
    setSudokuKey(updatedKey);
  }
};

export const checkValueForCompletion = (value, sudokuRowStore, sudokuColumnStore, sudokuBoxStore) => {
  let counter = 0;

  sudokuRowStore.forEach((row) => {
    row.some((num) => {
      if (num === value) {
        counter++;
        return true;
      } else return false;
    });
  });

  if (counter !== 9) return false;

  sudokuColumnStore.forEach((col) => {
    col.some((num) => {
      if (num === value) {
        counter++;
        return true;
      } else return false;
    });
  });

  if (counter !== 18) return false;

  sudokuBoxStore.forEach((box) => {
    box.some((num) => {
      if (num === value) {
        counter++;
        return true;
      } else return false;
    });
  });

  if (counter !== 27) return false;

  return true;
};

export const removeOneCopyFromStore = (
  activeValue,
  activeRow,
  activeCol,
  activeBox,
  sudokuRowStore,
  sudokuColumnStore,
  sudokuBoxStore,
  sudokuKey,
  setSudokuKey,
) => {
  const updatedRow = removeOneCopy(activeValue, sudokuRowStore[activeRow]);
  const updatedCol = removeOneCopy(activeValue, sudokuColumnStore[activeCol]);
  const updatedBox = removeOneCopy(activeValue, sudokuBoxStore[activeBox]);
  sudokuRowStore[activeRow] = updatedRow;
  sudokuColumnStore[activeCol] = updatedCol;
  sudokuBoxStore[activeBox] = updatedBox;
  if (!checkValueForCompletion(activeValue, sudokuRowStore, sudokuColumnStore, sudokuBoxStore)) {
    if (!sudokuKey.includes(activeValue)) {
      const updatedKey = [...sudokuKey, activeValue];
      setSudokuKey(updatedKey);
    }
  }
};

export const resetBoardState = (
  setSudokuKey,
  setActiveRow,
  setActiveCol,
  setActiveBox,
  setActiveValue,
) => {
  setSudokuKey([1,2,3,4,5,6,7,8,9]);
  setActiveRow(0);
  setActiveCol(0);
  setActiveBox(0);
  setActiveValue('');
};

// export const isBoardComplete = (board) => {
//   let loop = false;
//   let code = 0;
//   board.some(row => {
//     row.some(square => {
//       if (square.error) {
//         code = 1;
//         loop = true;
//         return true;
//       } else if (typeof square.number === 'string') {
//         code = 2;
//         loop = true;
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (loop) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return code;
// };

export const initializeSudokuStore = (
  setSudokuRowStore,
  setSudokuColumnStore,
  setSudokuBoxStore,
  originalBoard,
) => {
  const sudokuRowStore = [[], [], [], [], [], [], [], [], []];
  const sudokuColumnStore = [[], [], [], [], [], [], [], [], []];
  const sudokuBoxStore = [[], [], [], [], [], [], [], [], []];
  originalBoard.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      if (typeof value === 'number') {

        const boxIndex = calculateBox(rowIndex, columnIndex);
        if(!sudokuBoxStore[boxIndex].includes(value)) {
          sudokuBoxStore[boxIndex].push(value);
        }

        if (!sudokuRowStore[rowIndex].includes(value)) {
          sudokuRowStore[rowIndex].push(value);
        }
        if (!sudokuColumnStore[columnIndex].includes(value)) {
          sudokuColumnStore[columnIndex].push(value);
        }
      }
    });
  });
  setSudokuRowStore(sudokuRowStore);
  setSudokuColumnStore(sudokuColumnStore);
  setSudokuBoxStore(sudokuBoxStore);
};

export const isKeyStrokeValid = (currentKey, newKey) => {
  const sudokuRegex = /^[1-9]$/;
  if (!sudokuRegex.test(newKey)) {
    return false;
  }
  if (currentKey === newKey) {
    return false;
  }
  return true;
};

export const calculateBox = (row, col) => {
  if (row < 3) {
    if (col < 3) {
      return 0;
    } else if (col < 6) {
      return 1;
    } else {
      return 2;
    }
  } else if (row >= 3 && row < 6) {
    if (col < 3) {
      return 3;
    } else if (col < 6) {
      return 4;
    } else {
      return 5;
    }
  } else if (row >=6 && row < 9) {
    if (col < 3) {
      return 6;
    } else if (col < 6) {
      return 7;
    } else {
      return 8;
    }
  }
};
