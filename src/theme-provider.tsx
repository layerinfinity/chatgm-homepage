import { MantineProvider, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    brand: [
      '#F5F5FC',
      '#CFD1F4',
      '#A5A9F5',
      '#767DFF',
      '#6269EE',
      '#555BDA',
      '#4B51C5',
      '#484DAC',
      '#4A4E92',
      '#494C7D',
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
  fontFamily: 'SF Pro Display, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
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
