import { Box, Container, Flex, Image, Text, createStyles, em, px, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { string } from 'yup';


const useStyles = createStyles((theme) => ({

    bgitem: {
        width: 270,
        height: 86,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },


}));
interface Parner {
    name: string,
    iconName: string,
    domain: string

}
const parners = [
    { name: 'BYBIT', iconName: 'bybit', domain: 'bybit.com/' },
    { name: 'BINANCE', iconName: 'binance', domain: 'binance.com/' },
    { name: 'OKX', iconName: 'okx', domain: 'okx.com/' },
    { name: 'BITFINEX', iconName: 'bitfinex', domain: 'bitfinex.com/' },
    { name: 'COINBASE', iconName: 'coinbase', domain: 'coinbase.com/' },
    { name: 'BITGET', iconName: 'bitget', domain: 'bitget.com/' },
    { name: 'BITSTAMP', iconName: 'bitstamp', domain: 'bitstamp.com/' },
    { name: 'KRAKEN', iconName: 'kraken', domain: 'kraken.com/' },
    { name: 'GATE.IO', iconName: 'gateio', domain: 'gate.io/' },
    { name: 'GEMINI', iconName: 'gemini', domain: 'gemini.com/' },
    { name: 'HTX', iconName: 'htx', domain: 'htx.com/' },
    { name: 'KUCOIN', iconName: 'kucoin', domain: 'kucoin.com/' }
]
export const OurPartner = () => {
    const { classes, theme } = useStyles();
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);


    return (
        <Box
            pt={{ base: 60, md: 100 }}
            pb={{ base: 100, md: 148 }}

            style={{
                background: ' linear-gradient(180deg, rgba(0,0,0,0) , rgba(144, 144, 144, 0.1) )',
            }}
        >
            <Container  >
                <Box >
                    <Text ff="Outfit" fw={400} size={18} color={theme.colors.white[0]} ta="left" style={{ lineHeight: '22px' }}>
                        Cryptobot.chat
                    </Text>

                    <Text style={{ lineHeight: '80px', textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color={theme.colors.white[0]} >
                        Partners
                    </Text>
                    <Box mt={30}>
                        <Link to="/" >
                            <Image width={336} fit="contain" src="images/one-chainai/onechain-logo.png" />
                        </Link>
                        <Text mt={30} weight={500} size={30} style={{ lineHeight: '38px' }} color={theme.colors.teal[2]}>
                            Manage all your exchange accounts from one interface
                        </Text>
                        <Text mt={30} weight={400} size={14} style={{ lineHeight: '19px' }} color={theme.colors.white[2]}>
                            Automated trading tools are supported on 14 major cryptocurrency exchanges
                        </Text>
                    </Box>

                </Box>

                <Flex wrap="wrap" gap={49} justify='center' mt={50}>
                    {parners.map(el => {
                        return <Box className={classes.bgitem}>
                            <Image src={`images/cryptobot_chat/parners/${el.iconName}.png`} width={56} fit="contain" />
                            <Box ml={17}>
                                <Text style={{ lineHeight: '33px' }} weight={400} size={26} ff='Plus Jakarta Sans' color='#ffffffcc'>{el.domain}</Text>
                                <Text style={{ lineHeight: '42px' }} weight={700} size={34} ff='Plus Jakarta Sans' color='#ffffff'>{el.name}</Text>
                            </Box>
                        </Box>
                    })}



                </Flex>


            </Container >
        </Box >
    );
};
