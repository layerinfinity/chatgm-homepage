import { ActionIcon, Alert, BackgroundImage, Box, Button, Center, Container, Flex, Image, Modal, Text, TextInput, rem } from '@mantine/core';
import classes from './index.module.css';
import './index.module.css';
// import { MeetOurTeam } from './meet-our-team';
import axios from 'axios';
import { HowItWork } from './sections/how-it-work';
import { useDisclosure, useInputState } from '@mantine/hooks';
import { IconArrowRight, IconSearch, IconPlayerPlayFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useAccount, useConnect, useWriteContract } from 'wagmi'
import { abi } from './wagmi/abi'
import { memoContracts } from './wagmi/config'


export const BetaAI = () => {
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('');
  const [nodes, setNodes] = useState(0);
  const [timer, setTimer] = useState(0);
  const [qtyLLMS, setQtyLLMS] = useState(0);
  const [accuraty, setAccuraty] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const {
    data: hash,
    isPending,
    writeContract,
    error,
    isSuccess
  } = useWriteContract()
  const { isConnected, chainId, chain } = useAccount()

  const onMovedEcoSystemClicked = (idElement: string) => {

    const element = document.getElementById(idElement);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    console.log(isPending)
  }, [isPending])
  useEffect(() => {
    console.log(error)
  }, [error])



  async function fetchAnswer(question: string) {
    setMsgError('')
    if (isLoading) return
    if (question.length == 0) {
      if (message.length > 0) {
        setMessage('')
      }
      setMsgError('Promt is empty !')
      return
    }
    if (!isConnected) {
      // openModal()
      setMsgError('Please connect to your wallet !')
      return;
    }
    setIsLoading(true)
    onMovedEcoSystemClicked('loading')
    const startTime = Date.now()
    try {
      const response = await axios.post('https://api.chatgm.com/api/ai/messages', { message: question });

      writeContract({
        address: `0x${memoContracts[chainId ?? 0]}`,
        abi,
        functionName: 'sendMemo',
        args: [question],
      })

      setMessage(response.data.data.message)
      setNodes(response.data.data.nodes)
      setAccuraty(Number(response.data.data.accuraty))
      setTimer((Date.now() - startTime) / 1000)
      setQtyLLMS(getRandomArbitrary(5, 14))
      setIsLoading(false)
      onMovedEcoSystemClicked('answer')

    } catch (error) {
      console.error(error);
    }
  }

  function openModal() {
    console.log('open modal')
    open();
  }
  function newPrompt() {
    if (isLoading) return
    setQuestion('')
    if (message.length > 0) {
      setMessage('')
    }
    onMovedEcoSystemClicked('question')
  }
  return (
    <>

      < Box pt={95} pb={190} pos='relative' >

        <Image style={{ position: 'absolute', bottom: 0, width: '100%', opacity: 0.2 }} src='images/demo_ai/demo_bottom.png' />
        <Image style={{ position: 'absolute', left: 0, top: 250, width: '44%', maxWidth: 637, zIndex: -1 }} src='images/demo_ai/left.png' />
        <Image style={{ position: 'absolute', right: 0, top: 0, width: '44%', maxWidth: 340, zIndex: -1 }} src='images/demo_ai/right.png' />
        <Container>
          <HowItWork />
          <Box>
            <Flex direction={{ md: 'row', base: 'column-reverse' }} justify='center' align='center' ml='auto' mr='auto' mt={46}>
              <Box id='question' mt={{ md: 0, base: 40 }} className={classes.box} maw={680} w='100%' mih={360}>
                <Text style={{ lineHeight: '80px' }} pos='absolute' color='#FF4BE2' size={72} weight={600} ff='Outfit' w={74} h={80} right={60} top={20}> 01
                </Text>
                <Text mt={5} color='white' size={20} weight={700} ff='Outfit'>
                  YOUR PROMPT
                </Text>
                <TextInput
                  mt={30}
                  value={question}
                  // radius="xl"
                  size="md"
                  placeholder="Prompt here type something"
                  onChange={(event) =>
                    setQuestion(event.currentTarget.value)

                  }
                  onSelect={() => {
                    setMsgError('')
                  }}
                  styles={{
                    input: {
                      fontFamily: 'Open Sans',
                      color: 'black'
                    }
                  }}
                  rightSection={
                    <ActionIcon variant="filled" color='white' onClick={() => { fetchAnswer(question) }}  >
                      <Image style={{ cursor: 'pointer' }} width={20} fit='contain' src='images/demo_ai/send_button.svg' />
                    </ActionIcon>
                  }
                />
                <Text mt={10} color='#ffcc00' size={14} ff='Open Sans'>
                  {msgError}
                </Text>
                <Text mt={30} color='white' size={14} ff='Open Sans'>
                  Our AI now covers topics related to BTC, ETH, and AI-generated content. We're continuously enhancing our DAFN. Thank you for your ongoing support!
                </Text>

              </Box>
              <Box ml={{ md: 74, base: 0 }} maw={{ md: 330, base: '100%' }} >
                <Flex direction='column' justify='flex-start' mt={10}>
                  <Text ff='Outfit' size={12} color='#FF80AB'>
                    STEP 1:
                  </Text>
                  <Text ff='Open sans' size={14} color='white' mt={10}>
                    Enter your prompt and click "Generated".

                  </Text>
                </Flex>
                <Flex direction='column' justify='flex-start' mt={10}>
                  <Text ff='Outfit' size={12} color='#FF80AB'>
                    STEP 2:
                  </Text>
                  <Text ff='Open sans' size={14} color='white' mt={10}>
                    By clicking "Generate," your prompt will be sent to multiple nodes in the DAFN system. Each node runs different LLMs independently, with the answer being continuously generated until over 99% consensus is reached among the LLMs.
                  </Text>
                </Flex>
                <Flex direction='column' justify='flex-start' mt={10}>
                  <Text ff='Outfit' size={12} color='#FF80AB'>
                    STEP 3:
                  </Text>
                  <Text ff='Open sans' size={14} color='white' mt={10}>
                    The answer will be displayed on the result screen and is considered 99% correct, as it was agreed upon by multiple LLMs simultaneously. You'll also be notified of how many node runs were needed to reach this consensus.

                  </Text>
                </Flex>

              </Box>

            </Flex>
            <Flex id='loading' wrap='wrap' mih={250} justify='center' align='center'>


              {isLoading || isPending ? <>
                <div className={classes.pulse_container}>
                  <BackgroundImage src='images/demo_ai/LLMs/LLM1.png' className={`${classes.pulse_bubble} anotherClass ${classes.pulse_bubble_1}`}></BackgroundImage>
                  <BackgroundImage src='images/demo_ai/LLMs/LLM2.png' className={`${classes.pulse_bubble} anotherClass ${classes.pulse_bubble_2}`}></BackgroundImage>
                  <BackgroundImage src='images/demo_ai/LLMs/LLM3.png' className={`${classes.pulse_bubble} anotherClass ${classes.pulse_bubble_3}`}></BackgroundImage>
                  <BackgroundImage src='images/demo_ai/LLMs/LLM4.png' className={`${classes.pulse_bubble} anotherClass ${classes.pulse_bubble_4}`}></BackgroundImage>
                  <BackgroundImage src='images/demo_ai/LLMs/LLM5.png' className={`${classes.pulse_bubble} anotherClass ${classes.pulse_bubble_5}`}></BackgroundImage>
                </div>
              </> : <></>}
            </Flex>


            <Flex justify={{ base: 'flex-end', sx: 'center' }}>
              <Box id='answerId' maw={680} w='100%' mih={360} pos='relative'>
                <Image style={{ position: 'absolute', width: 363, top: -260, right: 60, zIndex: -2 }} src='images/demo_ai/EDITION.png'></Image>

                <Box className={classes.box} bg='red' w='100%' h='100%'>

                  <Text style={{ lineHeight: '80px' }} pos='absolute' color='#FF4BE2' size={72} weight={600} ff='Outfit' w={74} h={80} right={60} top={20}> 02
                  </Text>
                  <Text mt={5} color='white' size={20} weight={700} ff='Outfit'>
                    YOUR PROMPT
                  </Text>
                  <Box mt={30}>
                    {isLoading || !isSuccess ? <Text mt={20} color='white' size={12} weight={400} ff='Open Sans'>
                      This result is getting <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }} >0.00 %</span> + consensus from <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>0.00 </span> times running of <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>0</span> nodes in <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>0 LLMs </span>
                    </Text> : <Text mt={20} color='white' size={12} weight={400} ff='Open Sans'>
                      This result is getting <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }} >{accuraty.toFixed(1)}%</span> + consensus from <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>{timer.toFixed(1)} </span> times running of <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>{nodes}</span> nodes in <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>{qtyLLMS} LLMs </span>
                    </Text>}

                    <Box mt={25} className={classes.box_result}>
                      {isLoading || !isSuccess ? <></> : <Text ff='Open Sans' size={14} color='#FECBFF'>
                        {message}
                      </Text>}

                    </Box>
                    <Flex wrap="wrap" justify='center' gap={50} mt={25}>
                      <ActionIcon w={149} h={49} variant="filled" color='transparent' onClick={() => {
                        if (isLoading || message.length == 0) return;
                        window?.highlightSyntax();
                      }}  >
                        <Image style={{ cursor: 'pointer', position: 'absolute', zIndex: 0 }} width={149} fit='contain' src='images/demo_ai/button.svg' >

                        </Image>
                        <Flex justify='center' align='center' w='100%' h='100%' style={{ padding: '10px 0px 0px 10px', zIndex: 2 }}>
                          <Text color='#9F0099' ff='Outfit' weight={700} size={12}>
                            Agree
                          </Text>
                        </Flex>
                      </ActionIcon>
                      <ActionIcon w={149} h={49} variant="filled" color='transparent' onClick={() => { fetchAnswer(question) }}  >
                        <Image style={{ cursor: 'pointer', position: 'absolute', zIndex: 0 }} width={149} fit='contain' src='images/demo_ai/button.svg' >

                        </Image>
                        <Flex justify='center' align='center' w='100%' h='100%' style={{ padding: '10px 0px 0px 10px', zIndex: 2 }}>
                          <Text color='#9F0099' ff='Outfit' weight={700} size={12}>
                            Re-generate
                          </Text>
                        </Flex>
                      </ActionIcon>
                      <ActionIcon w={149} h={49} variant="filled" color='transparent' onClick={() => { newPrompt() }}  >
                        <Image style={{ cursor: 'pointer', position: 'absolute', zIndex: 0 }} width={149} fit='contain' src='images/demo_ai/button.svg' >

                        </Image>
                        <Flex justify='center' align='center' w='100%' h='100%' style={{ padding: '10px 0px 0px 10px', zIndex: 2 }}>
                          <Text color='#9F0099' ff='Outfit' weight={700} size={12}>
                            New prompt
                          </Text>
                        </Flex>
                      </ActionIcon>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box >
        </Container >
      </Box >
    </>
  );
};
