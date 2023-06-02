import { Box, Center, Container, Image, Text } from '@mantine/core';

export const Error500Page = () => {
  return (
    <Box
      pt={120}
      style={{
        background: "url('images/background/background-1.png')",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 120,
      }}
    >
      <Container>
        <Box px={100} py={50}>
          <Image
            src="images/decor/under-construction.png"
            width={554}
            height={346}
            mx="auto"
            mb={61}
          />
          <Text ff="Outfit" fw={500} size={30} color="dark.4" ta="center" lh="2.35rem">
            Our dedicated team is diligently working towards the launch of an exceptional product.
            Stay tuned for upcoming announcements as we have even more exciting things to reveal in
            the near future.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
