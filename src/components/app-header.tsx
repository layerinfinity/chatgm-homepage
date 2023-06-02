import {
  Anchor,
  Image,
  Button,
  Container,
  Group,
  Header,
  MediaQuery,
  UnstyledButton,
  createStyles,
  Flex,
  Burger,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  logo: {
    width: 165,
    height: 41,
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 35,

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
              <Anchor className={classes.logo} href="/">
                <Image src="images/logo-horizontal.svg" />
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
                </li>
              </ul>
            </Flex>
          </Container>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Container>
            <Flex h={100} align="center" justify="space-between">
              {/* Logo */}
              <Anchor className={classes.logo} href="/">
                <img src="images/logo-horizontal.svg" />
              </Anchor>
              {/* Burgur */}
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
          <Anchor href="/" mb={40}>
            <Image src="images/logo-horizontal.svg" width={220} />
          </Anchor>

          <Flex direction="column" gap={20} style={{ flex: 1 }}>
            <Anchor href="/gm-ecosystem" color="dark.4" ff="Outfit" fw={500} size={24}>
              GM Ecosystem
            </Anchor>
            <Anchor href="/fortless" color="dark.4" ff="Outfit" fw={500} size={24}>
              Fortless
            </Anchor>
            <Anchor color="dark.4" ff="Outfit" fw={500} size={24}>
              GM Token
            </Anchor>
            <Anchor color="dark.4" ff="Outfit" fw={500} size={24}>
              News
            </Anchor>
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
