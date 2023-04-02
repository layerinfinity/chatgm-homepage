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
