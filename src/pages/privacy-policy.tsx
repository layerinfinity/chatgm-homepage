/* eslint-disable react/no-unescaped-entities */
import { Container, Space, Stack, Text, Title, createStyles, Box } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily :"Outfit",
    fontSize: 72,
    // lineHeight: '5rem',
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
    fontFamily :"Outfit",
    fontSize: 30,
    // lineHeight: '3rem',
    color:'#0091EB',
    fontWeight: 500,
  },
  policySubTitle: { 
    fontFamily :"Outfit",
    fontSize: 18,
    
    // lineHeight: '3rem',
    color:'#393E46',
    fontWeight: 'bold',
  },
  policycontent: { 
    fontFamily :"Open Sans",
    fontSize: 16,
    color:'#393E46',
    // fontWeight: 400,

    textAlign:'justify',
  },
}));
const PPPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Space h={140} />
      <Container>
        <Stack px="lg">
          <Title ta="center" color="dark.4" className={classes.heading}>ChatGM Privacy Policy</Title>
          <Box>
            {/* 1 */}
            <Box pt={15}>
              <Text className={classes.policyTitle}>
              1. Introduction
              </Text>
              <Text pt={15} className={classes.policycontent}>
              Welcome to ChatGM. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your personal information through ChatGM's services. By using ChatGM, you consent to the data practices described in this policy.
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                1.1 Commitment to Privacy
                </Text>
                <Text className={classes.policycontent}>
                - ChatGM is committed to safeguarding your privacy and ensuring the protection of your personal data.<br />
                - This policy is designed to help you understand what information we collect, why we collect it, and how you can manage it.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.2 Scope and Consent
                </Text>
                <Text className={classes.policycontent}>
                  - This policy applies to all users of ChatGM's messaging and cryptocurrency transaction services.<br />
                  - By accessing or using our Service, you agree to this Privacy Policy and give your consent for data processing as described herein.
                </Text>
              </Box>
            </Box>

            {/* 2 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
              2. Data Collection
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                2.1 Information You Provide
                </Text>
                <Text className={classes.policycontent}>
                - We collect information you provide during account registration, which includes your name, email address, phone number, and any other information you choose to provide.<br />
                - When conducting cryptocurrency transactions, we may collect transaction-related information such as wallet addresses and transaction histories.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  2.2 Information Collected Automatically
                </Text>
                <Text className={classes.policycontent}>
                  - We collect certain information automatically when you use our Services, such as IP address, device information, usage data, and cookies.<br />
                  - This information is used to enhance service functionality, security, and for analytics purposes.
                </Text>
              </Box>
            </Box>

            {/* 3 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                3. Use of Personal Data
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  3.1 Service Provision
                </Text>
                <Text className={classes.policycontent}>
                  - Your data is used to provide, maintain, and improve ChatGM's messaging and cryptocurrency services.<br/>
                  - This includes using data to create and manage your account, process transactions, and facilitate communications.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  3.2 Communication and Support
                </Text>
                <Text className={classes.policycontent}>
                  - We use your data to communicate with you about service updates, security alerts, and support messages.<br/>
                  - For customer support purposes, we may access your account information to assist you with issues or queries.
                </Text>
                <Text className={classes.policySubTitle}>
                  3.3 Security and Fraud Prevention
                </Text>
                <Text className={classes.policycontent}>
                  - We use data to enhance the security of our Services, including detecting and preventing fraudulent transactions and unauthorized access to your account.<br/>
                  - Our systems are designed to identify unusual account activities and provide alerts to protect your information.
                </Text>
              </Box>
            </Box>

            {/* 4 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                4. Data Sharing and Disclosure
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  4.1 Sharing with Third Parties
                </Text>
                <Text className={classes.policycontent}>
                  - We may share your data with third-party service providers to perform functions on our behalf, such as payment processing or data analysis.<br/>
                  - These third parties are obligated to protect your data and may not use it for other purposes.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  4.2 Legal Requirements
                </Text>
                <Text className={classes.policycontent}>
                  - ChatGM may disclose your data if required by law, such as in response to a subpoena or other legal process.<br/>
                  - In cases of fraud or security threats, we may share necessary data with relevant authorities.
                </Text>
              </Box>
            </Box>

            {/* 5 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                5. Data Security
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  5.1 Protecting Your Data
                </Text>
                <Text className={classes.policycontent}>
                  - ChatGM employs robust security measures including encryption, firewalls, and secure server facilities to protect your data from unauthorized access and breaches.<br/>
                  - We continually update and test our security technology to improve the protection of your information.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  5.2 User Responsibility
                </Text>
                <Text className={classes.policycontent}>
                  - You are responsible for maintaining the confidentiality of your account credentials and device security.<br/>
                  - We encourage users to take proactive steps like using strong passwords and enabling two-factor authentication.
                </Text>
              </Box>
            </Box>

            {/* 6 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                6. User Rights and Controls
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  6.1 Accessing and Updating Your Data
                </Text>
                <Text className={classes.policycontent}>
                  - You have the right to access, update, or correct your personal information at any time through your account settings.<br/>
                  - If you need assistance, our support team is available to help.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  6.2 Data Portability and Deletion
                </Text>
                <Text className={classes.policycontent}>
                  - Users can request a copy of their data or delete their account entirely, which will remove their personal information from our systems.<br/>
                  - We provide tools to export your data and exercise your right to data portability.
                </Text>
              </Box>
            </Box>

            {/* 7 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                7. Data Retention
              </Text>
              <Text pt={15} className={classes.policycontent}>
                - ChatGM retains personal data as long as necessary to provide its services and fulfill legal obligations.<br/>
                - Data is securely deleted or anonymized once it is no longer needed for these purposes.
              </Text>
          
            </Box>

            {/* 8 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                8. International Data Transfers
              </Text>
              <Text pt={15} className={classes.policycontent}>
                - Personal data may be transferred to, stored, and processed in countries outside of your jurisdiction.<br/>
                - ChatGM ensures adequate data protection measures are in place for cross-border data transfers, complying with relevant laws and regulations.
              </Text>
            </Box>

            {/* 9 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                9. Compliance with Laws and Regulations
              </Text>
              <Text pt={15} className={classes.policycontent}>
                - ChatGM commits to compliance with privacy laws and regulations applicable in the regions where it operates.<br/>
                - This includes adapting our privacy practices to align with regional legal requirements and cooperating with data protection authorities.
              </Text>
            </Box>

            {/* 10 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                10. Use of Data for AI Training
              </Text>
              <Text pt={15} className={classes.policycontent}>
                - ChatGM utilizes anonymized user data to train and enhance its AI systems.<br/>
                - The data used for AI training includes non-identifiable information to ensure privacy.<br/>
                - Users have the option to opt out of their data being used for AI training.
              </Text>
            </Box>

            {/* 11 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                11. Policy Updates and Changes
              </Text>
              <Text pt={15} className={classes.policycontent}>
                - ChatGM reserves the right to update this Privacy Policy at any time.<br/>
                - Significant changes will be communicated to users through in-app notifications or email.<br/>
                - Users are encouraged to periodically review the Privacy Policy for updates.
              </Text>
            </Box>

            {/* 12 */}
            <Box pt={25}>
              <Text className={classes.policyTitle}>
                12. Contact Information
              </Text>
              <Text pt={15} className={classes.policycontent}>
                - For any privacy-related questions or concerns, users can contact ChatGM through our email address: team@chatgm.com<br/>
                - Feedback regarding the Privacy Policy is welcomed and can be submitted through the same channels.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Space h={140} />
    </>
  );
};

export default PPPage;
