import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: `${theme.colors.purpleGlow[4]}0D`,
  },

  footerHeading: {
    marginTop: '27px',
    marginBottom: '40px',
    fontFamily: 'Outfit',
    fontWeight: 500,
    fontSize: '2.5rem',
    textAlign: 'center',
  },

  downloadButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '56px',
    borderRadius: '12px',
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '1.125rem',
  },

  contactUsTitle: {
    marginBottom: '24px',
    fontFamily: 'Outfit',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: '2.5rem',
    color: theme.colors.dark[3],
  },

  contactUsSuggestion: {
    maxWidth: '360px',
    marginBottom: '26px',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.375rem',
    color: theme.colors.dark[3],
  },

  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '64px',
    padding: '8px',
    borderRadius: '40px',
    backgroundColor: '#FFFFFF',
  },

  textInput: {
    flex: 1,
    padding: '0 10px 0 10px',
    fontFamily: 'Outfit',
    fontWeight: 400,
    fontSize: '1.125rem',
    border: 0,
    outline: 0,
  },

  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    backgroundColor: theme.colors.purpleGlow[3],
  },

  subFooter: {
    borderTop: '1px solid black',
    fontFamily: 'Outfit',
    fontWeight: 400,
    fontSize: '1.125rem',
    color: theme.colors.dark[4],
  },
}));

export const AppFooter = () => {
  const { classes, theme } = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Flex direction="column" align="center" justify="center">
          {/* Footer Heading */}
          <h2 className={classes.footerHeading}>
            Get <span style={{ color: theme.colors['purpleGlow'][3] }}>ChatGM</span> Now
          </h2>

          {/* Download Buttons */}
          <Flex
            wrap="wrap"
            align="center"
            justify="center"
            w="100%"
            mb={{ base: 50, md: 100 }}
            gap={{ base: 10, md: undefined }}
          >
            <Button className={classes.downloadButton} color="teal.4" w={{ base: '100%', sm: 200 }}>
              <img src="images/icon-android.svg" />
              &nbsp;Android
            </Button>

            <Button className={classes.downloadButton} color="rose.3" w={{ base: '100%', sm: 200 }}>
              <img src="images/icon-apple.svg" />
              &nbsp;IOS
            </Button>

            <Button
              className={classes.downloadButton}
              color="saffron.4"
              w={{ base: '100%', sm: 200 }}
            >
              Web
            </Button>

            <Button
              className={classes.downloadButton}
              color="purpleGlow.3"
              w={{ base: '100%', sm: 200 }}
            >
              <img src="images/icon-apple.svg" />
              &nbsp;MacOS
            </Button>

            <Button className={classes.downloadButton} color="sky.4" w={{ base: '100%', sm: 200 }}>
              <img src="images/icon-windows.svg" />
              &nbsp;Windows
            </Button>
          </Flex>

          {/* Contact */}
          <Flex
            wrap={{
              base: 'wrap',
              md: 'nowrap',
            }}
            align="center"
            w="100%"
            px={{ base: 0, lg: 100 }}
            mb={{ sm: 50, md: 85 }}
          >
            {/* Left */}
            <Box w="100%">
              <h3 className={classes.contactUsTitle}>Connect Us</h3>
              <p className={classes.contactUsSuggestion}>
                If there are questions you want to ask, we will answer all your question
              </p>
              <Flex align="center" gap="24px">
                <a>
                  <img src="images/icon-telegram.svg" />
                </a>

                <a>
                  <img src="images/icon-discord.svg" />
                </a>

                <a>
                  <img src="images/icon-twitter.svg" />
                </a>

                <a>
                  <img src="images/icon-facebook.svg" />
                </a>

                <a>
                  <img src="images/icon-medium.svg" />
                </a>

                <a>
                  <img src="images/icon-github.svg" />
                </a>

                <a>
                  <img src="images/icon-chatgm.svg" />
                </a>
              </Flex>
            </Box>

            {/* Right */}
            <Box w="100%" py={50}>
              <Box className={classes.form}>
                <input className={classes.textInput} placeholder="Enter Your Email" />
                <UnstyledButton className={classes.submitButton}>
                  <Image src="images/icon-chevron-right.svg" width={28} height={28} />
                </UnstyledButton>
              </Box>
            </Box>
          </Flex>

          {/* Sub Footer */}
          <Flex
            wrap="wrap"
            align="center"
            justify="space-between"
            w="100%"
            mih={80}
            style={{
              borderTop: `1px solid ${theme.colors.dark[4]}`,
            }}
          >
            <Box>
              <Text ff="Outfit" fw={400} size={18} color="dark.4">
                ©2023 ChatGM. All rights reserved
              </Text>
            </Box>

            <Flex gap={40} style={{ color: theme.colors.gray[2] }}>
              <Anchor color="dark.4">Team</Anchor>
              <Anchor color="dark.4">Collaboration</Anchor>
              <Anchor color="dark.4">Publications</Anchor>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
