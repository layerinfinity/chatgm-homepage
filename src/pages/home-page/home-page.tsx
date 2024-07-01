import { Box } from '@mantine/core';
import { MainCarousel } from './main-carousel';
import { DownloadApp } from './download-app';
import { Trailer } from './trailer';
import { Activities } from './activities/activities';
import { RoadMap } from './roadmap';
// import { MeetOurTeam } from './meet-our-team';
import { OurBackers } from './our-backers';
import { Phase1 } from '../gm-ecosystem-page/phase-1';
import { OurPartner } from './sections/our-partner';
import { EcoSystem } from './sections/ecosystem';
import { Description } from './sections/description';
import { TopHeader } from './sections/top-header';
import { Architecture } from './sections/architecture';

export const HomePage = () => {
  return (
    <Box>
      {/* <MainCarousel /> */}
      {/* <DownloadApp />
      <Trailer />
      <Activities /> */}
      {/* <RoadMap /> */}
      {/* <MeetOurTeam /> */}
      <TopHeader />
      <Architecture />

      <EcoSystem />
      {/* <Description /> */}
      <OurPartner />
    </Box>
  );
};
