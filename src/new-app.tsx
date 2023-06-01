import { AppShell, Global, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppFooter, AppHeader } from './components';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    white: [
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
    ],
    black: [
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
    ],
    purpleGlow: [
      '#8C57FF',
      '#8C57FF',
      '#8C57FF',
      '#8C57FF',
      '#644CFF',
      '#8C57FF',
      '#8C57FF',
      '#8C57FF',
      '#8C57FF',
      '#8C57FF',
    ],
    teal: [
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
      '#00BFA5',
    ],
    rose: [
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
      '#EE4186',
    ],
    saffron: [
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
    ],
    sky: [
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
      '#0091EB',
    ],
    dark: [
      '#393E46',
      '#0C0D0E',
      '#393E46',
      '#202328',
      '#393E46',
      '#393E46',
      '#393E46',
      '#393E46',
      '#393E46',
      '#393E46',
    ],
    gray: [
      '#808080',
      '#808080',
      '#808080',
      '#808080',
      '#808080',
      '#808080',
      '#808080',
      '#808080',
      '#808080',
      '#808080',
    ],
  },
  primaryColor: 'purpleGlow',
  fontFamily: 'Open Sans, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Open Sans' },

  globalStyles: (theme) => ({
    '*': {
      // outline: '1px solid red',
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
    },
    html: {
      fontSize: '16px',
    },
    ul: {
      listStyle: 'none',
    },
  }),

  components: {
    Container: {
      defaultProps: {
        sizes: {
          md: 1440,
        },
        px: {
          md: 150,
        },
      },
    },
  },
};

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'OpenSans-700',
            src: `url('/fonts/OpenSans-Bold.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-700-Italic',
            src: `url('/fonts/OpenSans-BoldItalic.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-800',
            src: `url('/fonts/OpenSans-ExtraBold.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-400-Italic',
            src: `url('/fonts/OpenSans-Italic.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-300',
            src: `url('/fonts/OpenSans-Light.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-300-Italic',
            src: `url('/fonts/OpenSans-LightItalic.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-500',
            src: `url('/fonts/OpenSans-Medium.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-500-Italic',
            src: `url('/fonts/OpenSans-MediumItalic.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-400',
            src: `url('/fonts/OpenSans-Regular.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-600',
            src: `url('/fonts/OpenSans-SemiBold.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'OpenSans-600-Italic',
            src: `url('/fonts/OpenSans-SemiBoldItalic.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-900',
            src: `url('/fonts/Outfit-Black.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-700',
            src: `url('/fonts/Outfit-Bold.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-800',
            src: `url('/fonts/Outfit-ExtraBold.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-200',
            src: `url('/fonts/Outfit-ExtraLight.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-300',
            src: `url('/fonts/Outfit-Light.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-500',
            src: `url('/fonts/Outfit-Medium.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-400',
            src: `url('/fonts/Outfit-Regular.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-600',
            src: `url('/fonts/Outfit-SemiBold.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Outfit-100',
            src: `url('/fonts/Outfit-Thin.ttf') format("truetype")`,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
};

export const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <CustomFonts />
      <AppShell header={<AppHeader />} footer={<AppFooter />}>
        <Router>
          <Routes></Routes>
        </Router>
      </AppShell>
    </MantineProvider>
  );
};
