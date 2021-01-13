export const getSquareStyle = (board, row, col, activeValue, setSquareStyle) => {
  const resObj = {
    fontWeight: '300',
    fontSize: '22px',
  };
  if (board[row][col].fixed) {
    resObj.background = '#F2F2F2';
  }
  if (typeof activeValue === 'number' && board[row][col].number === activeValue) {
    resObj.fontWeight = '700';
  }
  if (board[row][col].error) {
    resObj.color = '#FF4040';
  }
  setSquareStyle(resObj);
};
