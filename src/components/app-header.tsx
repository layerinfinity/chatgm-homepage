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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DISCORD_URL, MEDIUM_URL, TELEGRAM_URL, TWITTER_URL } from '~/configs';

const useStyles = createStyles((theme) => ({
  logo: {
    width: 165,
    height: 51,
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
  const { classes, theme } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const [, scrollTo] = useWindowScroll();

  const onLinkClicked = () => {
    close();
    scrollTo({ y: 0 });
  };

  const onGetAppButtonClicked = () => {
    close();
    const element = document.getElementById('home-page/download-app');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header
        height={{ base: 100, md: 120 }}
        style={{
          border: 0,
          backgroundColor: `${theme.colors.white[1]}33`,
          WebkitBackdropFilter: 'blur(12px)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Container>
            <Flex align="center" justify="space-between" h={120}>
              {/* Logo */}
              <Link className={classes.logo} to="/" onClick={onLinkClicked}>
                <Image width={165} fit="contain" src="images/logo-stacked.svg" />
              </Link>
              {/* Nav bar */}
              <Group className={classes.navBar}>
                <Anchor
                  href={'/'}
                  // className={classes.mainLink}
                  data-active={0 === active || undefined}
                  onClick={(event) => {
                    onLinkClicked();
                    setActive(0);
                  }}
                >
                  Airdrop
                </Anchor>
                <Anchor
                  href={'/white-paper'}
                  // className={classes.mainLink}
                  data-active={1 === active || undefined}
                  onClick={(event) => {
                    onLinkClicked();
                    setActive(1);
                  }}
                >
                  Whitepaper
                </Anchor>
                {/* <Link to="" onClick={onLinkClicked}>
                  Airdrop
                </Link>
                <Link to="/white-paper" onClick={onLinkClicked}>
                  Whitepaper
                </Link> */}

                {/* <Button
                  color="purpleGlow.4"
                  px={20}
                  py={6}
                  style={{
                    borderRadius: 44,
                    fontFamily: 'Outfit',
                    fontWeight: 400,
                    fontSize: '1.125rem',
                  }}
                  onClick={onGetAppButtonClicked}
                >
                  Get App
                </Button> */}
              </Group>
            </Flex>
          </Container>
        </MediaQuery>
      </Header>
    </>
  );
};
