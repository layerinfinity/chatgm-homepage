import { Anchor, Box, Button, Center, Container, Flex, Image, MediaQuery, Space, Text, createStyles, em } from '@mantine/core';
import { ANDROID_STORE_URL, IOS_STORE_URL } from '~/configs';
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from '@mantine/hooks';



const useStyles = createStyles((theme) => ({
  phaseName: {
    fontFamily: 'Outfit',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: '25.5px',

  },


}));

export const System = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Box style={{ height: '100%', width: '100%', zIndex: -100 }}>

      <Space h={55} />
      <Box
      >
        <Box pos='absolute' w='100%'>
          <Image
            style={{ width: '50%', maxWidth: 800 }}
            src='images/cryptobot_chat/system1.png'
          />


        </Box>
        <Container>
          <Flex justify='end'>
            <Box maw={333}>
              <Text mt={55} ff="Outfit" fw={400} size={18} color={theme.colors.white[0]} ta="left" style={{ lineHeight: '22px' }}>
                Cryptobot.chat
              </Text>

              <Text style={{ lineHeight: '80px', textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" >
                System
              </Text>

              <Text ff="Open Sans" fw={400} size='14px' color="white.2" mt={30} style={{ lineHeight: '19.07px' }}>
                Our automated trading system allows you to grow your portfolio effortlessly by selecting a strategy, customizing your settings, activating the bot to trade on your behalf, and continuously optimizing performance to ensure maximum returns.
              </Text>
            </Box>
          </Flex>
          <Image
            mt={500}
            mb={118}
            style={{ width: '100%', maxWidth: 879 }}
            src='images/cryptobot_chat/system2.svg'
          />


        </Container>


      </Box >

    </Box>

  );

};
