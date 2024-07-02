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

export const AboutUs = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Box
      h={760}
      pt={120}

      style={{
        background: theme.fn.linearGradient(0, '#6016D900', '#000000ff'),
      }}
    >
      <Flex align='flex-start' justify='center' >
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Flex align='center' justify='center' >
            <Box
              h={1500}
              w={1500}
              pos='absolute'
              style={{
                background: theme.fn.radialGradient('#8D57FF66', '#8657FF0d', '#8357FF00', '#8357FF00'),
              }}>
              zIndex=-100
            </Box>
            <Image maw={{ md: 463, base: 300 }} fit="contain" src="images/one-chainai/robot.png" alt="" />
          </Flex>

        </MediaQuery>

        <Flex direction='column' color='white.0' maw={461} justify='center' align={{ sm: 'flex-start', base: 'center' }}>

          <Image mt={45} width={255} fit="contain" src="images/one-chainai/onechain-logo.png" />
          <Text ff='Outfit' size={20} fw={400} style={{ lineHeight: '26px' }} color='white.0'>
            is a Web3 AI protocol that helps DApp developers to simplify onboarding and enhance user experience for new crypto users by integrating in-app AI assistants.
          </Text>
          <Button ml={50} onClick={() => { window.open('https://app.chatgm.com', '_blank') }} mt={30} w={150} h={52} style={{ background: '#644CFF', borderRadius: 15 }}>
            <Image pos='absolute' style={{ width: 60 }} fit='contain' left={-60} src='images/one-chainai/svg/letstart.svg'></Image>
            Let’s start!
          </Button>


        </Flex>

      </Flex>


    </Box >
  );

};
