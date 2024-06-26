import { Anchor, Box, Container, Flex, Image, Text, createStyles } from '@mantine/core';
import { IconBrandTelegram } from '@tabler/icons-react';
import { ContactBox } from './contact-box/contact-box';
import {
  ANDROID_STORE_URL,
  DISCORD_URL,
  FACEBOOK_URL,
  IOS_STORE_URL,
  MEDIUM_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from '~/configs';

const useStyles = createStyles((theme) => ({
  container: {

    // backgroundColor: `red`,
    backgroundColor: `${theme.colors.purpleGlow[4]}0D`,
  },

  downloadButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 175,
    borderRadius: 12,
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 14,
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
          <Text ff="Outfit" fw={500} size={30} mt={30} color='white.0'>
            Crypto Chats? Game On!
          </Text>

          {/* Download Buttons */}
          <Flex
            wrap="wrap"
            align="center"
            justify="center"
            w="100%"
            mt={25}
            // h={100}
            gap={{ base: 10, md: 50 }}
          >
            <Anchor
              className={classes.downloadButton}
              color="purpleGlow.8"
              bg="purpleGlow.7"
              underline={false}
              w={{ base: '100%', sm: 200 }}
              href={ANDROID_STORE_URL}
              target="_blank"
            >
              <img width={24} object-fit='contain' src="images/icon-android.svg" alt="android" />
              &nbsp;Android
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="purpleGlow.8"
              bg="purpleGlow.7"
              underline={false}
              w={{ base: '100%', sm: 200 }}
              href={IOS_STORE_URL}
              target="_blank"
            >
              <img style={{ filter: 'red', fill: 'red' }} width={20} src="images/icon-apple.svg" alt="apple" />
              &nbsp;IOS
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="purpleGlow.8"
              underline={false}
              bg="purpleGlow.7"
              w={{ base: '100%', sm: 200 }}
              href="https://app.chatgm.com/"
            >
              WebApp
            </Anchor>

          </Flex>

          {/* Contact */}
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align="center"
            justify='space-between'
            w="100%"
            mt={40}
            px={{ base: 0, lg: 45 }}
          // mb={{ sm: 50, md: 85 }}
          >
            {/* Left */}
            <Box >
              <Text ff="Outfit" fw={600} size={32} lh="2.5rem" color="purpleGlow.5">
                Connect Us
              </Text>
              <Text ff="Open Sans" fw={400} size={16} lh="1.375rem" color="purpleGlow.5" mt={10}>
                Don&apos;t hesitate! We&apos;re all ears and ready to help you with anything.
              </Text>

            </Box>

            {/* Right */}
            <Box py={{ lg: 0, base: 20 }} >
              <Flex wrap="wrap" align="center" gap="24px">
                <Anchor href={DISCORD_URL} target="_blank">
                  <Image color='purpleGlow.5' src="images/icon-discord.svg" />
                </Anchor>

                <Anchor href={TWITTER_URL} target="_blank">
                  <Image src="images/icon-twitter.svg" />
                </Anchor>

                <Anchor href={MEDIUM_URL} target="_blank">
                  <Image src="images/icon-medium.svg" color='#FFFFFF' />
                </Anchor>

                {/* <Anchor href={TELEGRAM_URL} target="_blank">
                  <IconBrandTelegram color="black" />
                </Anchor> */}
              </Flex>
            </Box>
          </Flex>
          {/* Sub Footer */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify={{ base: 'center', lg: 'space-between' }}
            gap={2}
            w="100%"
            mih={80}
            mt={10}
            py={{ base: 10, sm: 0 }}
            px={{ base: 0, lg: 45 }}
            style={{
              borderTop: `1px solid ${theme.colors.purpleGlow[6]}`,
            }}
          >
            <Box >
              <Text ff="Outfit" fw={400} size={18} color="purpleGlow.5" mb={{ base: 10, sm: 0 }}>
                ©2023 ChatGM. All rights reserved
              </Text>
            </Box>

            <Flex
              wrap="wrap"
              rowGap={5}
              columnGap={25}
              justify="center"
              style={{ color: theme.colors.gray[2] }}
            >

              <Anchor color="purpleGlow.5" href="tos" target="_blank">
                Terms Of Use
              </Anchor>
              <Anchor color="purpleGlow.5" href="privacy-policy" target="_blank">
                Privacy Policy
              </Anchor>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
