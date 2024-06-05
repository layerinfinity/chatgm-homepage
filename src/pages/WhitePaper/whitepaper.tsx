import { Anchor, Box, Center, Container, Flex, Image, Space, Text, createStyles } from '@mantine/core';
import { ANDROID_STORE_URL, IOS_STORE_URL } from '~/configs';
import Typewriter from 'typewriter-effect';
import QRCode from "react-qr-code";


const useStyles = createStyles((theme) => ({
    phaseName: {
        fontFamily: 'Outfit',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: '25.5px',

    },


}));

export const WhitePaper = () => {
    const { classes, theme } = useStyles();

    return (
        <Box py={20}>

            <Container py={{ base: 145 }}  >
                <Flex direction='column' align='center' justify={'center'}>
                    <Image maw={491} fit="contain" src="images/white-paper.svg" alt="white paper" />
                    <Text mt={70} maw={670} align='center' className={classes.phaseName} color='dark.4'>
                        Our dedicated team is diligently working towards the launch of an exceptional product. Stay tuned for upcoming announcements as we have even more exciting things to reveal in the near future.
                    </Text>
                </Flex>
            </Container >
        </Box >
    );
};
