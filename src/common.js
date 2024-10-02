// 공통적으로 사용하는 함수들

export const handleNicknameClick = (
  e,
  row,
  setAnchorEl,
  setSelectedNickname,
  setSelectedId,
  isUsers = true
) => {
  setAnchorEl(e.currentTarget);
  setSelectedNickname(row.닉네임);

  if(isUsers) {
    setSelectedId(row.id);
  } else if(!isUsers) {
    setSelectedId(row.userId);
  }
 
};

// 현재 날짜 데이터 => ex) 2024.09.21
export const currentDateFormat = (date) => {
  console.log(date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

// -분 전, -시간 전, -일 전, -달 전, -년 전
export const timeAgo = (timestamp) => {
  const now = Date.now();
  const elapsed = now - timestamp;

  const minutes = Math.floor(elapsed / 1000 / 60);
  const hours = Math.floor(elapsed / 1000 / 60 / 60);
  const days = Math.floor(elapsed / 1000 / 60 / 60 / 24);
  const months = Math.floor(elapsed / 1000 / 60 / 60 / 24 / 30);
  const years = Math.floor(elapsed / 1000 / 60 / 60 / 24 / 365);

  if (elapsed < 1000 * 60) {
    // 1분 미만
    return "방금 전";
  } else if (years > 0) {
    return years === 1 ? "1년 전" : `${years}년 전`;
  } else if (months > 0) {
    return months === 1 ? "1개월 전" : `${months}개월 전`;
  } else if (days > 0) {
    return days === 1 ? "1일 전" : `${days}일 전`;
  } else if (hours > 0) {
    return hours === 1 ? "1시간 전" : `${hours}시간 전`;
  } else {
    return minutes === 1 ? "1분 전" : `${minutes}분 전`;
  }
};
