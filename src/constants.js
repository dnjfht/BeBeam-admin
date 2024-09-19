// 전역 상수

export const textInputBasicStyle = {};

export const textInputStyle = {
  login:
    "w-full px-3 2sm:py-4 py-3 rounded-lg bg-[rgba(255,255,255,0.1)] md:text-[1rem] placeholder:text-[1rem] text-[0.875rem] placeholder:text-[0.875rem]",
};

export const btnBasicStyle = {
  basic: "",
  border: "border-[1px] border-solid transition-all duration-700",
  "login-delete": "absolute transition-all duration-700",
};

export const btnStyle = {
  "login-delete": "2sm:text-[1.4rem] text-[1.2rem] 2sm:top-5 top-4 right-3",
};

// 전체 유저 데이터
export const userList = [
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
    주소: "부산시 수영구",
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
    주소: "부산시 영도구",
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
    주소: "부산시 사상구",
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
    주소: "부산시 해운대구",
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
    주소: "부산시 금정구",
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
    주소: "부산시 연제구",
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
    주소: "부산시 사상구",
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
    주소: "부산시 강서구",
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
    주소: "부산시 중구",
    "회원가입 일자": "2024.07.17",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "53CDC6AB-72C6-4B51-BCAD-81D4C85E111D",
    "프로필 이미지":
      "https://i.pinimg.com/736x/44/ea/68/44ea683f9c66ae66aaa0732f270cd202.jpg",
    닉네임: "꼬꼬몽",
    이름: "이기욱",
    생일: "2000.07.08",
    성별: "남성",
    "핸드폰 번호": "010-4551-7810",
    이메일: "ghgrffe@naver.com",
    주소: "부산시 해운대구",
    "회원가입 일자": "2024.07.17",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "E1EE4CC7-3B9F-456B-97B4-6CD67BC17298",
    "프로필 이미지":
      "https://i.pinimg.com/564x/1c/16/bd/1c16bd58c77d3baea6162130e6a2ddc1.jpg",
    닉네임: "이기적인 몽상가",
    이름: "이하늘",
    생일: "2000.12.24",
    성별: "여성",
    "핸드폰 번호": "010-1269-5903",
    이메일: "asfs120@naver.com",
    주소: "부산시 남구",
    "회원가입 일자": "2024.07.16",
    "회원 등급": "host",
    "정기모임 참여 횟수": 5,
    "소모임 참여 횟수": 3,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "0674431A-E25B-4906-9B9A-0FAFA1382D8B",
    "프로필 이미지":
      "https://i.pinimg.com/564x/ab/66/ee/ab66ee79af087cabae30086056575dd8.jpg",
    닉네임: "pink sky",
    이름: "유지안",
    생일: "1994.05.18",
    성별: "여성",
    "핸드폰 번호": "010-5248-6999",
    이메일: "01dangji@naver.com",
    주소: "부산시 서구",
    "회원가입 일자": "2024.07.14",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "5265F9F2-1964-4DEC-BF84-A13486E2399B",
    "프로필 이미지":
      "https://i.pinimg.com/564x/82/75/40/827540faa974370b31fcbc0c1c3bb7bb.jpg",
    닉네임: "귀여운 나",
    이름: "안지우",
    생일: "2002.10.21",
    성별: "남성",
    "핸드폰 번호": "010-9978-1028",
    이메일: "cuteeeee00@naver.com",
    주소: "부산시 해운대구",
    "회원가입 일자": "2024.07.14",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "5B2E7A63-D1F8-4402-87DB-C35C12D2A7F2",
    "프로필 이미지":
      "https://i.pinimg.com/564x/f2/ba/62/f2ba62f6e8f7f3a19d766b3de2a79775.jpg",
    닉네임: "흰토끼",
    이름: "자연우",
    생일: "2001.06.06",
    성별: "여성",
    "핸드폰 번호": "010-0011-2774",
    이메일: "sdsds05Ds@naver.com",
    주소: "부산시 금정구",
    "회원가입 일자": "2024.07.13",
    "회원 등급": "host",
    "정기모임 참여 횟수": 6,
    "소모임 참여 횟수": 3,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
  {
    id: "6C41740B-D6D8-41C4-90B2-0FE6F7D25E79",
    "프로필 이미지":
      "https://i.pinimg.com/564x/5a/8c/df/5a8cdf65378cc4a2777ea7b3f3ec2011.jpg",
    닉네임: "유로피아",
    이름: "하성범",
    생일: "1995.12.18",
    성별: "남성",
    "핸드폰 번호": "010-4123-5800",
    이메일: "hasungbum1218@naver.com",
    주소: "부산시 수영구",
    "회원가입 일자": "2024.07.10",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "0F2B1860-B02A-48B0-A293-3577BDE06875",
    "프로필 이미지":
      "https://i.pinimg.com/564x/46/43/a9/4643a991bfb0cd3586aafae34e58bf9b.jpg",
    닉네임: "ZIKKY",
    이름: "김지향",
    생일: "1998.02.23",
    성별: "여성",
    "핸드폰 번호": "010-5217-4903",
    이메일: "545asdad03@naver.com",
    주소: "부산시 북구",
    "회원가입 일자": "2024.07.10",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 2,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
];

// 가입/탈퇴 유저 데이터
export const signUpAndResignUserList = [
  {
    id: "AED1C59E-F421-4E69-BB2A-C6C4A883A62A",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.04.27",
    "회원탈퇴 일자": "2024.09.19",
    "프로필 이미지":
      "https://i.pinimg.com/564x/ce/5f/24/ce5f24b1f7f0b6179eaf883ed0e53c80.jpg",
    닉네임: "문제적 남자",
    이름: "김남준",
    생일: "1994.09.12",
    성별: "남성",
    "핸드폰 번호": "010-5343-1212",
    이메일: "bts_fsd@A@gmail.com",
    주소: "부산시 남산동",
    "회원 등급": "host",
    "정기모임 참여 횟수": 6,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "C907ABB0-3611-404F-802F-67E6C0383538",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.09.12",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1725656471388-0aa1e4ab2c8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "귀여운 컵케잌",
    이름: "유승민",
    생일: "2000.09.21",
    성별: "여성",
    "핸드폰 번호": "010-5220-2817",
    이메일: "dnjfht@gmail.com",
    주소: "부산시 어딘가",
    "회원 등급": "common",
    "정기모임 참여 횟수": 0,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "F8B21807-7C44-4FA9-AF3B-1D464C22A764",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.05.01",
    "회원탈퇴 일자": "2024.09.16",
    "프로필 이미지":
      "https://i.pinimg.com/564x/45/e0/3f/45e03f1ad8883c44567a174c87f198f2.jpg",
    닉네임: "짐모니",
    이름: "이사랑",
    생일: "1992.02.19",
    성별: "여성",
    "핸드폰 번호": "010-4850-5959",
    이메일: "iLoveYou00@gmail.com",
    주소: "부산시 해운대구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 2,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
  {
    id: "C36D65FB-380C-4975-8172-153BF6A6AEDB",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.04.12",
    "회원탈퇴 일자": "2024.09.12",
    "프로필 이미지":
      "https://i.pinimg.com/564x/28/c2/ac/28c2acaa714d0ce3e696f4babb3b0519.jpg",
    닉네임: "하얀 돌고래",
    이름: "이기찬",
    생일: "2000.08.23",
    성별: "남성",
    "핸드폰 번호": "010-0871-1542",
    이메일: "EEgichur75@gmail.com",
    주소: "부산시 금정구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 2,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "3C139FB6-8F4F-43D8-823D-8E203256BCD7",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.06.05",
    "회원탈퇴 일자": "2024.09.07",
    "프로필 이미지":
      "https://i.pinimg.com/564x/aa/c0/46/aac046745d372b77cdb2d7300affb332.jpg",
    닉네임: "디어디몽드",
    이름: "이지환",
    생일: "2000.04.07",
    성별: "남성",
    "핸드폰 번호": "010-5444-1540",
    이메일: "deorHeartZz4@gmail.com",
    주소: "부산시 서구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "675DA4D7-F678-4ECD-AE3A-5898F0E7241B",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.02.18",
    "회원탈퇴 일자": "2024.09.04",
    "프로필 이미지":
      "https://i.pinimg.com/564x/d4/aa/a1/d4aaa13b264b70c9ea80f09abacdcdf6.jpg",
    닉네임: "지약꼬",
    이름: "우지호",
    생일: "1992.09.14",
    성별: "남성",
    "핸드폰 번호": "010-4531-0000",
    이메일: "zicoILoveYou@naver.com",
    주소: "부산시 북구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 10,
    "소모임 참여 횟수": 5,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "472CE6C5-0645-44C6-BCA8-FC80D23D710D",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.05.25",
    "회원탈퇴 일자": "2024.08.27",
    "프로필 이미지":
      "https://i.pinimg.com/564x/0c/3c/83/0c3c83dbacd7a1cfc7ea52dce071fc41.jpg",
    닉네임: "라즈베리 향",
    이름: "정유미",
    생일: "1995.04.05",
    성별: "여성",
    "핸드폰 번호": "010-2222-1100",
    이메일: "flowerrr120ER@naver.com",
    주소: "부산시 서구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "36D1C75A-2864-4786-8FF2-4870BC62BCFD",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.01.19",
    "회원탈퇴 일자": "2024.08.15",
    "프로필 이미지":
      "https://i.pinimg.com/564x/c2/84/12/c284121d9c34c63f8e8e0c8eb3ce25b3.jpg",
    닉네임: "포켓몽몽이",
    이름: "지민우",
    생일: "2005.08.14",
    성별: "남성",
    "핸드폰 번호": "010-9942-5555",
    이메일: "mongmong@naver.com",
    주소: "부산시 금정구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 12,
    "소모임 참여 횟수": 4,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
  {
    id: "D852E9B1-5F2D-472C-8FC0-D5E31866E688",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.03.21",
    "회원탈퇴 일자": "2024.08.12",
    "프로필 이미지":
      "https://i.pinimg.com/736x/ef/b3/3b/efb33bf8bf1362bee245badf60faa1d8.jpg",
    닉네임: "디어 달링",
    이름: "유시아",
    생일: "1991.06.23",
    성별: "여성",
    "핸드폰 번호": "010-2752-4120",
    이메일: "Yoosiasia@naver.com",
    주소: "부산시 서동",
    "회원 등급": "host",
    "정기모임 참여 횟수": 7,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "5DAD7FF7-02A8-4959-A3E9-4C0AD2D8B1E3",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.08.04",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1630389715052-983a8e31faa6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "나물비빔밥",
    이름: "이지욱",
    생일: "1995.07.12",
    성별: "남성",
    "핸드폰 번호": "010-5451-0974",
    이메일: "ddyoyung@naver.com",
    주소: "부산시 어딘가",
    "회원 등급": "host",
    "정기모임 참여 횟수": 2,
    "소모임 참여 횟수": 0,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
  {
    id: "775DD0B9-E338-4777-89D6-9FE6A7175806",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.08.01",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1550133725-5fc2925431fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "배우 지현욱 좋아요",
    이름: "지현욱",
    생일: "1991.12.06",
    성별: "여성",
    "핸드폰 번호": "010-5721-9813",
    이메일: "yao@naver.com",
    주소: "부산시 해운대구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 5,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "20083678-9A55-4C2B-BDD9-F71845EBE4B6",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.08.01",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1708461646032-5743c250ac77?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "행복한 고양이",
    이름: "김하나",
    생일: "1998.05.15",
    성별: "여성",
    "핸드폰 번호": "010-1234-5678",
    이메일: "catlover@gmail.com",
    주소: "부산시 수영구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "396C8AB1-9FC9-4B07-8E16-CFDBA6A22455",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.31",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://plus.unsplash.com/premium_photo-1676106623114-e2edc4f04fe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "커피 중독자",
    이름: "이준호",
    생일: "1992.11.30",
    성별: "남성",
    "핸드폰 번호": "010-9876-5432",
    이메일: "coffeeaddict@naver.com",
    주소: "부산시 영도구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 3,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "E40B874F-B7F9-447B-80F6-776D9B5B1AE4",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.30",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "모험가",
    이름: "박지민",
    생일: "1990.01.25",
    성별: "여성",
    "핸드폰 번호": "010-6543-2109",
    이메일: "adventurer@naver.com",
    주소: "부산시 남구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "15507E19-BFD5-46D6-8303-1B23374416F5",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.04.07",
    "회원탈퇴 일자": "2024.07.29",
    "프로필 이미지":
      "https://i.pinimg.com/564x/4c/8b/e5/4c8be5ef2f49ac4c6f80aba6f62aa64a.jpg",
    닉네임: "한",
    이름: "김요한",
    생일: "2002.09.21",
    성별: "남성",
    "핸드폰 번호": "010-5451-6865",
    이메일: "dfdgfhbs@gmail.com",
    주소: "부산시 북구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "4AC740B8-F779-467B-BD35-FE29001A0E31",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.29",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "책벌레",
    이름: "최유리",
    생일: "1993.03.18",
    성별: "여성",
    "핸드폰 번호": "010-3456-7890",
    이메일: "bookworm@naver.com",
    주소: "부산시 사상구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 2,
    "소모임 참여 횟수": 4,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "17000C11-233A-4A70-93C7-52BA155AC315",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.26",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1505356212111-7ac1beb0c506?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "여행 매니아",
    이름: "이서준",
    생일: "1994.08.22",
    성별: "남성",
    "핸드폰 번호": "010-1122-3344",
    이메일: "traveler@naver.com",
    주소: "부산시 해운대구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "ED356EF4-13C0-466A-9CAD-9A09156ECCF9",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.26",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://plus.unsplash.com/premium_photo-1677561423213-f416ec0c3195?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "음악 사랑",
    이름: "김민수",
    생일: "1996.04.10",
    성별: "남성",
    "핸드폰 번호": "010-5566-7788",
    이메일: "musiclover@gmail.com",
    주소: "부산시 금정구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "BEDE4726-1E9F-4AFA-8832-CCC0C41EE52C",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.25",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://plus.unsplash.com/premium_photo-1667149988086-faabd5a500b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "요리사",
    이름: "홍길동",
    생일: "1989.12.12",
    성별: "남성",
    "핸드폰 번호": "010-2233-4455",
    이메일: "chef@naver.com",
    주소: "부산시 연제구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "5FC28830-65D2-4CEB-A5F2-E7ADA996CA6E",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.03.18",
    "회원탈퇴 일자": "2024.07.23",
    "프로필 이미지":
      "https://i.pinimg.com/564x/a0/b8/7e/a0b87e8f1d03d06984980e11ed4c7d2f.jpg",
    닉네임: "데미안",
    이름: "이아서",
    생일: "2004.01.05",
    성별: "남성",
    "핸드폰 번호": "010-5452-9999",
    이메일: "demian@naver.com",
    주소: "부산시 사하구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 5,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "A2BB5158-F527-47D5-B672-3194045F6435",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.21",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://plus.unsplash.com/premium_photo-1667149988971-ef958f614127?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "영화 감상가",
    이름: "이정민",
    생일: "1997.02.20",
    성별: "여성",
    "핸드폰 번호": "010-3344-5566",
    이메일: "moviefan@naver.com",
    주소: "부산시 동래구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 5,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "E112B114-77C2-4B41-BF22-33BA219062B7",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.19",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1718397363345-7a6aeb25f669?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "게임 매니아",
    이름: "김태희",
    생일: "1995.06.30",
    성별: "여성",
    "핸드폰 번호": "010-7788-9900",
    이메일: "gamer@naver.com",
    주소: "부산시 사상구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 2,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "45699272-7EF0-48D2-BFC8-901E17F42012",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.18",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://plus.unsplash.com/premium_photo-1661667075996-18a04b626fe2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "피아노 연주자",
    이름: "정현주",
    생일: "1990.09.09",
    성별: "여성",
    "핸드폰 번호": "010-1122-3344",
    이메일: "pianolover@gmail.com",
    주소: "부산시 강서구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "5834B85B-61E2-4C46-A2F8-37176AC20D60",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.17",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    닉네임: "패션 피플",
    이름: "민지혜",
    생일: "1994.10.14",
    성별: "여성",
    "핸드폰 번호": "010-2233-4455",
    이메일: "fashionista@naver.com",
    주소: "부산시 중구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "53CDC6AB-72C6-4B51-BCAD-81D4C85E111D",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.17",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/736x/44/ea/68/44ea683f9c66ae66aaa0732f270cd202.jpg",
    닉네임: "꼬꼬몽",
    이름: "이기욱",
    생일: "2000.07.08",
    성별: "남성",
    "핸드폰 번호": "010-4551-7810",
    이메일: "ghgrffe@naver.com",
    주소: "부산시 해운대구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "E1EE4CC7-3B9F-456B-97B4-6CD67BC17298",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.16",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/564x/1c/16/bd/1c16bd58c77d3baea6162130e6a2ddc1.jpg",
    닉네임: "이기적인 몽상가",
    이름: "이하늘",
    생일: "2000.12.24",
    성별: "여성",
    "핸드폰 번호": "010-1269-5903",
    이메일: "asfs120@naver.com",
    주소: "부산시 남구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 5,
    "소모임 참여 횟수": 3,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "0674431A-E25B-4906-9B9A-0FAFA1382D8B",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.14",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/564x/ab/66/ee/ab66ee79af087cabae30086056575dd8.jpg",
    닉네임: "pink sky",
    이름: "유지안",
    생일: "1994.05.18",
    성별: "여성",
    "핸드폰 번호": "010-5248-6999",
    이메일: "01dangji@naver.com",
    주소: "부산시 서구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 1,
    "소모임 참여 횟수": 0,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "8DD45D21-DAA1-401C-84DD-86C940A530F0",
    "가입/탈퇴": "탈퇴",
    "회원가입 일자": "2024.05.09",
    "회원탈퇴 일자": "2024.07.14",
    "프로필 이미지":
      "https://i.pinimg.com/736x/48/64/73/486473090ffa5f4a5b05bf1d569d5541.jpg",
    닉네임: "아그랑데",
    이름: "김지오",
    생일: "2000.05.11",
    성별: "여성",
    "핸드폰 번호": "010-1011-2022",
    이메일: "cheezeCake58@naver.com",
    주소: "부산시 진구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "오프라인",
  },
  {
    id: "5265F9F2-1964-4DEC-BF84-A13486E2399B",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.14",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/564x/82/75/40/827540faa974370b31fcbc0c1c3bb7bb.jpg",
    닉네임: "귀여운 나",
    이름: "안지우",
    생일: "2002.10.21",
    성별: "남성",
    "핸드폰 번호": "010-9978-1028",
    이메일: "cuteeeee00@naver.com",
    주소: "부산시 해운대구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 2,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "5B2E7A63-D1F8-4402-87DB-C35C12D2A7F2",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.13",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/564x/f2/ba/62/f2ba62f6e8f7f3a19d766b3de2a79775.jpg",
    닉네임: "흰토끼",
    이름: "자연우",
    생일: "2001.06.06",
    성별: "여성",
    "핸드폰 번호": "010-0011-2774",
    이메일: "sdsds05Ds@naver.com",
    주소: "부산시 금정구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 6,
    "소모임 참여 횟수": 3,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
  {
    id: "6C41740B-D6D8-41C4-90B2-0FE6F7D25E79",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.10",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/564x/5a/8c/df/5a8cdf65378cc4a2777ea7b3f3ec2011.jpg",
    닉네임: "유로피아",
    이름: "하성범",
    생일: "1995.12.18",
    성별: "남성",
    "핸드폰 번호": "010-4123-5800",
    이메일: "hasungbum1218@naver.com",
    주소: "부산시 수영구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 3,
    "소모임 참여 횟수": 1,
    "신고 횟수": 0,
    "회원 상태": "온라인",
  },
  {
    id: "0F2B1860-B02A-48B0-A293-3577BDE06875",
    "가입/탈퇴": "가입",
    "회원가입 일자": "2024.07.10",
    "회원탈퇴 일자": "-",
    "프로필 이미지":
      "https://i.pinimg.com/564x/46/43/a9/4643a991bfb0cd3586aafae34e58bf9b.jpg",
    닉네임: "ZIKKY",
    이름: "김지향",
    생일: "1998.02.23",
    성별: "여성",
    "핸드폰 번호": "010-5217-4903",
    이메일: "545asdad03@naver.com",
    주소: "부산시 북구",
    "회원 등급": "host",
    "정기모임 참여 횟수": 4,
    "소모임 참여 횟수": 2,
    "신고 횟수": 1,
    "회원 상태": "오프라인",
  },
];
