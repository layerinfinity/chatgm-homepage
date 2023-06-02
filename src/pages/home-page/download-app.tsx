import { Box, Button, Container, Flex, Text, Image, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({}));

export const DownloadApp = () => {
  const { classes, theme } = useStyles();

  return (
    <Box bg={`${theme.colors.purpleGlow[4]}0D`}>
      <Container>
        <Flex pt={54}>
          <Box
            bg={theme.colors.purpleGlow[4]}
            style={{ flex: 1.2, borderRadius: 22, marginBottom: -60 }}
          >
            <Flex>
              <Box px={40} py={33} style={{ flex: 1.3 }}>
                <Image src="images/decor/app-ic-launcher.png" style={{ width: 64, height: 64 }} />
                <Text ff="Outfit" fw={500} size={40} color="white.0">
                  Get App
                </Text>
                <Text ff="Open Sans" fw={400} size={16} color="white.1">
                  End-to-end encrypted messaging app with a built-in crypto Wallet & AI Assistant
                  for defi trading
                </Text>
              </Box>
              <Flex
                direction="column"
                align="flex-start"
                justify="center"
                gap={12}
                style={{ flex: 1 }}
              >
                <a>
                  <Image src="images/decor/google-play.png" />
                </a>
                <a>
                  <Image src="images/decor/app-store.png" />
                </a>
              </Flex>
            </Flex>
          </Box>
          <Flex direction="column" style={{ flex: 1, alignItems: 'center' }}>
            <Text maw={457} ta="center" mb={28}>
              End-to-end encrypted messaging app with
              <br />a built-in crypto Wallet & AI Assistant for defi trading
            </Text>
            <Flex>
              <Image src="images/decor/arrow-download-here.png" style={{ width: 48, height: 48 }} />
              <Button
                color="purpleGlow.4"
                h={'auto'}
                px={13}
                py={16}
                ff="Open Sans"
                fw={700}
                radius={15}
              >
                Download Here
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
