import { Drawer, Space } from '@mantine/core';
import { useScrollIntoView, useDisclosure } from '@mantine/hooks';

import IntroductionSection from '~/sections/introduction';
import Layout from '~/layouts/layout';
import ChatGMSection from '~/sections/chatgm';
import PayGMSection from '~/sections/paygm';
import MobileFocused from '~/sections/mobile-focused';
import PotentialB2B from '~/sections/potential-b2b';

import AppHeader from '~/components/header';
import AppFooter from '~/components/footer';

const HomePage = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const [opened, { close }] = useDisclosure(false);

  return (
    <Layout>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>
      <AppHeader />
      <Space h={140} />
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
  );
};

export default HomePage;
