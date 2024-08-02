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
  Menu,
  Anchor,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import {
  IconBrandDiscordFilled,
  IconBrandMedium,
  IconBrandTelegram,
  IconBrandTwitterFilled,
  IconChevronDown,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { DISCORD_URL, MEDIUM_URL, TELEGRAM_URL, TWITTER_URL } from '~/configs';

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
      fontSize: '0.938rem',
      color: theme.colors.white[0],
      textDecoration: 'none',
    },

    'a:active': {
      fontWeight: 600,
      color: theme.colors.purpleGlow[4],
      textDecoration: 'underline',
    },
  },
}));

export const AppHeader = () => {
  const { classes, theme } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [, scrollTo] = useWindowScroll();

  const onLinkClicked = () => {
    close();
    scrollTo({ y: 0 });
  };

  const onMovedEcoSystemClicked = () => {
    close();
    const element = document.getElementById('ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header
        height={85}
        style={{
          border: 0,
          backgroundColor: `${theme.colors.white[1]}00`,
          WebkitBackdropFilter: 'blur(12px)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Container>
            <Flex align="center" justify="space-between" h={85}>
              {/* Logo */}

              <Link className={classes.logo} to="/" onClick={onLinkClicked}>
                <Image width={140} fit="contain" src="images/one-chainai/onechain-logo.png" />
              </Link>

              <Group className={classes.navBar}>
                <Link color='white.0' to="/mission">
                  Mission
                </Link>
                <Link color='white.0' to="/protocol">
                  Protocol
                </Link>

                <Link color='white.0' to="/" onClick={onMovedEcoSystemClicked}>
                  Ecosystem
                </Link>
                <Link color='white.0' to="/a1" onClick={onMovedEcoSystemClicked}>
                  $A1
                </Link>
                <Link color='white.0' to="https://1chain-ai.gitbook.io/1chain-ai-whitepaper" target='blank' >
                  Whitepaper
                </Link>
              </Group>
            </Flex>
          </Container>
        </MediaQuery>

        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Container>
            <Flex h={100} align="center" justify="space-between">
              <Link className={classes.logo} to="/" onClick={onLinkClicked}>
                <Image width={70} fit="contain" src="images/one-chainai/onechain-logo.png" />
              </Link>
              <Burger w={60} color='#ffffff' opened={opened} onClick={toggle} />
            </Flex>
          </Container>
        </MediaQuery>
      </Header>

      {opened && (
        <Flex
          direction="column"
          h="100%"
          w="calc(100% - 100px)"
          pos="fixed"
          top={0}
          left={0}
          py={20}
          px={20}
          style={{
            zIndex: 1000,
            background: theme.fn.linearGradient(0, '#6016D900', '#0000004d'),
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Link to="/" onClick={onLinkClicked}>
            <Image src="images/one-chainai/onechain-logo.png" width={220} />
          </Link>

          <Flex direction="column" gap={20} style={{ flex: 1 }} pt={40}>
            <Link to="/mission" style={{ textDecoration: 'none' }} onClick={onLinkClicked}>
              <Text ff="Outfit" fw={500} size={24} color="white.0">
                Mission
              </Text>
            </Link>
            <Link to="/Protocol" style={{ textDecoration: 'none' }} onClick={onLinkClicked}>
              <Text ff="Outfit" fw={500} size={24} color="white.0">
                Protocol
              </Text>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={onMovedEcoSystemClicked}>
              <Text ff="Outfit" fw={500} size={24} color="white.0">
                Ecosystem
              </Text>
            </Link>
            <Link to="/a1" style={{ textDecoration: 'none' }} onClick={onMovedEcoSystemClicked}>
              <Text ff="Outfit" fw={500} size={24} color="white.0">
                $A1
              </Text>
            </Link>
            <Link to="https://1chain-ai.gitbook.io/1chain-ai-whitepaper" target='blank' style={{ textDecoration: 'none' }} onClick={onLinkClicked}>
              <Text ff="Outfit" fw={500} size={24} color="white.0">
                Whitepaper
              </Text>
            </Link>

          </Flex>


        </Flex>
      )}
    </>
  );
};
