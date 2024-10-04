// 재활용할 메뉴(메뉴를 만들 거면 이걸 가져다 사용!)

import { Menu, MenuItem } from "@mui/material";

export default function BasicMenu({ anchorEl, setAnchorEl, menuDatas }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      {menuDatas.map((menu, idx) => (
        <MenuItem key={idx} onClick={menu.onClick}>
          {menu.text}
        </MenuItem>
      ))}
    </Menu>
  );
}
