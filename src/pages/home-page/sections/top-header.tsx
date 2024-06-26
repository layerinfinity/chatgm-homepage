import { Box, Container, Flex, Image, Text, createStyles, useMantineTheme } from '@mantine/core';
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

    }

}));
export const TopHeader = () => {
    const { classes, theme } = useStyles();

    return (
        <Box
            mt={-100}
            h={760}
            style={{
                background: theme.fn.linearGradient(0, '#6016D900', '#000000ff'),
            }}
        >
            <Box

                h={793}
                style={{
                    background: theme.fn.radialGradient('#8D57FF66', '#8657FF0d', '#8357FF00'),
                }}>

            </Box>
            <Container py={80} >

                <Flex direction='column' align='center' mt={80} >
                    <Image src='images/one-chainai/white1chain.png' width={236} fit="contain" />
                    <Text ff="Outfit" fw={500} size={30} color="white.0" ta="center" mt={44}>
                        <Typewriter
                            // onInit={(typewriter) => {
                            //     typewriter.typeString('Simplify Web3 Adoption with Interactive AI_')
                            //         .callFunction(() => {
                            //             console.log('String typed out!');
                            //         })

                            //         .pauseFor(2500)
                            //         .deleteAll()
                            //         .callFunction(() => {
                            //             console.log('All strings were deleted');
                            //         })

                            //         .start();

                            // }}
                            options={{
                                strings: ['1Chain AI - Simplify Web3 Mass Adoption with AI'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </Text>


                </Flex>







            </Container>
        </Box>
    );
};
