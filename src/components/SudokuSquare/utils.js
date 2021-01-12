export const getSquareStyle = (board, row, col, activeValue, activeRow, activeCol) => {
  const resObj = {
    fontWeight: '200'
  };
  if (typeof activeValue === 'number' && board[row][col].number === activeValue) {
    resObj.fontWeight = '600';
    if (activeRow !== row && activeCol !== col) {
      resObj.background = '#F2F2F2';
    }
  }
  if (board[row][col].error) {
    resObj.color = '#FF4040';
  }
  return resObj;
};