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
                <Image width={74} fit="contain" src="images/logo-stacked.svg" />
              </Link>

              {/* Nav bar */}
              <Group className={classes.navBar}>
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button color="purple.2" rightIcon={<IconChevronDown size={14} />}>
                      Community
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item
                      onClick={() => window.open(TWITTER_URL, '_blank')}
                      icon={<IconBrandTwitterFilled size={14} />}
                    >
                      Twitter (X)
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => window.open(DISCORD_URL, '_blank')}
                      icon={<IconBrandDiscordFilled size={14} />}
                    >
                      Discord
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => window.open(TELEGRAM_URL, '_blank')}
                      icon={<IconBrandTelegram size={14} />}
                    >
                      Telegram
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => window.open(MEDIUM_URL, '_blank')}
                      icon={<IconBrandMedium size={14} />}
                    >
                      Medium
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Link to="/gm-ecosystem" onClick={onLinkClicked}>
                  GM Ecosystem
                </Link>
                <Link to="/fortress" onClick={onLinkClicked}>
                  Fortress
                </Link>
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
                  onClick={onGetAppButtonClicked}
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
              <Link className={classes.logo} to="/" onClick={onLinkClicked}>
                <Image width={70} fit="contain" src="images/logo-stacked.svg" />
              </Link>
              <Burger opened={opened} onClick={toggle} />
            </Flex>
          </Container>
        </MediaQuery>
      </Header>

      {opened && (
        <Flex
          direction="column"
          h="100%"
          w="calc(100% - 66px)"
          pos="fixed"
          top={0}
          left={0}
          py={20}
          px={20}
          style={{
            zIndex: 1000,
            backgroundColor: '#FFFFFF99',
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Link to="/" onClick={onLinkClicked}>
            <Image src="images/logo-horizontal.svg" width={220} />
          </Link>

          <Flex direction="column" gap={20} style={{ flex: 1 }} pt={40}>
            <Link to="/gm-ecosystem" style={{ textDecoration: 'none' }} onClick={onLinkClicked}>
              <Text ff="Outfit" fw={500} size={24} color="dark.4">
                GM Ecosystem
              </Text>
            </Link>
            <Link to="/fortress" style={{ textDecoration: 'none' }} onClick={onLinkClicked}>
              <Text ff="Outfit" fw={500} size={24} color="dark.4">
                Fortress
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
            onClick={onGetAppButtonClicked}
          >
            Get App
          </Button>
        </Flex>
      )}
    </>
  );
};
