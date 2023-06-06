import { Box, Button, Container, Flex, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  phaseName: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 48,
      lineHeight: '3rem',
    },
  },
}));

export const Phase3 = () => {
  const { classes } = useStyles();

  return (
    <Box py={20}>
      <Container>
        <Box px={{ base: 0, md: 90 }}>
          <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3">
            PHASE 3
          </Text>

          <Text
            ff="Outfit"
            fw={600}
            size={72}
            color="dark.4"
            lh={'5rem'}
            className={classes.phaseName}
          >
            Layer Infinity deCommerce - Enterprise Service
          </Text>

          <Flex py={72} justify="center">
            <Button h="auto" py={20} px={104} radius={20} color="purpleGlow.4">
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
