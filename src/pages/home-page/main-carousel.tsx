import React from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Container, Flex, Image, Text, useMantineTheme } from '@mantine/core';

export const MainCarousel = () => {
  const autoplay = React.useRef(Autoplay({ delay: 5000 }));
  const theme = useMantineTheme();

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
            <Flex gap="68px">
              <Box w="100%">
                <Text ff="Outfit" fw={600} size="4.5rem" lh="5rem" mb="25.5px">
                  No <span style={{ color: theme.colors.purpleGlow[4] }}>Sign-Up</span> Border
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  Wallet chat with another wallet or easily create an account with phone number or
                  email. Chat, instant payment and trade crypto easily and fast
                </Text>
              </Box>
              <Box w="100%">
                <Image src="images/decor/end-to-end-encrypted-messaging.png" />
              </Box>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex gap="68px">
              <Box w="100%">
                <Image src="images/decor/end-to-end-encrypted-messaging.png" />
              </Box>
              <Box w="100%">
                <Text ff="Outfit" fw={600} size="4.5rem" lh="5rem" mb="25.5px">
                  End-To-End{' '}
                  <span style={{ color: theme.colors.purpleGlow[4] }}>Encrypted Messaging</span>
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  End-to-end encryption (E2EE) with Matrix ensures messages are encrypted on the
                  sender's device and can only be decrypted on the recipient's device. No
                  intermediaries can access the content. Users generate keys, encrypt messages with
                  recipients' keys, and the Matrix server relays them securely. Recipients decrypt
                  the messages locally for secure communication.
                </Text>
              </Box>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex gap="68px">
              <Box w="100%">
                <Text ff="Outfit" fw={600} size="4.5rem" lh="5rem" mb="25.5px">
                  <span style={{ color: theme.colors.purpleGlow[4] }}>Most Secure App</span> In Web3
                </Text>
                <Text ff="Open Sans" fw={400} color="dark.3">
                  The app combines EVM and Bitcoin Lightning for secure transactions. It has
                  encryption, 2FA, hardware wallet integration, and strong key management. Privacy,
                  smart contract security, regular updates, and user education are prioritized.
                </Text>
              </Box>
              <Box w="100%">
                <Image src="images/decor/end-to-end-encrypted-messaging.png" />
              </Box>
            </Flex>
          </Carousel.Slide>

          <Carousel.Slide>
            <Flex gap="68px">
              <Box w="100%">
                <Image src="images/decor/end-to-end-encrypted-messaging.png" />
              </Box>
              <Box w="100%">
                <Text ff="Outfit" fw={600} size="4.5rem" lh="5rem" mb="25.5px">
                  <span style={{ color: theme.colors.purpleGlow[4] }}>ChatGPT 4.0</span> Assistant
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
