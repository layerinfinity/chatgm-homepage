import React from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Container, Flex, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  slideHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 44,
      lineHeight: '3.25rem',
    },
  },
}));

export const MainCarousel = () => {
  const autoplay = React.useRef(Autoplay({ delay: 5000 }));
  const { classes, theme } = useStyles();

  return (
    <Box bg={`${theme.colors.dark[0]}`} pt={120}>
      <Container py={40}>
        <Text ta="center" mb={32} ff="Outfit" fw={700} size={24} color="dark.4">
          Interactive AI Superapp for Web3
        </Text>

        <Carousel
          loop
          withIndicators
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          styles={{
            indicators: {
              justifyContent: 'flex-end',
              gap: 11,
              bottom: -40,
            },
            indicator: {
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: theme.colors.white[4],

              '&[data-active]': {
                backgroundColor: theme.colors.purpleGlow[4],
              },
            },
          }}
        >
          <Carousel.Slide>
            <Flex
              bg="url('images/decor/no-sign-up-border.png')"
              bgsz="cover"
              bgp="center"
              h={600}
              style={{ borderRadius: 12 }}
              align="flex-end"
              px={{ base: 10, sm: 42 }}
              py={38}
            >
              <Box bg="#0C0D0EE5" px={30} py={20} style={{ borderRadius: 10 }}>
                <Text
                  ff="Outfit"
                  fw={600}
                  size={72}
                  lh="5rem"
                  mb="25.5px"
                  color="white.1"
                  className={classes.slideHeading}
                >
                  No{' '}
                  <Text component="span" color="purpleGlow.4" inherit>
                    Sign-Up
                  </Text>{' '}
                  Border
                </Text>
                <Text ff="Open Sans" fw={400} color="white.1" lh="1.35rem" maw={700}>
                  Chat with another wallet and fully anonymous registration with just a crypto
                  wallet. Users can also register with emails or phone numbers if preferred.
                  <br />
                  Chat, make instant payments and trade crypto easily - quickly.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex
              bg="url('images/decor/end-to-end-encrypted-messaging.png')"
              bgsz="cover"
              bgp="center"
              h={600}
              style={{ borderRadius: 12 }}
              px={{ base: 10, sm: 42 }}
              py={{ base: 20, sm: 38 }}
            >
              <Box
                bg="#0C0D0EE5"
                px={30}
                py={20}
                style={{ borderRadius: 10 }}
                w={{ base: '100%', sm: '65%', md: '75%', lg: '60%' }}
              >
                <Text
                  ff="Outfit"
                  fw={600}
                  size={72}
                  lh="5rem"
                  mb="25.5px"
                  color="white.1"
                  className={classes.slideHeading}
                >
                  <Text component="span" color="purpleGlow.4" inherit>
                    End-To-End{' '}
                  </Text>
                  Encrypted Messaging
                </Text>
                <Text ff="Open Sans" fw={400} color="white.1" lh="1.35rem">
                  Experience Secure Communication with Matrix&apos;s End-to-End Encryption (E2EE)!
                  <br />
                  Protect your messages with rock-solid security: they&apos;re encrypted on your
                  device and can only be decrypted by the intended recipient. No intermediaries can
                  peek at your content. It&apos;s simple: generate keys, encrypt messages with your
                  recipients&apos; keys, and our Matrix server securely relays them. Recipients
                  decrypt the messages locally for secure communication.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex
              bg="url('images/decor/most-secure-app-in-web3.png')"
              bgsz="cover"
              bgp="center"
              h={600}
              align="flex-end"
              style={{ borderRadius: 12 }}
              px={{ base: 10, sm: 42 }}
              py={{ base: 10, sm: 38 }}
            >
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                bg="#0C0D0EE5"
                px={{ base: 12, sm: 30 }}
                py={20}
                style={{ borderRadius: 10 }}
                gap={{ base: 10, sm: 50 }}
                align="center"
              >
                <Text
                  ff="Outfit"
                  fw={600}
                  size={72}
                  lh="5rem"
                  mb="25.5px"
                  color="white.1"
                  className={classes.slideHeading}
                  miw={{ base: 'auto', sm: '65%' }}
                  ta={{ base: 'left', sm: 'right' }}
                >
                  The{' '}
                  <Text component="span" color="purpleGlow.4" inherit>
                    Ultimate Web3 Security
                  </Text>{' '}
                  App
                </Text>
                <Text ff="Open Sans" fw={400} color="white.1" lh="1.35rem">
                  ChatGM combines EVM and Bitcoin Lightning for secure transactions. It has
                  encryption, 2FA, hardware wallet integration, and strong key management. Privacy,
                  smart contract security, regular updates, and user education are prioritized.
                </Text>
              </Flex>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex
              bg="url('images/decor/chat-gpt-assistant.png')"
              bgsz="cover"
              bgp="center"
              h={600}
              align="flex-end"
              justify="flex-end"
              style={{ borderRadius: 12 }}
              px={{ base: 10, sm: 42 }}
              py={10}
            >
              <Box
                bg="#0C0D0EE5"
                px={{ base: 15, sm: 30 }}
                py={20}
                style={{ borderRadius: 10 }}
                w={{ base: '100%', md: '50%' }}
              >
                <Text
                  ff="Outfit"
                  fw={600}
                  size={72}
                  lh="5rem"
                  mb={25}
                  color="white.1"
                  className={classes.slideHeading}
                  ta={{ base: 'left', sm: 'right' }}
                >
                  <Text component="span" color="purpleGlow.4" inherit>
                    @gm.Ai
                  </Text>
                </Text>
                <Text ff="Open Sans" fw={400} color="white.1" lh="1.35rem">
                  Powered by GPT-4, This is ChatGM&apos;s Web3 AI Assistant, simplifying blockchain
                  switches, efficient trading, and safeguarding wallets. Offering real-time crypto
                  insights, it evolves into an advanced AI shield against phishing in dApps and
                  websites. Only AI-mentioned messages are shared with OpenAI
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </Box>
  );
};
