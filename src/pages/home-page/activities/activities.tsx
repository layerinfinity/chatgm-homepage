import { Box, Container, Flex, Text, UnstyledButton, Image } from '@mantine/core';
import { CardActivity } from './card-activity';
import { ACTIVITY_POSTS } from './_data';

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

        <Flex direction={{ base: 'column', sm: 'row' }} justify="center" align="stretch" gap={30}>
          {ACTIVITY_POSTS.map((post) => (
            <CardActivity post={post} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
