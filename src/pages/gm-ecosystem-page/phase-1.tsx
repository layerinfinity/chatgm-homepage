import { Box, Container, Flex, Image, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  phaseName: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 48,
      lineHeight: '3rem',
    },
  },
  phaseTitle: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 32,
      lineHeight: '2.5rem',
    },
  },
}));

export const Phase1 = () => {
  const { classes } = useStyles();

  return (
    <Box py={20} >
      <Container>
        <Box px={{ base: 0, md: 90 }}>
          <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3">
            PHASE 1
          </Text>

          <Text
            ff="Outfit"
            fw={600}
            size={72}
            color="dark.4"
            lh="5rem"
            className={classes.phaseName}
          >
            Product
            <br />
            Development
          </Text>

          <Flex direction="column" gap={71} py={51}>
            <Flex direction={{ base: 'column', sm: 'row' }} gap={30} justify="center">
              <Flex w="100%">
                <Image src="images/decor/chat-and-send-crypto-easily.png" />
              </Flex>
              <Flex direction="column" w="100%" justify="center" gap={10}>
                <Text ff="Open Sans" fw={400} color="dark.3" ta="right">
                  ChatGM is the 1st End-to-End Encrypted & Fully Anonymous Messenger for Web3. We
                  are a cutting-edge platform that seamlessly integrates end-to-end encrypted chat
                  with the Matrix protocol. With the added functionality of a crypto wallet, ChatGM
                  empowers users worldwide to effortlessly send global payments directly within
                  their chat conversations.
                </Text>
                <Text
                  ff="Outfit"
                  fw={500}
                  size={40}
                  color="dark.4"
                  ta="right"
                  lh="3.25rem"
                  className={classes.phaseTitle}
                >
                  <Text component="span" color="purpleGlow.3" inherit>
                    CHAT & SEND
                  </Text>
                  <br /> Crypto easily
                </Text>
              </Flex>
            </Flex>

            <Flex direction={{ base: 'column-reverse', sm: 'row' }} gap={30} justify="center">
              <Flex direction="column" w="100%" justify="center" gap={10}>
                <Text
                  ff="Outfit"
                  fw={500}
                  size={40}
                  color="dark.4"
                  lh="3.25rem"
                  className={classes.phaseTitle}
                >
                  <Text component="span" color="purpleGlow.3" inherit>
                    PEER-TO-PEER
                  </Text>
                  <br /> Borderless
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  ChatGM is a cutting-edge platform that seamlessly integrates end-to-end encrypted
                  chat with the Matrix protocol. With the added functionality of a crypto wallet,
                  ChatGM empowers users worldwide to effortlessly send global payments directly
                  within their chat conversations.
                </Text>
              </Flex>
              <Flex w="100%">
                <Image src="images/decor/peer-to-peer-borderless.png" />
              </Flex>
            </Flex>
          </Flex>

          <Box py={50}>
            <Text ff="Outfit" fw={500} size={40} color="dark.4" lh="3.25rem" ta="center" mb={30}>
              Multi-chain Decentralize Exchange Aggregator
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3" ta="center" maw={750} mx="auto">
              Bitcoin marketplace that connects buyers and sellers in your friend-list or from
              around the world. It allows users to trade Bitcoin using a wide range of payment
              methods, including bank transfers, digital wallets, and more. It&apos;s fast and super
              secure with 247 customer support
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
