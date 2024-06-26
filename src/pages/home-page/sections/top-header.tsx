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
            <Container py={80} >
                <Flex direction='column' align='center' mt={80} >
                    <Image src='images/one-chainai/white1chain.png' width={236} fit="contain" />
                    <Text ff="Outfit" fw={400} size={18} color="white.0" ta="center">
                        1ChainAi
                    </Text>

                </Flex>





            </Container>
        </Box>
    );
};
