import { TabPanel } from "@mui/lab";

export default function TabContent({ value, styles, children }) {
  return (
    <TabPanel value={value} sx={{ paddingX: 0, paddingY: 2, ...styles }}>
      {children}
    </TabPanel>
  );
}
