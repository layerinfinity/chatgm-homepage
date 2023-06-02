import { Box, Card, Container, Text, Image, Center, Grid, useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { DEFAULT_DUMMY_IMG_LINK } from '~/configs';

export const MeetOurTeam = () => {
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        background: `url('images/background/background-1.png'), ${theme.colors.purpleGlow[4]}0D`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container py={70}>
        <Text ff="Outfit" fw={500} size={40} color="purpleGlow.3" ta="center" mb={70}>
          Meet Our Team
        </Text>

        <Carousel
          slideSize={'33.333%'}
          loop
          align="start"
          px={{ base: 0, md: 85 }}
          styles={{
            controls: {
              padding: 0,
            },
            control: {
              width: 48,
              height: 48,
              border: 0,
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
          breakpoints={[
            { maxWidth: 'md', slideSize: '33.333%', slideGap: 30 },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
          previousControlIcon={<Image src="images/icon-angle-left.svg" />}
          nextControlIcon={<Image src="images/icon-angle-right.svg" />}
        >
          <Carousel.Slide>
            <Card p={0} radius={20}>
              <Image
                src="images/team-members/member-1.png"
                width={'100%'}
                height={420}
                fit="cover"
              />
              <Box p={12} bg="purpleGlow.3">
                <Text ff="Open Sans" fw={700} size={20} color="white.1" ta="center">
                  Khiem Le
                </Text>
                <Text ff="Open Sans" fw={400} color="white.4" ta="center">
                  Co-founder & CPO
                </Text>
              </Box>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card p={0} radius={20}>
              <Image
                src="images/team-members/member-2.png"
                width={'100%'}
                height={420}
                fit="cover"
              />
              <Box p={12} bg="purpleGlow.3">
                <Text ff="Open Sans" fw={700} size={20} color="white.1" ta="center">
                  Khiem Le
                </Text>
                <Text ff="Open Sans" fw={400} color="white.4" ta="center">
                  Co-founder & CPO
                </Text>
              </Box>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card p={0} radius={20}>
              <Image
                src="images/team-members/member-3.png"
                width={'100%'}
                height={420}
                fit="cover"
              />
              <Box p={12} bg="purpleGlow.3">
                <Text ff="Open Sans" fw={700} size={20} color="white.1" ta="center">
                  Khiem Le
                </Text>
                <Text ff="Open Sans" fw={400} color="white.4" ta="center">
                  Co-founder & CPO
                </Text>
              </Box>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </Box>
  );
};
