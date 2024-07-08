import { Anchor, Box, Center, Container, Flex, Image, MediaQuery, Space, Text, createStyles, em } from '@mantine/core';
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

export const ComingSon = () => {
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
      <Flex align='center' justify='center' >
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

        <Flex direction='column' color='white.0' maw={461} justify='center' align='center'>

          <Text ff='Outfit' fw={600} size={isMobile ? 40 : 64} style={{ lineHeight: '64px' }} variant="gradient"
            gradient={{ from: '#8C56FF', to: '#66E3FF', deg: 180 }}>
            COMING SOON
          </Text>
          <Text ff='Outfit' size={20} fw={400} style={{ lineHeight: '26px', textAlign: isMobile ? 'center' : 'left' }} color='white.0'>
            Our dedicated team is diligently working towards the launch of an exceptional product. Stay tuned for upcoming announcements as we have even more exciting things to reveal in the near future.
          </Text>
          <Image mt={33} maw={355} src="images/one-chainai/Frame@2x.png" />
        </Flex>

      </Flex>


    </Box >
  );

};
