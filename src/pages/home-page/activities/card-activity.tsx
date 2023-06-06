import { Anchor, Flex, Image, Text } from '@mantine/core';
import { DEFAULT_DUMMY_IMG_LINK } from '~/configs';
import { ActivityPost } from './_data';

export type CardActivityProps = {
  post: ActivityPost;
};

export const CardActivity = ({
  post: { imageUrl = DEFAULT_DUMMY_IMG_LINK, subHeading, heading, brief, date, link },
}: CardActivityProps) => {
  return (
    <Flex
      w={'100%'}
      direction="column"
      align="stretch"
      p={10}
      bg="white.1"
      style={{ boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)', borderRadius: 12 }}
    >
      <Anchor href={link} target="_blank">
        <Image src={imageUrl} mb={10} />
      </Anchor>

      <Text ff="Open Sans" fw={700} size={14} color="rose.3">
        {subHeading}
      </Text>

      <Anchor ff="Open Sans" fw={700} size={20} color="dark.4" href={link} target="_blank">
        {heading}
      </Anchor>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" h={170} mah={170}>
        {brief}
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" ta="right" mt="auto">
        {date.toString()}
      </Text>
    </Flex>
  );
};
