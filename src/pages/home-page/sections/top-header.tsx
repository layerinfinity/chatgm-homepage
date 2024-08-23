import { Box, Button, Container, Flex, Image, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Typewriter from 'typewriter-effect';
import { HowItWork } from './howitwork';
const useStyles = createStyles((theme) => ({

}));
export const TopHeader = () => {
    const { classes, theme } = useStyles();
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    return (
        <Box
            pb={isMobile ? 50 : 100}

            style={{
                background: ' linear-gradient(180deg, rgba(0,0,0,0) , rgba(144, 144, 144, 0.1) )',
            }}
        >
            <Container>
                <Text mt={55} ff="Outfit" fw={400} size={18} color={theme.colors.white[0]} ta="left" style={{ lineHeight: '22px' }}>
                    1chain.AI
                </Text>

                <Text style={{ lineHeight: '80px', textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" >
                    Cryptobot.Chat
                </Text>
                <Text color={theme.colors.teal[2]} style={{ lineHeight: '22.68px', marginTop: '30px' }}>
                    Grow Your Wealth with Expertly Crafted Automated Bots
                </Text>

                <Text ff="Open Sans" fw={400} size='14px' color="white.2" mt={30} style={{ lineHeight: '19.07px' }}>
                    Cryptobot.Chat uses 1Chain.AI to simplify crypto for everyone. Convert local currencies to crypto and vice versa, complete 1-step KYC, trade popular and alternative crypto assets (like altcoins and memecoins), and engage in yield farming (a kind of crypto saving) or airdrop hunting (complete tasks to get crypto rewards. Execute all tasks, from easy to complicated, on any blockchain, CEX, or DEX with simple AI chat commands. No more going through endless buttons, steps or different platforms – just chat with your CryptoBot and get all things crypto done effortlessly and securely.
                </Text>
            </Container>
            {/* <HowItWork /> */}
        </Box>
    );
};
