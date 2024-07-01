import { Anchor, BackgroundImage, Box, Center, Container, Flex, Image, Text, createStyles, useMantineTheme } from '@mantine/core';
import { TimeLine } from './timeline';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useState } from 'react';


const useStyles = createStyles((theme) => ({
    heading: {
        [theme.fn.smallerThan('md')]: {
            fontSize: 40,
            lineHeight: '2.5rem',
        },
    },
    bgitem: {
        width: 290,
        paddingRight: 15,
        paddingBottom: 15,
        height: 260,



    },
    content: {
        padding: 26,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#ffffff'
    },


}));
export const EcoSystem = () => {
    const { classes, theme } = useStyles();
    const [item, setItem] = useState(0)
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal opened={opened} onClose={close} withCloseButton={false}>
                Modal without header, press escape or click on overlay to close
            </Modal>
            {/* <Modal opened={opened} onClose={() => {
                setItem(0)
                close()
            }}
                centered withCloseButton={false}

            >

                {

                    item == 1 ? <BackgroundImage src="images/one-chainai/svg/Acti1.svg" >
                        <Box className={classes.content}>
                            <Text ff="Open Sans" fw={700} size={24} ta="center" >
                                ChatGM
                            </Text>
                            <Image mt={6} src='images/one-chainai/svg/chatgm.svg' height={70} fit='contain' />

                            <Text color='#ACA1F2' mt={6} ff="Open Sans" fw={400} size={10} ta="center">
                                <span style={{ fontWeight: 700, color: 'white' }}>ChatGM</span> lets EVM or BTC wallet owners text, call, transfer crypto, and...
                            </Text>
                            <Anchor mt={6} fw={400} size={10} color='#ACA1F2' >
                                Read more
                            </Anchor>

                        </Box>

                    </BackgroundImage> : null

                }
                {

                    item == 2 ? <Box w={300} h={340} style={{ background: 'red' }}></Box> : null

                }
                {

                    item == 3 ? <>3</> : null

                }


            </Modal> */}
            <Box
                id='ecosystem'
                style={{
                    background: theme.fn.linearGradient(0, '#6016D900', '#0000004d'),
                }}
            >
                <Container py={40}  >
                    <Flex direction='row' mt={55}>
                        <Text ff="Outfit" fw={400} size={18} color="white.0" ta="center">
                            1chain.
                        </Text>
                        <Text ff="Outfit" fw={400} size={18} color="#8C57FF" ta="center">
                            AI
                        </Text>
                    </Flex>


                    <Box
                        style={{
                            width: 323,
                            borderBottom: `4px solid ${theme.colors.purpleGlow[6]}`,
                        }}

                    >
                        <Text ff="Outfit" fw={600} size={72} color="white.0" mt={-10}>
                            Ecosystem
                        </Text>
                    </Box>

                    <Flex wrap="wrap" gap={40} justify='center' mt={57} mb={220}>


                        <BackgroundImage className={classes.bgitem} src="images/one-chainai/svg/Acti1.svg" onClick={() => {
                            setItem(1)
                            open()
                        }} >
                            <Box className={classes.content}>
                                <Text ff="Open Sans" fw={700} size={24} ta="center" >
                                    ChatGM
                                </Text>
                                <Image mt={6} src='images/one-chainai/svg/chatgm.svg' height={70} fit='contain' />

                                <Text color='#ACA1F2' mt={6} ff="Open Sans" fw={400} size={10} ta="center">
                                    <span style={{ fontWeight: 700, color: 'white' }}>ChatGM</span> lets EVM or BTC wallet owners text, call, transfer crypto, and...
                                </Text>
                                <Anchor mt={6} fw={400} size={10} color='#ACA1F2' >
                                    Read more
                                </Anchor>

                            </Box>

                        </BackgroundImage>
                        <BackgroundImage className={classes.bgitem} src="images/one-chainai/svg/Acti2.svg" onClick={() => {
                            setItem(2)
                            open()
                        }} >
                            <Box className={classes.content}>
                                <Text ff="Open Sans" fw={700} size={24} ta="center">
                                    Cryptobot.Chat
                                </Text>
                                <Image mt={6} src='images/one-chainai/svg/cryptobot.chat.svg' height={70} fit='contain' />

                                <Text color='#DEB3E1' mt={6} ff="Open Sans" fw={400} size={10} ta="center">
                                    <span style={{ fontWeight: 700, color: 'white' }}>Cryptobot.Chat</span> uses 1Chain.AI to simplify crypto for everyone. Convert...
                                </Text>
                                <Anchor mt={6} fw={400} size={10} color='#DEB3E1' >
                                    Read more
                                </Anchor>

                            </Box>
                        </BackgroundImage>
                        <BackgroundImage className={classes.bgitem} src="images/one-chainai/svg/Acti3.svg" onClick={() => {
                            setItem(3)
                            open()
                        }} >
                            <Box className={classes.content}>

                                <Text ff="Open Sans" fw={700} size={24} ta="center">
                                    GamefiGuru
                                </Text>
                                <Image mt={6} src='images/one-chainai/svg/gameguru.svg' height={70} fit='contain' />

                                <Text color='#DA99BC'
                                    mt={6} ff="Open Sans" fw={400} size={10} ta="center">
                                    <span style={{ fontWeight: 700, color: 'white' }}>GamefiGuru</span> uses 1Chain.AI to help new players get started with blockchain...
                                </Text>
                                <Anchor mt={6} fw={400} size={10} color='#DA99BC' >
                                    Read more
                                </Anchor>


                            </Box>
                        </BackgroundImage>

                    </Flex>
                    <Box mb={100} mt={95}>
                        <TimeLine />
                    </Box>



                </Container>
            </Box >
        </>

    );
};
