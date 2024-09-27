import { useRecoilState } from "recoil";
import Table from "../../components/table/Table";
import { IsModalOpenState } from "../../recoil/content";
import {
  AnchorElState,
  SelectedIdState,
  SelectedNicknameState,
  UsersState,
} from "../../recoil/user";
import BasicMenu from "../../components/menu/BasicMenu";
import UserModal from "../../components/user/UserModal";
import { currentDateFormat, handleNicknameClick } from "../../common";

export default function ForceResignUsers() {
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
      field: "회원탈퇴 일자",
      headerName: "회원탈퇴 일자",
      type: "string",
      width: 140,
    },
    {
      field: "강제탈퇴 사유",
      headerName: "강제탈퇴 사유",
      type: "string",
      width: 140,
    },
    {
      field: "재가입 가능 여부",
      headerName: "재가입 가능 여부",
      type: "string",
      width: 90,
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

  const filteredForceResignUsers = users.filter(
    (user) => user.강제탈퇴 === true
  );

  const menuDatas = [
    {
      text: "회원 상세 정보",
      onClick: () => {
        setIsModalOpen(true);
        setAnchorEl(null);
      },
    },
    {
      text: `${
        filteredForceResignUsers.find((user) => user.id === selectedId)?.[
          "재가입 가능 여부"
        ] === "가능"
          ? "재가입 불가능 처리"
          : "재가입 가능 처리"
      }`,
      onClick: () => {
        // 재가입 가능 여부 처리 로직 추가

        setUsers((user) =>
          user.map((u) => {
            if (u.id === selectedId) {
              return {
                ...u,
                "재가입 가능 여부":
                  u["재가입 가능 여부"] === "가능" ? "불가능" : "가능",
              };
            } else {
              return u;
            }
          })
        );
      },
    },
    {
      text: "취소",
      onClick: () => {
        setAnchorEl(null);
      },
    },
  ];
  const datas = isModalOpen ? menuDatas.slice(1) : menuDatas;

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">강제 탈퇴 유저 리스트</h1>

      <Table columns={columns} datas={filteredForceResignUsers}>
        <BasicMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          menuDatas={datas}
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
