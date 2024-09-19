import { TabPanel } from "@mui/lab";

export default function TabContent({ value, children }) {
  return <TabPanel value={value}>{children}</TabPanel>;
}
