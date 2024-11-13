import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { currentDateFormat2, handleNicknameClick } from "../../common";
import { getAllUsersDataFetch } from "../../api/users";

import Table from "../../components/table/Table";
import BasicMenu from "../../components/menu/BasicMenu";
import Button from "../../components/button/Button";
import { btnBasicStyle } from "../../constants";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function ForceResignUsers({ accessToken }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [changeIdUserDatas, setChangeIdUserDatas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const { data: datas } = useQuery({
    queryKey: ["forcedResignUserDatas", accessToken, page],
    queryFn: async () => {
      const result = await getAllUsersDataFetch(
        accessToken,
        "forced_withdrawn",
        page,
        10
      );
      return result;
    },
  });

  const columns = [
    {
      field: "id",
      headerName: "id",
      type: "string",
      width: 50,
    },
    {
      field: "signUpDate",
      headerName: "회원가입 일자",
      type: "string",
      width: 180,
      renderCell: (params) => (
        <p>{currentDateFormat2(params.row["signUpDate"])}</p>
      ),
    },
    {
      field: "profileImage",
      headerName: "프로필 이미지",
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row["profileImage"]}
          alt="profileImage"
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: "100%",
            border: "1px solid #8d8d8d",
          }}
        />
      ),
    },
    {
      field: "nickname",
      headerName: "닉네임",
      width: 110,
      renderCell: (params) => (
        <span
          onClick={(e) =>
            handleNicknameClick(
              e,
              params.row,
              setAnchorEl,
              setSelectedNickname,
              setSelectedId
            )
          }
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    { field: "name", headerName: "이름", width: 70 },
    {
      field: "birthday",
      headerName: "생일",
      type: "string",
      width: 120,
    },
    {
      field: "gender",
      headerName: "성별",
      type: "string",
      width: 70,
    },
    {
      field: "phoneNumber",
      headerName: "핸드폰 번호",
      type: "string",
      width: 140,
    },
    {
      field: "email",
      headerName: "이메일",
      type: "string",
      width: 200,
    },
    {
      field: "membershipLevel",
      headerName: "회원등급",
      type: "string",
      width: 90,
    },
  ];

  const menuDatas = [
    {
      text: "회원 상세 정보",
      onClick: () => {
        setIsModalOpen(true);
        setAnchorEl(null);
      },
    },
    {
      text: "재가입 불가능 처리",
      onClick: () => {
        // 재가입 가능 여부 처리 로직 추가
        // setUsers((user) =>
        //   user.map((u) => {
        //     if (u.id === selectedId) {
        //       return {
        //         ...u,
        //         "재가입 가능 여부":
        //           u["재가입 가능 여부"] === "가능" ? "불가능" : "가능",
        //       };
        //     } else {
        //       return u;
        //     }
        //   })
        // );
      },
    },
    {
      text: "취소",
      onClick: () => {
        setAnchorEl(null);
      },
    },
  ];

  useEffect(() => {
    if (datas?.users) {
      setChangeIdUserDatas(
        datas?.users?.map((user) => ({
          id: user?.userId,
          ...user,
        }))
      );
    }
  }, [datas]);

  const filterMenuDatas = isModalOpen ? menuDatas.slice(1) : menuDatas;
  const totalPages = datas?.pageInfo?.totalPages;

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">강제 탈퇴 유저 리스트</h1>

      <Table columns={columns} datas={changeIdUserDatas} height="80vh">
        <BasicMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          menuDatas={filterMenuDatas}
        />

        <p className="absolute left-3 bottom-[14px]">
          {page}/{totalPages} pages
        </p>

        <div className="absolute bottom-[10px] right-3 text-[1.4rem] flex items-center gap-x-2">
          <Button
            icon={<HiChevronLeft />}
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            basicStyles={btnBasicStyle.basic}
            styles="p-1 rounded-lg"
            disabled={page === 1}
            enableStyles="bg-[#282828] text-white"
          />
          <Button
            icon={<HiChevronRight />}
            onClick={() => {
              if (totalPages > page) {
                setPage((prev) => prev + 1);
              }
            }}
            basicStyles={btnBasicStyle.basic}
            styles="p-1 rounded-lg"
            disabled={page >= totalPages}
            enableStyles="bg-[#282828] text-white"
          />
        </div>
      </Table>

      {/* <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAnchorEl={setAnchorEl}
        data={users.find((user) => user.id === selectedId)}
      /> */}
    </div>
  );
}
