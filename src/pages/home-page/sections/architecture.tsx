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
export const Architecture = () => {
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
            Architecture
          </Text>
        </Box>
        <Text ff="Open Sans" fw={400} size={14} color="white.2" mt={30}>
          1Chain AI is a Web3 AI protocol that helps DApp developers to simplify onboarding and enhance user experience for new crypto users by integrating in-app AI assistants.
        </Text>
        <Image src="images/one-chainai/svg/architecture.svg" maw={945} mt={74} mr='auto' ml='auto' mb={133} width='100%' fit="contain" />

      </Container>
    </Box>
  );
};
