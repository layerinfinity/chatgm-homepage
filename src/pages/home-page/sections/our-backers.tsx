import { Box, Container, Flex, Image, MediaQuery, Text, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const OurBackers = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Box
      style={{
        background: theme.fn.linearGradient(0, '#6016D900', '#0000004d'),
      }}
    >
      <Container py={70}>
        <Text ff="Outfit" fw={600} size={isMobile ? 40 : 72} style={{ lineHeight: '80px' }} color="white.0" ta="center">
          Investors
        </Text>

        <Flex wrap="wrap" gap={50} justify="center" align='center' mt={80}>
          <Flex align='end' justify='center' h={168}>
            <Image src="images/bakers/axie-infinity.png" width={225} fit="contain" />

          </Flex>

          <Flex align='end' justify='center' h={168}>
            <Image src="images/bakers/other-2.png" width={218} fit="contain" />

          </Flex>
          <Flex align='end' justify='center' h={168}>
            <Image src="images/bakers/cvvc.png" width={121} fit="contain" />

          </Flex>
          <Flex align='end' justify='center' h={55}>
            <Image src="images/bakers/sky_mavic.png" width={323} fit="contain" />

          </Flex>

          <Flex align='end' justify='center' h={55}>
            <Image src="images/bakers/server.png" width={248} fit="contain" />

          </Flex>
          <Flex align='end' justify='center' h={55}>
            <Image src="images/bakers/parsig.png" width={202} fit="contain" />

          </Flex>
        </Flex>


        <Flex mt={80} wrap="wrap" gap={60} justify="center" align='center'  >
          <Flex direction="column" maw={240} h={130}>

            <Text ff="Open Sans" fw={700} size={20} ta="center" color={theme.colors.white[0]}>
              Sebastien Borget
            </Text>
            <Text mt={8} ff="Open Sans" size={16} fw={400} ta="center" color='#B6DEFF'>
              Co-Founder/COO of The Sandbox, President of Blockchain Game Alliance.
            </Text>
          </Flex>
          <MediaQuery smallerThan={1000} styles={{ display: 'none' }}>
            <Box w={2} h={70} bg='#B6DEFF'>

            </Box>
          </MediaQuery>


          <Flex
            direction="column"
            align="center"
            maw={240}
            h={130}
          >

            <Text ff="Open Sans" fw={700} size={20} ta="center" color={theme.colors.white[0]}>
              The founding team of Sky Mavis
            </Text>
            <Text mt={8} ff="Open Sans" size={16} fw={400} ta="center" color='#B6DEFF'>
              Trung - CEO, Aleks - Chairman, Andy - CTO,  Jihoz - Growth
            </Text>
          </Flex>
          <MediaQuery smallerThan={1000} styles={{ display: 'none' }}>
            <Box w={2} h={70} bg='#B6DEFF'>

            </Box>
          </MediaQuery>

          <Flex
            direction="column"
            align="center"
            maw={240}
            h={130}
          >

            <Text ff="Open Sans" fw={700} size={20} ta="center" color={theme.colors.white[0]}>
              Other investors
            </Text>
            <Text mt={8} ff="Open Sans" size={16} fw={400} ta="center" color='#B6DEFF'>
              CVVC, Parsiq, and Server Partners
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box >
  );
};
