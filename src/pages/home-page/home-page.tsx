import { Box } from '@mantine/core';
import { MainCarousel } from './main-carousel';
import { DownloadApp } from './download-app';
import { Trailer } from './trailer';
import { Activities } from './activities/activities';
import { RoadMap } from './roadmap';
// import { MeetOurTeam } from './meet-our-team';
import { OurBackers } from './our-backers';

export const HomePage = () => {
  return (
    <Box>
      <MainCarousel />
      <DownloadApp />
      <Trailer />
      <Activities />
      {/* <RoadMap /> */}
      {/* <MeetOurTeam /> */}
      <OurBackers />
    </Box>
  );
};
