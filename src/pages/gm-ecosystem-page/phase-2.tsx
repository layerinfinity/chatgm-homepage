import { Box, Container, Flex, Image, Text, UnstyledButton, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  phaseName: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 48,
      lineHeight: '3rem',
    },
  },
}));

export const Phase2 = () => {
  const { classes, theme } = useStyles();

  return (
    <Box py={20}>
      <Image src="images/background/background-1.png" pos="absolute" style={{ zIndex: -1 }} />
      <Container>
        <Box px={{ base: 0, md: 90 }}>
          <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3" ta="right">
            PHASE 2
          </Text>

          <Text
            ff="Outfit"
            fw={600}
            size={72}
            color="dark.4"
            lh={'5rem'}
            ta="right"
            className={classes.phaseName}
          >
            AI Revolution
          </Text>

          <Flex wrap="wrap" align="stretch" justify="center" gap={30} py={40}>
            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.purpleGlow[2] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={48.5}>
                Generate Asset with AI
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Unleash your creativity with a tap! Generate personalized avatars and backgrounds
                for a unique chat experience that truly reflects your personality. Stand out and
                express yourself effortlessly.
              </Text>

              <UnstyledButton>
                <Text ff="Open Sans" fw={700} size={14} ta="center" underline>
                  Try it now!
                </Text>
              </UnstyledButton>
            </Flex>

            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              justify="space-between"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.rose[2] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={29.5}>
                TrueSight<sup>TM</sup>
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={29.5}>
                Unlock the potential of TrueSight technology! Our platform analyzes on-chain data,
                trading volumes, price trendlines, and market news to provide comprehensive
                information about tokens in your portfolio. Remember, the data is for reference only
                and not financial advice. Explore confidently with our powerful insights.
              </Text>

              <UnstyledButton>
                <Text ff="Open Sans" fw={700} size={14} ta="center" underline>
                  Explore now
                </Text>
              </UnstyledButton>
            </Flex>

            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.teal[3] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={48.5}>
                Natural Language Program
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Your personalized AI assistant awaits! Based on your transactions, portfolio, and
                activities, our advanced technology delivers tailored insights and recommendations
                just for you via conversation. Experience the power of personalized assistance
                today!
              </Text>
            </Flex>

            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.saffron[4] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={48.5}>
                Risk Management
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Empower yourself with real-time and up-to-date information! When you assign projects
                or tokens, our platform provides comprehensive details related to them, enabling you
                to make informed decisions and manage risks effectively. Stay on top of the game and
                invest with confidence.
              </Text>
            </Flex>

            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.sky[3] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={48.5}>
                Fraud Detection
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Rest assured with our AI-powered fraud detection system! Utilizing advanced
                technology, we proactively identify and remove fraudulent or scam accounts, ensuring
                the utmost security and safety for all our users. Trust in our platform's robust
                measures to create a secure environment for your peace of mind.
              </Text>
            </Flex>

            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.teal[3] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={48.5}>
                Autonomous System
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Achieve your profit goals effortlessly with our autonomous system! Based on your
                customized profit and loss management strategy, our platform autonomously swaps and
                holds tokens to help you reach your targeted profit. Rest assured, your funds are
                secure on our platform, allowing you to trade with confidence. Experience seamless
                and automated profit optimization today!
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
