// 유저에서 사용하는 공통된 메뉴

import { useRecoilState } from "recoil";
import { IsForcedResignState } from "../../../recoil/user";
import BasicMenu from "../BasicMenu";
import { currentDateFormat } from "../../../common";
import UserForcedResignReasonModal from "../../modal/user/UserForcedResignReasonModal";

export default function UserMenu({
  setIsModalOpen,
  anchorEl,
  setAnchorEl,
  setUsers,
  selectedId,
  selectedNickname,
  isTableModal,
  isResignUser,
}) {
  const [isForcedResign, setIsForcedResign] =
    useRecoilState(IsForcedResignState);

  const menuDatas = [
    {
      text: "회원 상세 정보",
      onClick: () => {
        setIsModalOpen(true);
        setAnchorEl(null);
      },
    },
    {
      text: "회원 강제 탈퇴",
      onClick: () => {
        // 회원 강제 탈퇴 처리 로직을 여기에 추가
        if (window.confirm("정말 탈퇴시키시겠습니까?")) {
          // API를 사용한 유저 탈퇴 로직 추가

          if (isResignUser) {
            alert("이미 탈퇴된 회원입니다...!");
          } else {
            setUsers((prev) =>
              prev.map((user) => {
                if (user.id === selectedId) {
                  return {
                    ...user,
                    "가입/탈퇴": "탈퇴",
                    "회원탈퇴 일자": currentDateFormat(new Date()),
                    강제탈퇴: true,
                    "재가입 가능 여부": "가능",
                  };
                } else {
                  return user;
                }
              })
            );

            alert(`${selectedNickname} 회원이 강제 탈퇴되었습니다.`);
            setIsForcedResign(true);
          }
        }

        setAnchorEl(null);
      },
    },
    {
      text: "취소",
      onClick: () => {
        setAnchorEl(null);
      },
    },
  ];
  const datas = isTableModal ? menuDatas.slice(1) : menuDatas;

  return (
    <>
      <BasicMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        menuDatas={datas}
      />

      <UserForcedResignReasonModal
        setIsForcedResign={setIsForcedResign}
        isForcedResign={isForcedResign}
        selectedNickname={selectedNickname}
        selectedId={selectedId}
        setUsers={setUsers}
      />
    </>
  );
}
