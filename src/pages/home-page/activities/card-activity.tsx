import { Anchor, Flex, Image, Text } from '@mantine/core';
import dayjs from 'dayjs';

import { DEFAULT_DUMMY_IMG_LINK } from '~/configs';
import { ActivityPost } from './_data';

export type CardActivityProps = {
  post: ActivityPost;
};

export const CardActivity = ({
  post: { _embedded, yoast_head_json, date, link },
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
      <Anchor href={link} target="_blank">
        <Image
          src={_embedded?.['wp:featuredmedia']?.[0]?.source_url || DEFAULT_DUMMY_IMG_LINK}
          fit="contain"
          mb={10}
        />
      </Anchor>

      <Text ff="Open Sans" fw={700} size={14} color="rose.3">
        ChatGM
      </Text>

      <Anchor
        ff="Open Sans"
        fw={700}
        size={20}
        color="dark.4"
        href={link}
        target="_blank"
        mih={70}
        mah={70}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {yoast_head_json.title}
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
        {yoast_head_json.description}
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" ta="right" mt="auto">
        {dayjs(date).format('YYYY/MM/DD')}
      </Text>
    </Flex>
  );
};
