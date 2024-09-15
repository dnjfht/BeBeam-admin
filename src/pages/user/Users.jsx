import { useEffect, useMemo, useState } from "react";
import Table from "../../components/table/Table";
import { Menu, MenuItem } from "@mui/material";
import BasicModal from "../../components/modal/BasicModal";
import UserDetails from "../../components/modal/contents/User/UserDetails";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("selectedNickname", selectedNickname, "selectedId", selectedId);

  const columns = [
    {
      field: "id",
      headerName: "id",
      type: "string",
      width: 90,
      renderCell: () => <span>***********</span>,
    },
    {
      field: "프로필 이미지",
      headerName: "프로필 이미지",
      width: 70,
      renderCell: (params) => (
        <img
          src={params.row["프로필 이미지"]}
          alt="프로필 이미지"
          style={{
            width: 40,
            height: 40,
            objectFit: "cover",
            borderRadius: "100%",
            marginTop: 5,
          }}
        />
      ),
    },
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
  const data = useMemo(
    () => [
      {
        id: "C907ABB0-3611-404F-802F-67E6C0383538",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1725656471388-0aa1e4ab2c8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "귀여운 컵케잌",
        이름: "유승민",
        생일: "2000.09.21",
        성별: "여성",
        "핸드폰 번호": "010-5220-2817",
        이메일: "dnjfht@gmail.com",
        주소: "부산시 어딘가",
        "회원가입 일자": "2024.09.12",
        "회원 등급": "common",
        "정기모임 참여 횟수": 0,
        "소모임 참여 횟수": 0,
        "신고 횟수": 0,
        "회원 상태": "온라인",
      },
      {
        id: "5DAD7FF7-02A8-4959-A3E9-4C0AD2D8B1E3",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1630389715052-983a8e31faa6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "나물비빔밥",
        이름: "이지욱",
        생일: "1995.07.12",
        성별: "남성",
        "핸드폰 번호": "010-5451-0974",
        이메일: "ddyoyung@naver.com",
        주소: "부산시 어딘가",
        "회원가입 일자": "2024.08.04",
        "회원 등급": "host",
        "정기모임 참여 횟수": 2,
        "소모임 참여 횟수": 0,
        "신고 횟수": 1,
        "회원 상태": "오프라인",
      },
      {
        id: "775DD0B9-E338-4777-89D6-9FE6A7175806",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1550133725-5fc2925431fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: "20083678-9A55-4C2B-BDD9-F71845EBE4B6",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1708461646032-5743c250ac77?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "행복한 고양이",
        이름: "김하나",
        생일: "1998.05.15",
        성별: "여성",
        "핸드폰 번호": "010-1234-5678",
        이메일: "catlover@gmail.com",
        주소: "서울시 강남구",
        "회원가입 일자": "2024.08.01",
        "회원 등급": "host",
        "정기모임 참여 횟수": 1,
        "소모임 참여 횟수": 2,
        "신고 횟수": 0,
        "회원 상태": "온라인",
      },
      {
        id: "396C8AB1-9FC9-4B07-8E16-CFDBA6A22455",
        "프로필 이미지":
          "https://plus.unsplash.com/premium_photo-1676106623114-e2edc4f04fe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: "E40B874F-B7F9-447B-80F6-776D9B5B1AE4",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "모험가",
        이름: "박지민",
        생일: "1990.01.25",
        성별: "여성",
        "핸드폰 번호": "010-6543-2109",
        이메일: "adventurer@naver.com",
        주소: "부산시 남구",
        "회원가입 일자": "2024.07.30",
        "회원 등급": "host",
        "정기모임 참여 횟수": 3,
        "소모임 참여 횟수": 1,
        "신고 횟수": 0,
        "회원 상태": "온라인",
      },
      {
        id: "4AC740B8-F779-467B-BD35-FE29001A0E31",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: "17000C11-233A-4A70-93C7-52BA155AC315",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1505356212111-7ac1beb0c506?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "여행 매니아",
        이름: "이서준",
        생일: "1994.08.22",
        성별: "남성",
        "핸드폰 번호": "010-1122-3344",
        이메일: "traveler@naver.com",
        주소: "경기도 성남시",
        "회원가입 일자": "2024.07.26",
        "회원 등급": "host",
        "정기모임 참여 횟수": 1,
        "소모임 참여 횟수": 1,
        "신고 횟수": 0,
        "회원 상태": "오프라인",
      },
      {
        id: "ED356EF4-13C0-466A-9CAD-9A09156ECCF9",
        "프로필 이미지":
          "https://plus.unsplash.com/premium_photo-1677561423213-f416ec0c3195?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: "BEDE4726-1E9F-4AFA-8832-CCC0C41EE52C",
        "프로필 이미지":
          "https://plus.unsplash.com/premium_photo-1667149988086-faabd5a500b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "요리사",
        이름: "홍길동",
        생일: "1989.12.12",
        성별: "남성",
        "핸드폰 번호": "010-2233-4455",
        이메일: "chef@naver.com",
        주소: "서울시 중구",
        "회원가입 일자": "2024.07.25",
        "회원 등급": "host",
        "정기모임 참여 횟수": 1,
        "소모임 참여 횟수": 0,
        "신고 횟수": 0,
        "회원 상태": "오프라인",
      },
      {
        id: "A2BB5158-F527-47D5-B672-3194045F6435",
        "프로필 이미지":
          "https://plus.unsplash.com/premium_photo-1667149988971-ef958f614127?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: "E112B114-77C2-4B41-BF22-33BA219062B7",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1718397363345-7a6aeb25f669?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "게임 매니아",
        이름: "김태희",
        생일: "1995.06.30",
        성별: "여성",
        "핸드폰 번호": "010-7788-9900",
        이메일: "gamer@naver.com",
        주소: "서울시 송파구",
        "회원가입 일자": "2024.07.19",
        "회원 등급": "host",
        "정기모임 참여 횟수": 2,
        "소모임 참여 횟수": 1,
        "신고 횟수": 0,
        "회원 상태": "오프라인",
      },
      {
        id: "45699272-7EF0-48D2-BFC8-901E17F42012",
        "프로필 이미지":
          "https://plus.unsplash.com/premium_photo-1661667075996-18a04b626fe2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        id: "5834B85B-61E2-4C46-A2F8-37176AC20D60",
        "프로필 이미지":
          "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        닉네임: "패션 피플",
        이름: "민지혜",
        생일: "1994.10.14",
        성별: "여성",
        "핸드폰 번호": "010-2233-4455",
        이메일: "fashionista@naver.com",
        주소: "서울시 은평구",
        "회원가입 일자": "2024.07.17",
        "회원 등급": "host",
        "정기모임 참여 횟수": 1,
        "소모임 참여 횟수": 1,
        "신고 횟수": 0,
        "회원 상태": "오프라인",
      },
    ],
    []
  );

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handleNicknameClick = (e, row) => {
    setAnchorEl(e.currentTarget);
    setSelectedNickname(row.닉네임);
    setSelectedId(row.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWithdraw = () => {
    // 회원 강제 탈퇴 처리 로직을 여기에 추가
    if (window.confirm("정말 탈퇴시키시겠습니까?")) {
      // API를 사용한 유저 탈퇴 로직 추가

      setUsers((prev) => prev.filter((user) => user.id !== selectedId));
      alert(`${selectedNickname} 회원이 강제 탈퇴되었습니다.`);
    }

    handleClose();
  };

  const handleWithUserDetailActiveModalOpen = () => {
    setIsModalOpen(true);
    handleClose();
  };

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">유저 리스트</h1>

      <Table columns={columns} datas={users}>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleWithUserDetailActiveModalOpen}>
            유저 상세 정보
          </MenuItem>
          <MenuItem onClick={handleWithdraw}>회원 강제 탈퇴</MenuItem>
          <MenuItem onClick={handleClose}>취소</MenuItem>
        </Menu>
      </Table>

      <BasicModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <UserDetails userId={selectedId} datas={users} />
      </BasicModal>
    </div>
  );
}
