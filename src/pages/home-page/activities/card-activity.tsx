import { Anchor, Flex, Image, Text } from '@mantine/core';
import dayjs from 'dayjs';

import { DEFAULT_DUMMY_IMG_LINK } from '~/configs';
import { ActivityPost } from './_data';

export type CardActivityProps = {
  post: ActivityPost;
};

export const CardActivity = ({
  post: { feature_image = DEFAULT_DUMMY_IMG_LINK, title, excerpt, created_at, url },
}: CardActivityProps) => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="stretch"
      p={10}
      bg="white.1"
      style={{
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
        borderRadius: 12,
      }}
    >
      <Anchor href={url} target="_blank">
        <Image src={feature_image} mb={10} />
      </Anchor>

      <Text ff="Open Sans" fw={700} size={14} color="rose.3">
        ChatGM
      </Text>

      <Anchor
        ff="Open Sans"
        fw={700}
        size={20}
        color="dark.4"
        href={url}
        target="_blank"
        mih={70}
        mah={70}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {title}
      </Anchor>

      <Text
        ff="Open Sans"
        fw={400}
        size={14}
        color="dark.4"
        h={170}
        mah={170}
        style={{ overflow: 'hidden' }}
      >
        {excerpt}
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" ta="right" mt="auto">
        {dayjs(created_at).format('YYYY/MM/DD')}
      </Text>
    </Flex>
  );
};
