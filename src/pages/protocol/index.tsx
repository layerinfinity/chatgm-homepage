import { Box, Space, createStyles } from "@mantine/core";
import { Architecture } from "../home-page/sections/architecture";
import { EcoSystem } from "../home-page/sections/ecosystem";
import { OurPartner } from "../home-page/sections/our-partner";
import { WAAP } from "./sections/waap";
import { DAFN } from "./sections/dafn";
const useStyles = createStyles((theme) => ({

}));

export const Protocol = () => {
  const { classes, theme } = useStyles();
  return (
    <Box>
      <Box style={{ position: 'absolute', height: 760, width: '100%', background: theme.fn.linearGradient(0, '#6016D900', '#000000FF'), zIndex: -1 }} />
      <Space h={55} />
      <WAAP />
      <DAFN />
    </Box>
  );
};


