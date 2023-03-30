import { Text, Title } from '@mantine/core';
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
    </SubLayout>
  );
};

export default IntroductionSection;
