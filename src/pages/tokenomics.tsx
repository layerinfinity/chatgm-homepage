import { Box, Center, Container, Flex, Image, MediaQuery, Space, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
const useStyles = createStyles((theme) => ({
  heading: {
    fontFamily: "Outfit",
    fontSize: 72,
    fontWeight: 600,
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },

  },
  subHeading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 24,
      lineHeight: '2rem',
    },
  },
  policyTitle: {
    fontFamily: "Outfit",
    fontSize: 30,
    lineHeight: '38px',
    color: theme.colors.purpleGlow[0],
    fontWeight: 500,
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: 18,

    // lineHeight: '3rem',
    color: theme.colors.purpleGlow[1],
    fontWeight: 700,
  },
  policycontent: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: theme.colors.white[2],
    fontWeight: 400,
    lineHeight: '22px',
    // textAlign: 'justify',
  },
  item: {
    borderRadius: 15
  },
  polygon: {
    minHeight: 463,
    background: 'red',
    clipPath: 'polygon( 60.725% 17.849%,2.242% 17.849%,2.242% 17.849%,1.878% 17.892%,1.533% 18.014%,1.212% 18.211%,0.918% 18.474%,0.657% 18.798%,0.433% 19.176%,0.25% 19.6%,0.114% 20.065%,0.029% 20.563%,0% 21.089%,0% 96.544%,0% 96.544%,0.031% 97.105%,0.122% 97.637%,0.267% 98.132%,0.461% 98.585%,0.7% 98.988%,0.979% 99.333%,1.293% 99.614%,1.636% 99.824%,2.004% 99.955%,2.392% 100%,97.758% 100%,97.758% 100%,98.122% 99.958%,98.467% 99.835%,98.788% 99.638%,99.082% 99.375%,99.343% 99.051%,99.567% 98.674%,99.75% 98.249%,99.886% 97.784%,99.971% 97.286%,100% 96.76%,100% 3.456%,100% 3.456%,99.969% 2.895%,99.878% 2.363%,99.733% 1.868%,99.539% 1.415%,99.3% 1.012%,99.021% 0.667%,98.707% 0.386%,98.364% 0.176%,97.996% 0.045%,97.608% 0%,62.963% 0%,62.963% 0%,62.523% 0.061%,62.116% 0.237%,61.748% 0.514%,61.426% 0.88%,61.156% 1.321%,60.945% 1.825%,60.8% 2.378%,60.727% 2.968%,60.732% 3.582%,60.823% 4.207%,62.865% 13.643%,62.865% 13.643%,62.956% 14.267%,62.961% 14.881%,62.888% 15.471%,62.743% 16.025%,62.532% 16.528%,62.262% 16.969%,61.94% 17.335%,61.572% 17.612%,61.165% 17.788%,60.725% 17.849% )'
  }

}));

export const Tokenomics = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(900)})`);

  return (
    <Box
    >
      <Box style={{ position: 'absolute', height: 760, width: '100%', background: theme.fn.linearGradient(0, '#6016D900', '#000000FF'), zIndex: -1 }} />

      <Space h={140} />
      <Container>
        <Text mt={55} ff="Outfit" fw={400} size={18} color="white.0" ta="left">
          <span >Overview 1Chain.</span>
          <span style={{ color: theme.colors.purpleGlow[0] }}>AI</span>
          <span >'s</span>
        </Text>

        <Text style={{ textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
          Tokenomics
        </Text>

        <Text ff="Open Sans" fw={400} size='0.875rem' color="white.2" mt={30}>
          1Chain.AI’s tokenomics are designed to ensure the sustainable growth of the ecosystem, incentivize participation, and maintain network integrity. The $A1 token serves as the utility, governance, and ecosystem token, with a total supply capped at 1,000,000,000 tokens.
        </Text>
        <Box mt={100}>
          <Text ff="Outfit" fw={500} size={40} color={theme.colors.purpleGlow[0]} mt={-10} align='center'>
            Token Distribution
          </Text>
          <Container style={{ position: 'relative' }}>
            {!isMobile ? <>

              <Box
                h={1700}
                w={1700}
                right={-1000}
                top={-600}

                style={{
                  background: theme.fn.radialGradient('#8D57FF66', '#8657FF0d', '#8357FF00', '#8357FF00'),
                  position: 'absolute',

                }}>

              </Box>

              <Image style={{ transform: 'scaleX(-1)', rotate: '-16deg' }} display='inherit' pos='absolute' right={{ md: -300, base: -60 }} top={{ md: 0, base: 0 }} maw={{ md: 340, base: 250 }} fit="contain" src="images/one-chainai/EDITION.png" alt="" />
            </> : <></>

            }



          </Container>
          <Image src="images/one-chainai/tokenomics.png" maw={945} mt={40} mr='auto' ml='auto' width='100%' fit="contain" />
          <Image src="images/one-chainai/tokenomics2.png" maw={945} mt={40} mr='auto' ml='auto' width='100%' fit="contain" />
          {/* <Flex mt={40} direction='row' gap={10}>
            <Box className={classes.item} style={{ flex: 5.7, background: '#64FFDA' }} >
              <Text pos='absolute' ff="Outfit" size={28} fw={700} color='#135555' ml={33}>
                1. Token Sales
              </Text>
              <Box ml={10} mt={10} w='calc(100%-10px)' h={200} className={classes.polygon}>

              </Box>
            </Box>
            <Center className={classes.item} style={{ flex: 1, background: '#FF80AB' }} >
              <Text ff="Outfit" size={32} fw={700} color='#B7246A'>40%</Text>
            </Center>
            <Center className={classes.item} style={{ flex: 1, background: '#FCD667' }} >
              <Text ff="Outfit" size={32} fw={700} color='#7A5800'>25%</Text>
            </Center>

          </Flex> */}

        </Box>
        <Box mt={100} mb={100}>
          <Box>
            <Text ff="Outfit" fw={500} size={40} color={theme.colors.purpleGlow[0]} mt={-10} align='center'>
              Token Utilities
            </Text>
            {/* 1 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                1. Staking and Rewards
              </Text>
              <Text mt={15} className={classes.policycontent}>
                Staking is a core component of the 1chain.AI network's security and functionality, encouraging long-term participation and ensuring network stability.
              </Text>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.1. Staking Mechanism
                </Text>
                <Text className={classes.policycontent}>
                  Both node operators and community members can stake $A1 tokens to secure the network and validate AI outputs. This staking process not only ensures the reliability of data but also incentivizes participants to maintain the network's integrity.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.2. Rewards
                </Text>
                <Text className={classes.policycontent}>
                  Stakers earn rewards in $A1 tokens, distributed based on the amount staked and the duration of staking. The annual percentage yield (APY) for stakers is designed to be competitive, encouraging consistent and long-term staking. This approach ensures sustained participation and enhances the network's security and efficiency.
                </Text>
              </Box>
              <Box pt={15}>
                <Text className={classes.policySubTitle}>
                  1.3. Incentives for Node Operators
                </Text>
                <Text className={classes.policycontent}>
                  A portion of the staking rewards is allocated specifically to node operators. This allocation compensates them for their crucial role in maintaining network integrity and performance, ensuring that the AI outputs remain accurate and reliable.
                </Text>
              </Box>
            </Box>

            {/* 2 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                2.Governance
              </Text>
              <Text pt={15} className={classes.policycontent}>
                $A1 token holders have governance rights within the 1chain.AI ecosystem, fostering a decentralized and community-driven development process. Token holders can propose changes or enhancements to the network, allowing the community to directly influence the platform's evolution and ensure it meets user needs. Governance decisions, such as protocol upgrades and fund allocation, are made through token-holder voting, giving all stakeholders a voice in the network's development and promoting transparency and inclusivity. This democratic approach ensures that the network adapts effectively while maintaining a robust and fair governance structure.
              </Text>
            </Box>

            {/* 3 */}
            <Box pt={45}>
              <Text className={classes.policyTitle}>
                3. Ecosystem
              </Text>
              <Text pt={15} className={classes.policycontent}>
                $A1 supports the entire 1chain.AI ecosystem, providing incentives for developers, users, and node operators to promote sustainable growth and active participation. Developers are encouraged to build and enhance dApps using the 1chain.AI protocol through various incentives, including grants and rewards, fostering innovation and expanding the platform's capabilities. Users are rewarded for their participation in the network, whether through staking, using AI-powered dApps, or contributing to the ecosystem's growth, maintaining a vibrant and active community. Node operators receive incentives for both staking and their ongoing contributions to network maintenance and security, ensuring the network remains robust and reliable.
              </Text>
            </Box>
          </Box>
        </Box>


      </Container>
    </Box>
  );
};
