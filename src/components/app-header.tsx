import { Anchor, Box, Button, Container, Header, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  headerContainer: {},
  headerWrapper: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '120px',
  },
  logo: {
    width: '165px',
    height: '41px',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '35px',

    fontFamily: 'Outfit',
    fontWeight: 400,
    fontSize: '1.125rem',
    color: theme.colors.dark[1],

    'li a:active': {
      fontWeight: 700,
      color: theme.colors.purpleGlow[4],
      textDecoration: 'underline',
    },
  },
}));

export const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Header
      height="120px"
      style={{ border: 0, backgroundColor: '#FFFFFF20', backdropFilter: 'blur(12px)' }}
    >
      <Container>
        <div className={classes.header}>
          {/* Logo */}
          <Anchor className={classes.logo} href="/">
            <img src="images/logo-horizontal.svg" />
          </Anchor>

          {/* Nav bar */}
          <ul className={classes.navBar}>
            <li>
              <Anchor href="gm-ecosystem" color="dark.4">
                GM Ecosystem
              </Anchor>
            </li>
            <li>
              <Anchor href="fortless" color="dark.4">
                Fortress
              </Anchor>
            </li>
            <li>
              <Anchor color="dark.4">GM Token</Anchor>
            </li>
            <li>
              <Anchor color="dark.4">News</Anchor>
            </li>
            <li>
              <Button
                color="purpleGlow.4"
                px="20px"
                py="6px"
                style={{
                  borderRadius: '44px',
                  fontFamily: 'Outfit',
                  fontWeight: 400,
                  fontSize: '1.125rem',
                }}
              >
                Get App
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </Header>
  );
};
