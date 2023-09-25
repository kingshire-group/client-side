import { createTheme } from '@mui/material';
import { appColors } from 'utils/colors';
import { HexColorOpacity } from 'utils/constants';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ghost: true;
    search: true;
    cart: true;
  }
}

export let theme = createTheme({
  typography: {
    fontFamily: '"Poppins"',
    h1: {
      fontSize: '25px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 700,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '14px',
      fontFamily: 'Mullish',
      fontWeight: 700,
    },
    h5: {
      fontSize: '11px',
      fontWeight: 700,
    },
    h6: { fontSize: '24px', fontWeight: 600 },
    subtitle1: {
      fontFamily: 'Jost',
      fontSize: '15px',
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: 'Jost',
      fontSize: '20px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '15px',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Jost',
      weight: 400,
      fontSize: '8px',
    },
    button: {
      fontFamily: 'Jost',
      fontSize: '14px',
      fontWeight: 600,
    },
  },
});

theme = createTheme({
  palette: {
    primary: {
      main: appColors.primary_main,
      light: appColors.primary_light,
      dark: appColors.primary_dark,
      contrastText: appColors.primary_contrastText,
    },
    secondary: {
      main: appColors.secondary_main,
      light: appColors.secondary_light,
      dark: appColors.secondary_dark,
      contrastText: appColors.secondary_contrastText,
    },
    background: {
      default: appColors.background_default,
      paper: appColors.background_paper,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: appColors.red,
          color: appColors.white,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: theme.palette.background.paper,
          color: '#083844',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: theme.palette.background.default,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '13px',
          color: '#444040',
          display: 'flex',
          gap: '12px',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0)',
        },
      },
    },
    MuiListItem: {
      // Override List Item Select
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: `${theme.palette.primary.light}${HexColorOpacity.TWENTY}`,
            borderRight: `solid 10px ${theme.palette.primary.main}`,
            borderRadius: '0px 10px 10px 0px',
            height: '45px',
            '&:hover': {
              borderRadius: '0px 12px 12px 0px',
              backgroundColor: `${theme.palette.primary.main}${HexColorOpacity.FIFTY}`,
            },
          },
        },
        button: {
          borderRadius: '0px 50px 50px 0px',
          '&:hover': {
            backgroundColor: `${theme.palette.primary.main}${HexColorOpacity.FIVE}`,
          },
        },
      },
    },

    MuiButton: {
      // Adds custom 'cart' Button Variant
      variants: [
        {
          props: { variant: 'cart' },
          style: {
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            borderBottomRightRadius: '20px',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
            margin: 0,
            padding: 2,
            paddingLeft: 8,
            paddingRight: 5,
            fontSize: '70%',
            width: '100%',
            '&:after': {
              content: '"\u279D"',
              paddingLeft: '5px',
            },
          },
        },
      ],
    },
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          color: '#000',
          backgroundColor: '#fff',
        },
      },
    },
    MUIDataTableBodyRow: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  },
});
