import { Box, Container, Divider, Flex, List, MediaQuery, Text, createStyles, em, } from "@mantine/core"
import { theme } from "../../../theme-provider"
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Box
    >
      <Container  >
        <Text ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" ta='center'>
          Story and Future
        </Text>
        <Text ff="Outfit" fw={500} size={isMobile ? 25 : 30} color="purpleGlow.4" ta='center' >
          Our vision of the Roadmap
        </Text>
        <Flex ml='auto' mr='auto' maw={810} direction='column' align='center' mt={60}>

          <TimeLineItem listL={['Phase 1', '(Q2’ 2024)']} listR={[`Integrate 1chain.AI into ChatGM: Launch ChatGM as the first DApp utilizing 1chain.AI's Web3 AI Agent Protocol.`, `Launch ChatGM with 1chain.AI in-app assistant: Enable seamless AI-driven interactions for ChatGM users.`]} isStart={true} isCurState={false} isEnd={false} isPass={true} />
          <TimeLineItem listL={['Phase 2', '(Q3’ 2024 - Q1’ 2025)']} listR={[`Launch 1chain.AI Protocol SDK: Provide comprehensive SDKs for DApp developers to integrate AI functionalities.`, `Integrate 1chain.AI into 20+ DApps: Facilitate the adoption of 1chain.AI across multiple decentralized applications.`, `Expand APIs and SDK offerings: Enhance the developer toolkit with robust APIs and advanced SDKs.`]} isStart={false} isCurState={true} isEnd={false} isPass={false} />
          <TimeLineItem listL={['Phase 3', '(Q2’ - Q3’ 2025)']} listR={[`Launch On-Chain Data Services: Introduce decentralized data services powered by AI Oracles for secure and reliable data feeds.`, `Integrate 1chain.AI Protocol into 100+ DApps: Expand integration into market-leading CEXs, DEXs, and blockchain games, leveraging AI-driven capabilities.`]} isStart={false} isCurState={false} isEnd={false} isPass={false} />
          <TimeLineItem listL={['Phase 4', '(Q4’ 2025)']} listR={[`Mainnet Launch of DAFN and AI Oracles: Deploy DAFN (Decentralized AI Function Network) and AI Oracles on the mainnet, enabling sophisticated AI functionalities on-chain.`, `Feedback Loop Enhancement: Implement advanced feedback mechanisms to continuously improve AI models and user experience.`, `Pilot Marketplace for DApp Components: Test a marketplace platform for DApp components, providing developers with access to essential building blocks.`, `Launch a Marketplace for Web3 AI Plugins and DApps: Officially release a comprehensive marketplace, including launchpad services, to support the distribution and adoption of Web3 AI plugins and decentralized applications.`]} isStart={false} isCurState={false} isEnd={true} isPass={false} />


        </Flex>




      </Container >
    </Box >
  )
}
interface TimeLineProps {
  listL: string[];
  listR: string[];
  isStart: boolean;
  isEnd: boolean
  isPass: boolean
  isCurState: boolean;
}
const TimeLineItem = (props: TimeLineProps) => {
  const { classes, theme } = useStyles();

  return (
    <Flex
      dir='column'
      mt={10}
      justify={{ sm: 'space-between', base: 'flex-start' }}
    >

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Flex w='50%' direction='row' justify='space-between'>
          <Flex direction='column'>
            <Text ff="Outfit" fw={500} size={30} color="purpleGlow.4" lineClamp={1} >
              {props.listL[0]}
            </Text>
            <Text ff="Outfit" fw={500} size={30} color="white.0" lineClamp={1} >
              {props.listL[1]}
            </Text>
          </Flex>

        </Flex>


      </MediaQuery>
      <Flex mih={10} w={17} direction='column' align='center' justify='center' >
        {
          !props.isStart ? <Box style={{ width: 16, height: 16, borderRadius: 10 }} bg={props.isCurState ? 'purpleGlow.4' : '#291A54'} ></Box> : null
        }


        <Flex justify='center' pt={10} w={16} h='100%'>
          {
            props.isPass ? <Box h='100%' w={3} style={{ background: theme.fn.linearGradient(180, '#D4BFFA', '#644CFF') }} ></Box> : <Box h='100%' w={3} style={{ background: theme.fn.linearGradient(180, '#6E68B2b3', '#36186780') }} ></Box>
          }

        </Flex>

      </Flex>

      <Flex pl={{ sm: 80, base: 30 }} w={{ sm: '50%', base: '90%' }} direction='column' justify='flex-start'>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Flex direction='column' align='flex-start'>
            <Text ff="Outfit" fw={500} size={30} color="purpleGlow.4" lineClamp={1} >
              {props.listL[0]}
            </Text>
            <Text ff="Outfit" fw={500} size={30} color="white.0" lineClamp={1} >
              {props.listL[1]}
            </Text>
          </Flex>

        </MediaQuery>
        <List mb={props.isEnd ? 10 : 60} listStyleType="disc" ff="Outfit" fw={400} size={14} style={{ color: '#ffffff' }} >
          {
            props.listR.map((value) => {
              return <List.Item >
                {value}
              </List.Item>
            })
          }

        </List>
      </Flex>

    </Flex >
  )

}