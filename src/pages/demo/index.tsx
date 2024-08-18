import { ActionIcon, BackgroundImage, Box, Button, Center, Container, Flex, Image, Text, TextInput, rem } from '@mantine/core';
import classes from './index.module.css';
// import { MeetOurTeam } from './meet-our-team';

import { HowItWork } from './sections/how-it-work';
import { useInputState } from '@mantine/hooks';
import { IconArrowRight, IconSearch, IconPlayerPlayFilled } from '@tabler/icons-react';

export const BetaAI = () => {
  const [stringValue, setStringValue] = useInputState('');

  return (
    <>
      {/* <Image style={{ position: 'absolute', bottom: -1000, height: '1297px', width: '100%' }} src='images/demo_ai/demo_bottom.png' /> */}
      <Image style={{ position: 'absolute', left: 0, top: 250, width: '44%', maxWidth: 637, zIndex: -1 }} src='images/demo_ai/left.png' />
      <Image style={{ position: 'absolute', right: 0, top: 0, width: '44%', maxWidth: 340, zIndex: -1 }} src='images/demo_ai/right.png' />
      <Container>
        <HowItWork />
        <Box>
          <Flex direction='row' justify='center' ml='auto' mr='auto' mt={46}>
            <Box className={classes.box} bg='red' w={680} mih={360}>
              <Text style={{ lineHeight: '80px' }} pos='absolute' color='#FF4BE2' size={72} weight={600} ff='Outfit' w={74} h={80} right={60} top={20}> 01
              </Text>
              <Text mt={5} color='white' size={20} weight={700} ff='Outfit'>
                YOUR PROMPT
              </Text>
              <TextInput
                mt={30}

                // radius="xl"
                size="md"
                placeholder="Prompt here type something"
                styles={{
                  input: {
                    fontFamily: 'Open Sans',
                    color: 'red'
                  }
                }}



                rightSection={

                  <Image style={{ cursor: 'pointer' }} width={20} fit='contain' src='images/demo_ai/send_button.svg' />

                }
              />
              <Text mt={30} color='white' size={14} ff='Open Sans'>
                Our AI now covers topic which related to BTC, ETH and generated AI. We’re keep improving our FDAN, thanks for your support
              </Text>

            </Box>
            <Box ml={74} maw={330} >
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
                  Click "Generate," and your prompt will be sent to multiple nodes in the DAFN system. Each node runs different LLMs independently, with the answer being continuously generated until 99% consensus is reached among the LLMs.


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
          {/* loading */}
          <Box h={300}>
            <Box className={classes.loader}>

            </Box>
          </Box>


          {/* result */}
          <Flex justify='flex-end'>
            <Box maw={680} w='100%' mih={360} pos='relative'>
              {/* <Box pos='relative' > */}
              <Image style={{ position: 'absolute', width: 363, top: -260, right: -60 }} src='images/demo_ai/EDITION.png'></Image>
              {/* </Box> */}
              <Box className={classes.box} bg='red' w='100%' h='100%'>

                <Text style={{ lineHeight: '80px' }} pos='absolute' color='#FF4BE2' size={72} weight={600} ff='Outfit' w={74} h={80} right={60} top={20}> 02
                </Text>
                <Text mt={5} color='white' size={20} weight={700} ff='Outfit'>
                  YOUR PROMPT
                </Text>
                <Box mt={30}>
                  <Text mt={20} color='white' size={12} weight={400} ff='Open Sans'>
                    This result is getting <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }} >99%</span> + consensus from <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>4,535 </span> times running of <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>234</span> notes in <span style={{ color: '#FFF960', fontSize: 14, fontWeight: 700 }}>10 LLMs </span>
                  </Text>
                  <Box mt={25} className={classes.box_result}>
                    <Text ff='Open Sans' size={14} color='#FECBFF'>
                      The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those interested
                    </Text>
                  </Box>
                  <Flex wrap="wrap" gap={50} mt={25}>
                    <Button bg='none' w={148} h={58} className={classes.button} >
                      <Flex justify='center' align='center' w='100%' h='100%' style={{ padding: '10px 0px 0px 10px' }}>
                        <Text color='#9F0099' ff='Outfit' weight={700} size={12}>
                          Agree
                        </Text>
                      </Flex>

                    </Button>
                    <Button bg='none' w={148} h={58} className={classes.button} >
                      <Flex justify='center' align='center' w='100%' h='100%' style={{ padding: '10px 0px 0px 10px' }}>
                        <Text color='#9F0099' ff='Outfit' weight={700} size={12}>
                          Re-generate
                        </Text>
                      </Flex>

                    </Button>

                    <Button bg='none' w={148} h={58} className={classes.button} >
                      <Flex justify='center' align='center' w='100%' h='100%' style={{ padding: '10px 0px 0px 10px' }}>
                        <Text color='#9F0099' ff='Outfit' weight={700} size={12}>
                          New prompt
                        </Text>
                      </Flex>

                    </Button>
                  </Flex>
                </Box>
              </Box>

            </Box>
          </Flex>


        </Box >
      </Container >


    </>
  );
};
