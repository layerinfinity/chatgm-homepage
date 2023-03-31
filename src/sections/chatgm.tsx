import { AspectRatio, Text, Title } from '@mantine/core';
import SubLayout from '~/layouts/sub-layout';
import useCommonStyles from '~/sections/_common';

const ChatGMSection = () => {
  const { classes: commonClasses } = useCommonStyles();

  return (
    <SubLayout>
      <Title order={1} align="center" mb="md" className={commonClasses.headlineTitle}>
        Chat GM
      </Title>
      <Text align="center" size="xl" mb="xl" className={commonClasses.headlineSubtitle}>
        Say Goodbye to long Crypto Wallet addresses that no one can remember
        <br />
        Say GM to easily searchable User ID with format @gm.[userID] tied directly to multiple
        wallets.
      </Text>

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

      <Title order={2} color="lightGreen.5" align="center" weight={600}>
        Onboarding BILLIONS of first-time crypto users!
      </Title>
    </SubLayout>
  );
};

export default ChatGMSection;
