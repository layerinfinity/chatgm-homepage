import { Box, Button, Container, Flex, Image, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Typewriter from 'typewriter-effect';
const useStyles = createStyles((theme) => ({
    heading: {
        [theme.fn.smallerThan('md')]: {
            fontSize: 40,
            lineHeight: '2.5rem',
        },
    },
    bgitem: {
        width: 220,
        background: theme.fn.linearGradient(270, '#7545FF66', '#B251FF66', '#FF85C766', '#FF41D566'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 6,
        boxShadow: `9px 10px 10px 0px #00000033`,
        color: `${theme.colors.white[0]}`


    },


}));
export const TopHeader = () => {
    const { classes, theme } = useStyles();
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    return (
        <Box

            h={760}
            style={{
                background: theme.fn.linearGradient(0, '#6016D900', '#000000ff'),
            }}
        >

            <Flex top={-450} w='100%' align='center' justify='center' pos='absolute'>
                <Box
                    h={1500}
                    w={1500}
                    style={{
                        background: theme.fn.radialGradient('#8D57FF66', '#8657FF0d', '#8357FF00', '#8357FF00'),
                    }}>
                    zIndex=-100
                </Box>
            </Flex>
            {!isMobile ? <Image maw={{ md: 392, base: 300 }} top={150} fit="contain" src="images/one-chainai/EDITION.png" pos='absolute' alt="" /> : null}

            <Box
                h='100%'
                py={40}

            >
                < Flex direction='column' align='center' mt={80} >
                    <Image src='images/one-chainai/white1chain.png' width={236} fit="contain" />
                    <Image src='images/one-chainai/onechain-logo2.png' width={221} fit="contain" mt={36} />
                    <Text ff="Outfit" fw={500} size={30} color="white.0" ta="center" mt={44}>
                        <Typewriter

                            options={{
                                strings: ['Simplify Web3 Mass Adoption with AI'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </Text>
                    <Button onClick={() => { window.open('https://app.chatgm.com', '_blank') }} mt={56} w={150} h={52} style={{ background: '#644CFF', borderRadius: 15 }}>
                        <Image pos='absolute' style={{ width: 60 }} fit='contain' left={-60} src='images/one-chainai/svg/letstart.svg'></Image>
                        Let’s start!
                    </Button>


                </Flex>







            </Box >
        </Box >
    );
};