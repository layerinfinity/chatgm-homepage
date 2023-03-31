import { createStyles } from '@mantine/core';

const useCommonStyles = createStyles((theme) => ({
  headlineTitle: {
    fontSize: '2.5em',
    fontWeight: 900,
    color: theme.colors.gray[0],
  },
  headlineSubtitle: {
    fontSize: '1.1em',
    fontWeight: 300,
    color: theme.colors.gray[0],
  },
}));

export default useCommonStyles;
