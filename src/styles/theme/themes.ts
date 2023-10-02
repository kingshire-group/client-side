import { CSSObject } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import 'styled-components';
import './styled.d';

const breakpoints = ['600px', '900px', '1200px', '1536px'];

export type Theme = {
  sizes: string[] | CSSObject;
  colors: {
    white: string[] | CSSObject;
    black: string[] | CSSObject;
    silver: {
      light: string;
      dark?: string;
      main?: string;
    };
    cyan: {
      light: string;
      main: string;
      dark: string;
    };
    darkGreen: string[];
    coffee: string;
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    transparentColors: {
      blue: string;
      yellow: string;
      pink: string;
      green: string;
      lightBlue: string;
    };
    accent: string[] | CSSObject;
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string | CSSObject;
      A200: string | CSSObject;
      A400: string | CSSObject;
      A700: string | CSSObject;
      A800: string | CSSObject;
    };
    blue: {
      main: string;
      dark: string;
      veryLight: string;
      veryDark: string;
    };
    gold: string[] | CSSObject;
    blueBerry: string[] | CSSObject;
    purple: string[] | CSSObject;
    warning: {
      main: string | CSSObject;
      light: string | CSSObject;
      dark: string | CSSObject;
    };
    success: {
      main: string | CSSObject;
      light: string | CSSObject;
      dark: string | CSSObject;
    };
    info: {
      main: string | CSSObject;
      light: string | CSSObject;
      dark: string | CSSObject;
    };
    error: {
      main: string | CSSObject;
      light: string | CSSObject;
      dark: string | CSSObject;
    };
    aliceBlue: string;
  };
  spaces: string[] | CSSObject;
  breakpoints: string[];
  mediaQueries: {
    xs: string | CSSObject;
    sm: string | CSSObject;
    md: string | CSSObject;
    lg: string | CSSObject;
    xl: string | CSSObject;
  };
  buttons?: any;
  fontSizes: string[] | CSSObject;
  fontWeights: number[] | CSSObject;
  lineHeights: {
    solid: number | CSSObject;
    title: number | CSSObject;
    copy: number | CSSObject;
  };
  letterSpacings: {};
  fonts: {
    poppins: string;
    jost: string;
    mulish: string;
    nunito: string;
    josefinSans: string;
    josefinSlab: string;
    montserrat: string;
  };
  borders: Array<string | number> | CSSObject;
  radii: string[] | CSSObject;
  zIndices: number[] | CSSObject;
  shadows: string[] | CSSObject;
  headings: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
};

export const theme: DefaultTheme = {
  // Breakpoints
  breakpoints,
  mediaQueries: {
    xs: `@media screen and (min-width: 0px)`,
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
  },
  // Layout (height, width, maxHeight, minHeight, minWidth, maxWidth, size, display, verticalAlign, overflow, overflowX, overflowY )
  sizes: [
    '6px',
    '10px',
    '15px',
    '20px',
    '25px',
    '30px', // 5
    '35px',
    '40px',
    '45px',
    '50px',
    '55px', // 10
    '60px',
    '65px', // 12
    '70px',
    '75px',
    '80px',
    '85px',
    '90px',
    '95px', // 18
    '100px',
    '105px',
    '110px',
    '115px',
    '120px',
    '125px',
    '130px', // 25
    '135px',
    '140px',
    '145px',
    '150px',
    '155px', // 30
    '160px',
    '165px',
    '170px',
    '175px',
    '180px', // 35
    '185px',
    '190px',
    '195px', // 38
    '200px',
    '205px', // 40
    '210px',
    '215px',
    '220px',
    '225px',
    '230px', // 45
    '235px',
    '240px',
    '245px',
    '260px',
    '265px', // 50
    '270px',
    '275px',
    '280px',
    '290px',
    '300px', // 55
    '310px',
    '320px',
    '330px',
    '340px',
    '350px', // 60
    '360px',
    '370px',
    '380px',
    '390px',
    '400px', // 65
    '410px',
    '420px',
    '430px',
    '440px',
    '450px', // 70
    '100%', // 71
    '662.47px',
    '602px',
    '486px', // 74
  ],

  // Space
  spaces: [
    // top, right, bottom, left, margin, padding, mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py
    '0px',
    '4px', // 1
    '8px', // 2
    '12px', // 3
    '16px', // 4
    '24px',
    '32px', // 6
    '45px', // 7
    '64px', // 8
    '96px', // 9
    '128px', // 10
    '192px', // 11
    '256px', // 12
    '384px', // 13
    '512px', // 14
    '640px', // 15
    '784px', // 16
  ],

  // Colors
  colors: {
    silver: {
      light: '#F3F5F7',
    },
    white: ['#ffffff'],
    cyan: {
      light: '#B5F7F7',
      main: '',
      dark: '',
    },
    coffee: '#444040',
    primary: {
      main: '#1E4AE5',
      dark: '#1538C4',
      light: '#5379EF',
    },
    secondary: {
      main: '#EE5149',
      dark: '#F1736D',
      light: '#F1736D',
    },
    error: {
      light: '#F2582E',
      main: '#D03A21',
      dark: '#AE2117',
    },

    transparentColors: {
      blue: '#F1F7FF',
      yellow: '#FFF7E3',
      pink: '#FFF2F8',
      green: '#DEFFEE',
      lightBlue: '#F3F5FE',
    },
    accent: ['#000000', '#F3F5FD', '#164753'], // black
    darkGreen: ['#083844', '#091156'],
    black: [
      '#efefef',
      '#e9e9e9',
      '#d9d9d9',
      '#7d7d7d',
      '#4d4d4d',
      '#000000',
      'rgba(0,0,0, 0.6)',
    ],
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
      A800: '#e5e5e5',
    },
    blue: {
      main: '#00B1FF',
      dark: '#1E2665',
      veryLight: '#C1D8ED',
      veryDark: '#1643E3',
    },
    gold: ['#EFAB50'],
    blueBerry: ['#605BFF', '#3848CD', '#4E65DF'],
    purple: ['#9721B5', '#AF0AFF', '#DBDFFF'],
    success: {
      main: '#3C9F1C',
      light: '#55BA27',
      dark: '#288513',
    },
    info: {
      main: '#2857C4',
      light: '#3771E5',
      dark: '#1B40A4',
    },
    warning: {
      main: '#B99400',
      light: '#D8B100',
      dark: '#9B7900',
    },
    aliceBlue: '#f6f9fe',
  },

  // Typography
  fonts: {
    poppins: 'Poppins, sans-serif',
    jost: 'Jost ,sans-serif',
    mulish: 'Mulish ,sans-serif',
    nunito: 'Nunito, sans-serif',
    josefinSans: '"Josefin Sans",sans-serif',
    josefinSlab: '"Josefin Slab", sans-serif',
    montserrat: 'Montserrat, sans-serrif',
  },
  fontSizes: [
    '8px',
    '10px',
    '12px',
    '14px',
    '15px',
    '16px',
    '18px', // 6
    '20px',
    '24px',
    '26px', // 9
    '30px',
    '35px',
  ],
  headings: {
    h1: '32px',
    h2: '24px',
    h3: '18.72px',
    h4: '16px',
    h5: '13.28px',
    h6: '12px',
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },

  // Borders
  borders: [
    0,
    '1px solid',
    '2px solid',
    '2px solid transparent',
    '4px solid',
    '8px solid',
    '10px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [
    '0',
    '5px',
    '10px',
    '15px',
    '20px',
    '25px', // 5
    '30px',
    '40px',
    '50px',
    '60px',
    '70px',
    '75px',
    '150px',
  ], // borderRadius

  // z-index
  zIndices: [1, 2, 3, -1, 99, 50, 150, 250],

  // Shadow
  shadows: [
    'rgb(0 0 0 / 13%) 4px 4px 8px', // property card mobile
    'rgb(0 0 0 / 13%) 8px 8px 8px', // property card hover
    'rgb(0 0 0 / 7%) 0px 14px 25px', // navbar
    '10px 10px 15px rgba(0, 0, 0, 0.1)', // property detail booking card, and popovers
    'rgb(0 0 0 / 13%) 5px 5px 10px', // property card desktop
    'rgb(0 0 0 / 21%) 8px 8px 8px', // property card dark hover shadow
    'rgb(0 0 0 / 10%) 0px 4px 14px', // Places autocomplete input
    '0 1px 2px 0 rgb(0 0 0 / 0.05)', // 8 sm
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // 9 normal
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // 10 md
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // 11 lg
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // 12 xl
  ],
};
