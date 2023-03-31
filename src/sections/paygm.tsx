import { Box, Container, Image, Text, Title, createStyles } from '@mantine/core';
import useCommonStyles from '~/sections/_common';

const useStyles = createStyles(() => ({
  wrapper: {},
  aurora: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
  },
}));

const PayGMSection = () => {
  const { classes } = useStyles();
  const { classes: commonClasses } = useCommonStyles();

  return (
    <Box className={classes.wrapper}>
      <Title order={1} align="center" mb="md" className={commonClasses.headlineTitle}>
        Pay GM
      </Title>
      <Text align="center" className={commonClasses.headlineSubtitle}>
        Easy crypto payment in the Metaverse & Real Life
      </Text>

      <Box sx={{ position: 'relative' }}>
        <Image src="/images/aurora-wave.svg" height="100%" className={classes.aurora} />

        <Container>
          <Image src="/images/phone-app.png" />
        </Container>
      </Box>
    </Box>
  );
};

export default PayGMSection;
