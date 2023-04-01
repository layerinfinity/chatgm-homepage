import { createStyles } from '@mantine/core';

const useCommonStyles = createStyles((theme) => ({
  headlineTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: theme.colors.gray[0],
    marginBottom: '0.4rem',
    // Mobile
    [theme.fn.smallerThan('md')]: {
      fontSize: '2em',
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
    },
  },
  headlineSubtitle: {
    fontSize: '1.3em',
    fontWeight: 300,
    color: theme.colors.gray[4],
    marginBottom: '3rem',
    lineHeight: 1.3,
    // Mobile
    [theme.fn.smallerThan('md')]: {
      fontSize: '0.86em',
    },
  },
}));

export default useCommonStyles;
