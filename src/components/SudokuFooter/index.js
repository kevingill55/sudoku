import React, { useContext, useEffect, useState } from 'react';
import { Box, Text } from 'grommet';

import FooterButton from './FooterButton';
import FinishModal from './FinishModal';
import NewGameModal from '../NewGameModal';
import { SudokuContext } from '../../context';

const SudokuFooter = () => {

  const { sudokuKey, onBoardReset } = useContext(SudokuContext);

  const [finishModal, setFinishModal] = useState(false);
  const [newGameModal, setNewGameModal] = useState(true);

  useEffect(() => {
    sudokuKey.length === 0 ? setFinishModal(true) : setFinishModal(false);
  }, [sudokuKey]);

  return (
    <Box pad={{ vertical: 'large' }}>
      <Box
        direction='row'
        gap='large'
      >
        <FooterButton onClick={onBoardReset} label='Reset' />
        <FooterButton onClick={() => setNewGameModal(true)} label='New Game' />
      </Box>
      { finishModal && (
        <FinishModal
          setFinishModal={setFinishModal}
          setNewGameModal={setNewGameModal}
        />
       )}
      { newGameModal && <NewGameModal setNewGameModal={setNewGameModal} /> }
    </Box>
  );
};

export default SudokuFooter;
