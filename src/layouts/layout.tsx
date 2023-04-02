import { AppShell } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="0"
      fixed={false}
      styles={() => ({
        main: {
          backgroundImage: 'url(/images/newbg.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          minHeight: '3000px',
        },
        root: {
          padding: 0,
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
