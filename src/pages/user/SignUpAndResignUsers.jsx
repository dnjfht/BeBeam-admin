import { useRecoilState } from "recoil";
import {
  AnchorElState,
  SelectedIdState,
  SelectedNicknameState,
  UsersState,
} from "../../recoil/user";
import { IsModalOpenState } from "../../recoil/content";
import Table from "../../components/table/Table";
import UserMenu from "../../components/user/UserMenu";
import UserModal from "../../components/user/UserModal";
import { handleNicknameClick } from "../../common";

export default function SignUpAndResignUsers() {
  const [users, setUsers] = useRecoilState(UsersState);
  const [anchorEl, setAnchorEl] = useRecoilState(AnchorElState);
  const [selectedNickname, setSelectedNickname] = useRecoilState(
    SelectedNicknameState
  );
  const [selectedId, setSelectedId] = useRecoilState(SelectedIdState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpenState);

  const columns = [
    {
      field: "id",
      headerName: "id",
      type: "string",
      width: 90,
      renderCell: () => <span>***********</span>,
    },
    {
      field: "가입/탈퇴",
      headerName: "가입/탈퇴",
      type: "string",
      width: 90,
    },
    {
      field: "회원가입 일자",
      headerName: "회원가입 일자",
      type: "string",
      width: 140,
    },
    {
      field: "회원탈퇴 일자",
      headerName: "회원탈퇴 일자",
      type: "string",
      width: 140,
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

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">가입/탈퇴 유저 리스트</h1>

      <Table columns={columns} datas={users}>
        <UserMenu
          setIsModalOpen={setIsModalOpen}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          setUsers={setUsers}
          selectedId={selectedId}
          selectedNickname={selectedNickname}
          isTableModal={isModalOpen}
          isResignUser={
            users.find((user) => user.id === selectedId)?.["가입/탈퇴"] ===
            "탈퇴"
          }
        />
      </Table>

      <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAnchorEl={setAnchorEl}
        selectedId={selectedId}
        datas={users}
      />
    </div>
  );
}
