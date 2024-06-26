import { Box, Container, Flex, Image, Text, createStyles, useMantineTheme } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    heading: {
        [theme.fn.smallerThan('md')]: {
            fontSize: 40,
            lineHeight: '2.5rem',
        },
    },
    bgitem: {
        width: 220,
        height: 220,
        background: theme.fn.linearGradient(180, '#8C57FF3d', '#54FCF23d'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 6,
        boxShadow: `5px 4px 40px 2px #B251FF33`,
        color: `${theme.colors.white[0]}`

    },
    bginsideitem: {
        width: 220,
        height: 220,
        background: theme.fn.linearGradient(180, '#8C57FF3d', '#54FCF23d'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 6,
        boxShadow: `5px 4px 40px 2px #B251FF33`,
        color: `${theme.colors.white[0]}`

    }

}));
export const OurPartner = () => {
    const { classes, theme } = useStyles();

    return (
        <Box
            style={{
                background: theme.fn.linearGradient(0, '#6016D900', '#0000004d'),
            }}
        >
            <Container py={40} >
                <Text ff="Outfit" fw={600} size={72} color="white.0" ta="center" mt={40}>
                    Our Partner
                </Text>

                <Flex wrap="wrap" gap={50} justify='flex-start' mt={45} mb={50}>
                    <Box className={classes.bgitem}>
                        <Image src="images/bakers/axie-infinity.png" width={190} fit="contain" />
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Founding Team
                        </Text>
                        <Text ff="Open Sans" fw={400} size={16} ta="center">
                            (Trung, Aleks, Andy, Jeff)
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image
                            src="images/bakers/courage-ventures.png"
                            width={190}
                            fit="contain"
                        />
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Helsinki
                        </Text>
                        <Text ff="Open Sans" fw={400} ta="center">
                            Finland
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/bakers/parsig.png" width={190} fit="contain" />
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Singapore
                        </Text>
                        <Text ff="Open Sans" fw={400} ta="center">
                            Singapore
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Image src="images/bakers/cvvc.png" width={190} fit="contain" />
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Zug
                        </Text>
                        <Text ff="Open Sans" fw={400} ta="center">
                            Switzerland
                        </Text>
                    </Box>
                </Flex>


            </Container>
        </Box>
    );
};
