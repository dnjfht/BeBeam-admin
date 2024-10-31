import { TabPanel } from "@mui/lab";

export default function TabContent({ value, children }) {
  return (
    <TabPanel value={value} sx={{ paddingX: 0, paddingY: 2 }}>
      {children}
    </TabPanel>
  );
}
