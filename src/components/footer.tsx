import {
  Box,
  Container,
  Footer,
  Group,
  MediaQuery,
  Stack,
  Text,
  createStyles,
} from '@mantine/core';

const menu = [
  {
    label: 'Team',
    to: 'team',
  },
  {
    label: 'Collaboration',
    to: 'collaboration',
  },
  {
    label: 'Publications',
    to: 'publications',
  },
];

const useStyles = createStyles((theme) => ({
  cont: {
    borderTop: `1px solid ${theme.colors.gray[6]}`,
    padding: 0,
    paddingTop: 24,
    fontWeight: 100,
  },
  footer: {
    height: 120,
    backgroundColor: 'transparent',
    border: 'none',
    backdropFilter: 'blur(20px)',
    [theme.fn.smallerThan('md')]: {
      height: 100,
    },
  },
  contM: {
    borderTop: `1px solid ${theme.colors.gray[6]}`,
    padding: 0,
    paddingTop: 6,
    fontSize: '0.9em',
    height: '4rem',
  },
}));

const COPYRIGHT = '@2023 ChatGM. All rights reserved.';

function AppFooter() {
  const { classes } = useStyles();

  return (
    <Footer height={100} className={classes.footer}>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Container size="lg" className={classes.cont}>
          <Group position="apart">
            <Text>{COPYRIGHT}</Text>

            <Group>
              {menu.map((n, idx) => (
                <Text key={idx}>{n.label}</Text>
              ))}
            </Group>
          </Group>
        </Container>
      </MediaQuery>

      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Box>
          <Stack align="center" spacing="sm" mb={40}>
            {menu.map((n, idx) => (
              <Text key={idx} size="0.9em">
                {n.label}
              </Text>
            ))}
          </Stack>

          <Group position="center" className={classes.contM}>
            <Text>{COPYRIGHT}</Text>
          </Group>
        </Box>
      </MediaQuery>
    </Footer>
  );
}
export default AppFooter;
