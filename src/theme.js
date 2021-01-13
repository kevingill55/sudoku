import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const sudokuTheme = deepMerge(grommet, {
  global: {
    colors: {
      myColor: '#dcc2ee'
    },
    font: {
      color: 'black',
      family: 'Nunito',
    },
  },
  button: {
    size: {
      small: {
        border: {
          radius: '0px',
        },
      },
    },
    border: {
      radius: '0px'
    }
  }
});