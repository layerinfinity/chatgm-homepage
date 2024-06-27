import { Box, Container, Flex, Image, Text, createStyles, useMantineTheme } from '@mantine/core';
import { TimeLine } from './timeline';


const useStyles = createStyles((theme) => ({
    heading: {
        [theme.fn.smallerThan('md')]: {
            fontSize: 40,
            lineHeight: '2.5rem',
        },
    },
    bgitem: {
        width: 150,
        // background: theme.fn.linearGradient(270, '#7545FF66', '#B251FF66', '#FF85C766', '#FF41D566'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // borderRadius: 6,
        // boxShadow: `9px 10px 10px 0px #00000033`,
        color: `${theme.colors.white[0]}`

    }

}));
export const Description = () => {
    const { classes, theme } = useStyles();

    return (
        <Box
            style={{
                background: theme.fn.linearGradient(0, '#6016D900', '#0000004d'),
            }}
        >
            <Container py={40} >
                <Flex direction='row' mt={55}>
                    <Text ff="Outfit" fw={400} size={18} color="white.0" ta="center">
                        Use case
                    </Text>

                </Flex>


                <Box
                    style={{
                        width: 323,
                        borderBottom: `4px solid ${theme.colors.purpleGlow[6]}`,
                    }}

                >
                    <Text ff="Outfit" fw={600} size={72} color="white.0" mt={-10}>
                        Description
                    </Text>
                </Box>
                <Text ff="Open Sans" fw={400} size={14} color="white.2" mt={30}>
                    Bitcoin marketplace that connects buyers and sellers in your friend-list or from around the world. It allows users to trade Bitcoin using a wide range of payment methods, including bank transfers, digital wallets, and more.
                    It’s fast and super secure with 247 customer support
                </Text>

                <Flex wrap="wrap" gap={60} justify='center' maw={765} ml='auto' mr='auto' mt={79} mb={100}>
                    <Box className={classes.bgitem}>
                        <Image width={86} src='images/one-chainai/white1chain.png' fit='contain' />
                        <Text ff="Outfit" fw={600} size={15} ta="center" mt={20}>
                            Innovative AI protocol
                        </Text>

                        <Text ff="Open Sans" fw={400} size={12} ta="center" color='#7792C6'>
                            Designed for seamless integration with any decentralized application (dApp)
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image width={86} src='images/one-chainai/white1chain.png' fit='contain' />
                        <Text ff="Outfit" fw={600} size={15} ta="center" mt={20}>
                            Innovative AI protocol
                        </Text>

                        <Text ff="Open Sans" fw={400} size={12} ta="center" color='#7792C6'>
                            Designed for seamless integration with any decentralized application (dApp)
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image width={86} src='images/one-chainai/white1chain.png' fit='contain' />
                        <Text ff="Outfit" fw={600} size={15} ta="center" mt={20}>
                            Innovative AI protocol
                        </Text>

                        <Text ff="Open Sans" fw={400} size={12} ta="center" color='#7792C6'>
                            Designed for seamless integration with any decentralized application (dApp)
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image width={86} src='images/one-chainai/white1chain.png' fit='contain' />
                        <Text ff="Outfit" fw={600} size={15} ta="center" mt={20}>
                            Innovative AI protocol
                        </Text>

                        <Text ff="Open Sans" fw={400} size={12} ta="center" color='#7792C6'>
                            Designed for seamless integration with any decentralized application (dApp)
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image width={86} src='images/one-chainai/white1chain.png' fit='contain' />
                        <Text ff="Outfit" fw={600} size={15} ta="center" mt={20}>
                            Innovative AI protocol
                        </Text>

                        <Text ff="Open Sans" fw={400} size={12} ta="center" color='#7792C6'>
                            Designed for seamless integration with any decentralized application (dApp)
                        </Text>
                    </Box>


                </Flex>
                <TimeLine />


            </Container>
        </Box>
    );
};
