import {
  Text,
  Image,
  Button,
  Container,
  Header,
  MediaQuery,
  createStyles,
  Flex,
  Burger,
  Group,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  logo: {
    width: 165,
    height: 41,
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,

    a: {
      fontFamily: 'Outfit',
      fontWeight: 400,
      fontSize: '1.125rem',
      color: theme.colors.dark[1],
      textDecoration: 'none',
    },

    'a:active': {
      fontWeight: 700,
      color: theme.colors.purpleGlow[4],
      textDecoration: 'underline',
    },
  },
}));

export const AppHeader = () => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Header
        height={{ base: 100, md: 120 }}
        style={{ border: 0, backgroundColor: '#FFFFFF20', backdropFilter: 'blur(12px)' }}
      >
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Container>
            <Flex align="center" justify="space-between" h={120}>
              {/* Logo */}
              <Link className={classes.logo} to="/">
                <Image src="images/logo-horizontal.svg" />
              </Link>

              {/* Nav bar */}
              <Group className={classes.navBar}>
                <Link to="/gm-ecosystem">GM Ecosystem</Link>
                <Link to="/fortless">Fortress</Link>
                <Link to="#">GM Token</Link>
                <Link to="#">News</Link>
                <Button
                  color="purpleGlow.4"
                  px={20}
                  py={6}
                  style={{
                    borderRadius: 44,
                    fontFamily: 'Outfit',
                    fontWeight: 400,
                    fontSize: '1.125rem',
                  }}
                >
                  Get App
                </Button>
              </Group>
            </Flex>
          </Container>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Container>
            <Flex h={100} align="center" justify="space-between">
              <Link className={classes.logo} to="/">
                <Image src="images/logo-horizontal.svg" />
              </Link>
              <Burger opened={opened} onClick={toggle} />
            </Flex>
          </Container>
        </MediaQuery>
      </Header>

      {opened && (
        <Flex
          direction={'column'}
          h="100%"
          w="85%"
          pos={'fixed'}
          top={0}
          left={0}
          py={20}
          px={20}
          style={{ zIndex: 1000, backgroundColor: '#FFFFFF66', backdropFilter: 'blur(12px)' }}
        >
          <Link to="/">
            <Image src="images/logo-horizontal.svg" width={220} />
          </Link>

          <Flex direction="column" gap={20} style={{ flex: 1 }} pt={40}>
            <Link to="/gm-ecosystem" style={{ textDecoration: 'none' }}>
              <Text ff="Outfit" fw={500} size={24} color="dark.4">
                GM Ecosystem
              </Text>
            </Link>
            <Link to="/fortless" style={{ textDecoration: 'none' }}>
              <Text ff="Outfit" fw={500} size={24} color="dark.4">
                Fortless
              </Text>
            </Link>
            <Link to="#" style={{ textDecoration: 'none' }}>
              <Text ff="Outfit" fw={500} size={24} color="dark.4">
                GM Token
              </Text>
            </Link>
            <Link to="#" style={{ textDecoration: 'none' }}>
              <Text ff="Outfit" fw={500} size={24} color="dark.4">
                News
              </Text>
            </Link>
          </Flex>

          <Button
            color="purpleGlow.4"
            px={20}
            py={15}
            ff="Outfit"
            fw="400"
            fullWidth
            style={{
              height: 'auto',
              borderRadius: 12,
              fontSize: '1.125rem',
            }}
          >
            Get App
          </Button>
        </Flex>
      )}
    </>
  );
};
