import { AspectRatio, Box, Text, Container, useMantineTheme } from '@mantine/core';

export const Trailer = () => {
  const theme = useMantineTheme();

  return (
    <Box>
      <Container py={180}>
        <AspectRatio ratio={16 / 9} mb="lg">
          <iframe
            title="ChatGM"
            src="https://drive.google.com/file/d/1nOEo3vGc8388ggfVyhUwus_tEpDHbRtv/preview"
            allowFullScreen
            style={{
              border: 'none',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </AspectRatio>

        <Text ff="Open Sans" fw={400} ta="center">
          Say goodbye to long crypto wallet addresses that none can remember.
          <br /> Say GM to easily searchable User ID with format <br />
          <Text component="span" fw={700} color="teal.4">
            @gm.[your personal ID]
          </Text>{' '}
          tied directly to multiple wallet
        </Text>
      </Container>
    </Box>
  );
};
