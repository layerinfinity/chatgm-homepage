import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  MediaQuery,
  Text,
  Title,
  createStyles,
  keyframes,
} from '@mantine/core';

export const bounce = keyframes({
  '0%': { transform: 'translate3d(0, 0, 0)' },
  '50%': { transform: 'translate3d(3px, 0, 0)' },
  '100%': { transform: 'translate3d(0, 0, 0)' },
});

const useStyles = createStyles((theme) => ({
  mainTitle: {
    fontSize: '3.6em',
    color: 'white',
    [theme.fn.smallerThan('md')]: {
      fontSize: '2.4em',
    },
  },
  secondaryTitle: {
    fontSize: '3em',
    color: 'white',
    [theme.fn.smallerThan('md')]: {
      fontSize: '1.4em',
    },
  },
  animated: {
    animation: `${bounce} 2s ease-in-out infinite`,
  },
}));

const IntroductionSection = () => {
  const { classes } = useStyles();

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Image src="/images/first-wave-m.svg" alt="" sx={{ position: 'absolute' }} />
        </MediaQuery>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Image src="/images/first-wave.svg" alt="" sx={{ position: 'absolute' }} />
        </MediaQuery>

        <Container size="lg">
          <Title align="center" className={classes.mainTitle}>
            Chat, Pay, Crypto
          </Title>
          <Text weight="bold" align="center" mb="md" className={classes.secondaryTitle}>
            Web3{' '}
            <Text component="span" color="brand.5">
              All in One
            </Text>{' '}
            App
          </Text>
        </Container>

        <Container size="lg">
          <Text align="center" mb="xl">
            The secure messaging app, crypto wallet, and Web3 browser built with state-of-the-art
            technology.
          </Text>
        </Container>
      </Box>

      <Center>
        <Button
          color="brand.5"
          styles={{
            root: {
              height: '4rem',
              width: '12rem',
              borderRadius: '3rem',
            },
          }}
        >
          <Group spacing="xs">
            <Text size="1.2em">Explore</Text>
            <Image
              alt=""
              width="1.3rem"
              fit="contain"
              src="images/icon-next.svg"
              className={classes.animated}
            />
          </Group>
        </Button>
      </Center>
    </>
  );
};

export default IntroductionSection;
