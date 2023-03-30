import IntroductionSection from '~/sections/introduction';
import Layout from '~/layouts/layout';
import { ThemeProvider } from './theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <IntroductionSection />
      </Layout>
    </ThemeProvider>
  );
}
