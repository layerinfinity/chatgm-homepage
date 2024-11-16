/* eslint-disable react/no-unescaped-entities */
import { Container, Space, Stack, Text, Title, createStyles, Box, Flex, Image } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: "Outfit",
    fontSize: 72,
    fontWeight: 600,
    // lineHeight: '5rem',
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },

  },
  subHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
  policyTitle: {
    fontFamily: "Outfit",
    fontSize: '40px',
    // lineHeight: '3rem',
    color: theme.colors.white[0],
    fontWeight: 500,
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: '1.125rem',

    // lineHeight: '3rem',
    color: theme.colors.white[0],
    fontWeight: 700,
  },
  policycontent: {
    fontFamily: "Open Sans",
    fontSize: '16px',
    color: theme.colors.white[2],
    fontWeight: 400,
    // textAlign: 'justify',
    lineHeight: '1.362rem',
  },
}));

const Mission = () => {
  const { classes, theme } = useStyles();

  return (
    <Box
    >
      <Box style={{ position: 'absolute', height: 760, width: '100%', background: theme.fn.linearGradient(0, '#6016D900', '#000000FF'), zIndex: -1 }}>

      </Box>
      <Space h={140} />
      <Container>
        <Stack px="lg">
          <Title ta="center" color="white.0" className={classes.heading}>Mission of 1chain.AI</Title>
          <Box>
            {/* 1 */}
            <Box mt={45} px={25} pb={45} pt={20} style={{ background: theme.fn.linearGradient(90, '#0D042F00', '#331B6F80'), borderRadius: 50 }}>
              <Flex pl={40} gap={15} h={70} direction='row' align='center'>
                <Image src="images/one-chainai/svg/triangle.svg" width={32} fit="contain" />
                <Text className={classes.policyTitle} style={{ color: 'white' }}>
                  Problems
                </Text>
              </Flex>

              <Box pt={15}>
                <Flex wrap={{ base: 'wrap', sm: 'nowrap' }} display='flex' dir='row' gap={20} >
                  <Box style={{ borderRadius: 20, background: '#8A32324d', overflow: 'hidden' }}>
                    <Flex h={70} justify='center' bg='#CC434380' align='center'>
                      <Text className={classes.policySubTitle}>
                        1. Web3 Onboarding Complexity
                      </Text>
                    </Flex>
                    <Text pt={10} pb={40} px={25} className={classes.policycontent} style={{ textAlign: 'center', color: '#BC8888' }}>
                      The steep learning curve for new users hinders mainstream adoption and lowers retention rates for new crypto services. Users often find it challenging to navigate and understand the intricacies of blockchain technology.
                    </Text>
                  </Box>
                  <Box style={{ borderRadius: 20, background: '#8A32324d', overflow: 'hidden' }}>
                    <Flex h={70} justify='center' bg='#CC434380' align='center'>
                      <Text className={classes.policySubTitle}>
                        2. Irreversible Mistakes
                      </Text>
                    </Flex>
                    <Text pt={10} pb={40} px={25} className={classes.policycontent} style={{ textAlign: 'center', color: '#BC8888' }}>
                      New crypto users fear making irreversible errors on the blockchain, often due to a lack of knowledge and poor UI/UX. These mistakes can lead to loss of assets and discourage users from engaging with blockchain technologies.
                    </Text>
                  </Box>

                </Flex>
                <Box mt={20} style={{ borderRadius: 20, background: '#8A32324d', overflow: 'hidden' }}>
                  <Flex h={70} justify='center' bg='#CC434380' align='center'>
                    <Text className={classes.policySubTitle}>
                      3. Technical Complexity of AI
                    </Text>
                  </Flex>

                  <Text pt={10} pb={40} px={25} className={classes.policycontent} style={{ textAlign: 'center', color: '#BC8888' }}>
                    Integrating AI into crypto-related dApps is a challenging process that requires specialized knowledge, limiting broader adoption. The risk of AI hallucinations is particularly concerning in sectors like crypto and fintech, where errors can lead to severe financial consequences. According to Fast Company, current AI models can exhibit hallucinations up to 27% of the time on complex tasks, highlighting the need for high-fidelity AI outputs in environments where precision is critical.
                  </Text>
                </Box>

              </Box>

            </Box>

            {/* 2 */}
            <Flex mt={50} direction='column' pos='relative' >
              <Box w={{ base: '100%', md: '50%', sm: '50%' }} px={25} pb={45} pt={20} style={{ background: theme.fn.linearGradient(90, '#0D042F00', '#331B6F80'), borderRadius: 50 }}>
                <Flex pl={40} gap={15} h={70} direction='row' align='center'>
                  <Image src="images/one-chainai/svg/shield-bolt.svg" width={32} fit="contain" />
                  <Text className={classes.policyTitle} style={{ color: 'white' }}>
                    Mission
                  </Text>
                </Flex>
                <Text pt={15} className={classes.policycontent}>
                  1chain.AI’s mission is to revolutionize web3 mass adoption by integrating advanced AI into decentralized applications, making blockchain technology accessible, user-friendly, and secure for mainstream consumers and developers. As highlighted by Mustafa Suleyman, co-founder of Google DeepMind and CEO of Microsoft AI, the next generation of Generative AI—Interactive AI—will enable AI agents to autonomously execute tasks by communicating with external systems, enhancing user interaction and functionality. 1chain.AI leverages decentralization to ensure secure and accurate AI execution, particularly in the financially impactful and security-intensive sectors of crypto and fintech. By building trust and lowering the entry barrier through reliable AI, 1chain.AI aims to transform the Web3 landscape and deliver mass mainstream crypto adoption.
                </Text>
              </Box>
              <Image pos={{ base: 'relative', sm: 'absolute' }} top={0} right='-30%' src="images/one-chainai/Group.png" width='76%' />
            </Flex>


            {/* 3 */}
            <Box mt={50} px={25} pb={45} pt={20} style={{ background: theme.fn.linearGradient(90, '#0D042F00', '#331B6F80'), borderRadius: 50 }}>
              <Flex pl={40} gap={15} h={70} direction='row' align='center'>
                <Image src="images/one-chainai/svg/stopwatch.svg" width={32} fit="contain" />
                <Text className={classes.policyTitle} style={{ color: 'white' }}>
                  Timing
                </Text>
              </Flex>
              <Text pt={15} className={classes.policycontent}>
                As AI development accelerates toward Artificial General Intelligence (AGI), regulatory challenges in the US and China limit the seamless integration of AI with Web3. Operating outside these regions, 1chain.AI seizes the opportunity to establish a competitive advantage in both Web2 and Web3 markets, with an eye on the future of Web3 AGI. By positioning itself as a core AI infrastructure for Web3, 1chain.AI aims to incorporate top-tier Large Language Models (LLMs) across major Layer 1s, Layer 2s, dApps, and other key infrastructures. With a commitment to delivering over 99% accuracy in AI outputs, 1chain.AI focuses on ensuring reliable and precise task execution, critical for high-stakes applications in crypto and fintech. This emphasis on high-fidelity not only enhances current AI capabilities but also prepares for a future where trustworthy AGI becomes a reality.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Space h={140} />
    </Box>
  );
};

export default Mission;
