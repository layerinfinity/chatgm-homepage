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

function AppHeader() {
  return (
    <Header height={80} sx={{ backgroundColor: 'transparent', border: 'none' }}>
      <Container size="lg" sx={{ height: '100%', position: 'relative', zIndex: 2 }}>
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
                color="brand.3"
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
              <Image src="/images/mobile-logo.png" width={100} fit="contain" />
            </UnstyledButton>
          </Center>
        </MediaQuery>
      </Container>
    </Header>
  );
}
export default AppHeader;
