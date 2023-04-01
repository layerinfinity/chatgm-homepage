import { Box, Button, Center, Image, Text, Title } from '@mantine/core';
import useCommonStyles from '~/sections/_common';

const PotentialB2B = () => {
  const { classes: commonClasses } = useCommonStyles();

  return (
    <Box>
      <Title order={1} align="center" mb="md" className={commonClasses.headlineTitle}>
        Potential B2B Opportunities
      </Title>

      <Text align="center" className={commonClasses.headlineSubtitle}>
        Web3 Payment for E-Commerce/ In-App Purchase / POS (QR Code)
        <br />
        AI-generated Digital Assets for Brands
        <br />
        AI-powered Crypto Lending for SMEs
        <br />
        AI-powered Analytics of Web3 Consumer Insights
        <br />
        Launchpad for Web3 Mobile Games & DApps
      </Text>

      <Center>
        <Button
          color="brand.5"
          styles={{
            root: {
              borderRadius: '3rem',
              width: '12rem',
              height: '4rem',
            },
          }}
        >
          <Text size="18px">Contact Us</Text>
        </Button>
      </Center>

      <Image src="/images/last-wave.svg" />
    </Box>
  );
};

export default PotentialB2B;
