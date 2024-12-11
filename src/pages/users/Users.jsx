import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { currentDateFormat2, handleNicknameClick } from "../../common";
import { getAllUsersDataFetch } from "../../api/users";

import Table from "../../components/table/Table";
import UserMenu from "../../components/menu/user/UserMenu";
import Button from "../../components/button/Button";
import { btnBasicStyle } from "../../constants";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import BasicSelect from "../../components/select/BasicSelect";

export default function Users({ accessToken }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [changeIdUserDatas, setChangeIdUserDatas] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: datas } = useQuery({
    queryKey: ["userDatas", accessToken, filter, page],
    queryFn: async () => {
      const result = await getAllUsersDataFetch(
        accessToken,
        filter === "all" ? "" : filter,
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
      width: 120,
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
  const totalPages = datas?.pageInfo?.totalPages;

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

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">
        유저 리스트(총 {datas?.pageInfo?.totalElements}명)
      </h1>

      <div className="flex justify-end w-full mb-3">
        <BasicSelect
          id="user-state"
          typeText="유저 상태"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          datas={[
            { value: "all", title: "전체" },
            { value: "active", title: "활동중" },
            { value: "reported", title: "신고" },
            { value: "suspended", title: "활동정지" },
            { value: "withdrawn", title: "탈퇴" },
            { value: "forced_withdrawn", title: "강제탈퇴" },
          ]}
        />
      </div>

      <Table columns={columns} datas={changeIdUserDatas}>
        <UserMenu
          setIsModalOpen={setIsModalOpen}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          selectedNickname={selectedNickname}
          isTableModal={isModalOpen}
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
