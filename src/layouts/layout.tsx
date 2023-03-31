import { AppShell } from '@mantine/core';
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
          padding: 0,
          backgroundImage: 'url(/images/newbg.png)',
          backgroundPosition: '0 -80px',
          backgroundRepeat: 'no-repeat',
          minHeight: '4000px',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
