import { Container } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

const SubLayout: React.FC<Props> = ({ children }) => {
  return <Container size="lg">{children}</Container>;
};

export default SubLayout;
