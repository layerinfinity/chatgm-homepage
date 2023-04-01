import { AppShell } from '@mantine/core';
import AppHeader from '~/components/header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="0"
      fixed={false}
      header={<AppHeader />}
      styles={() => ({
        main: {
          overflowX: 'hidden',
        },
        root: {
          backgroundImage: 'url(/images/newbg.png)',
          backgroundPosition: '0 0px',
          backgroundSize: 'cover',
          overflowX: 'hidden',
          backgroundRepeat: 'no-repeat',
          padding: 0,
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
