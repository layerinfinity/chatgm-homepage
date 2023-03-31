import { Center, Image, Stack, Text, Title, createStyles, keyframes } from '@mantine/core';

export const bounce = keyframes({
  '0%': { transform: 'translate3d(0, 0, 0)' },
  '40%': { transform: 'translate3d(0, -30px, 0)' },
  '100%': { transform: 'translate3d(0, 0, 0)' },
});

const useStyles = createStyles(() => ({
  animated: {
    animation: `${bounce} 3s ease-in-out infinite`,
  },
}));

const MobileFocused = () => {
  const { classes } = useStyles();

  return (
    <Stack align="center">
      <Title order={1} align="center">
        Mobile-focused Exchange
      </Title>

      <Text align="center">
        Deposit/Withdraw
        <br />
        Token Launchpad
        <br />
        AI-supported Crypto & Stock trading
      </Text>

      <Center px="xl">
        <Image src="/images/blocks-and-chains.png" width="100%" className={classes.animated} />
      </Center>
    </Stack>
  );
};

export default MobileFocused;
