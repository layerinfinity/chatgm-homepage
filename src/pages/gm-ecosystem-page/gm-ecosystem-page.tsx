import { Box } from '@mantine/core';
import { Phase1 } from './phase-1';
import { Phase2 } from './phase-2';
// import { Phase3 } from './phase-3';

export const GmEcosystemPage = () => {
  return (
    <Box pt={120}>
      <Phase1 />
      <Phase2 />
      {/* <Phase3 /> */}
    </Box>
  );
};
