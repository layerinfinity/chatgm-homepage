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
  Box,
  Loader,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import {
  IconBrandDiscordFilled,
  IconBrandMedium,
  IconBrandTelegram,
  IconBrandTwitterFilled,
  IconChevronDown,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccount, useConnect, useWriteContract } from 'wagmi'
import { getBalance } from '@wagmi/core'
import { DISCORD_URL, MEDIUM_URL, TELEGRAM_URL, TWITTER_URL } from '~/configs';
import { BASE_URL, wagmiAdapter } from '../pages/demo/wagmi/config'
import axios from 'axios';
import { formatEther } from 'viem';

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
  const location = useLocation();
  const { status, isReconnecting, address, chainId, isConnected, isConnecting } = useAccount()

  // console.log(address)
  // console.log("isConnected:" + isConnected)
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
  useEffect(() => {

    async function checkBalance() {
      try {
        const result = await getBalance(wagmiAdapter.wagmiConfig, {
          address: address!,
          chainId
        })
        if (chainId == 1020352220) {
          // test net
          if (Number(formatEther(result.value)) < 0.000005) {
            await axios.post(`${BASE_URL}/api/ai/faucet`, { address, chainId });
          }
        } else if (chainId == 1350216234) {
          // mainnet
          if (Number(formatEther(result.value)) < 0.005) {
            await axios.post(`${BASE_URL}/api/ai/faucet`, { address, chainId });
          }
        }

      } catch (error) {
        console.log('error' + error)
      }
    }
    if (address) {
      checkBalance()
    }


  }, [address, chainId])

  return (
    location.pathname == '/beta' ? <Header height={85} style={{
      border: 0,
      backgroundColor: `${theme.colors.white[1]}00`,
      WebkitBackdropFilter: 'blur(12px)',
      backdropFilter: 'blur(12px)',
    }}>
      <Container>
        <Flex h={85} align="center" justify="space-between">
          {/* <MediaQuery smallerThan="sm" styles={{ display: 'none' }}> */}
          <Link className={classes.logo} to="/" onClick={onLinkClicked}>

            <Image width={140} fit="contain" src="images/one-chainai/onechain-logo.png" />
          </Link>
          <appkit-button />
          {/* {!isReconnecting ? <>
            <appkit-button />
          </> :
            <Flex gap={10}>
              <Box pos='relative' w={30} >  <Loader size={30} style={{ background: 'transparent' }} display='' color="blue" /></Box>
              <Text color='white' style={{ textTransform: 'capitalize' }}>
                {status}
              </Text>
            </Flex>
          } */}
        </Flex>
      </Container>
    </Header> :
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
                  <Image width={140} fit="contain" src="images/one-chainai/onechain-logo.png" />
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
