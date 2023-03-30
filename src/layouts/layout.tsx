import { AppShell } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        main: {
          backgroundImage: 'url(/images/newbg.jpg)',
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
