import { AppShell, Global, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppFooter, AppHeader } from './components';
import { FortlessPage, GmEcosystemPage, HomePage } from './pages';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    white: [
      '#FFFFFF',
      '#F2F2F2',
      '#FFFFFF',
      '#FFFFFF',
      '#B3B3B3',
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
      '#B894F5',
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
      '#32DCB4',
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
      '#FF80AB',
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
      '#00C4FF',
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

export const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <AppShell
        header={<AppHeader />}
        footer={<AppFooter />}
        styles={(theme) => ({
          main: {
            padding: 0,
          },
        })}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gm-ecosystem" element={<GmEcosystemPage />} />
            <Route path="/fortless" element={<FortlessPage />} />
          </Routes>
        </Router>
      </AppShell>
    </MantineProvider>
  );
};
