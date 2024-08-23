import { Box, Button, Container, Flex, Image, Text, createStyles, em, useMantineTheme } from '@mantine/core';
import { sizes } from '@mantine/core/lib/ActionIcon/ActionIcon.styles';
import { useMediaQuery } from '@mantine/hooks';
import Typewriter from 'typewriter-effect';
// import classes from './howitwork.module.css';
interface Work {
  number: string,
  title: string,
  detail: string

}
const works = [
  { number: '1', title: 'Sign Up and Connect Your Account', detail: 'Begin by creating an account on our platform. Connect your brokerage or exchange account to enable automated trading.' },
  { number: '2', title: 'Choose Your Trading Strategy', detail: 'Select from a variety of pre-engineered trading strategies designed by experts. Each strategy is optimized for different market conditions and risk levels.' },
  { number: '3', title: 'Customize Your Settings', detail: 'Tailor the trading bot to fit your personal preferences and financial goals. Adjust parameters such as risk tolerance, investment amount, and trading frequency.' },
  { number: '4', title: 'Activate Your Trading Bot', detail: 'Once you’ve customized your settings, activate the trading bot. The bot will start analyzing market data in real-time, executing trades based on your chosen strategy.' },
  { number: '5', title: 'Monitor Performance', detail: 'Keep track of your portfolio’s performance through your personalized dashboard. View detailed analytics and performance reports to see how your investments are growing.' },
  { number: '6', title: 'Automated Adjustments', detail: 'Our trading bots continuously adapt to market changes. They automatically rebalance your portfolio and tweak strategies to maximize returns while minimizing risks.' },
  { number: '7', title: 'Relax and Watch Your Portfolio Grow', detail: 'Enjoy peace of mind knowing that your investments are being managed by sophisticated algorithms designed to optimize performance. Let your portfolio thrive, even while you sleep.' },
]

const useStyles = createStyles((theme) => ({


  workBackground: {
    position: 'absolute',
    lef: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: '45px',
    boxShadow: 'inset 0px 0px 20px 0px rgba(255, 255, 255, 0.6)',
    background: 'linear-gradient(147.05deg, rgba(151, 205, 255, 0.8) 6.4%, rgba(59, 255, 243, 0.8) 51.48%, rgba(105, 255, 246, 0.8) 99.2%)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    transition: '.4s',
    zIndex: -90,
    opacity: 0,
  },
  leftBg: {
    position: 'absolute',
    lef: 0,
    top: 0,
    width: '100px',
    height: '100%',
    borderRadius: '45px',
    boxShadow: 'inset 0px 0px 20px 0px rgba(255, 255, 255, 0.6)',
    background: 'linear-gradient(148.23deg, rgba(151, 205, 255, 0.8) 5%, rgba(59, 255, 243, 0.8) 94.1%)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    transition: '.4s',
    zIndex: -90,

  },

  item: {
    position: 'relative',
    marginTop: 20,
    '&:hover  #detail1': {
      color: '#1C5C6A',
    },
    '&:hover #boxbg': {
      opacity: 1,
    },
    '&:hover #boxleft': {
      opacity: 0
    },
    '&:hover #titleleft': {
      textAlign: 'end'
    },



  },


}));
export const HowItWork = () => {
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Box
      pt={{ base: 60, md: 100 }}
      pb={{ base: 100, md: 148 }}
      style={{
        background: ' linear-gradient(180deg, rgba(0,0,0,0) , rgba(144, 144, 144, 0.1) )',
      }}
    >
      <Container >
        <Box >
          <Text ff="Outfit" fw={400} size={18} color={theme.colors.white[0]} ta="left" style={{ lineHeight: '22px' }}>
            Cryptobot.chat
          </Text>

          <Text style={{ lineHeight: '80px', textDecoration: 'underline', textDecorationColor: theme.colors.purpleGlow[6], textDecorationThickness: '4px', textUnderlineOffset: '20px' }} ff="Outfit" fw={600} size={isMobile ? 40 : 72} color={theme.colors.teal[2]} >
            HOW IT WORKS
          </Text>
        </Box>
        <Box mt={60} maw={750}>

          {
            works.map(el => {
              return <Flex className={classes.item} direction='row' mih={131} align='center' justify='left' >
                <Box id='boxbg' className={classes.workBackground}></Box>
                <Box id='boxleft' className={classes.leftBg} />
                <Box >
                  <Text id='titleleft' style={{ textShadow: '0px 4px 4px #00000040', width: '100px', transition: '.4s' }} color={theme.colors.white[0]} ff='Outfit' size={72} weight={600} ta='center'>{el.number}</Text>
                </Box>
                <Box ml={50} style={{ padding: '20px 20px 20px 0px' }}>
                  <Text color={theme.colors.white[0]} size={28} ff='Outfit' weight={700} style={{ lineHeight: '35.28px', textShadow: '0px 4px 4px #00000040' }}>
                    {el.title}
                  </Text>
                  <Text mt={10} color={theme.colors.white[3]} size={14} ff='Open Sans' weight={400} style={{ lineHeight: '19px' }}>
                    <p id='detail1' style={{ transition: '0.4s' }}>
                      {el.detail}
                    </p>
                  </Text>
                </Box>

              </Flex>

            })
          }
        </Box>

      </Container>
    </Box>
  );
};
