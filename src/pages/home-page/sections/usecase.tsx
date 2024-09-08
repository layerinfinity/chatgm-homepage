import { Box, Container, Flex, Image, List, MediaQuery, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem';
import { useMediaQuery } from '@mantine/hooks';


const useStyles = createStyles((theme) => ({
  heading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },
  },
  policyTitle: {

    fontFamily: "Outfit",
    fontSize: 30,
    lineHeight: '37px',
    color: theme.colors.purpleGlow[0],
    fontWeight: 500,
    marginLeft: 8
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
    lineHeight: '22px',
    // textAlign: 'justify',
  },

}));
export const UseCase = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);


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



        <Text style={{ textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
          Use Cases
        </Text>
        <List listStyleType="disc" ff="Open Sans" fw={700} size={14} style={{ color: '#ffffff' }} mt={30} maw={736}>
          <List.Item>
            <span>Web2 Use Cases: </span>
            <span style={{ fontWeight: 400 }}>1chain.AI’s Decentralized AI Fidelity Network (DAFN) enhances the accuracy of mainstream LLMs and customizable AI models, ensuring reliable data input processing and improving AI accuracy</span>
          </List.Item>
          <List.Item>
            <span>Web3 Use Cases: </span>
            <span style={{ fontWeight: 400 }}>Web3 Use Cases: 1chain.AI combines the Web3 AI Agent Protocol (WAAP) and DAFN to enhance blockchain applications' functionality and user experience.</span>
          </List.Item>
        </List>
        <Box mt={100}>
          <Text ff="Outfit" fw={500} size={isMobile ? 30 : 40} color="white.0" ta='center'>

            <span style={{ color: theme.colors.purpleGlow[0] }}>Web2 </span>
            <span >Use Cases</span>
          </Text>
          <Box mt={60}>
            <Text className={classes.policyTitle}>
              1. Enhancing AI Accuracy
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>Any organization using AI models can integrate DAFN to ensure the accuracy of their AI outputs.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >A financial institution using an AI model for fraud detection can leverage DAFN to validate AI decisions, reducing false positives and ensuring more accurate fraud detection.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Improves the reliability of AI predictions and enhances trust in AI-driven decisions.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              2. Data and Prompt Interpretation
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>Organizations can use DAFN to validate and interpret data inputs and AI-generated responses.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >A customer service chatbot can use DAFN to ensure accurate and contextually appropriate responses to user queries.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Enhances user experience by providing more accurate and reliable AI interactions.</span>
              </List.Item>
            </List>

          </Box>

        </Box>


        <Box mt={100} mb={100}>
          <Text ff="Outfit" fw={500} size={isMobile ? 30 : 40} color="white.0" ta='center'>

            <span style={{ color: theme.colors.purpleGlow[0] }}>Web3 </span>
            <span >Use Cases</span>
          </Text>
          <Box mt={60}>
            <Text className={classes.policyTitle}>
              1. Wallet Creation and Management
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>AI agents execute the creation and management of crypto wallets for users.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span > A new user setting up a crypto wallet receives AI assistance to ensure all security measures are followed.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Simplifies onboarding, reduces errors, and improves security.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              2. On-ramp and Off-ramp Solutions
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>Facilitates the conversion between fiat and crypto.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >Users can seamlessly convert fiat to crypto and vice versa, executed by AI agents, making the onboarding process smoother.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Enhances accessibility and user experience, attracting more new users to the platform.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              3. Liquidity Management
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>AI agents manage liquidity across decentralized exchanges. </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >Users receive AI-driven strategies to optimize their investments in liquidity pools.
                </span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Provides sophisticated tools to maximize returns and encourages engagement with DeFi platforms.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              4. Staking and Yield Farming
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>AI-assisted staking and yield farming strategies.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >Users are provided with AI-driven strategies to maximize staking rewards and yield farming opportunities.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Makes complex DeFi activities more accessible and profitable.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              5. Smart Contract Writing
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>AI models write smart contracts in different coding languages on any blockchain.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >A developer using 1chain.AI’s AI models can generate smart contracts in Solidity, Vyper, or Rust with high accuracy and security.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Ensures high-fidelity smart contract development, reducing risks and enhancing security.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              6. Data Feeds for Smart Contracts
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>Provides reliable AI-processed data for smart contracts.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >A decentralized application (dApp) uses AI-processed real-time data to execute functions accurately.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Ensures the accuracy and reliability of automated processes, enhancing trust in smart contract outcomes.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              7. Cross-chain Data Interoperability
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 18 }}>
                Use Case: </span>
              <span>Facilitates the exchange of data across different blockchain networks.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Example: </span>
                <span >Data from Ethereum can be accurately interpreted and utilized on the Binance Smart Chain through AI Oracles.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 18 }}>Benefit: </span>
                <span >Enhances interoperability and collaboration between various blockchain ecosystems.</span>
              </List.Item>
            </List>

          </Box>

        </Box>


      </Container >
    </Box >
  );
};
