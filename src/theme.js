import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const sudokuTheme = deepMerge(grommet, {
  global: {
    colors: {
      myColor: '#dcc2ee'
    },
    font: {
      family: 'Yusei Magic',
    },
  },
  button: {
    border: {
      radius: '0px'
    }
  }
});