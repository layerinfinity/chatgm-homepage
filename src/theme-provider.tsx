import { Global, MantineProvider, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    brand: [
      '#F9F7FC',
      '#DED5F1',
      '#C3AFED',
      '#A886F2',
      '#8C56FF',
      '#7C48EB',
      '#6F3FD5',
      '#653DBC',
      '#5F429E',
      '#594486',
    ],
    lightGreen: [
      '#EBF0ED',
      '#D0E0D7',
      '#B6D3C3',
      '#9BCAB0',
      '#7EC69F',
      '#5FC88F',
      '#55B581',
      '#529D74',
      '#518669',
      '#4D745F',
    ],
  },
  primaryColor: 'brand',
  fontFamily: 'SF Pro Display',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'SF Pro Display' },
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'SF Pro Display',
            src: "url('/fonts/SF-Pro-Display-Light.otf') format('opentype')",
            fontWeight: 200,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'SF Pro Display',
            src: "url('/fonts/SF-Pro-Display-Regular.otf') format('opentype')",
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'SF Pro Display',
            src: "url('/fonts/SF-Pro-Display-Semibold.otf') format('opentype')",
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'SF Pro Display',
            src: "url('/fonts/SF-Pro-Display-Heavy.otf') format('opentype')",
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
