import { Space } from '@mantine/core';
import IntroductionSection from '~/sections/introduction';
import Layout from '~/layouts/layout';
import ChatGMSection from '~/sections/chatgm';
import PayGMSection from '~/sections/paygm';
import MobileFocused from '~/sections/mobile-focused';
import PotentialB2B from '~/sections/potential-b2b';

import { ThemeProvider } from './theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Space h={40} />
        <IntroductionSection />
        <Space h={100} />
        <ChatGMSection />
        <Space h={100} />
        <PayGMSection />
        <Space h={100} />
        <MobileFocused />
        <Space h={100} />
        <PotentialB2B />
      </Layout>
    </ThemeProvider>
  );
}
