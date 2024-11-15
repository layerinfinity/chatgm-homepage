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
        <Flex direction='row'>
          <Text ff="Outfit" fw={400} size={16} color="white.0" ta="center">
            1chain.
          </Text>
          <Text ff="Outfit" fw={400} size={16} color="#8C57FF" ta="center">
            AI
          </Text>
        </Flex>

        <Text style={{ textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
          Use Cases
        </Text>
        <List listStyleType="disc" ff="Open Sans" fw={700} size={14} mt={30} >
          <List.Item style={{ color: '#FCD667' }}>
            <span>Web2 Use Cases: </span>
            <span style={{ fontWeight: 400, color: '#ffffff' }}>1chain.AI’s Decentralized AI Fidelity Network (DAFN) offers a Platform-as-a-Service (PaaS) that enhances AI model accuracy, reliability, and scalability in the fintech industry. By providing high-fidelity AI outputs, DAFN enables financial institutions to leverage AI securely and efficiently.</span>
          </List.Item>
          <List.Item style={{ color: '#FCD667' }}>
            <span>Web3 Use Cases: </span>
            <span style={{ fontWeight: 400, color: '#ffffff' }}>1chain.AI empowers dApp developers by integrating the Web3 AI Agent Protocol (WAAP) and the Decentralized AI Fidelity Network (DAFN) to enhance the functionality and user experience of blockchain applications. These advanced AI technologies provide developers with robust tools for automating smart contracts, optimizing liquidity management, enhancing data feeds, and streamlining onboarding processes. By delivering AI-driven solutions, 1chain.AI ensures that dApps can offer seamless, secure, and efficient services, benefiting both developers and end-users. 1chain.AI uses AI to bridge the gap between Web2 and Web3, making blockchain applications more accessible and reliable.</span>
          </List.Item>
        </List>
        <Box mt={100}>
          <Text ff="Outfit" fw={500} size={isMobile ? 30 : 40} color="white.0" ta='center'>

            <span style={{ color: theme.colors.purpleGlow[0] }}>Web2 </span>
            <span >Use Cases</span>
          </Text>
          <Box mt={60}>
            <Text className={classes.policyTitle}>
              1. Custom Model Fine-Tuning for Risk Assessment
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>Financial institutions can fine-tune AI models for precise risk assessment and management.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span >A bank can fine-tune an AI model to evaluate the risk profiles of loan applicants, ensuring accurate credit scoring and risk mitigation.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Improves the accuracy of risk assessment models, reducing defaults and increasing the reliability of lending decisions.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Subscription Fees and Customization Charges: </span>
                <span >Financial institutions could subscribe to a Platform-as-a-Service, paying a base fee for access to DAFN setups. Additional charges could apply for fine-tuning models to specific datasets or integrating unique risk assessment algorithms.</span>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              2. Data Integration and AI Inference for Fraud Detection
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>Financial services can integrate diverse datasets and use AI inference to detect fraudulent activities in real-time.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span >A payment processing company can use DAFN to aggregate transaction data and infer potential fraud, flagging suspicious activities for further investigation.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Enhances the detection and prevention of fraud, protecting both the institution and its customers.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Usage-Based Fees and Premium Analytics: </span>
                <span >Companies can be charged based on the volume of data processed or the number of fraud detection inquiries. Premium analytics and real-time monitoring services can be offered as a higher-tier subscription.</span>
              </List.Item>
            </List>
          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              3. AI Model Verification and Validation for Compliance
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>Banks and financial institutions can utilize DAFN to verify and validate AI models, ensuring they meet regulatory requirements.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span >A trading firm can validate its AI models for algorithmic trading, ensuring compliance with financial regulations and reducing the risk of market manipulation.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Ensures that AI models adhere to strict regulatory standards, mitigating legal risks and promoting ethical AI use.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Usage-Based Fees and Premium Analytics: </span>
                <span >Charge a fee for compliance verification services, including regular audits and certifications of AI models. Additional charges could be based on the frequency and complexity of compliance checks.</span>
              </List.Item>
            </List>
          </Box>
          <Box mt={45}>
            <Text className={classes.policyTitle}>
              4. Scalable AI Infrastructure for Personalized Banking
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>Financial institutions can leverage DAFN's scalable infrastructure for personalized banking services.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span >A digital bank can scale its AI-driven recommendation engine, offering personalized financial products and services based on customer data.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Enhances customer engagement and satisfaction by providing tailored financial solutions, fostering customer loyalty and trust.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Usage-Based Fees and Premium Analytics: </span>
                <span >Offer a licensing model where banks/fintech companies pay for the platform's infrastructure. Revenue-sharing agreements could also be established for personalized financial products, where the platform earns a percentage of the generated revenue.</span>
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
              1. Seamless Web3 Onboarding
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>AI agents streamline the onboarding process for dApp developers by facilitating crypto wallet creation, fiat-to-crypto conversions, and KYC compliance.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span > Unlike Metamask and the vast majority of crypto applications, which require users to manually manage wallet setup and onboarding, 1chain.AI offers a chat-based AI assistant that developers can integrate into their dApps. This assistant helps users execute tasks in the setup process, KYC verification, and fiat-to-crypto transactions, providing a seamless experience similar to traditional financial services.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Simplifies the onboarding process for Web2 users transitioning to Web3, ensuring security and compliance.</span>
              </List.Item>
              <List.Item>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Transaction Fees and Subscription Services: </p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Transaction Fees: </span><span> Developers are charged for each wallet creation, fiat conversion, and KYC verification facilitated by the AI assistant.</span></p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Subscription Services: </span><span> Offer tiered plans for developers to access ongoing wallet management, enhanced security features, and compliance updates.</span></p>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              2. AI-Driven Liquidity Management
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>AI agents help dApp developers optimize liquidity management across decentralized exchanges (DEXs).
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span > Unlike traditional DEXs like SushiSwap, where liquidity provision requires manual oversight, 1chain.AI's AI-driven strategies automatically adjust liquidity pools based on market conditions. This real-time management helps developers ensure optimal liquidity and risk management, even during volatile periods.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Maximizes returns and minimizes risks by automating asset management for dApps. </span>
              </List.Item>
              <List.Item>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Performance-Based Fees and Premium Access: </p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Performance-Based Fees: </span><span> Charge a percentage of the profits generated from AI-optimized liquidity strategies.</span></p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Premium Access: </span><span> Subscription-based access to advanced analytics, real-time adjustments, and tailored support for liquidity management.</span></p>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              3. Optimized Staking and Yield Farming
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>AI-assisted strategies enable dApp developers to offer optimized staking and yield farming options.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span > Unlike Yearn Finance, where users manually select yield strategies, 1chain.AI's AI provides automated recommendations for the best staking and farming opportunities. This allows developers to offer their users more efficient and profitable yield optimization tools.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Simplifies complex DeFi activities, making them more accessible and profitable for dApp users. </span>
              </List.Item>
              <List.Item>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Subscription Fees and Performance Incentives: </p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Subscription Fees: </span><span>Developers pay for access to AI-generated strategies and real-time updates.</span></p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Performance Incentives: </span><span>Share in the returns from successful staking and yield farming strategies integrated into dApps.</span></p>
              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              4. Smart Contract Automation
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span> AI models assist dApp developers in generating and verifying smart contracts across various blockchain platforms.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span >Unlike OpenZeppelin, which offers standard smart contract templates, 1chain.AI's AI-generated contracts are customized to fit specific dApp needs. This includes automated compliance checks and updates, ensuring contracts are secure and up-to-date.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Provides secure, compliant, and efficient smart contract solutions, reducing the risk of errors and ensuring regulatory adherence.</span>
              </List.Item>
              <List.Item>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Licensing Fees </p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Licensing: </span><span> Fees for the use of the platform that runs AI-generated smart contracts, with ongoing updates and compliance checks included.</span></p>

              </List.Item>
            </List>

          </Box>

          <Box mt={45}>
            <Text className={classes.policyTitle}>
              5. AI-Enhanced Data Feeds
            </Text>
            <Text mt={15} className={classes.policycontent}>
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: 16 }}>
                Use Case: </span>
              <span>Provides dApp developers with reliable, real-time AI-processed data for smart contract execution.
              </span>
            </Text>
            <List ml={10} listStyleType="disc" className={classes.policycontent}>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Example: </span>
                <span >Unlike Chainlink, which experienced issues with static price feeds during the LUNA crash, leading to significant losses for platforms like Venus Protocol and Blizz Finance, 1chain.AI's AI-enhanced data feeds dynamically adjust to market conditions. This ensures accurate and timely data, preventing similar mishaps and enhancing the reliability of smart contract operations.</span>
              </List.Item>
              <List.Item>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Benefit: </span>
                <span >Provides accurate, real-time data for smart contract executions, ensuring the reliability and security of dApp functionalities.</span>
              </List.Item>
              <List.Item>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Revenue Model ➔ Data Subscription and Pay-Per-Use </p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Data Subscription: </span><span> Continuous access to AI-enhanced data feeds, with varying levels of detail.</span></p>
                <p><span style={{ color: '#D4BFFA', paddingLeft: 30 }} >Pay-Per-Use: </span><span> Flexible pricing based on specific data queries, allowing developers to access precise, real-time data as needed.</span></p>

              </List.Item>
            </List>

          </Box>




        </Box>


      </Container >
    </Box >
  );
};
