import { useEffect, useMemo, useState } from "react";
import Table from "../../components/table/Table";

export default function Admins() {
  const [admins, setAdmins] = useState([]);

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
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row["프로필 이미지"]}
          alt="프로필 이미지"
          style={{
            width: 40,
            height: 40,
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      ),
    },
    {
      field: "닉네임",
      headerName: "닉네임",
      width: 140,
      renderCell: (params) => (
        <span style={{ cursor: "pointer" }}>{params.value}</span>
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
      width: 200,
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
      width: 140,
    },
  ];

  const adminData = useMemo(
    () => [
      {
        id: "A3415F9E-8E8C-4421-9278-B7D8E1E1FF53",
        "프로필 이미지":
          "https://i.pinimg.com/736x/c8/32/1f/c8321f188e80a0e7f439818ffa06acd0.jpg",
        닉네임: "admin",
        이름: "진미체",
        성별: "남자",
        생일: "1996.04.21",
        "핸드폰 번호": "010-1874-9746",
        이메일: "dfsda@hanmail.com",
        주소: "부산 금정구",
        "회원가입 일자": "2024.08.29",
      },
      {
        id: "4A353563-B584-4482-8BC9-D51BAC4AA4D7",
        "프로필 이미지":
          "https://i.pinimg.com/564x/74/f6/1f/74f61fc7f0d37d311a04aad86ed7e443.jpg",
        닉네임: "admin",
        이름: "이기욱",
        성별: "남자",
        생일: "2002.08.14",
        "핸드폰 번호": "010-2222-1111",
        이메일: "kiiwook100@gmail.com",
        주소: "부산 북구",
        "회원가입 일자": "2024.07.15",
      },
      {
        id: "CA24F294-C543-4DF1-A0D1-A095667F64A7",
        "프로필 이미지":
          "https://i.pinimg.com/564x/cc/00/56/cc0056381766c8686364001ed5d6b642.jpg",
        닉네임: "admin",
        이름: "이지나",
        성별: "여자",
        생일: "1999.05.18",
        "핸드폰 번호": "010-1704-8855",
        이메일: "sdsda._.@gmail.com",
        주소: "부산 기장군",
        "회원가입 일자": "2024.07.08",
      },
      {
        id: "48D788FB-02AC-44A1-A36D-D48CD0C005DE",
        "프로필 이미지":
          "https://i.pinimg.com/564x/c4/4f/af/c44faf3978063f3e29c23f2ad74cba54.jpg",
        닉네임: "admin",
        이름: "이아현",
        성별: "여자",
        생일: "2003.01.25",
        "핸드폰 번호": "010-4584-6520",
        이메일: "thgsA12@gmail.com",
        주소: "부산 사상구",
        "회원가입 일자": "2024.06.21",
      },
      {
        id: "4625CA50-ECF4-4346-95CC-451A00BCF5EB",
        "프로필 이미지":
          "https://i.pinimg.com/736x/d9/f2/d5/d9f2d5b070b4537b5b78d2a15a1527ce.jpg",
        닉네임: "admin",
        이름: "김기현",
        성별: "남자",
        생일: "1997.02.26",
        "핸드폰 번호": "010-0014-4512",
        이메일: "00drsdpW@@gmail.com",
        주소: "부산 남구",
        "회원가입 일자": "2024.06.12",
      },
      {
        id: "40D2FAE2-2A67-46BF-84F2-C6A93D751E9E",
        "프로필 이미지":
          "https://i.pinimg.com/736x/6b/82/b0/6b82b0a3adb4e30095c906a56ad0225f.jpg",
        닉네임: "admin",
        이름: "시아랑",
        성별: "여자",
        생일: "1989.10.12",
        "핸드폰 번호": "010-4488-2512",
        이메일: "gfgQ@!@gmail.com",
        주소: "부산 서면",
        "회원가입 일자": "2024.06.04",
      },
    ],
    []
  );

  useEffect(() => {
    setAdmins(adminData);
  }, [adminData]);

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">관리자 리스트</h1>

      <Table columns={columns} datas={admins} />
    </div>
  );
}
