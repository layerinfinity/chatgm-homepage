import { Box, Container, Image, Text, Title, createStyles, keyframes } from '@mantine/core';
import useCommonStyles from '~/sections/_common';

export const bounce = keyframes({
  '0%': { transform: 'translate3d(0, 0, 0)' },
  '40%': { transform: 'translate3d(0, -20px, 0)' },
  '100%': { transform: 'translate3d(0, 0, 0)' },
});

const useStyles = createStyles(() => ({
  wrapper: {},
  aurora: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
  },
  animated: {
    animation: `${bounce} 2s ease-in-out infinite`,
  },
  sign: {
    position: 'absolute',
    zIndex: 1,
  },
  sign1: {
    left: '10%',
  },
  sign2: {
    top: '10%',
    left: '45%',
  },
  sign3: {
    top: '22%',
    left: '72%',
  },
}));

const PayGMSection = () => {
  const { classes, cx } = useStyles();
  const { classes: commonClasses } = useCommonStyles();

  return (
    <Box className={classes.wrapper}>
      <Title order={1} align="center" className={commonClasses.headlineTitle}>
        Pay GM
      </Title>
      <Text align="center" className={commonClasses.headlineSubtitle}>
        Easy crypto payment in the Metaverse & Real Life
      </Text>

      <Box sx={{ position: 'relative' }}>
        <Image src="/images/aurora-wave.svg" height="100%" className={classes.aurora} />

        <Container sx={{ position: 'relative' }}>
          <Image
            src="/images/sign-erc-4337.svg"
            width="50%"
            classNames={{ root: cx(classes.sign, classes.sign1, classes.animated) }}
          />
          <Image
            src="/images/sign-multisig.svg"
            width="38%"
            classNames={{ root: cx(classes.sign, classes.sign2, classes.animated) }}
          />
          <Image
            src="/images/sign-qrcode-payment.svg"
            width="48%"
            classNames={{ root: cx(classes.sign, classes.sign3, classes.animated) }}
          />

          <Image src="/images/phone-app.png" />
        </Container>
      </Box>
    </Box>
  );
};

export default PayGMSection;
