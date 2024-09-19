import { atom } from "recoil";

// modal
export const IsModalOpenState = atom({
  key: "IsModalOpenState",
  default: false,
});

// tab
export const TabState = atom({
  key: "TabState",
  default: "1",
});
