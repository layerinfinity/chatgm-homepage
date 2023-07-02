import { Box, Container, Flex, Image, Text, createStyles } from '@mantine/core';

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
            lh="5rem"
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
                @gm.Al
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Utilizing OpenAl, is your in-app personal Al assistant in the world of crypto. By
                analyzing your transaction history, portfolio, external market patterns & other
                activities, @gm.Al generates personalized insights & recommendations that are
                delivered through an intuitive messaging interface within ChatGM.
              </Text>

              {/* <UnstyledButton>
                <Text ff="Open Sans" fw={700} size={14} ta="center" underline>
                  Try it now!
                </Text>
              </UnstyledButton> */}
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
                Fraued Detection
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={29.5}>
                As it evolves with more internal, public, & market pattern data, @gm.Al will further
                develop an advanced fraud detection system, proactively identifying potential scam
                activities & fraudulent accounts, thus enhancing security & trust within the ChatGM
                ecosystem.
              </Text>

              {/* <UnstyledButton>
                <Text ff="Open Sans" fw={700} size={14} ta="center" underline>
                  Explore now
                </Text>
              </UnstyledButton> */}
            </Flex>

            <Flex
              w={{ base: '100%', sm: 'calc(50% - 1.875rem)' }}
              direction="column"
              px={18}
              py={35}
              style={{ borderRadius: 12, backgroundColor: theme.colors.teal[3] }}
            >
              <Text ff="Outfit" fw={500} size={30} ta="center" mb={48.5}>
                Personalized AI Trader
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                ChatGM&apos;s Personalized Al Trader simplifies profit optimization. It works by
                autonomously swapping & holding a predetermined set of tokens as per your customized
                profit & loss strategy, aiming to meet your targets within your specified risk
                tolerance. Our platform prioritizes security, enabling confident, seamless, &
                automated navigation of the crypto market.
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
                @gm.Al crunches public & historic crypto data, providing near real-time insights for
                your target projects or tokens. Make sharp decisions & manage risks effectively with
                our comprehensive & easy-to-understand information.
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
                AI-Driven insights
              </Text>

              <Text ff="Open Sans" fw={400} size={14} ta="center" mb={48.5}>
                Our Al-driven Portfolio Insights analyze on-chain data, trading volumes, price
                trendlines & market news to provide near real-time information about every token in
                your holding. This empowers you to make informed & timely investment decisions.
                Please note that the data \provided is for reference purposes only & should not be
                considered as financial advice.
              </Text>
            </Flex>

            {/* <Flex
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
            </Flex> */}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
