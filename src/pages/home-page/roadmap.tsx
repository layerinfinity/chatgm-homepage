import { Box, Container, Text, Image, Center, MediaQuery } from '@mantine/core';

export const RoadMap = () => {
  return (
    <Box>
      <Container>
        <Text ff="Outfit" fw={500} size={40} color="sky.4" ta={{ base: 'center', md: 'right' }}>
          Product Roadmap
        </Text>
        <Center>
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Image src="images/decor/product-roadmap.png" width={'100%'} height={'100%'} />
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Image src="images/decor/product-roadmap.png" width={923} height={806} />
          </MediaQuery>
        </Center>
      </Container>
    </Box>
  );
};
