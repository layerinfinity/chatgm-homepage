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
        height: 180,
        background: theme.fn.linearGradient(270, '#7545FF66', '#B251FF66', '#FF85C766', '#FF41D566'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 6,
        boxShadow: `9px 10px 10px 0px #00000033`,
        color: `${theme.colors.white[0]}`

    }

}));
export const EcoSystem = () => {
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
                <Text ff="Open Sans" fw={400} size={14} color="white.2" mt={30}>
                    Bitcoin marketplace that connects buyers and sellers in your friend-list or from around the world. It allows users to trade Bitcoin using a wide range of payment methods, including bank transfers, digital wallets, and more.
                    It’s fast and super secure with 247 customer support
                </Text>

                <Flex wrap="wrap" gap={50} justify='flex-start' mt={57} mb={215}>
                    <Box className={classes.bgitem}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center">
                            Founding Team
                        </Text>
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Founding Team
                        </Text>
                        <Text ff="Open Sans" fw={400} size={16} ta="center">
                            (Trung, Aleks, Andy, Jeff)
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center">
                            Founding Team
                        </Text>
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Helsinki
                        </Text>
                        <Text ff="Open Sans" fw={400} ta="center">
                            Finland
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center">
                            Founding Team
                        </Text>
                        <Text ff="Open Sans" fw={700} size={20} ta="center">
                            Singapore
                        </Text>
                        <Text ff="Open Sans" fw={400} ta="center">
                            Singapore
                        </Text>
                    </Box>
                    <Box className={classes.bgitem}>
                        <Text ff="Open Sans" fw={700} size={24} ta="center">
                            Founding Team
                        </Text>
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
