import { Box, Container, Flex, List, MediaQuery, Text, createStyles, } from "@mantine/core"
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
        <Text ff="Outfit" fw={600} size={72} color="white.0" ta='center'>
          Story and Future
        </Text>
        <Text ff="Outfit" fw={500} size={32} color="purpleGlow.4" ta='center' >
          Our vision of the Roadmap
        </Text>
        <Flex ml='auto' mr='auto' w='100%' maw={810} direction='column' align='center' mt={60}>
          {/* <Container maw={808} mt={60} > */}
          <TimeLineItem listL={['Phase 1', '(Q2’ 2024)']} listR={['Integrate 1Chain AI into ChatGM as the first DApp utilizing 1Chain AI', 'Launch ChatGM with 1Chain AI in-app assistant']} isEnd={false} isCurState={true} />
          <TimeLineItem listL={['Phase 2', '(Q3’ 2024 - Q1’ 2025)']} listR={['Launch 1Chain AI Protocol SDK', 'Integrate 1Chain AI into 20+ DApps', 'Expand APIs and SDKs offering to DApp Developers']} isEnd={false} isCurState={false} />
          <TimeLineItem listL={['Phase 3', '(Q2’ - Q3’ 2025)']} listR={['Launch On-Chain Data Services', 'Integrate 1Chain AI Protocol into 100+ DApps including: Market-leading CEXs, DEXs, and Games']} isEnd={false} isCurState={false} />
          <TimeLineItem listL={['Phase 4', '(Q4’ 2025)']} listR={['Feedback Loop Enhancement', 'Pilot Marketplace for DApp Components', 'Launch a Marketplace (incl. Launchpad services) for Web3 AI Plugins and DApps']} isEnd={true} isCurState={false} />
          {/* </Container> */}

        </Flex>




      </Container >
    </Box >
  )
}
interface TimeLineProps {
  listL: string[];
  listR: string[];
  isEnd: boolean;
  isCurState: boolean;
}
const TimeLineItem = (props: TimeLineProps) => {
  const { classes, theme } = useStyles();
  return (
    <Flex
      w='100%'
      py={5}
      justify={{ sm: 'space-between', base: 'flex-start' }}
    >

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Flex style={{ width: 350 }} direction='row' justify='space-between'>
          <Flex direction='column'>
            <Text ff="Outfit" fw={500} size={30} color="purpleGlow.4" lineClamp={1} >
              {props.listL[0]}
            </Text>
            <Text ff="Outfit" fw={500} size={30} color="white.0" lineClamp={1} >
              {props.listL[1]}
            </Text>
          </Flex>
          <Flex direction='column' align='center' justify='center' w={50} h='100%' >
            {
              props.isCurState ? <Box w={3} mt={0} h='100%' mih={{ md: 146, base: 200 }} mb={0} style={{ background: theme.fn.linearGradient(180, '#D4BFFA', '#644CFF') }} ></Box> : <Box w={3} mt={0} h='100%' mih={{ md: 146, base: 200 }} mb={0} style={{ background: theme.fn.linearGradient(180, '#DFDFDF', '#A9A9A9') }} ></Box>
            }

            {
              !props.isEnd ? <Box mt={10} w={16} h={16} style={{ borderRadius: 8 }} bg={props.isCurState ? 'purpleGlow.4' : '#999999'} ></Box> : null
            }
          </Flex>
        </Flex>

      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Flex direction='column' align='center' justify='center' w={50} h='100%' >
          {
            props.isCurState ? <Box w={3} mt={0} h='100%' mih={{ md: 146, base: 200 }} mb={0} style={{ background: theme.fn.linearGradient(180, '#D4BFFA', '#644CFF') }} ></Box> : <Box w={3} mt={0} h='100%' mih={{ md: 146, base: 200 }} mb={0} style={{ background: theme.fn.linearGradient(180, '#DFDFDF', '#A9A9A9') }} ></Box>
          }

          {
            !props.isEnd ? <Box mt={10} w={16} h={16} style={{ borderRadius: 8 }} bg={props.isCurState ? 'purpleGlow.4' : '#999999'} ></Box> : null
          }
        </Flex>
      </MediaQuery>




      <Flex ml={20} direction='column' justify='flex-start' maw={302}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Flex style={{ width: 360 }} direction='column' align='flex-start'>
            <Text ff="Outfit" fw={500} size={30} color="purpleGlow.4" lineClamp={1} >
              {props.listL[0]}
            </Text>
            <Text ff="Outfit" fw={500} size={30} color="white.0" lineClamp={1} >
              {props.listL[1]}
            </Text>
          </Flex>

        </MediaQuery>

        <List listStyleType="disc" ff="Outfit" fw={400} size={14} style={{ color: '#ffffff' }} >
          {
            props.listR.map((value) => {
              return <List.Item >
                {value}
              </List.Item>
            })
          }

        </List>
      </Flex>

    </Flex>
  )

}