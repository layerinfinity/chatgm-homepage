import {
  Button,
  Center,
  Container,
  Group,
  Header,
  Image,
  MediaQuery,
  Title,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

const menu = [
  {
    label: 'GM Ecosystem',
    to: 'ecosystem',
  },
  {
    label: 'Documentation',
    to: 'documentation',
  },
  {
    label: 'Token',
    to: 'token',
  },
  {
    label: 'News',
    to: 'news',
  },
];

const useStyles = createStyles(() => ({
  header: {
    backgroundColor: 'transparent',
    border: 'none',
    backdropFilter: 'blur(20px)',
  },
}));

function AppHeader() {
  const { classes } = useStyles();

  return (
    <Header fixed={false} height={120} className={classes.header}>
      <Container size="lg" sx={{ height: '100%', zIndex: 2 }}>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group position="apart" align="center" sx={{ height: '100%' }}>
            <Image src="/images/chatgm-logo.svg" width={220} fit="contain" />

            <Group spacing="lg">
              {menu.map((n, idx) => (
                <UnstyledButton key={idx}>
                  <Title order={3}>{n.label}</Title>
                </UnstyledButton>
              ))}

              <Button
                color="brand.5"
                styles={{
                  root: {
                    borderRadius: '3rem',
                  },
                }}
              >
                Launch App
              </Button>
            </Group>
          </Group>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Center py={24}>
            <UnstyledButton component="a" href="/">
              <Image src="/images/mobile-logo.svg" width={80} fit="contain" />
            </UnstyledButton>
          </Center>
        </MediaQuery>
      </Container>
    </Header>
  );
}
export default AppHeader;
