import React from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Container, Flex, Image, MediaQuery, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  slideHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 48,
      lineHeight: '4rem',
    },
  },
}));

export const MainCarousel = () => {
  const autoplay = React.useRef(Autoplay({ delay: 5000 }));
  const { classes, theme } = useStyles();

  return (
    <Box bg={`${theme.colors.purpleGlow[4]}0D`} pt={120}>
      <Container py={40}>
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
            <Flex gap={68}>
              <Box w="100%">
                <Text
                  ff="Outfit"
                  fw={600}
                  size="4.5rem"
                  lh="5rem"
                  mb="25.5px"
                  className={classes.slideHeading}
                >
                  No{' '}
                  <Text component="span" color="purpleGlow.4" inherit>
                    Sign-Up
                  </Text>{' '}
                  Border
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  Chat with another wallet or easily create an account with a phone number or an
                  email.
                  <br />
                  Chat, make instant payments and trade crypto easily - quickly.
                </Text>
              </Box>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Box w="100%">
                  <Image src="images/decor/no-sign-up-border.png" />
                </Box>
              </MediaQuery>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex gap={68}>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Box w="100%">
                  <Image src="images/decor/end-to-end-encrypted-messaging.png" />
                </Box>
              </MediaQuery>
              <Box w="100%">
                <Text
                  ff="Outfit"
                  fw={600}
                  size="4.5rem"
                  lh="5rem"
                  mb="25.5px"
                  className={classes.slideHeading}
                >
                  End-To-End{' '}
                  <Text component="span" color="purpleGlow.4" inherit>
                    Encrypted Messaging
                  </Text>
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  Experience Secure Communication with Matrix's End-to-End Encryption (E2EE)!
                  Protect your messages with rock-solid security: they're encrypted on your device
                  and can only be decrypted by the intended recipient. No intermediaries can peek at
                  your content. It's simple: generate keys, encrypt messages with your recipients'
                  keys, and our Matrix server securely relays them. Recipients decrypt the messages
                  locally for secure communication.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex gap={68}>
              <Box w="100%">
                <Text
                  ff="Outfit"
                  fw={600}
                  size="4.5rem"
                  lh="5rem"
                  mb="25.5px"
                  className={classes.slideHeading}
                >
                  The Ultimate
                  <Text component="span" color="purpleGlow.4" inherit>
                    <br />
                    Web3 Security App
                    <br />
                  </Text>
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  ChatGM combines EVM and Bitcoin Lightning for secure transactions. It has
                  encryption, 2FA, hardware wallet integration, and strong key management. Privacy,
                  smart contract security, regular updates, and user education are prioritized.
                </Text>
              </Box>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Box w="100%">
                  <Image src="images/decor/most-secure-app-in-web3.png" />
                </Box>
              </MediaQuery>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex gap={68}>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Box w="100%">
                  <Image src="images/decor/chat-gpt-assistant.png" />
                </Box>
              </MediaQuery>
              <Box w="100%">
                <Text
                  ff="Outfit"
                  fw={600}
                  size="4.5rem"
                  lh="5rem"
                  mb="25.5px"
                  className={classes.slideHeading}
                >
                  <Text component="span" color="purpleGlow.4" inherit>
                    ChatGPT 4.0
                  </Text>{' '}
                  Assistant
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  The app combines EVM and Bitcoin Lightning for secure transactions. It has
                  encryption, 2FA, hardware wallet integration, and strong key management. Privacy,
                  smart contract security, regular updates, and user education are prioritized.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </Box>
  );
};
