import { ActionIcon, Box, Button, Container, Flex, Image, List, MediaQuery, Popover, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { ListItem } from '@mantine/core/lib/List/ListItem/ListItem';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Tutorial from './tutorial';
import classes1 from './tutorial.module.css'


const useStyles = createStyles((theme) => ({
  heading: {
    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: '2.5rem',
    },
  },
  policyTitle: {

    fontFamily: "Outfit",
    fontSize: 30,
    lineHeight: '37px',
    color: theme.colors.purpleGlow[0],
    fontWeight: 500,
    marginLeft: 8
  },
  policySubTitle: {
    fontFamily: "Open Sans",
    fontSize: 16,

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

}));
export const HowItWork = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [opened, { close, open }] = useDisclosure(false);


  return (
    <Box
    // bg='red'
    >
      {/* <Flex direction='row'>
        <Text ff="Outfit" fw={400} size={18} color="white.0" ta="center">
          1chain.
        </Text>
        <Text ff="Outfit" fw={400} size={18} color="#8C57FF" ta="center">
          AI
        </Text>
      </Flex> */}
      {/* <Image height={29} width='auto' fit="contain" src="images/one-chainai/onechain-logo.png" />
 */}

      <Flex direction='row' align='end'>
        <Text style={{ textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color="white.0" mt={-10}>
          HOW IT WORK
        </Text>
        <Popover width={310} trapFocus position="bottom" shadow="md">
          <Popover.Target>
            <ActionIcon style={{ marginLeft: 10, marginBottom: 20 }} >
              <Image style={{ cursor: 'pointer' }} width={24} src='images/demo_ai/exclamation-circle.svg' />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown className={classes1.box} p={0}>
            <Tutorial />

          </Popover.Dropdown>
        </Popover>
        {/* <ActionIcon w={50} h={50} color='00000000'>
          <Flex w={40} h={68} align='center' justify='center' onClick={() => {

          }}>
            <Image width={20} src='images/demo_ai/exclamation-circle.svg' />
          </Flex>
        </ActionIcon> */}

      </Flex>

      <Text ff='Open Sans' color='white' size={14} maw={900} mt={30}>
        1chain.AI is a Web3 protocol that simplifies dApp onboarding with AI agents boasting over 99% accuracy. Using a Decentralized AI Fidelity Network (DAFN), it prevents AI hallucinations and ensures precise prompt interpretation. Our goal is to build trust, lower barriers, and drive crypto adoption.
      </Text>




    </Box >
  );
};
