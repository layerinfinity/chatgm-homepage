import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';

export const Phase2 = () => {
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        background: "url('images/background/background-1.png')",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3" ta="right">
          PHASE 2
        </Text>

        <Text ff="Outfit" fw={600} size={72} color="dark.4" lh={'5rem'} ta="right">
          AI Revolution
        </Text>

        <Grid gutter={30} py={50}>
          <Grid.Col span={6}>
            <Flex
              h={300}
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
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex
              h={300}
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
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex
              h={300}
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
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex
              h={300}
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
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex
              h={300}
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
          </Grid.Col>

          <Grid.Col span={6}>
            <Flex
              h={300}
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
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
