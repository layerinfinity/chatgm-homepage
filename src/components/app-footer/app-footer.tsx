import { Anchor, Box, Button, Container, Flex, Image, Text, createStyles } from '@mantine/core';
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
    backgroundColor: `rgba(0,0,0,0.2)`,
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
          <Button onClick={() => { window.open('https://twitter.com/1ChainAI', '_blank') }} mt={35} w={180} h={60} style={{ background: '#00BFA5', borderRadius: 20 }}>
            <Image pos='absolute' style={{ width: 60, transform: 'scale(-1,-1)' }} fit='revert' right={-60} src='images/one-chainai/svg/letstart.svg'></Image>
            <Text ff="Open Sans" fw={700} size={18} color='white.0' align='center' >
              Follow us
            </Text>
          </Button>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align="center"
            justify='space-between'
            w="100%"
            mt={40}
            px={{ base: 0, lg: 45 }}
          >
            {/* Left */}
            <Flex direction='column' align={{ sm: 'flex-start', base: 'center' }} >
              <Text ff="Outfit" fw={600} size={32} lh="2.5rem" color="purpleGlow.5">
                Connect Us
              </Text>
              <Text ff="Open Sans" fw={400} size={16} lh="1.375rem" color="purpleGlow.5" mt={10}>
                We will answer all your questions
              </Text>

            </Flex>


          </Flex>
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
