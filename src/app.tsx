import { Space } from '@mantine/core';
import IntroductionSection from '~/sections/introduction';
import Layout from '~/layouts/layout';
import ChatGMSection from '~/sections/chatgm';
import PayGMSection from '~/sections/paygm';

import { ThemeProvider } from './theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <IntroductionSection />
        <Space h={100} />
        <ChatGMSection />
        <Space h={100} />
        <PayGMSection />
      </Layout>
    </ThemeProvider>
  );
}
