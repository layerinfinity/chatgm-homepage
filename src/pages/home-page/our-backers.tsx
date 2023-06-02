import { Box, Container, Flex, Image, Text, useMantineTheme } from '@mantine/core';

export const OurBackers = () => {
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        backgroundColor: `${theme.colors.purpleGlow[4]}0D`,
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
              Lorem ipsun
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
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Lorem ipsun
            </Text>
          </Box>
          <Box>
            <Image src="images/bakers/parsig.png" width={240} height={200} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Lorem ipsun
            </Text>
          </Box>
          <Box>
            <Image src="images/bakers/cvvc.png" width={240} height={200} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Lorem ipsun
            </Text>
          </Box>
        </Flex>

        <Flex wrap="wrap" gap={60} justify="center">
          <Box>
            <Image src="images/bakers/other-1.png" width={300} height={270} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Lorem ipsun
            </Text>
          </Box>
          <Box>
            <Image src="images/bakers/other-2.png" width={300} height={270} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Lorem ipsun
            </Text>
          </Box>
          <Box>
            <Image src="images/bakers/other-3.png" width={300} height={270} fit="contain" />
            <Text ff="Open Sans" fw={700} size={20} ta="center">
              Founding Team
            </Text>
            <Text ff="Open Sans" fw={400} ta="center">
              Lorem ipsun
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
