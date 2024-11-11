// 공통적으로 사용하는 함수들

export function handleConsoleError(isLoading, error, datas) {
  const comment = isLoading
    ? "Loading..."
    : error
    ? "An error has occurred...!"
    : datas?.length === 0
    ? "데이터가 없습니다."
    : null;

  return comment;
}

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

  if (isUsers) {
    setSelectedId(row.id);
  } else if (!isUsers) {
    setSelectedId(row.userId);
  }
};

export const handleMeetingNameClick = (e, row, setAnchorEl, setSelectedId) => {
  setAnchorEl(e.currentTarget);
  setSelectedId(row.id);
};

// 현재 날짜 데이터 => ex) 2024.09.21
export const currentDateFormat = (date) => {
  console.log(date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

// 현재 날짜 + 시간 데이터 => 2024.10.15 오후 3시
export const currentDateFormat2 = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    hour12: true,
    timeZone: "Asia/Seoul",
  };

  const formattedDate = date.toLocaleString("ko-KR", options);
  return formattedDate
    .replace(",", "")
    .replace("AM", "오전")
    .replace("PM", "오후");
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

// 방금 전, -분 전, -시간 전, -일 전, -달 전, -년 전
export function formatTimeAgo(date) {
  const now = new Date();
  const pastDate = new Date(date);
  const seconds = Math.floor((now - pastDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years}년 전`;
  } else if (months > 0) {
    return `${months}달 전`;
  } else if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return "방금 전";
  }
}
