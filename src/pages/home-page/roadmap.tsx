import { Box, Container, Text, Image, Center } from '@mantine/core';

export const RoadMap = () => {
  return (
    <Box>
      <Container>
        <Text ff="Outfit" fw={500} size={40} color="sky.4" ta="right">
          Product Roadmap
        </Text>
        <Center>
          <Image src="images/decor/product-roadmap.png" style={{ width: 923, height: 806 }} />
        </Center>
      </Container>
    </Box>
  );
};
