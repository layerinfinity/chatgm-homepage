import { AspectRatio, Text, Title } from '@mantine/core';
import SubLayout from '~/layouts/sub-layout';

const IntroductionSection = () => {
  return (
    <SubLayout>
      <Title size="5em" align="center">
        Chat, Pay, Crypto
      </Title>
      <Text size="3em" weight="bold" align="center" mb="xl">
        Web3{' '}
        <Text component="span" color="brand.5">
          All in One
        </Text>{' '}
        App
      </Text>

      <AspectRatio ratio={16 / 9} mb="lg">
        <iframe
          title="ChatGM"
          src="https://drive.google.com/file/d/1nOEo3vGc8388ggfVyhUwus_tEpDHbRtv/preview"
          allowFullScreen
          style={{
            border: 'none',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>

      <Title order={3} color="lightGreen.4" align="center">
        Onboarding BILLIONS of first-time crypto users!
      </Title>
    </SubLayout>
  );
};

export default IntroductionSection;
