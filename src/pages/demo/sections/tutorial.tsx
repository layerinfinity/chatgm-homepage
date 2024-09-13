import { ActionIcon, Box, Image, createStyles, Flex, Text } from '@mantine/core'
import React, { useState } from 'react'

const useStyles = createStyles((theme) => ({

  title: {

    fontFamily: "Outfit",
    fontSize: 15,
    color: '#FF80AB',
    fontWeight: 700,
    textShadow: '0px 4px 4px #00000099;'

  },

  content: {
    marginTop: 5,
    fontFamily: "Open Sans",
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 400,
    textShadow: '0px 4px 4px #00000099;'

  },


}));


const Tutorial = () => {
  const [step, setStep] = useState(1)
  return (
    <Flex direction='column' justify='space-between' mih={140} style={{ padding: '20px 30px' }} >
      <Steps crrStep={step} />
      <Flex direction='row' justify='end' gap={10}>

        {step <= 1 ? <></> : <ActionIcon onClick={() => {
          if (step <= 1) {
            return
          } else {
            setStep(step - 1)
          }
        }}>

          <Image style={{ cursor: 'pointer', transform: 'scaleX(-1)' }} width={24} src='images/demo_ai/angle-right-square.svg' />

        </ActionIcon>

        }

        {step >= 6 ? <></> : <ActionIcon onClick={() => {
          if (step >= 6) {
            setStep(1)
          } else {
            setStep(step + 1)
          }
        }}>
          <Image style={{ cursor: 'pointer' }} width={24} src='images/demo_ai/angle-right-square.svg' />
        </ActionIcon>

        }

      </Flex>
    </Flex>

  )
}
interface StepsProps {
  crrStep: number,
}

const Steps = (props: StepsProps) => {
  const { classes, theme } = useStyles();
  switch (props.crrStep) {
    case 1:
      return (
        <Box mih={66} >
          <Text className={classes.title} >
            Step 1:
          </Text>
          <Text className={classes.content} >
            Access <a style={{ color: '#57D1FF', textDecoration: 'none' }} target="_blank" href='https://1chain.ai/beta'>1chain.ai/beta</a>.
          </Text>
        </Box>
      )
    case 2:
      return (
        <Box mih={66} >
          <Text className={classes.title} >
            Step 2:
          </Text>
          <Text className={classes.content} >
            Connect EVM Wallet.

          </Text>
        </Box>
      )
    case 3:
      return (
        <Box mih={66} >
          <Text className={classes.title} >
            Step 3:
          </Text>
          <Text className={classes.content} >
            Select Skale Titan Hub network → or manual add into your wallet  <a style={{ color: '#57D1FF', textDecoration: 'none' }} target="_blank" href='https://skale.space/blog/how-to-add-skale-chains-to-metamask'>here</a>.
          </Text>
        </Box>
      )
    case 4:
      return (
        <Box mih={66} >
          <Text className={classes.title} >
            Step 4:
          </Text>
          <Text className={classes.content} >
            Access on <a style={{ color: '#57D1FF', textDecoration: 'none' }} target="_blank" href='https://www.sfuelstation.com/connect-wallet'>https://www.sfuelstation.com/connect-wallet/</a>  and connect wallet (use same wallet address as step 2.
          </Text>
        </Box>
      )
    case 5:
      return (
        <Box mih={66} >
          <Text className={classes.title} >
            Step 5:
          </Text>
          <Text className={classes.content} >
            Claim sFUEL in Testnet.
          </Text>
        </Box>
      )
    case 6:
      return (
        <Box mih={66} >
          <Text className={classes.title} >
            Step 6:
          </Text>
          <Text className={classes.content} >
            Back to 1chain.ai and type prompt → check on Skale scan for the result.
          </Text>
        </Box>
      )
    default:
      return (
        <></>
      )
  }
}

export default Tutorial