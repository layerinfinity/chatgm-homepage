import { Container, Footer, Group, Text, createStyles } from '@mantine/core';

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
    // Simplify media query writing with theme functions
    [theme.fn.smallerThan('md')]: {
      height: 100,
    },
  },
}));

function AppFooter() {
  const { classes } = useStyles();

  return (
    <Footer height={100} className={classes.footer}>
      <Container size="lg" className={classes.cont}>
        <Group position="apart">
          <Text>@2023 ChatGM. All rights reserved.</Text>

          <Group>
            {menu.map((n, idx) => (
              <Text key={idx}>{n.label}</Text>
            ))}
          </Group>
        </Group>
      </Container>
    </Footer>
  );
}
export default AppFooter;
