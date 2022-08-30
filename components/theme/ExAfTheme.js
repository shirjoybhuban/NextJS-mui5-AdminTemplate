import { alpha, createTheme } from '@mui/material/styles';
import '@fontsource/poppins';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#3658C7',
      light: 'rgba(25, 107, 8, 0.1)',
    },
    secondary: {
      main: '#3658C7',
    },
    text: {
      main: '#191919',
      light: '#8A9099',
    },
    bg: {
      body: '#f8f8f8',
    },
    error: {
      main: '#C11616',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    p1: {
      fontSize: '14px',
    },
  },
  // shape: {
  //   borderRadius: 14,
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          textTransform: 'none',
          fontSize: ownerState.size == 'small' ? '14px' : '16px',
          paddingLeft: 25,
          paddingRight: 25,
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
  },
};

export const exafTheme = createTheme(themeOptions);

// props: {
//   MuiButton: {
//     size: 'small',
//   },
//   MuiButtonGroup: {
//     size: 'small',
//   },
//   MuiCheckbox: {
//     size: 'small',
//   },
//   MuiFab: {
//     size: 'small',
//   },
//   MuiFormControl: {
//     margin: 'dense',
//     size: 'small',
//   },
//   MuiFormHelperText: {
//     margin: 'dense',
//   },
//   MuiIconButton: {
//     size: 'small',
//   },
//   MuiInputBase: {
//     margin: 'dense',
//   },
//   MuiInputLabel: {
//     margin: 'dense',
//   },
//   MuiRadio: {
//     size: 'small',
//   },
//   MuiSwitch: {
//     size: 'small',
//   },
//   MuiTextField: {
//     margin: 'dense',
//     size: 'small',
//   },
// },
