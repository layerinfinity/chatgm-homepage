import { Drawer, Space } from '@mantine/core';
import { useScrollIntoView, useDisclosure } from '@mantine/hooks';

import IntroductionSection from '~/sections/introduction';
import Layout from '~/layouts/layout';
import ChatGMSection from '~/sections/chatgm';
import PayGMSection from '~/sections/paygm';
import MobileFocused from '~/sections/mobile-focused';
import PotentialB2B from '~/sections/potential-b2b';

import AppFooter from '~/components/footer';

import { ThemeProvider } from './theme-provider';

export default function App() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const [opened, { close }] = useDisclosure(false);

  return (
    <ThemeProvider>
      <Layout>
        <Drawer opened={opened} onClose={close} title="Authentication">
          {/* Drawer content */}
        </Drawer>
        <Space h={40} />
        <IntroductionSection onClick={scrollIntoView} />
        <Space h={100} ref={targetRef} />
        <ChatGMSection />
        <Space h={100} />
        <PayGMSection />
        <Space h={100} />
        <MobileFocused />
        <Space h={100} />
        <PotentialB2B />

        <AppFooter />
      </Layout>
    </ThemeProvider>
  );
}
