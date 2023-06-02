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

  downloadButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 12,
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 18,
  },

  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 64,
    padding: 8,
    borderRadius: 40,
    backgroundColor: theme.colors.white[0],
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
    width: 48,
    height: 48,
    borderRadius: 24,
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
          <Text ff="Outfit" fw={500} size={40} mt={27} mb={40}>
            Get{' '}
            <Text component="span" inherit color="purpleGlow.3">
              ChatGM
            </Text>{' '}
            Now
          </Text>

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
              <Text ff="Outfit" fw={600} size={32} lh="2.5rem" color="dark.3">
                Connect Us
              </Text>
              <Text ff="Open Sans" fw={400} lh="1.375rem" color="dark.3" maw={360} mb={26}>
                If there are questions you want to ask, we will answer all your question
              </Text>
              <Flex wrap="wrap" align="center" gap="24px">
                <Anchor>
                  <Image src="images/icon-telegram.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-discord.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-twitter.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-facebook.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-medium.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-github.svg" />
                </Anchor>

                <Anchor>
                  <Image src="images/icon-chatgm.svg" />
                </Anchor>
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
            direction={{ base: 'column', sm: 'row' }}
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

            <Flex gap={{ base: 20, sm: 40 }} style={{ color: theme.colors.gray[2] }}>
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
