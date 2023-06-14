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
          mb={15}
        >
          Product Roadmap
        </Text>

        <Text
          ff="Open Sans"
          fw={400}
          size={14}
          color="dark.4"
          lh="1.25rem"
          ta={{ base: 'center', md: 'right' }}
          mb={90}
        >
          ChatGM's product journey begins with Phase One, where we develop a Matrix-powered
          decentralized chat platform with an integrated wallet supporting Bitcoin and
          EVM-compatible assets. Moving onto Phase Two, we enhance our platform's functionality by
          introducing a Decentralized Exchange (DEX) aggregator, enabling users to access and
          compare rates from various exchanges. The journey culminates with Phase Three, adding
          Peer-to-Peer (P2P) capabilities for direct user interactions and transactions, reinforcing
          ChatGM's commitment to creating a secure, decentralized community.
        </Text>

        <Flex direction={{ base: 'column', sm: 'row' }} justify="center" gap={40}>
          <Box style={{ flex: 1 }}>
            <Box p={10} mb={40} bg="rose.3" style={{ borderRadius: 12 }}>
              <Text ff="Open Sans" fw={700} size={14} ta="center" color="saffron.1">
                Version 1
              </Text>
              <Text ff="Outfit" fw={400} size={18} ta="center" color="white.1">
                Matrix-powered Decentralized Chat with in-app BTC-EVM wallet
              </Text>
              <Text ff="Open Sans" fw={700} size={14} ta="center" color="saffron.1">
                Q2 2023
              </Text>
            </Box>
            <Image src="images/roadmap/road-1.png" height={340} fit="contain" />
          </Box>

          <Box style={{ flex: 1 }}>
            <Box p={10} mb={40} bg="purpleGlow.3" style={{ borderRadius: 12 }}>
              <Text ff="Open Sans" fw={700} size={14} ta="center" color="saffron.1">
                Version 2
              </Text>
              <Text ff="Outfit" fw={400} size={18} ta="center" color="white.1">
                Multicurrency Peer-to-Peer OTC Exchange for Bitcoin & Ethereum
              </Text>
              <Text ff="Open Sans" fw={700} size={14} ta="center" color="saffron.1">
                Q3 2023
              </Text>
            </Box>
            <Image src="images/roadmap/road-2.png" height={340} fit="contain" />
          </Box>

          <Box style={{ flex: 1 }}>
            <Box p={10} mb={40} bg="sky.4" style={{ borderRadius: 12 }}>
              <Text ff="Open Sans" fw={700} size={14} ta="center" color="saffron.1">
                Version 3
              </Text>
              <Text ff="Outfit" fw={400} size={18} ta="center" color="white.1">
                Multichain Decentralized Exchange (DEX) Aggregator
              </Text>
              <Text ff="Open Sans" fw={700} size={14} ta="center" color="saffron.1">
                Q4 2023
              </Text>
            </Box>
            <Image src="images/roadmap/road-3.png" height={340} fit="contain" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
