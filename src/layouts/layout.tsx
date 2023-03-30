import { AppShell, Container } from '@mantine/core';
import AppHeader from '~/components/header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      header={<AppHeader />}
      styles={(theme) => ({
        main: {
          backgroundImage: 'url(/images/newbg.png)',
          minHeight: '4000px',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Container size="lg">{children}</Container>
    </AppShell>
  );
};

export default Layout;
