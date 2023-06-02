import { Box, Container, Image, MediaQuery, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  message: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 20,
      lineHeight: '2rem',
    },
  },
}));

export const Error500Page = () => {
  const { classes } = useStyles();

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
        <Box px={{ base: 20, md: 100 }} py={50}>
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Image
              src="images/decor/under-construction.png"
              width={300}
              height={'auto'}
              mx="auto"
              mb={61}
            />
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Image
              src="images/decor/under-construction.png"
              width={554}
              height={346}
              mx="auto"
              mb={61}
            />
          </MediaQuery>
          <Text
            ff="Outfit"
            fw={500}
            size={30}
            color="dark.4"
            ta="center"
            lh="2.35rem"
            className={classes.message}
          >
            Our dedicated team is diligently working towards the launch of an exceptional product.
            Stay tuned for upcoming announcements as we have even more exciting things to reveal in
            the near future.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
