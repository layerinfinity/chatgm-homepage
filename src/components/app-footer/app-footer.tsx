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
    backgroundColor: `${theme.colors.purpleGlow[4]}0D`,
  },

  downloadButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
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
        <Flex pt={20} direction="column" align="center" justify="center">

          <Flex
            wrap="wrap"
            align="center"
            justify="center"
            w="100%"
            mb={{ base: 25 }}
            mt={{ base: 25 }}
            gap={{ base: 10, md: undefined }}
          >
            <Anchor
              className={classes.downloadButton}
              color="white.0"
              bg="dark.2"
              underline={false}
              w={{ base: '100%', sm: 200 }}
              href={ANDROID_STORE_URL}
              target="_blank"
            >
              <Image width={24} height={13} fit="contain" src="images/icon-android.svg" alt="android" />

              &nbsp;&nbsp;Android
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="white.0"
              bg="dark.2"
              underline={false}
              w={{ base: '100%', sm: 200 }}
              href={IOS_STORE_URL}
              target="_blank"
            >
              <Image width={20} height={24} fit="contain" src="images/icon-apple.svg" alt="apple" />
              &nbsp;&nbsp;IOS
            </Anchor>

            <Anchor
              className={classes.downloadButton}
              color="white.0"
              underline={false}
              bg="dark.2"
              w={{ base: '100%', sm: 200 }}
              href="https://app.chatgm.com/"
            >
              <Image width={24} height={24} fit="contain" src="images/icon-web.svg" alt="android" />
              &nbsp;&nbsp;WebApp
            </Anchor>


          </Flex>

          {/* Sub Footer */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify={{ base: 'center', lg: 'space-between' }}
            gap={2}
            w="100%"
            mih={60}
            py={{ base: 10, sm: 0 }}

          >
            <Box>
              <Text ff="Outfit" fw={400} size={12} color="dark.4" mb={{ base: 10, sm: 0 }}>
                ©2024 1chain.AI. All rights reserved
              </Text>
            </Box>

            <Flex
              wrap="wrap"
              rowGap={5}
              columnGap={25}
              justify="center"
              style={{ color: theme.colors.gray[2] }}
            >

              <Anchor color="dark.4" href="tos" target="_blank">
                <Text ff="Outfit" fw={400} size={14} color="dark.4">
                  Terms Of Use
                </Text>
              </Anchor>
              <Anchor color="dark.4" href="privacy-policy" target="_blank">
                <Text ff="Outfit" fw={400} size={14} color="dark.4">
                  Privacy Policy
                </Text>

              </Anchor>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box >
  );
};
