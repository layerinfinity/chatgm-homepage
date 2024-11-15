import { Box, Container, Flex, Image, MediaQuery, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: "Outfit",
    fontSize: 72,
    fontWeight: 600,
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },

  },
  subHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 24,
      lineHeight: '2rem',
    },
  },
  policyTitle: {
    fontFamily: "Outfit",
    fontSize: 30,
    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[0],
    fontWeight: 500,
    marginLeft: 6
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: 16,

    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[1],
    fontWeight: 700,
  },
  policycontent: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: theme.colors.white[2],
    fontWeight: 400,
    // textAlign: 'justify',
  },
  item: {
    maxWidth: 302,
    minHeight: 305
  },

}));

export const DAFN = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);


  return (
    <Box
    >
      <Container mt={150} >
        <Text ff="Outfit" fw={400} size={18} color="white.0" ta="left">
          <span >Decentralized </span>
          <span style={{ color: theme.colors.purpleGlow[0] }}>AI </span>
          <span >Fidelity Network</span>
        </Text>

        <Text style={{ textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
          DAFN
        </Text>


        <Text ff="Open Sans" fw={400} size='14px' color="white.2" mt={30}>
          AI fidelity refers to the accuracy, reliability, and consistency with which an AI system understands prompts, interprets data, and executes tasks. Ensuring precise, error-free outputs is crucial, especially for financial transactions involving both fiat and crypto. According to Fast Company, current leading AI models, like GPT-4, exhibit hallucination rates ranging from 3% for simple tasks to 27% for more complex ones, with an average rate of 10-15%​​​​. This high error rate is a significant obstacle to achieving Interactive AI, the next generation of Generative AI, where AI models autonomously execute tasks by communicating with external software, platforms, apps, and dApps, as envisioned by Google DeepMind's co-founder Mustafa Suleyman. For crypto, where transactions are irreversible on the blockchain, the need to achieve near-100% AI fidelity is parallel to the fundamental blockchain principles of verification and consensus. High AI fidelity ensures precision and trustworthiness, essential for maintaining trust and security in web3 applications.
        </Text>
        <Text ff="Open Sans" fw={400} size='14px' color="white.2" mt={20}>
          DAFN leverages decentralized nodes to validate AI-generated responses from prompt inputs with on-chain and off-chain data, reducing hallucinations and enhancing reliability. This approach ensures AI systems maintain over 99% accuracy and consistency, integrating securely with existing core crypto infrastructures and decentralized applications. By aligning the need for high AI fidelity with blockchain's verification and consensus mechanisms, DAFN enhances the reliability of AI interactions, driving the mass adoption of crypto by making it accessible and secure for billions of new users using AI.
        </Text>

        <Box mt={100} >
          <Flex justify='center'>
            <Text maw={600} ff="Outfit" fw={500} size={isMobile ? 30 : 40} color="white.0" ta='center'>
              <span >The Process of  </span>
              <span style={{ color: theme.colors.purpleGlow[0] }}>1chain.AI's
                Decentralized AI Fidelity Network</span>
            </Text>
          </Flex>
          <Image mt={100} src='images/one-chainai/dafn/dafn1.png' width='100%' fit='contain' />
          <Container style={{ position: 'relative' }}>
            {!isMobile ? <>

              <Box
                h={1700}
                w={1700}
                left={-1000}
                top={-550}

                style={{
                  background: theme.fn.radialGradient('#8D57FF66', '#8657FF0d', '#8357FF00', '#8357FF00'),
                  position: 'absolute',

                }}>

              </Box>

              <Image display='inherit' pos='absolute' left={{ md: -200, base: -60 }} top={{ md: 80, base: 120 }} maw={{ md: 463, base: 300 }} fit="contain" src="images/one-chainai/robot.png" alt="" />
            </> : <></>

            }

            <Flex justify='end'>
              <Image style={{ width: '65%' }} mt={100} src='images/one-chainai/dafn/dafn2.png'

                fit="contain" />
            </Flex>

          </Container>

          <Box mt={100}>
            <Text className={classes.policyTitle}>
              1. Input Aggregation
            </Text>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  Prompt/ User Input:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                DAFN receives user-generated prompts, which are the commands and queries that dApp developers or end-users interact with when communicating with the LLMs. These inputs are crucial for tailoring the AI responses to specific user needs and ensuring the relevance and accuracy of the generated outputs.
              </Text>
            </Box>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  Off-Chain Real-World Data:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                DAFN aggregates high-quality off-chain data from reputable sources like Chainlink and PYTH. These data aggregators collect information from various centralized and decentralized trading platforms, ensuring a comprehensive and accurate data set.
              </Text>
            </Box>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  On-Chain Data:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                On-chain data is sourced from Celestia's Data Availability layer, which provides reliable and accessible blockchain data necessary for validating and interpreting AI outputs.
              </Text>
            </Box>
            <Text mt={45} className={classes.policyTitle}>
              2. LLM-run Node Aggregation
            </Text>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  Node Operators:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                Professional node operators run different Large Language Models (LLMs) to interpret and process the aggregated data. Each node collects and verifies data from multiple sources, eliminating outliers and ensuring data integrity. The most likely result is aggregated from the outputs of these diverse LLMs.
              </Text>
            </Box>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  Reputation System:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                A reputation system evaluates node operators based on their performance and reliability, ensuring that only high-quality data is provided to the network. This system helps maintain the overall trustworthiness and security of the data.
              </Text>
            </Box>

            <Text mt={45} className={classes.policyTitle}>
              3. AI Oracle Network Aggregation
            </Text>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  AI Oracles:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                AI Oracles process and validate the aggregated data from node operators. They use advanced AI models, powered by an aggregation of multiple LLMs, to interpret both on-chain and off-chain data, ensuring that the AI outputs are accurate and reliable.
              </Text>
            </Box>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  Fidelity Tuning:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                This method significantly enhances AI models' ability to recall accurate information, reducing errors and ensuring consistency in outputs. Fidelity Tuning involves fine-tuning millions of specialized adapters, such as Low-Rank Adapters (LoRAs), to embed precise facts into the model. Each adapter functions like an expert memory unit, specializing in various factual domains. During inference, the model retrieves the most relevant experts at each layer, ensuring the integration of accurate data and prompt interpretations. This approach results in a sparsely activated model, known as the Mixture of Fidelity Experts (MoFE), which scales to an enormous number of parameters at a fixed computational inference cost. Fidelity Tuning prioritizes exact facts over nearly correct answers, embedding precise factual data directly into the LLMs’ core. This ensures that AI models can recall specific blockchain-related information accurately while maintaining general reasoning capabilities. It is ideal for use cases requiring high factual accuracy in web3 and crypto applications, such as DeFi, smart contract execution, and other blockchain-based processes.
              </Text>
            </Box>
            <Flex direction='column' align='center' py={40}>
              <Image src='images/one-chainai/dafn/dafn3.png' style={{ width: '70%', height: 'auto' }} fit='contain' />
            </Flex>
            <Box pt={15}>
              <Text className={classes.policySubTitle}>
                <li>
                  Consensus Mechanism:
                </li>
              </Text>
              <Text className={classes.policycontent}>
                The network uses a consensus mechanism to ensure the reliability and accuracy of AI-generated responses through a combined cross-referencing and self-referencing process. Based on prompt, on- and off-chain data sources, AI-generated responses are aggregated and cross-referenced among nodes that run multiple LLMs to verify consistency and reduce errors. Additionally, the AI model performs self-referencing by validating its outputs against its internal factual memory, ensuring alignment with previously learned information. This dual-layer validation process guarantees high AI fidelity and accurate interpretation and execution.
              </Text>
            </Box>


          </Box>

          <Flex direction='column' align='center' py={40} >
            <Image src='images/one-chainai/dafn/dafn4.png' style={{ width: '70%', height: 'auto' }} fit='contain' />
          </Flex>



        </Box>
        <Box mt={60} mb={92}>
          <Text ff="Outfit" fw={500} size={isMobile ? 30 : 40} color="white.0" ta='center'>
            <span style={{ color: theme.colors.purpleGlow[0] }}>AI </span>
            <span >Oracles</span>
          </Text>
          <Box pt={45}>
            <Text className={classes.policyTitle}>
              1. Functionality
            </Text>
            <Text pt={15} className={classes.policycontent}>
              AI Oracles are validated AI outputs that can be used by smart contracts to execute functions requiring accurate AI-processed data interpretation.
            </Text>
            <Text mt={45} className={classes.policyTitle}>
              2. Validation Process
            </Text>
            <Text pt={15} className={classes.policycontent}>
              The validation process involves cross-referencing AI outputs with multiple data sources and achieving consensus among nodes. This is done through a dual mechanism: Cross-Reference with other nodes and Self-Reference and Aggregation. These methods ensure the reliability and precision of the data before it is used in smart contracts.
            </Text>

          </Box>
          <Flex justify='center'>
            <Image style={{ width: '80%' }} mt={100} src='images/one-chainai/oracles.png'

              fit="contain" />
          </Flex>



        </Box>

      </Container >
    </Box >
  );
};
