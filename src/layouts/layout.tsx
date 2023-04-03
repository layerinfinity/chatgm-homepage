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
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll',
          minHeight: '3100px',
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
