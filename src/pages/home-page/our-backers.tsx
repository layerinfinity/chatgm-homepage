import { Box, Container, Flex, Image, Text, useMantineTheme } from '@mantine/core';

export const OurBackers = () => {
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        backgroundColor: `${theme.fn.linearGradient(0, 'red', 'green')}`,
      }}
    >
      <Container py={70}>
        <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3" ta="center" mb={70}>
          Our Backers
        </Text>

        <Flex wrap="wrap" gap={50} justify="center" mb={40}>
          <Box>
            <Image src="images/bakers/axie-infinity.png" width={240} height={200} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              (Trung, Aleks, Andy, Jeff)
            </Text>
          </Box>
          <Box>
            <Image
              src="images/bakers/courage-ventures.png"
              width={240}
              height={200}
              fit="contain"
            />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Helsinki
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Finland
            </Text>
          </Box>
          <Box>
            <Image src="images/bakers/parsig.png" width={240} height={200} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Singapore
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Singapore
            </Text>
          </Box>
          <Box>
            <Image src="images/bakers/cvvc.png" width={240} height={200} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Zug
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Switzerland
            </Text>
          </Box>
        </Flex>

        <Flex wrap="wrap" gap={60} justify="center">
          <Flex direction="column" maw={{ base: '100%', md: 'calc(100% / 3 - 3.75rem)' }}>
            <Image src="images/bakers/other-1.png" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Sten Olsson (Finland)
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Partner of Hannes Snellman Law Finland’s Top Crypto Lawyer
            </Text>
          </Flex>

          <Flex
            direction="column"
            align="center"
            maw={{ base: '100%', md: 'calc(100% / 3 - 3.75rem)' }}
          >
            <Image src="images/bakers/other-2.png" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Sebastien Borget (France)
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Co-Founder/COO of The Sandbox Prez of Blockchain Game Alliance
            </Text>
          </Flex>

          <Flex
            direction="column"
            align="center"
            maw={{ base: '100%', md: 'calc(100% / 3 - 3.75rem)' }}
          >
            <Image src="images/bakers/other-3.png" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              YOU, our new investor (!?)
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Track Record, Web3 Believer, Know-how, Network Access
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
