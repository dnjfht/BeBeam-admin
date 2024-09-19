// 공통적으로 사용하는 함수들

export const handleNicknameClick = (
  e,
  row,
  setAnchorEl,
  setSelectedNickname,
  setSelectedId
) => {
  setAnchorEl(e.currentTarget);
  setSelectedNickname(row.닉네임);
  setSelectedId(row.id);
};

// 현재 날짜 데이터 => ex) 2024.09.21
export const currentDateFormat = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
