/* eslint-disable react/no-unescaped-entities */
import { Container, Space, Stack, Text, Title, createStyles, Box } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: "Outfit",
    fontSize: 72,
    fontWeight: 600,
    // lineHeight: '5rem',
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },

  },
  subHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
  policyTitle: {
    fontFamily: "Outfit",
    fontSize: '1.875rem',
    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[0],
    fontWeight: 500,
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: '1.125rem',

    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[1],
    fontWeight: 700,
  },
  policycontent: {
    fontFamily: "Open Sans",
    fontSize: '1rem',
    color: theme.colors.white[2],
    fontWeight: 400,
    textAlign: 'justify',
    lineHeight: '1.362rem',
  },
}));

const Mission = () => {
  const { classes, theme } = useStyles();

  return (
    <Box
    >
      <Box style={{ position: 'absolute', height: 760, width: '100%', background: theme.fn.linearGradient(0, '#6016D900', '#000000FF'), zIndex: -1 }}>

      </Box>
      <Space h={140} />
      <Container>
        <Stack px="lg">
          <Title ta="center" color="white.0" className={classes.heading}>Mission of 1chain.AI</Title>
          <Box>
            {/* 1 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                1. Problems
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.1. Web3 Onboarding Complexity:
                </Text>
                <Text className={classes.policycontent}>
                  The steep learning curve for new users hinders mainstream adoption and lowers retention rates for new crypto services. Users often find it challenging to navigate and understand the intricacies of blockchain technology.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.2. Irreversible Mistakes:
                </Text>
                <Text className={classes.policycontent}>
                  New crypto users fear making irreversible errors on the blockchain, often due to a lack of knowledge and poor UI/UX. These mistakes can lead to loss of assets and discourage users from engaging with blockchain technologies.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.3. Technical Complexity of AI:
                </Text>
                <Text className={classes.policycontent}>
                  Embedding AI into crypto-related dApps poses significant challenges due to complexity and required expertise, limiting adoption. AI hallucinations are a major issue, especially in crypto, where blockchain's irreversible nature makes AI-created mistakes more severe.
                </Text>
              </Box>
            </Box>

            {/* 2 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                2. Mission
              </Text>
              <Text pt={15} className={classes.policycontent}>
                1chain.AI’s mission is to revolutionize web3 mass adoption by integrating advanced AI into decentralized applications, making blockchain technology accessible, user-friendly, and secure for mainstream consumers and developers alike. Envisioning a future where AI-powered interactions and transactions in the crypto space are the norm, 1chain.AI is dedicated to empowering a global decentralized ecosystem where AI and blockchain converge to drive innovation and trust.
              </Text>
            </Box>

            {/* 3 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                3. Timing
              </Text>
              <Text pt={15} className={classes.policycontent}>
                AI development in the US is rapidly progressing towards Artificial General Intelligence (AGI), but regulatory risks in both the US and China hinder the integration of AI with Web3. Operating outside these regions, 1chain.AI aims to create a unique competitive advantage in both Web2 and Web3 markets by ultimately gaining Web3 AGI. Strategically positioning itself as the AI infrastructure for Web3, 1chain.AI aim to integrate multiple major Large Language Models (LLMs) across major Layer 1s, Layer 2s, dApps and other infrastructures.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Space h={140} />
    </Box>
  );
};

export default Mission;
