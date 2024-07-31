import { Box, Container, Flex, Image, MediaQuery, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: "Outfit",
    fontSize: 72,
    fontWeight: 600,
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },

  },
  subHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 24,
      lineHeight: '2rem',
    },
  },
  policyTitle: {
    fontFamily: "Outfit",
    fontSize: 30,
    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[0],
    fontWeight: 500,
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: 18,

    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[1],
    fontWeight: 700,
  },
  policycontent: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: theme.colors.white[2],
    fontWeight: 400,
    textAlign: 'justify',
  },
  item: {
    maxWidth: 302,
    minHeight: 305
  },

}));

export const WAAP = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);


  return (
    <Box

    >
      <Container>
        <Text mt={55} ff="Outfit" fw={400} size={18} color="white.0" ta="left">
          <span >Web3 </span>
          <span style={{ color: theme.colors.purpleGlow[0] }}>AI </span>
          <span >Agent Protocol</span>
        </Text>

        <Text style={{ textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
          WAAP
        </Text>

        <Text ff="Open Sans" fw={400} size='0.875rem' color="white.2" mt={30}>
          1chain’s Web3 AI Agent Protocol (WAAP) is designed to embed AI assistants into dApps, enabling users to perform complex blockchain tasks through simple chat commands. These AI assistants use Large Language Models (LLMs) to create specialized AI models that can communicate with crypto infrastructures, protocols, and apps to execute tasks easily, securely, and efficiently for new users. These specialized models, known as Large Action Models (LAMs), revolutionize the user experience in the crypto space, making it incredibly straightforward and accessible, thus driving mass crypto adoption.
        </Text>
        <Box mt={100}>
          <Text ff="Outfit" fw={500} size={40} color={theme.colors.purpleGlow[0]} mt={-10} align='center'>
            Core Components
          </Text>
          <Box pt={15}>
            <Text ml={4} className={classes.policySubTitle}>
              1. In-app AI Assistants
            </Text>
            <Text className={classes.policycontent}>
              AI Assistants are customizable agents embedded within dApps, designed to assist users with fundamental tasks such as wallet creation, fiat-on/off-ramp, KYC, swapping, transfer, and more.
            </Text>
          </Box>
          <Box pt={15}>
            <Text ml={4} className={classes.policySubTitle}>
              2. Large Action Models (LAMs)
            </Text>
            <Text className={classes.policycontent}>
              LAMs are advanced AI models trained, using an aggregation of LLMs, to execute blockchain tasks, ensuring convenience, accuracy, and security.
            </Text>
          </Box>
          <Box pt={15}>
            <Text ml={4} className={classes.policySubTitle}>
              3. Cross-Blockchain Interoperability
            </Text>
            <Text className={classes.policycontent}>
              The protocol supports interoperability across multiple blockchains, focusing on EVM L1s and L2s, and BTC layers, allowing seamless interactions across the biggest and most liquid ecosystems.
            </Text>
          </Box>
        </Box>


        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Image src="images/one-chainai/artchitecture.png" maw={945} mt={100} mr='auto' ml='auto' mb={133} width='100%' fit="contain" />
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Image maw='80%' src="images/one-chainai/artchitecture_mobile.png" mt={100} mr='auto' ml='auto' mb={133} fit="contain" />
        </MediaQuery>

        <Box mt={100}>
          <Text ff="Outfit" fw={500} size={40} color={theme.colors.purpleGlow[0]} mt={-10} align='center'>
            Fundamental Tasks
          </Text>
          <Flex wrap="wrap" gap={{ sm: 20, base: 40 }} justify='center' mt={57}>



            <Box className={classes.item}>
              <Image src='images/one-chainai/fundamental-tasks/1.png' height={100} fit='contain' />

              <Text mt={20} color='#FFE580' ff="Outfit" fw={500} size={30} ta="center" >
                Wallet Creation
              </Text>
              <Text color={theme.colors.white[2]} mt={6} ff="Open Sans" fw={400} size={16} ta="center">
                AI Assistants guide users through the process of creating and managing different types of crypto wallets across different blockchains.
              </Text>
            </Box>



            <Box className={classes.item}>
              <Image src='images/one-chainai/fundamental-tasks/2.png' height={100} fit='contain' />

              <Text mt={20} color='#FFE580' ff="Outfit" fw={500} size={30} ta="center" >
                <p>On-ramp and </p>
                <p>Off-ramp Solutions</p>

              </Text>
              <Text color={theme.colors.white[2]} mt={6} ff="Open Sans" fw={400} size={16} ta="center">
                The protocol facilitates the conversion between fiat and crypto, simplifying the onboarding process for new users including fast and simple KYCs.
              </Text>
            </Box>



            <Box className={classes.item}>
              <Image src='images/one-chainai/fundamental-tasks/3.png' height={100} fit='contain' />

              <Text mt={20} color='#FFE580' ff="Outfit" fw={500} size={30} ta="center" >
                Liquidity Management
              </Text>
              <Text color={theme.colors.white[2]} mt={6} ff="Open Sans" fw={400} size={16} ta="center">
                AI Assistants help users access liquidity across centralized and decentralized exchanges; assisting users to easily swap, sell, and buy thousands of different cryptocurrencies securely and with the best rates.
              </Text>
            </Box>

          </Flex>
        </Box>


      </Container>
    </Box>
  );
};
