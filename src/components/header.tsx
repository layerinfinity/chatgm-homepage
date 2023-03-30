import { Button, Container, Group, Header, Image, Text } from '@mantine/core';

function AppHeader() {
  return (
    <Header height={80} sx={{ backgroundColor: 'transparent', border: 'none' }}>
      <Container size="lg" sx={{ height: '100%' }}>
        <Group position="apart" align="center" sx={{ height: '100%' }}>
          <Image src="/images/chatgm-logo.svg" width={220} fit="contain" />
          <Text>xxx</Text>
          <Button variant="outline">1</Button>
        </Group>
      </Container>
    </Header>
  );
}
export default AppHeader;
