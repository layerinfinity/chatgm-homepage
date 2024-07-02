import { AppShell, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppFooter, AppHeader } from './components';
import { Error500Page, FortressPage, GmEcosystemPage, HomePage, TermsOfUsePage } from './pages';
import PPPage from './pages/privacy-policy';
import { ComingSon } from './pages/comingsoon';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    white: [
      '#FFFFFF',
      '#F2F2F2',
      '#F5F5F5',
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
      '#D4BFFA',
      '#B894F5',
      '#8C57FF',
      '#644CFF',
      '#5C5AB2',
      '#322966',
      '#411B79',
      '#D4BFFA',
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
      '#FFE580',
      '#FFC400',
      '#FFD600',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
      '#FFC400',
    ],
    sky: [
      '#0091EB',
      '#B2E5FC',
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


  globalStyles: (t) => ({
    '*': {
      // outline: '1px solid red',
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
    },
    html: {
      fontSize: '16px',
      overflowX: 'hidden',
    },
    body: {
      background: t.fn.linearGradient(90, '#0D042F', '#301C61'),
    },
    ul: {
      listStyle: 'none',
    },
  }),

  components: {
    Container: {
      defaultProps: {
        sizes: {
          md: 1000,
        },
        // px: {
        //   md: 150,
        // },
      },
    },
  },
};

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Notifications position="bottom-right" />
        <Router>
          <AppShell
            header={<AppHeader />}
            footer={<AppFooter />}
            styles={() => ({
              root: {
                padding: 0,
                margin: 0
              },
              main: {
                padding: 0,
                margin: 0
              },
              body: {
                padding: 0,
                margin: 0
              }
            })}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gm-ecosystem" element={<GmEcosystemPage />} />
              <Route path="/fortress" element={<FortressPage />} />
              <Route path="/tos" element={<TermsOfUsePage />} />
              <Route path="/privacy-policy" element={<PPPage />} />
              <Route path="/whhite-paper" element={<ComingSon />} />
              <Route path="/about-us" element={<ComingSon />} />
              <Route path="/500" element={<Error500Page />} />
            </Routes>
          </AppShell>
        </Router>
      </MantineProvider>
    </QueryClientProvider>
  );
};
