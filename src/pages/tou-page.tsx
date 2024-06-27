import { Box, Space, Stack, Container, Text, Title, createStyles, } from '@mantine/core';

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
      fontSize: 24,
      lineHeight: '2rem',
    },
  },
  policyTitle: {
    fontFamily: "Outfit",
    fontSize: 30,
    // lineHeight: '3rem',
    color: theme.colors.white[0],
    fontWeight: 500,
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: 18,

    // lineHeight: '3rem',
    color: theme.colors.white[2],
    fontWeight: 700,
  },
  policycontent: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: theme.colors.white[2],
    fontWeight: 400,
    textAlign: 'justify',
  },
}));

export const TermsOfUsePage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Space h={140} />
      <Container>
        <Stack px="lg">
          <Title ta="center" color="white.0" className={classes.heading}>Term of Service</Title>
          <Text pt={70} className={classes.policycontent}>
            Welcome to ChatGM, a versatile platform designed to integrate the ease of messaging with the innovative world of cryptocurrency transactions. Our services provide secure communication channels alongside robust features for handling digital currencies.<br /><br />

            By using ChatGM ("Service"), you agree to be bound by these Terms of Service ("Terms"). These Terms affect your legal rights and obligations, so if you do not agree to be bound by all of these Terms, do not use the Service.
          </Text>
          <Box>
            {/* 1 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                1. Introduction and Acceptance
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Usage Agreement:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  The service is intended for users who are at least 13 years old. Users under this age, or under the legal age of majority in their jurisdiction, require guardian consent.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Eligibility:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  - This policy applies to all users of ChatGM's messaging and cryptocurrency transaction services.<br />
                  - By accessing or using our Service, you agree to this Privacy Policy and give your consent for data processing as described herein.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Service Description:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM is a communication platform providing encrypted messaging, voice/video calls, and blockchain-related assistance. It integrates with major services and supports various blockchain networks.
                </Text>
              </Box>
            </Box>

            {/* 2 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                2. User Account Guidelines
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  2.1 Account Creation and Maintenance
                </Text>
                <Text className={classes.policycontent}>
                  To access ChatGM's features, you must create an account. You agree to provide accurate, complete, and updated information during the registration process. You are responsible for safeguarding your account and should notify us immediately of any unauthorized use of your account.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  2.2 Account Security
                </Text>
                <Text className={classes.policycontent}>
                  Your account's security is paramount. You are responsible for all activities that occur under your account. ChatGM is not liable for any loss or damage arising from your failure to protect your account credentials.
                </Text>
              </Box>

            </Box>

            {/* 3 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                3. Wallet and Transaction Terms
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  3.1 Cryptocurrency Transactions
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM allows users to perform cryptocurrency transactions. It is vital to understand that such transactions are irreversible and require a high level of security awareness.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  3.2 Wallet Usage
                </Text>
                <Text className={classes.policycontent}>
                  When you create a wallet on ChatGM, you are responsible for maintaining the security and confidentiality of your wallet's private keys. Loss or unauthorized disclosure of these keys can result in the loss of cryptocurrencies.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  3.3 Compliance and Responsibility
                </Text>
                <Text className={classes.policycontent}>
                  All transactions are subject to the laws and regulations of the jurisdiction in which you reside. You are responsible for ensuring that your transactions comply with these laws, including anti-money laundering regulation
                </Text>
              </Box>

            </Box>

            {/* 4 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                4.User Responsibilities
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Compliance with Laws:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users must comply with all local, national, and international laws while using ChatGM. This includes, but is not limited to, laws related to privacy, intellectual property, data protection, and electronic communications.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Prohibited Use:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users must not engage in activities such as sending spam, conducting scams, spreading malware, or promoting violence. Content that is illegal, threatening, abusive, defamatory, obscene, or racially, sexually, or otherwise objectionable is strictly prohibited.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Account Security:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users are responsible for maintaining the confidentiality of their account information, including passwords. ChatGM should be promptly notified of any unauthorized use of user accounts. major services and supports various blockchain networks.
                </Text>
              </Box>
            </Box>

            {/* 5 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                5. Data Privacy and Security
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  5.1 Data Collection and Usage
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM collects information necessary to offer messaging and cryptocurrency services. This includes account details, transaction history, and communication data. The information is used to provide, enhance, and personalize the Services and to ensure the safety and security of the platform.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  5.2 Security Measures
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM employs robust security measures to protect user data and communications. These include encryption of messages and financial data, secure data storage practices, and regular security audits. Users are also encouraged to use strong, unique passwords and enable any available two-factor authentication methods.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  5.3 Data Sharing Policies
                </Text>
                <Text className={classes.policycontent}>
                  User data is not sold or indiscriminately shared. Information may be shared with third-party service providers only to the extent necessary for providing the Services. Any third-party providers are subject to stringent data protection agreements.
                </Text>
              </Box>

            </Box>

            {/* 6 */}
            <Box pt={20}>
              <Text className={classes.policyTitle}>
                6. Cryptocurrency Handling and Risks
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  6.1 Handling Cryptocurrency
                </Text>
                <Text className={classes.policycontent}>
                  Users must exercise caution and due diligence when handling cryptocurrencies. ChatGM provides tools and resources for safe transaction practices but is not responsible for managing individual digital wallets or private keys.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  6.2 Risks Involved
                </Text>
                <Text className={classes.policycontent}>
                  Cryptocurrency transactions are subject to various risks, including market volatility, regulatory changes, and cybersecurity threats. Users acknowledge that ChatGM is not liable for any losses incurred due to such risks.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  6.3 Compliance with Regulations
                </Text>
                <Text className={classes.policycontent}>
                  Users are responsible for understanding and complying with all applicable laws and regulations related to cryptocurrency transactions in their jurisdiction.
                </Text>
              </Box>

            </Box>

            {/* 7 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                7.Communication Features
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Enhanced Features:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM may provide featur¡es like message translation, and other advanced communication tools. The availability and functionality of these features depend on technological capabilities and may vary by region.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Content Sharing:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users can share content within the ChatGM platform. Shared content must adhere to legal and community standards.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Interoperability:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM aims to integrate seamlessly with various blockchain networks and messaging services, offering cross-platform communication capabilities.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    User Conduct in Communication:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users are expected to maintain respectful and lawful interactions. ChatGM reserves the right to moderate or remove content that violates these standards.
                </Text>
              </Box>
            </Box>

            {/* 8 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                8. Third-Party Integrations and Bots
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Third-Party Services:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM may integrate third-party services to enhance user experience. These services will be governed by their respective terms and privacy policies.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Bots and API Use:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users may interact with bots or use ChatGM’s API for automation and enhanced functionality. Users are responsible for their interactions with bots and any data they share.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Data Sharing with Third Parties:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM will only share user data with third parties to the extent necessary for providing the services. User consent will be obtained where required.
                </Text>
              </Box>
            </Box>

            {/* 9 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                9. Changes to Terms of Service
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Right to Modify:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM reserves the right to modify these terms at any time. This may be due to changes in legal requirements, new features, or changes in business practices.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Notification of Changes:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users will be notified of significant changes to the terms through in-app notifications or email. Continued use of the service after changes implies acceptance of the new terms.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Feedback on Changes:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM encourages user feedback on changes to the terms. This feedback can be submitted through provided channels in the service.
                </Text>
              </Box>
            </Box>

            {/* 10 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                10. Service Availability and Limitations
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Service Availability:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM aims to provide a reliable and available service but cannot guarantee uninterrupted access. Service may be subject to maintenance, upgrades, or network outages.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Limitations of Service:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Certain features may not be available in all regions or on all devices. Compatibility requirements for various features will be clearly communicated to users.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Modifications to Service:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM reserves the right to modify or discontinue features or services at its discretion. Users will be notified of any significant changes that affect their use of the service.
                </Text>
              </Box>
            </Box>

            {/* 11 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                11. Content and Intellectual Property Rights
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    User Content Ownership:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users retain ownership of the content they create, upload, or share on ChatGM. However, by using the platform, users grant ChatGM a non-exclusive, royalty-free, worldwide license to use, reproduce, distribute, and display this content as part of the service.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Intellectual Property:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM respects the intellectual property rights of others. Users must ensure they have the right to share content and that their content does not infringe on others' rights.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Infringement Claims:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  If a user believes that their intellectual property rights have been violated, they can submit a claim to ChatGM. ChatGM will review and address these claims promptly, including, where appropriate, removing the infringing content.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    User Responsibility:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users are responsible for any legal claims arising from the infringement of intellectual property rights or other rights related to the content they share on ChatGM.
                </Text>
              </Box>
            </Box>

            {/* 12 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                12. Termination and Account Cancellation
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Voluntary Account Deletion:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Users can delete their ChatGM account at any time through their account settings. This action is irreversible and will result in the deletion of all user data associated with the account.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Termination for Breach:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM reserves the right to terminate or suspend a user's account if they breach the Terms of Service, engage in illegal activities, or harm other users.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  <li>
                    Effect of Termination:
                  </li>
                </Text>
                <Text className={classes.policycontent}>
                  Upon termination, the user will lose access to their account and all associated data. ChatGM is not liable for any loss or damage following termination.
                </Text>
              </Box>
            </Box>

            {/* 13 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                13. Legal Compliance
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  13.1 Compliance with Laws
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM operates in compliance with applicable laws and regulations. Users are expected to use the Services in a lawful manner and are responsible for understanding and adhering to all laws relevant to their use of the Services.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  13.2 International Use
                </Text>
                <Text className={classes.policycontent}>
                  Given the global nature of the internet, users agree to comply with all local rules regarding online conduct and acceptable content, including laws regulating the export of data to and from their country of residence.
                </Text>
              </Box>
            </Box>

            {/* 14 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                14. Miscellaneous
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  14.1 Indemnification
                </Text>
                <Text className={classes.policycontent}>
                  Users agree to indemnify and hold harmless ChatGM, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from or related to their use of the Services.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  14.2 Limitation of Liability
                </Text>
                <Text className={classes.policycontent}>
                  ChatGM shall not be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits, data, or goodwill, service interruption, computer damage, or system failure, resulting from the use of or inability to use the Services.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  14.3 Disclaimer of Warranties
                </Text>
                <Text className={classes.policycontent}>
                  The Services are provided "as is" without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </Text>
              </Box>
            </Box>

            {/* 15 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                15. Contact and Feedback
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  15.1 Contact Information
                </Text>
                <Text className={classes.policycontent}>
                  For any questions or concerns regarding these Terms or the Services, users can contact ChatGM through our email address: team@chatgm.com
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  15.2 Feedback
                </Text>
                <Text className={classes.policycontent}>
                  User feedback is welcomed and encouraged. ChatGM reserves the right to use this feedback without any obligation to the user.
                </Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Space h={140} />
    </>
  );
};
