import { Space } from '@mantine/core';
import IntroductionSection from '~/sections/introduction';
import Layout from '~/layouts/layout';
import ChatGMSection from '~/sections/chatgm';
import PayGMSection from '~/sections/paygm';
import MobileFocused from '~/sections/mobile-focused';

import { CustomFonts, ThemeProvider } from './theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <CustomFonts />
      <Layout>
        <Space h={130} />
        <IntroductionSection />
        <Space h={100} />
        <ChatGMSection />
        <Space h={100} />
        <PayGMSection />
        <Space h={100} />
        <MobileFocused />
      </Layout>
    </ThemeProvider>
  );
}
