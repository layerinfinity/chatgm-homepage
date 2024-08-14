import { Box, Space, createStyles } from '@mantine/core';

import { Activities } from './activities/activities';

import { OurBackers } from './sections/our-backers';

import { OurPartner } from './sections/our-partner';
import { EcoSystem } from './sections/ecosystem';
import { Description } from './sections/description';
import { TopHeader } from './sections/top-header';
import { Architecture } from './sections/architecture';
import { UseCase } from './sections/usecase';
import { HowItWork } from './sections/howitwork';
const useStyles = createStyles((theme) => ({

}));

export const HomePage = () => {
  const { theme } = useStyles();
  return (
    <Box
    >
      <Box style={{ position: 'absolute', height: 660, width: '100%', background: theme.fn.linearGradient(0, '#6016D900', '#000000FF'), zIndex: -1 }}>
      </Box>
      <Space h={55} />
      <TopHeader />
      {/* <HowItWork /> */}
      <OurPartner />

    </Box>
  );
};


