import { Box, Container, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  heading: {
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
}));

export const TermOfUsePage = () => {
  const { classes, theme } = useStyles();

  return (
    <Box pt={120} pb={70}>
      <Container>
        <Box px={{ base: 0, md: 100 }}>
          <Text
            ff="Outfit"
            fw={600}
            size={72}
            color="dark.4"
            ta="center"
            className={classes.heading}
          >
            CHATGM - TERMS OF USE
          </Text>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              1. Introduction
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              Welcome to ChatGM! We are a decentralized, AI-supported platform that combines secure
              messaging and crypto trading, powered by the Matrix Protocol and GPT-4. These terms
              and conditions ("Terms") govern the access and use of the application and related
              services ("Services") provided by ChatGM ("Company", "we", "us" or "our").
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              2. Acceptance of Terms
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              By accessing and using our Services, you ("User") agree to these Terms and our Privacy
              Policy. If you do not agree to these Terms, do not use our Services. We may change or
              modify these Terms at any time and in our sole discretion.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              3. Eligibility
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              To access and use our Services, you must be at least 13 years old. By using our
              Services, you represent that you meet this requirement. Access to certain features of
              our Services may be restricted to users who have registered with us.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              4. Registration and User Accounts
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              You can sign up for an account using a phone number, email, or existing crypto wallet.
              You agree to provide accurate, complete, and updated information. You are solely
              responsible for safeguarding your account credentials, and any actions under your
              account, whether or not you authorized those actions.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              5. Service Use and Restrictions
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              You may use our Services for your personal, non-commercial use. You agree not to
              misuse our Services, and in particular, you must not:
              <br />
              <br />* Violate any applicable law, regulation, or these Terms;
              <br />* Send or transmit any viruses or harmful, disruptive, or inappropriate messages
              or content;
              <br />* Interfere with the operation of our Services or any user's enjoyment of the
              Services, including by uploading or disseminating spam or other malicious code;
              <br />* Attempt to reverse-engineer or disrupt the proper working of our Services;
              <br />* Make any unauthorized use of the Services, including collecting usernames,
              user ids, and/or email addresses of users by electronic or other means.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              6. Privacy and Security
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              We prioritize your privacy and use state-of-the-art encryption technology to ensure
              the security of your data. For detailed information about our data practices, please
              review our Privacy Policy.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              7. Intellectual Property Rights
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              Our Services, including its entire content, features, and functionality, are owned by
              the Company, its licensors, or other providers of such material. You agree not to
              copy, modify, create derivative works, publicly display, sell, or exploit any of our
              Services without the express permission of the Company.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              8. Modifications to the Service
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              We are always striving to improve our Services and bring you additional functionality
              that you will find useful. This means we may add new features or enhancements, or
              remove some features, in our sole discretion. If you object to any changes, your sole
              recourse is to cease using our Services.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              9. Termination
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              We reserve the right to suspend or terminate your access to our Services, at our sole
              discretion, at any time and without notice to you.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              10. Disclaimer of Warranties and Limitation of Liability
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              Our Services are provided "as is" without warranties of any kind. To the fullest
              extent permissible under applicable law, we disclaim all warranties, express or
              implied, including, but not limited to, implied warranties of merchantability and
              fitness for a particular purpose.
              <br /> We do not guarantee, represent, or warrant that your use of our Services will
              be uninterrupted or error-free, and you agree that from time to time we may remove the
              Services for indefinite periods of time, or cancel the Services at any time, without
              notice to you.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              11. Governing Law
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              These Terms and your use of the Services are governed by and construed in accordance
              with the laws of the jurisdiction of our headquarters.
            </Text>
          </Box>

          <Box py={15}>
            <Text
              ff="Outfit"
              fw={500}
              size={40}
              color="purpleGlow.4"
              mb={12}
              lh="3rem"
              className={classes.subHeading}
            >
              12. Contact Information
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              If you have any questions about these Terms, please contact us at <b>k@chatgm.com</b>{' '}
              By using our Services, you are agreeing to these Terms. If you do not agree to these
              Terms, do not use our Services.
              <br />
              <br />
              Effective Date: [01 June 2023]
              <br />
              <br />
              Please remember that trading cryptocurrency carries risk, and only trade what you can
              afford to lose. Always use secure and trusted networks when accessing your ChatGM
              account. Be smart, be safe, and enjoy the revolution that is ChatGM!
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
