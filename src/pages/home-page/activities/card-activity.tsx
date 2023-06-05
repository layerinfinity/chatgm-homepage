import { Card, Image, Text } from '@mantine/core';
import { DEFAULT_DUMMY_IMG_LINK } from '~/configs';
import { ActivityPost } from './_data';

export type CardActivityProps = {
  post: ActivityPost;
};

export const CardActivity = ({
  post: { imageUrl = DEFAULT_DUMMY_IMG_LINK, subHeading, heading, brief, date },
}: CardActivityProps) => {
  return (
    <Card p={10} mih={620} style={{ boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)' }}>
      <Image src={imageUrl} mb={10} />

      <Text ff="Open Sans" fw={700} size={14} color="rose.3">
        {subHeading}
      </Text>

      <Text ff="Open Sans" fw={700} size={20}>
        {heading}
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" h={170} mah={170}>
        {brief}
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" ta="right">
        {date.toString()}
      </Text>
    </Card>
  );
};
