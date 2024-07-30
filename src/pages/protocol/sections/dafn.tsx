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
    marginLeft: 4
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
    textAlign: 'justify',
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
        <Box
          style={{
            width: 323,
            borderBottom: `4px solid ${theme.colors.purpleGlow[6]}`,
          }}
        >
          <Text ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
            DAFN
          </Text>
        </Box>

        <Text ff="Open Sans" fw={400} size='0.875rem' color="white.2" mt={30}>
          AI fidelity refers to the degree of accuracy, reliability, and consistency with which an AI system understands prompts, interprets data, and executes tasks. It ensures that AI models provide precise, error-free outputs and make accurate decisions based on both on-chain and off-chain data. Current AI models, such as GPT-4, have hallucination rates ranging from 3% to 27%, with most models averaging around 10-15%​​. For blockchain applications, where transactions are irreversible, the ideal AI fidelity rate should be close to 99% to ensure precision and trustworthiness. High AI fidelity is crucial for maintaining trust and security, enabling the mass adoption of AI in web3. This, in turn, paves the way for broader adoption of crypto via AI, as reliable AI systems become integral to crypto infrastructures, apps, and interactions, making them more user-friendly and secure.
        </Text>
        <Text ff="Open Sans" fw={400} size='0.875rem' color="white.2" mt={20}>
          DAFN (Decentralized AI Fidelity Network) leverages a network of decentralized nodes to validate AI-generated responses, reducing the risk of AI hallucinations and improving the reliability and security of AI outputs. This decentralized approach ensures that AI systems remain accurate and trustworthy, further enhancing the integration of AI in blockchain applications and supporting the widespread use of cryptocurrency through secure and reliable AI interactions.
        </Text>
        <Box mt={100}>
          <Text ff="Outfit" fw={500} size={40} color={theme.colors.purpleGlow[0]} mt={-10} align='center'>
            Core Components
          </Text>
          <Box pt={15}>
            <Text ml={4} className={classes.policySubTitle}>
              1. In-app AI Assistants
            </Text>
            <Text className={classes.policycontent}>
              AI Assistants are customizable agents embedded within dApps, designed to assist users with fundamental tasks such as wallet creation, fiat-on/off-ramp, KYC, swapping, transfer, and more.
            </Text>
          </Box>
          <Box pt={15}>
            <Text ml={4} className={classes.policySubTitle}>
              2. Large Action Models (LAMs)
            </Text>
            <Text className={classes.policycontent}>
              LAMs are advanced AI models trained, using an aggregation of LLMs, to execute blockchain tasks, ensuring convenience, accuracy, and security.
            </Text>
          </Box>
          <Box pt={15}>
            <Text ml={4} className={classes.policySubTitle}>
              3. Cross-Blockchain Interoperability
            </Text>
            <Text className={classes.policycontent}>
              The protocol supports interoperability across multiple blockchains, focusing on EVM L1s and L2s, and BTC layers, allowing seamless interactions across the biggest and most liquid ecosystems.
            </Text>
          </Box>
        </Box>
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

          <Flex direction='column' align='center' mt={100} bg='#02000733' py={60} >
            <Image src='images/one-chainai/dafn/dafn3.png' style={{ width: '70%', height: 'auto' }} fit='contain' />
            <Image mt={146} src='images/one-chainai/dafn/dafn4.png' style={{ width: '70%', height: 'auto' }} fit='contain' />
          </Flex>



        </Box>
        <Box mt={100} mb={92}>
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
