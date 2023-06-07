import { Anchor, Box, Container, Flex, Image, Text, createStyles } from '@mantine/core';
import { ContactBox } from './contact-box/contact-box';
import { ANDROID_STORE_URL } from '~/configs';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: `${theme.colors.purpleGlow[4]}0D`,
  },

  downloadButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 12,
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 18,
  },

  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 48,
    width: 48,
    minHeight: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.purpleGlow[3],
  },
}));

export const AppFooter = () => {
  const { classes, theme } = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Flex direction="column" align="center" justify="center">
          {/* Footer Heading */}
          <Text ff="Outfit" fw={500} size={40} mt={27} mb={40}>
            Get{' '}
            <Text component="span" inherit color="purpleGlow.3">
              ChatGM
            </Text>{' '}
            Now
          </Text>

          {/* Download Buttons */}
          <Flex
            wrap="wrap"
            align="center"
            justify="center"
            w="100%"
            mb={{ base: 50, md: 100 }}
            gap={{ base: 10, md: undefined }}
          >
            <Anchor
              className={classes.downloadButton}
              color="white.0"
              bg="teal.4"
              underline={false}
              w={{ base: '100%', sm: 200 }}
              href={ANDROID_STORE_URL}
              target="_blank"
            >
              <img src="images/icon-android.svg" />
              &nbsp;Android
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="white.0"
              bg="rose.3"
              underline={false}
              w={{ base: '100%', sm: 200 }}
            >
              <img src="images/icon-apple.svg" />
              &nbsp;IOS
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="white.0"
              underline={false}
              bg="saffron.4"
              w={{ base: '100%', sm: 200 }}
            >
              Web
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="white.0"
              bg="purpleGlow.3"
              underline={false}
              w={{ base: '100%', sm: 200 }}
            >
              <img src="images/icon-apple.svg" />
              &nbsp;MacOS
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="white.0"
              bg="sky.4"
              underline={false}
              w={{ base: '100%', sm: 200 }}
            >
              <img src="images/icon-windows.svg" />
              &nbsp;Windows
            </Anchor>
          </Flex>

          {/* Contact */}
          <Flex
            wrap={{
              base: 'wrap',
              md: 'nowrap',
            }}
            align="center"
            w="100%"
            px={{ base: 0, lg: 100 }}
            mb={{ sm: 50, md: 85 }}
          >
            {/* Left */}
            <Box w="100%">
              <Text ff="Outfit" fw={600} size={32} lh="2.5rem" color="dark.3">
                Connect Us
              </Text>
              <Text ff="Open Sans" fw={400} lh="1.375rem" color="dark.3" maw={360} mb={26}>
                If there are questions you want to ask, we will answer all your question
              </Text>
              <Flex wrap="wrap" align="center" gap="24px">
                <Anchor>
                  <Image src="images/icon-telegram.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-discord.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-twitter.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-facebook.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-medium.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-github.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-chatgm.svg" />
                </Anchor>
              </Flex>
            </Box>

            {/* Right */}
            <Box w="100%" py={50}>
              <ContactBox />
            </Box>
          </Flex>

          {/* Sub Footer */}
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align="center"
            justify={{ base: 'space-evenly', sm: 'space-between' }}
            w="100%"
            mih={80}
            style={{
              borderTop: `1px solid ${theme.colors.dark[4]}`,
            }}
          >
            <Box>
              <Text ff="Outfit" fw={400} size={18} color="dark.4">
                ©2023 ChatGM. All rights reserved
              </Text>
            </Box>

            <Flex gap={{ base: 20, sm: 40 }} style={{ color: theme.colors.gray[2] }}>
              <Anchor color="dark.4">Team</Anchor>
              <Anchor color="dark.4">Collaboration</Anchor>
              <Anchor color="dark.4">Publications</Anchor>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
