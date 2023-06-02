import { Box, Button, Container, Flex, Text, useMantineTheme } from '@mantine/core';

export const Phase3 = () => {
  const theme = useMantineTheme();

  return (
    <Box pt={120}>
      <Container>
        <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3">
          PHASE 3
        </Text>

        <Text ff="Outfit" fw={600} size={72} color="dark.4" lh={'5rem'}>
          Layer Infinity deCommerce - Enterprise Service
        </Text>

        <Flex py={72} justify="center">
          <Button h="auto" py={20} px={104} radius={20} color="purpleGlow.4">
            Contact Us
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
