import { Anchor, Box, Center, Container, Flex, Image, Space, Text, createStyles } from '@mantine/core';
import { ANDROID_STORE_URL, IOS_STORE_URL } from '~/configs';
import Typewriter from 'typewriter-effect';
import QRCode from "react-qr-code";


const useStyles = createStyles((theme) => ({
    // phaseName: {
    //     [theme.fn.smallerThan('md')]: {
    //         fontSize: 48,
    //         lineHeight: '3rem',
    //     },
    // },
    downloadButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        borderRadius: 6,
        fontFamily: 'Open Sans',
        paddingLeft: 8

    },
    textContainer: {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 18,
    },
    textButton: {
        lineHeight: 1.3
    }

}));

export const LandingPage = () => {
    const { classes, theme } = useStyles();

    return (
        <Box py={20} >
            <Image maw={350} src="images/EDITION 2.svg" pos="absolute" style={{ zIndex: -1 }} />
            <Container py={{ base: 145 }}  >

                <Flex justify='center'>
                    <Center
                        className={classes.textContainer}
                        w={600}
                        h={60}
                        style={{ borderTopLeftRadius: 25, borderBottomLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: theme.colors.white[2] }}

                    >
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
                                strings: ['Simplify Web3 Adoption with Interactive AI_'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />


                    </Center>
                </Flex>


                <Flex direction={{ base: 'column', sm: 'row' }} mt={73} justify='center' align='center'>
                    <Image maw={660} fit="contain" src="images/landing-page.svg" alt="android" />
                    <Flex p={9} direction='column' align='center' justify='center' w={180} h={253} >
                        <Image width={116} fit="contain" src="images/mobile-logo.svg" alt="logo" />
                        <Flex dir='row' justify='center' mt={10} gap={5} h={24}>
                            <Text ff="Outfit" fw={400} size={14} color="black.0">Powered by</Text>

                            <Image width={75} height={24} fit="contain" src="images/logo-stacked.svg" />
                        </Flex>
                        <Flex mt={15} dir='row' justify='space-between' w={'100%'}>
                            <Box>
                                <QRCode
                                    size={32}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value={IOS_STORE_URL}
                                    viewBox={`0 0 32 32`}
                                />
                            </Box>

                            <Anchor
                                className={classes.downloadButton}
                                color="white.0"
                                bg="dark.2"
                                underline={false}
                                w={110}
                                h={34}
                                href={IOS_STORE_URL}
                                target="_blank"
                            >

                                <Image width={16} fit="contain" src="images/icon-apple.svg" alt="apple" />
                                <Flex direction='column' justify='center' ml={6} >
                                    <Text fw={400} size={8} className={classes.textButton}>
                                        Download in the
                                    </Text>
                                    <Text className={classes.textButton} fw={700} size={13}>
                                        App Store
                                    </Text>

                                </Flex>

                            </Anchor>
                        </Flex>
                        <Flex mt={15} dir='row' justify='space-between' w={'100%'}>
                            <Box>
                                <QRCode
                                    size={32}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value={ANDROID_STORE_URL}
                                    viewBox={`0 0 32 32`}
                                />
                            </Box>
                            <Anchor
                                className={classes.downloadButton}
                                color="white.0"
                                bg="dark.2"
                                underline={false}
                                w={110}
                                h={34}
                                href={ANDROID_STORE_URL}
                                target="_blank"
                            >

                                <Image width={16} fit="contain" src="images/icon-playstore.svg" alt="playstore" />
                                <Flex className={classes.textButton} direction='column' justify='center' ml={6}>
                                    <Text className={classes.textButton} fw={400} size={8}>
                                        GET IT ON
                                    </Text>
                                    <Text className={classes.textButton} fw={700} size={13}>
                                        Google Play
                                    </Text>

                                </Flex>



                            </Anchor>
                        </Flex>
                    </Flex>
                </Flex>


            </Container >
        </Box >
    );
};
