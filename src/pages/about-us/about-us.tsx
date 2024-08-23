import { Anchor, BackgroundImage, Box, Button, Center, Container, Flex, Image, MediaQuery, Space, Text, createStyles, em } from '@mantine/core';
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

export const AboutUs = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Box>
      <Box style={{ position: 'absolute', height: 760, width: '100%', background: theme.fn.linearGradient(0, '#6016D900', '#000000FF'), zIndex: -1 }}>
      </Box>

      <Box>
        {/* <Box pos='initial'
          bg='red'
        > */}
        <Image
          pos='absolute'
          top={{ base: 40, sm: 0 }}
          right={0}

          fit='contain'
          src='images/cryptobot_chat/about.png'
          maw={800}
          // bg='yellow'
          // w={{ base: '60%', sm: '50%' }}
          style={{ width: isMobile ? '60%' : '55%', zIndex: -1 }}
        // height='auto'
        >
        </Image>
        {/* </Box> */}
        <Container pt={150} pb={70}>
          <Image
            // bg='red'
            fit='contain'
            src='images/cryptobot_chat/comment.svg'
            style={{ maxWidth: '428px', width: '50%' }}
          >
          </Image>
          <Text mt={50} ff="Outfit" fw={400} size={18} color={theme.colors.white[0]} ta="left" style={{ lineHeight: '22px' }}>
            About
          </Text>

          <Text style={{ lineHeight: '80px', textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" >
            Cryptobot.Chat
          </Text>
          <Text maw={586} color='#64FFDA' size={24} style={{ lineHeight: '28px', marginTop: '30px' }}>
            Welcome to our platform, where expertise meets innovation in the world of automated trading.
          </Text>

          <Text ff="Open Sans" fw={400} size='14px' color="white.2" mt={30} style={{ lineHeight: '19.07px' }}>
            Welcome to our platform, where expertise meets innovation in the world of automated trading.<br /><br />

            With over 15 years of experience in the blockchain industry, our lead trader has successfully developed and released 100 bots across various decentralized and centralized exchanges (DEX and CEX). These bots have generated over $100 million in profit, demonstrating our commitment to delivering high-performance trading solutions.<br /><br />

            Our mission is to empower both novice and experienced traders by providing cutting-edge, user-friendly automated bots that optimize your investment strategies and maximize returns. Join us and elevate your trading experience effortlessly.

          </Text>
        </Container>


      </Box >

    </Box>

  );

};
