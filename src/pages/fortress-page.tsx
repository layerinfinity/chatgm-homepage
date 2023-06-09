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

export const FortressPage = () => {
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
            Secure by Fortress<sup style={{ color: theme.colors.purpleGlow[3] }}>TM</sup>
          </Text>

          <Text ff="Open Sans" fw={400} color="dark.3" ta="center" px={20} py={40}>
            Based on our technology called Fortress , ChatGM strives to be an entirely decentralized
            communication tool, with the ultimate goal of eliminating reliance on third parties and
            reducing vulnerabilities to malicious actors.
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
              Messaging
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              ChatGM is powered by the Matrix protocol, ensuring that messages remain uncensored and
              unblocked. Users have the option to maintain pseudo-anonymity, and only the intended
              recipients can access their messages. Rest assured that your privacy is safeguarded,
              empowering you to communicate freely and securely.
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
              Top secure in financial transaction
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              Sending, storing, and receiving cryptocurrencies or tokens within the ChatGM wallet is
              safe due to Fortress technology. Private keys are never exposed. Transactions are only
              processed when initiated and confirmed by the owner of the private keys.
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
              Personal Information
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              In ChatGM, your identity starts with a locally generated cryptographic keypair, which
              is then protected by a password. That&apos;s all you need to begin. You have the
              option to enhance your profile with additional details, shaping your identity within
              ChatGM. Importantly, you always retain full control over your information and
              determine who can access it. Whether you prefer to be public or private, the choice is
              entirely up to you.
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
              Protect cryptocurrency in wallet
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              ChatGM ensures stringent sign-in protocols by offering various options for two-factor
              authentication, including hardware, app-based, SMS, and email methods. Additionally,
              our platform provides advanced access control features, empowering users to opt-in to
              additional security measures such as IP and wallet address whitelisting, API access
              control, and device management. Your security is our priority, and we give you the
              tools to manage and customize your access settings for enhanced protection.
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
              24/7 customer support
            </Text>
            <Text ff="Open Sans" fw={400} color="dark.3">
              We are here to assist you. If you have any inquiries or concerns regarding security,
              please feel free to contact us via email at <b>security@chatgm.com</b> or join the
              Status Security Public Channel #status-security to engage with our team. We are
              committed to addressing your security needs and providing you with the necessary
              support.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
