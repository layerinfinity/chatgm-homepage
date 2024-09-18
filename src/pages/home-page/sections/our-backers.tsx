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

        <Flex wrap="wrap" gap={50} justify="center" align='center' mt={80} >
          <Flex direction='column' align='center' justify='center' w={240}
            h={230}>
            <Box maw={240} h={80}>
              <Image src="images/bakers/server.png" height={80} fit="contain" />
            </Box>

            <Text mt={20} ff="Open Sans" fw={700} size={20} ta="center" color='#FFD600'>
              Tallinn
            </Text>
            <Text ff="Open Sans" fw={700} size={20} ta="center" color={theme.colors.white[0]}>
              Estonia
            </Text>

          </Flex>

          <Flex direction='column' align='center' justify='center' w={240}
            h={230}>

            <Image src="images/bakers/cvvc.png" height={80} fit="contain" />
            <Text mt={20} ff="Open Sans" fw={700} size={20} ta="center" color='#FFD600'>
              Zug
            </Text>
            <Text ff="Open Sans" fw={700} size={20} ta="center" color={theme.colors.white[0]}>
              Switzerland
            </Text>

          </Flex>
          <Flex direction='column' align='center' justify='center'
            w={240}
            h={230}>
            <Box maw={240} h={80}>
              <Image src="images/bakers/parsig.png" height={80} fit="contain" />
            </Box>

            <Text mt={20} ff="Open Sans" fw={700} size={20} ta="center" color='#FFD600'>
              Singapore
            </Text>
            <Text ff="Open Sans" fw={700} size={20} ta="center" color={theme.colors.white[0]}>
              Singapore
            </Text>
          </Flex>

          {/* </Flex>


        <Flex mt={80} wrap="wrap" gap={60} justify="center" align='center'  > */}
          <Flex
            direction="column"
            align="center"
            w={260}
            h={320}
          >

            <Image src="images/bakers/axie-infinity.png" height={120} fit="contain" />
            <Image src="images/bakers/sky_mavic.png" height={60} fit="contain" />



            <Text mt={20} ff="Open Sans" fw={700} size={20} ta="center" color='#FFD600'>
              Founding team
            </Text>
            <Text mt={8} ff="Open Sans" size={16} fw={400} ta="center" color='white'>
              (Trung - CEO, Aleks - Chairman, Andy - CTO,  Jihoz - Growth)
            </Text>
          </Flex>


          <Flex direction="column" w={260} h={320}>
            <Image src="images/bakers/other-2.png" height={180} fit="contain" />

            <Text mt={20} ff="Open Sans" fw={700} size={20} ta="center" color='#FFD600'>
              Sebastien Borget
            </Text>
            <Text mt={8} ff="Open Sans" size={16} fw={400} ta="center" color='white'>
              Co-Founder/COO of The Sandbox, Prez of Blockchain Game Alliance.
            </Text>
          </Flex>





          <Flex
            direction="column"
            align="center"
            w={260}
            h={320}
          >
            <Image src="images/bakers/other-3.png" height={180} fit="contain" />

            <Text mt={20} ff="Open Sans" fw={700} size={20} ta="center" color='#FFD600'>
              YOU, our new investor(!?)
            </Text>
            <Text mt={8} ff="Open Sans" size={16} fw={400} ta="center" color='white'>
              Track Record, Web3 believer, Know-how, Network Access
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box >
  );
};
