import { Box, Container, Flex, Text, UnstyledButton, Image } from '@mantine/core';
import { CardActivity } from './card-activity';
import { ACTIVITY_POSTS } from './_data';
import { Carousel } from '@mantine/carousel';

export const Activities = () => {
  return (
    <Box mb={160}>
      <Container>
        <Text ff="Outfit" fw={500} color="rose.3" size={40} ta={{ base: 'center', md: 'left' }}>
          Our Activities
        </Text>

        <Flex justify="space-between" mb={40}>
          <Text
            ff="Open Sans"
            fw={400}
            color="dark.4"
            maw={{ base: '100%', md: '75%' }}
            ta={{ base: 'center', md: 'left' }}
          >
            We peel back the curtain to give you a front-row seat to our groundbreaking updates,
            keep you looped in with the crypto buzz, and dish out nifty tips to supercharge your
            ChatGM journey. Strap in, stay savvy, and let’s navigate the thrilling roadmap of the
            digital age together!
          </Text>

          {/* <UnstyledButton
            style={{ width: 155, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Text ff="Open Sans" fw={400} size={14} color="dark.4">
              More News
            </Text>
            <Image src="images/decor/arrow-at-2-o-clock.png" style={{ width: 56, height: 56 }} />
          </UnstyledButton> */}
        </Flex>

        <Carousel
          loop
          align="start"
          styles={{
            controls: {
              padding: 0,
            },
            control: {
              width: 48,
              height: 48,
              border: 0,
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
          slideSize={'33.333%'}
          breakpoints={[
            { maxWidth: 'md', slideSize: '33.333%' },
            { maxWidth: 'sm', slideSize: 'calc(100% - 32px)' },
          ]}
          previousControlIcon={<Image src="images/icon-angle-left.svg" />}
          nextControlIcon={<Image src="images/icon-angle-right.svg" />}
        >
          {ACTIVITY_POSTS.map((post) => (
            <Carousel.Slide p={{ base: 10, md: 10 }}>
              <CardActivity post={post} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};
