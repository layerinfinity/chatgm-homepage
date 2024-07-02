import { Anchor, BackgroundImage, Box, Button, Center, Container, Flex, Image, Text, createStyles, useMantineTheme } from '@mantine/core';
import { TimeLine } from './timeline';
import { useDisclosure } from '@mantine/hooks';

import { useState } from 'react';
import Modal from 'react-modal';


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
    bgItemDetail: {
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
    },
    content: {
        padding: 26,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#ffffff'
    },


}));
const customStyles: Modal.Styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '00px',
        backgroundColor: 'transparent',
        border: 'none',
        overflow: 'auto',

    },

};
export const EcoSystem = () => {
    const { classes, theme } = useStyles();
    const [item, setItem] = useState(0)
    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {item == 1 ? <BackgroundImage w={{ sm: 410, base: 320 }} h={{ sm: 340, base: 340 }} className={classes.bgItemDetail} mx="auto" src="images/one-chainai/svg/Acti1Detail.svg"    >
                    <Box className={classes.content}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center" >
                            ChatGM
                        </Text>
                        <Image mt={15} src='images/one-chainai/svg/chatgm.svg' height={70} fit='contain' />

                        <Text color='#ACA1F2' mt={15} ff="Open Sans" fw={400} size={10} ta="center">
                            <span style={{ fontWeight: 700, color: 'white' }}>ChatGM</span> lets EVM or BTC wallet owners text, call, transfer crypto, and chat with users of Telegram and Whatsapp. With a smart in-app 1Chain.AI assistant, ChatGM automatically enables safe cryptocurrency storage and transactions across all EVM Chains, Bitcoin Mainnet and Lightning Network.
                        </Text>
                        <Button onClick={() => { window.open('https://app.chatgm.com', '_blank') }} variant="outline" radius={15} color='dark.9' mt={15} w={100} h={30}>
                            <Text ff='Outfit' fw={400} size={12}>
                                Start now
                            </Text>
                        </Button>

                    </Box>
                </BackgroundImage> : <></>}
                {item == 2 ? <BackgroundImage w={{ sm: 500, base: 320 }} h={{ sm: 340, base: 400 }} className={classes.bgItemDetail} src="images/one-chainai/svg/Acti2Detail.svg"   >
                    <Box className={classes.content}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center" >
                            Cryptobot.Chat
                        </Text>
                        <Image mt={6} src='images/one-chainai/svg/cryptobot.chat.svg' height={70} fit='contain' />
                        <Text color='#ACA1F2' mt={6} ff="Open Sans" fw={400} size={10} ta="center">
                            <span style={{ fontWeight: 700, color: '#B894F5' }}>Cryptobot.Chat</span> uses 1Chain.AI to simplify crypto for everyone. Convert local currencies to crypto and vice versa, complete 1-step KYC, trade popular and alternative crypto assets (like altcoins and memecoins), and engage in yield farming (a kind of crypto saving) or airdrop hunting (complete tasks to get crypto rewards. Execute all tasks, from easy to complicated, on any blockchain, CEX, or DEX with simple AI chat commands. No more going through endless buttons, steps or different platforms – just chat with your CryptoBot and get all things crypto done effortlessly and securely.
                        </Text>
                        <Text mt={6} fw={700} size={32} color='#8E6B9E33' >
                            Coming soon
                        </Text>
                    </Box>
                </BackgroundImage> : <></>}
                {item == 3 ? <BackgroundImage w={{ sm: 436, base: 320 }} h={{ sm: 340, base: 360 }} className={classes.bgItemDetail} src="images/one-chainai/svg/Acti3Detail.svg"   >
                    <Box className={classes.content}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center" >
                            GamefiGuru
                        </Text>
                        <Image mt={10} src='images/one-chainai/svg/gameguru.svg' height={70} fit='contain' />
                        <Text color='#ACA1F2' mt={10} ff="Open Sans" fw={400} size={10} ta="center">
                            <span style={{ fontWeight: 700, color: '#FF80AB' }}>GamefiGuru</span> uses 1Chain.AI to help new players get started with blockchain games. It provides easy onboarding, collects info about all the best pre-vetted web3 games, and guides players through necessary tasks to play and earn tokens or get whitelisted for pre-launched games. All of this is done through a simple AI chat interface, making it simple and secure for gamers.
                        </Text>
                        <Text mt={10} fw={700} size={32} color='#9E6B8D33' >
                            Coming soon
                        </Text>
                    </Box>
                </BackgroundImage> : <></>}

            </Modal>
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
                            openModal()
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
                            openModal()
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
                            openModal()
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
