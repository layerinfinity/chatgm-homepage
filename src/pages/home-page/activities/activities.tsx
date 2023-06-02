import { Box, Container, Flex, Text, UnstyledButton, Image, Grid } from '@mantine/core';
import { CardActivity } from './card-activity';

export const Activities = () => {
  return (
    <Box mb={160}>
      <Container>
        <Text ff="Outfit" fw={500} color="rose.3" size={40} ta={{ base: 'center', md: 'left' }}>
          Our Activities
        </Text>
        <Flex justify="space-between" mb={40}>
          <Text ff="Open Sans" fw={400} color="dark.4" maw={518}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae urna sed nunc
            sollicitudin volutpat. Nam sed lacus vitae metus volutpat dapibus.
          </Text>

          <UnstyledButton
            style={{ width: 155, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Text ff="Open Sans" fw={400} size={14} color="dark.4">
              More News
            </Text>
            <Image src="images/decor/arrow-at-2-o-clock.png" style={{ width: 56, height: 56 }} />
          </UnstyledButton>
        </Flex>

        <Flex direction={{ base: 'column', sm: 'row' }} gap={30}>
          <CardActivity />
          <CardActivity />
          <CardActivity />
        </Flex>
      </Container>
    </Box>
  );
};
