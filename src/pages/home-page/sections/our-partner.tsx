import { Box, Container, Flex, Image, Text, createStyles, px, useMantineTheme } from '@mantine/core';


const useStyles = createStyles((theme) => ({

    bgitem: {
        width: 165,
        height: 60,
        // background: theme.fn.linearGradient(180, '#8C57FF3d', '#54FCF23d'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 4,
        border: '1px solid #454C74',

        color: `${theme.colors.white[0]}`

    },


}));
export const OurPartner = () => {
    const { classes, theme } = useStyles();

    return (
        <Box
            pt={{ base: 40, md: 76 }}
            pb={{ base: 100, md: 148 }}

            style={{
                background: theme.fn.linearGradient(0, '#6016D900', '#0000004d'),
            }}
        >
            <Container  >
                <Text ff="Outfit" fw={600} size={72} style={{ lineHeight: '80px' }} color="white.0" ta="center">
                    Our Partner
                </Text>

                <Flex wrap="wrap" gap={50} justify='center' ml='auto' mr='auto' maw={595} mt={50}>
                    <Box className={classes.bgitem}>
                        <Image src="images/one-chainai/svg/parner/kyber.svg" width={165} fit="contain" />
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/one-chainai/svg/parner/awn.svg" width={165} fit="contain" />
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/one-chainai/svg/parner/gg.svg" width={165} fit="contain" />
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/one-chainai/svg/parner/matrix.svg" width={165} fit="contain" />
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/one-chainai/svg/parner/sandbox.svg" width={165} fit="contain" />
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/one-chainai/svg/parner/skymavis.svg" width={165} fit="contain" />
                    </Box>

                </Flex>


            </Container>
        </Box>
    );
};
