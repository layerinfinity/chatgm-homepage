import { AppShell } from '@mantine/core';
import AppFooter from '~/components/footer';
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
      footer={<AppFooter />}
      styles={() => ({
        main: {
          overflowX: 'hidden',
        },
        root: {
          minHeight: '2000px',
          backgroundImage: 'url(/images/newbg.png)',
          backgroundPosition: '0 -80px',
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
