import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Menu, MenuItem } from "@mui/material";

const paginationModel = { page: 0, pageSize: 8 };

export default function Table() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleNicknameClick = (e, row) => {
    setAnchorEl(e.currentTarget);
    setSelectedNickname(row.닉네임);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWithdraw = () => {
    // 회원 강제 탈퇴 처리 로직을 여기에 추가
    if (window.confirm("정말 탈퇴시키시겠습니까?")) {
      alert(`${selectedNickname} 회원이 강제 탈퇴되었습니다.`);
    }

    handleClose();
  };

  const handleWithUserDetailActiveModalOpen = () => {
    setModalOpen(true);
    handleClose();
  };

  const columns = [
    { field: "id", headerName: "id", type: "string", width: 90 },
    {
      field: "닉네임",
      headerName: "닉네임",
      width: 140,
      renderCell: (params) => (
        <span
          onClick={(e) => handleNicknameClick(e, params.row)}
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    { field: "이름", headerName: "이름", width: 90 },
    {
      field: "생일",
      headerName: "생일",
      type: "string",
      width: 120,
    },
    {
      field: "성별",
      headerName: "성별",
      type: "string",
      sortable: false,
      width: 90,
    },
    {
      field: "핸드폰 번호",
      headerName: "핸드폰 번호",
      type: "string",
      width: 140,
    },
    {
      field: "이메일",
      headerName: "이메일",
      type: "string",
      width: 140,
    },
    {
      field: "주소",
      headerName: "주소",
      type: "string",
      width: 200,
    },
    {
      field: "회원가입 일자",
      headerName: "회원가입 일자",
      type: "string",
      width: 200,
    },
    {
      field: "회원 등급",
      headerName: "회원 등급",
      type: "string",
      sortable: false,
      width: 100,
    },
    {
      field: "정기모임 참여 횟수",
      headerName: "정기모임 참여 횟수",
      type: "number",
      width: 140,
    },
    {
      field: "소모임 참여 횟수",
      headerName: "소모임 참여 횟수",
      type: "number",
      width: 140,
    },
    {
      field: "신고 횟수",
      headerName: "신고 횟수",
      type: "number",
      width: 100,
    },
    {
      field: "회원 상태",
      headerName: "회원 상태",
      type: "string",
      sortable: false,
      width: 100,
    },
  ];

  const rows = [
    {
      id: "dnjfht000",
      닉네임: "귀여운 컵케잌",
      이름: "유승민",
      생일: "2000.09.21",
      성별: "여성",
      "핸드폰 번호": "010-5220-2817",
      이메일: "dnjfht@gmail.com",
      주소: "부산시 어딘가",
      "회원가입 일자": "2024.09.12",
      "회원 등급": "host",
      "정기모임 참여 횟수": 0,
      "소모임 참여 횟수": 0,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "01450asa",
      닉네임: "나물비빔밥",
      이름: "이지욱",
      생일: "1995.07.12",
      성별: "남성",
      "핸드폰 번호": "010-5451-0974",
      이메일: "ddyoyung@naver.com",
      주소: "부산시 어딘가",
      "회원가입 일자": "2024.08.04",
      "회원 등급": "common",
      "정기모임 참여 횟수": 2,
      "소모임 참여 횟수": 0,
      "신고 횟수": 1,
      "회원 상태": "오프라인",
    },
    {
      id: "asafdf1224A",
      닉네임: "배우 지현욱 좋아요",
      이름: "지현욱",
      생일: "1991.12.06",
      성별: "여성",
      "핸드폰 번호": "010-5721-9813",
      이메일: "yao@naver.com",
      주소: "부산시 해운대구",
      "회원가입 일자": "2024.08.01",
      "회원 등급": "host",
      "정기모임 참여 횟수": 5,
      "소모임 참여 횟수": 0,
      "신고 횟수": 0,
      "회원 상태": "오프라인",
    },
    {
      id: "a1b2c3d4e5",
      닉네임: "행복한 고양이",
      이름: "김하나",
      생일: "1998.05.15",
      성별: "여성",
      "핸드폰 번호": "010-1234-5678",
      이메일: "catlover@gmail.com",
      주소: "서울시 강남구",
      "회원가입 일자": "2024.08.01",
      "회원 등급": "common",
      "정기모임 참여 횟수": 1,
      "소모임 참여 횟수": 2,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "f6g7h8i9j0",
      닉네임: "커피 중독자",
      이름: "이준호",
      생일: "1992.11.30",
      성별: "남성",
      "핸드폰 번호": "010-9876-5432",
      이메일: "coffeeaddict@naver.com",
      주소: "서울시 강서구",
      "회원가입 일자": "2024.07.31",
      "회원 등급": "host",
      "정기모임 참여 횟수": 4,
      "소모임 참여 횟수": 3,
      "신고 횟수": 0,
      "회원 상태": "오프라인",
    },
    {
      id: "k1l2m3n4o5",
      닉네임: "모험가",
      이름: "박지민",
      생일: "1990.01.25",
      성별: "여성",
      "핸드폰 번호": "010-6543-2109",
      이메일: "adventurer@naver.com",
      주소: "부산시 남구",
      "회원가입 일자": "2024.07.30",
      "회원 등급": "common",
      "정기모임 참여 횟수": 3,
      "소모임 참여 횟수": 1,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "p6q7r8s9t0",
      닉네임: "책벌레",
      이름: "최유리",
      생일: "1993.03.18",
      성별: "여성",
      "핸드폰 번호": "010-3456-7890",
      이메일: "bookworm@naver.com",
      주소: "대전시 유성구",
      "회원가입 일자": "2024.07.29",
      "회원 등급": "host",
      "정기모임 참여 횟수": 2,
      "소모임 참여 횟수": 4,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "u1v2w3x4y5",
      닉네임: "여행 매니아",
      이름: "이서준",
      생일: "1994.08.22",
      성별: "남성",
      "핸드폰 번호": "010-1122-3344",
      이메일: "traveler@naver.com",
      주소: "경기도 성남시",
      "회원가입 일자": "2024.07.26",
      "회원 등급": "common",
      "정기모임 참여 횟수": 1,
      "소모임 참여 횟수": 1,
      "신고 횟수": 0,
      "회원 상태": "오프라인",
    },
    {
      id: "z6a7b8c9d0",
      닉네임: "음악 사랑",
      이름: "김민수",
      생일: "1996.04.10",
      성별: "남성",
      "핸드폰 번호": "010-5566-7788",
      이메일: "musiclover@gmail.com",
      주소: "인천시 연수구",
      "회원가입 일자": "2024.07.26",
      "회원 등급": "host",
      "정기모임 참여 횟수": 3,
      "소모임 참여 횟수": 2,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "e1f2g3h4i5",
      닉네임: "요리사",
      이름: "홍길동",
      생일: "1989.12.12",
      성별: "남성",
      "핸드폰 번호": "010-2233-4455",
      이메일: "chef@naver.com",
      주소: "서울시 중구",
      "회원가입 일자": "2024.07.25",
      "회원 등급": "common",
      "정기모임 참여 횟수": 1,
      "소모임 참여 횟수": 0,
      "신고 횟수": 0,
      "회원 상태": "오프라인",
    },
    {
      id: "j6k7l8m9n0",
      닉네임: "영화 감상가",
      이름: "이정민",
      생일: "1997.02.20",
      성별: "여성",
      "핸드폰 번호": "010-3344-5566",
      이메일: "moviefan@naver.com",
      주소: "부산시 동래구",
      "회원가입 일자": "2024.07.21",
      "회원 등급": "host",
      "정기모임 참여 횟수": 5,
      "소모임 참여 횟수": 1,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "o1p2q3r4s5",
      닉네임: "게임 매니아",
      이름: "김태희",
      생일: "1995.06.30",
      성별: "여성",
      "핸드폰 번호": "010-7788-9900",
      이메일: "gamer@naver.com",
      주소: "서울시 송파구",
      "회원가입 일자": "2024.07.19",
      "회원 등급": "common",
      "정기모임 참여 횟수": 2,
      "소모임 참여 횟수": 1,
      "신고 횟수": 0,
      "회원 상태": "오프라인",
    },
    {
      id: "t6u7v8w9x0",
      닉네임: "피아노 연주자",
      이름: "정현주",
      생일: "1990.09.09",
      성별: "여성",
      "핸드폰 번호": "010-1122-3344",
      이메일: "pianolover@gmail.com",
      주소: "대구시 북구",
      "회원가입 일자": "2024.07.18",
      "회원 등급": "host",
      "정기모임 참여 횟수": 4,
      "소모임 참여 횟수": 2,
      "신고 횟수": 0,
      "회원 상태": "온라인",
    },
    {
      id: "y1z2a3b4c5",
      닉네임: "패션 피플",
      이름: "민지혜",
      생일: "1994.10.14",
      성별: "여성",
      "핸드폰 번호": "010-2233-4455",
      이메일: "fashionista@naver.com",
      주소: "서울시 은평구",
      "회원가입 일자": "2024.07.17",
      "회원 등급": "common",
      "정기모임 참여 횟수": 1,
      "소모임 참여 횟수": 1,
      "신고 횟수": 0,
      "회원 상태": "오프라인",
    },
  ];
  return (
    <Paper sx={{ height: 540, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
        }}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleWithUserDetailActiveModalOpen}>
          유저 활동 상세 정보
        </MenuItem>
        <MenuItem onClick={handleWithdraw}>회원 강제 탈퇴</MenuItem>
        <MenuItem onClick={handleClose}>취소</MenuItem>
      </Menu>
    </Paper>
  );
}
