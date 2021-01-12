import React, { useContext, useEffect, useState } from 'react';
import { Box, Text } from 'grommet';

import FooterButton from './FooterButton';
import FinishModal from './FinishModal';
import NewGameModal from './NewGameModal';
import { SudokuContext } from '../../context';

const SudokuFooter = () => {

  const { message, onBoardFinish, onBoardReset } = useContext(SudokuContext);

  const [finishModal, setFinishModal] = useState(false);
  const [newGameModal, setNewGameModal] = useState(false);

  useEffect(() => {
    message === 'Lookin good!' ? setFinishModal(true) : setFinishModal(false);
  }, [message]);

  return (
    <Box
      pad='medium'
      align='center'
      gap='medium'
    >
      <Box
        direction='row'
        gap='large'
      >
        <FooterButton onClick={onBoardReset} label='Reset' />
        <FooterButton onClick={() => setNewGameModal(true)} label='New Game' />
        <FooterButton onClick={onBoardFinish} label='Finish' />
      </Box>
      <Text size='small' color='status-error'>
        {message}
      </Text>
      { finishModal && <FinishModal setFinishModal={setFinishModal} /> }
      { newGameModal && <NewGameModal setNewGameModal={setNewGameModal} /> }
    </Box>
  );
};

export default SudokuFooter;
