import { Box, Container, Text, Image, Center, MediaQuery, Flex } from '@mantine/core';

export const RoadMap = () => {
  return (
    <Box py={100}>
      <Container>
        <Text
          ff="Outfit"
          fw={500}
          size={40}
          color="sky.4"
          ta={{ base: 'center', md: 'right' }}
          mb={50}
        >
          Product Roadmap
        </Text>

        <Flex direction={{ base: 'column', sm: 'row' }} justify="center" gap={50}>
          <Flex
            direction="column"
            gap={10}
            w={{ base: '100%', sm: 'calc(100% / 3 - 3.125rem)' }}
            style={{ borderRadius: 12, overflow: 'hidden' }}
          >
            <Center bg="purpleGlow.1" h={450} px={38} py={100}>
              <Image maw={250} src="images/roadmap/road-1.png" fit="contain" />
            </Center>
            <Box bg="purpleGlow.2" py={10} px={20}>
              <Text ff="Open Sans" fw={400} ta="center">
                Matrix-powered Decentralized Chat with in-app BTC-EVM wallet
              </Text>
            </Box>
          </Flex>

          <Flex
            direction="column"
            gap={10}
            w={{ base: '100%', sm: 'calc(100% / 3 - 3.125rem)' }}
            style={{ borderRadius: 12, overflow: 'hidden' }}
          >
            <Center bg="saffron.1" h={450} px={38} py={100}>
              <Image maw={250} src="images/roadmap/road-2.png" fit="contain" />
            </Center>
            <Box bg="saffron.3" py={10} px={20}>
              <Text ff="Open Sans" fw={400} ta="center">
                Matrix-powered Decentralized Chat with in-app BTC-EVM wallet
              </Text>
            </Box>
          </Flex>

          <Flex
            direction="column"
            gap={10}
            w={{ base: '100%', sm: 'calc(100% / 3 - 3.125rem)' }}
            style={{ borderRadius: 12, overflow: 'hidden' }}
          >
            <Center bg="sky.1" h={450} px={38} py={100}>
              <Image maw={250} src="images/roadmap/road-3.png" fit="contain" />
            </Center>
            <Box bg="sky.3" py={10} px={20}>
              <Text ff="Open Sans" fw={400} ta="center">
                Matrix-powered Decentralized Chat with in-app BTC-EVM wallet
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
