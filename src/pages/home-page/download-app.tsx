import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  createStyles,
  MediaQuery,
  Anchor,
} from '@mantine/core';
import { ANDROID_STORE_URL, IOS_STORE_URL } from '~/configs';

const useStyles = createStyles(() => ({}));

export const DownloadApp = () => {
  const { classes, theme } = useStyles();

  return (
    <Box bg={`${theme.colors.purpleGlow[4]}0D`}>
      <Container>
        <Flex direction={{ base: 'column', md: 'row' }} pt={54}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            bg={theme.colors.purpleGlow[4]}
            mb={-60}
            style={{ flex: 1.2, borderRadius: 22 }}
          >
            <Flex
              direction={{ base: 'row', md: 'column' }}
              px={{ base: 20, md: 40 }}
              py={33}
              style={{ flex: 1.3 }}
            >
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Image src="images/decor/app-ic-launcher.png" style={{ width: 64, height: 64 }} />
              </MediaQuery>
              <Box>
                <Text ff="Outfit" fw={500} size={40} color="white.0">
                  Get App
                </Text>
                <Text ff="Open Sans" fw={400} size={16} color="white.1">
                  End-to-end encrypted messaging app with a built-in crypto Wallet & AI Assistant
                  for defi trading
                </Text>
              </Box>
            </Flex>
            <Flex
              direction={{ base: 'row', md: 'column' }}
              align="center"
              justify="center"
              gap={12}
              p={20}
              style={{ flex: 1 }}
            >
              <Anchor href={ANDROID_STORE_URL} target="_blank">
                <Image src="images/decor/google-play.png" />
              </Anchor>
              <Anchor href={IOS_STORE_URL} target="_blank">
                <Image src="images/decor/app-store.png" />
              </Anchor>
            </Flex>
          </Flex>

          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Flex direction="column" style={{ flex: 1, alignItems: 'center' }}>
              <Text maw={457} ta="center" mb={28}>
                End-to-end encrypted messaging app with
                <br />a built-in crypto Wallet & AI Assistant for defi trading
              </Text>
              <Flex>
                <Image
                  src="images/decor/arrow-download-here.png"
                  style={{ width: 48, height: 48 }}
                />
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
          </MediaQuery>
        </Flex>
      </Container>
    </Box>
  );
};
