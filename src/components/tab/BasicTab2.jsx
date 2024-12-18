// 재활용할 탭&콘텐츠(탭을 만들 거면 이걸 가져다 사용!)

import { useRecoilState } from "recoil";
import { TabState } from "../../recoil/content";
import { TabContext } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import TabContent from "./TabContent";

export default function BasicTab2({ tabList, tab, setTab, mtStyle, children }) {
  const handleChange = (e, tab) => {
    setTab(tab);
  };

  return (
    <TabContext value={tab}>
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
          marginTop: mtStyle,
        }}
      >
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {tabList.map((tab, idx) => (
            <Tab key={idx} label={tab} value={`${idx + 1}`} />
          ))}
        </Tabs>
      </Box>

      {children}
    </TabContext>
  );
}
