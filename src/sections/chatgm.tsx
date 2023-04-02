import { AspectRatio, Box, Text, Title, createStyles } from '@mantine/core';
import SubLayout from '~/layouts/sub-layout';
import useCommonStyles from '~/sections/_common';

const useStyles = createStyles((theme) => ({
  videoWrapper: {
    padding: '0 5rem',
    [theme.fn.smallerThan('md')]: {
      padding: '0 0.1rem',
    },
  },
  onboarding: {
    fontSize: '1.4rem',
    [theme.fn.smallerThan('md')]: {
      fontSize: '1em',
    },
  },
}));

const ChatGMSection = () => {
  const { classes: commonClasses } = useCommonStyles();
  const { classes } = useStyles();

  return (
    <SubLayout>
      <Title order={1} align="center" className={commonClasses.headlineTitle}>
        Chat GM
      </Title>
      <Text align="center" size="xl" className={commonClasses.headlineSubtitle}>
        Say Goodbye to long Crypto Wallet addresses that no one can remember.
        <br />
        Say GM to easily searchable User ID with format{' '}
        <Text color="brand.4" component="span">
          @gm.[userID]
        </Text>{' '}
        tied directly to multiple wallets.
      </Text>

      <Box className={classes.videoWrapper} mb="2rem">
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
      </Box>

      <Title
        order={2}
        color="lightGreen.5"
        align="center"
        weight={600}
        className={classes.onboarding}
      >
        Onboarding BILLIONS of first-time crypto users!
      </Title>
    </SubLayout>
  );
};

export default ChatGMSection;
