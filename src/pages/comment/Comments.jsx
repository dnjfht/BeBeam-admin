import { useState } from "react";
import { useRecoilState } from "recoil";
import { IsModalOpenState } from "../../recoil/content";
import {
  AnchorElState,
  SelectedIdState,
  SelectedNicknameState,
  UsersState,
} from "../../recoil/user";
import { CommunityReviewsDataState } from "../../recoil/review";
import UserModal from "../../components/modal/user/UserModal";
import UserMenu from "../../components/menu/user/UserMenu";
import Table from "../../components/table/Table";
import { handleNicknameClick, currentDateFormat } from "../../common";

export default function CommunityReviewsComment() {
  const [selectedId, setSelectedId] = useRecoilState(SelectedIdState);
  const [selectedNickname, setSelectedNickname] = useRecoilState(
    SelectedNicknameState
  );
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpenState);
  const [users, setUsers] = useRecoilState(UsersState);
  const [communityComments, setCommunityComments] = useRecoilState(
    CommunityReviewsDataState
  );
  const [anchorEl, setAnchorEl] = useRecoilState(AnchorElState);
  const [selectedIdList, setSelectedIdList] = useState([]);

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
      width: 150,
      renderCell: (params) => (
        <span
          onClick={(e) =>
            handleNicknameClick(
              e,
              params.row,
              setAnchorEl,
              setSelectedNickname,
              setSelectedId,
              false
            )
          }
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "이름",
      headerName: "이름",
      width: 150,
      editable: false,
    },
    {
      field: "작성 일자",
      headerName: "작성 일자",
      width: 180,
      editable: false,
    },
    {
      field: "댓글단 모임",
      headerName: "댓글단 모임",
      width: 200,
      editable: true,
    },
    {
      field: "후기 댓글",
      headerName: "후기 댓글",
      width: 500,
      editable: false,
    },
  ];

  const filteredDatas = communityComments.filter(
    (data) => data["삭제된 댓글"] === false
  );

  const leftStyle =
    selectedIdList.length === 0 ? "left-3" : "md:left-32 3sm:left-3";

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">후기 댓글 리스트</h1>

      <Table
        columns={columns}
        datas={filteredDatas}
        ischeckbox={true}
        selectedIdList={selectedIdList}
        setSelectedIdList={setSelectedIdList}
      >
        <button
          className={`${leftStyle} px-3 py-1 rounded-md bg-[#121212] text-white text-[0.875rem] absolute bottom-3`}
          onClick={() => {
            setCommunityComments((prev) =>
              prev.map((comment) => {
                if (selectedIdList.includes(comment.id)) {
                  return {
                    ...comment,
                    "삭제된 댓글": true,
                    "삭제된 일자": currentDateFormat(new Date()),
                  };
                } else {
                  return comment;
                }
              })
            );
          }}
        >
          댓글 삭제
        </button>

        <UserMenu
          setIsModalOpen={setIsModalOpen}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          setUsers={setUsers}
          selectedId={selectedId}
          selectedNickname={selectedNickname}
        />
      </Table>

      <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAnchorEl={setAnchorEl}
        data={users.find((user) => user.id === selectedId)}
      />
    </div>
  );
}
