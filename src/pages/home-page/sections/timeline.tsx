import { Box, Container, Flex, Text, createStyles } from "@mantine/core"
import { theme } from "../../../theme-provider"
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
export const TimeLine = () => {
  const { classes, theme } = useStyles();
  return (
    <Box

    >
      <Container  >
        <Text ff="Outfit" fw={600} size={72} color="white.0" mt={40} ta='center'>
          Story and Future
        </Text>
        <Text ff="Outfit" fw={500} size={32} color="purpleGlow.4" ta='center' >
          Our vision of the Roadmap
        </Text>
        <Container mt={60}>
          <TimeLineItem />
          <TimeLineItem />
          <TimeLineItem />
        </Container>



      </Container >
    </Box >
  )
}
const TimeLineItem = () => {
  const { classes, theme } = useStyles();
  return (
    <Flex direction='row' align='center' justify='space-around' py={10} pos='relative'>
      <Flex direction='column' align='flex-start'>
        <Text ff="Outfit" fw={500} size={30} color="purpleGlow.4" >
          Phase 1
        </Text>
        <Text ff="Outfit" fw={500} size={30} color="white.0" >
          (Q1 2024)
        </Text>
      </Flex>
      <Flex direction='column' align='flex-start' w={16} h='100%' bg='red' pos='inherit'>
        <Box w={3} mt={0} mb={0} bg='#999999' ></Box>
        <Box w={16} h={16} bg='#999999' ></Box>
      </Flex>
      <Flex ml={20} direction='column' justify='flex-start' align='flex-start' maw={302}>
        <Text ff="Outfit" fw={400} size={14} color="white.0" >
          - Cross-Platform Messaging Integration
        </Text>
        <Text ff="Outfit" fw={400} size={14} color="white.0" >
          - Fully Anonymous and Flexible Sign-up Registration
        </Text>
        <Text ff="Outfit" fw={400} size={14} color="white.0" >
          - Encrypted Messaging and Calls
        </Text>

      </Flex>

    </Flex>
  )

}