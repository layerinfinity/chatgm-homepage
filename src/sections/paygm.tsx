import { Stack, Text, Title } from '@mantine/core';

const PayGMSection = () => {
  return (
    <Stack align="center">
      <Title order={1}>Chat GM</Title>
      <Text align="center" size="xl">
        Say Goodbye to long Crypto Wallet addresses that no one can remember
        <br />
        Say GM to easily searchable User ID with format @gm.[userID] tied directly to multiple
        wallets.
      </Text>
    </Stack>
  );
};

export default PayGMSection;
