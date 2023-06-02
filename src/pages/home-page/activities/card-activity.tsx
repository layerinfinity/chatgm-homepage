import { Card, Image, Text } from '@mantine/core';
import { DEFAULT_DUMMY_IMG_LINK } from '~/configs';

export const CardActivity = () => {
  return (
    <Card p={10} style={{ boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)' }}>
      <Image src={DEFAULT_DUMMY_IMG_LINK} h="auto" mb={10} />

      <Text ff="Open Sans" fw={700} size={14} color="rose.3">
        Release
      </Text>

      <Text ff="Open Sans" fw={700} size={20}>
        Lorem Ipsum
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" h={170} mah={170}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae urna sed nunc
        sollicitudin volutpat. Nam sed lacus vitae metus volutpat dapibus.
      </Text>

      <Text ff="Open Sans" fw={400} size={14} color="dark.4" ta="right">
        Sat, 29 June 2023
      </Text>
    </Card>
  );
};
