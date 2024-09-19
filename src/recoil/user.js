import { atom } from "recoil";

// table에서 user를 선택할 때
export const AnchorElState = atom({
  key: "AnchorElState",
  default: null,
});

export const SelectedNicknameState = atom({
  key: "SelectedNicknameState",
  default: "",
});

export const SelectedIdState = atom({
  key: "SelectedIdState",
  default: "",
});

// user data
export const UsersState = atom({
  key: "UsersState",
  default: [],
});
