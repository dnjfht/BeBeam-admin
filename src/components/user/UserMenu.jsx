// 유저에서 사용하는 공통된 메뉴

import { currentDateFormat } from "../../common";
import BasicMenu from "../menu/BasicMenu";

export default function UserMenu({
  setIsModalOpen,
  anchorEl,
  setAnchorEl,
  setUsers,
  setSignUpAndResignUsers,
  selectedId,
  selectedNickname,
  isTableModal,
  isResignUser,
}) {
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
            setUsers((prev) => prev.filter((user) => user.id !== selectedId));
            setSignUpAndResignUsers((prev) =>
              prev.map((user) => {
                if (user.id === selectedId) {
                  return {
                    ...user,
                    "가입/탈퇴": "탈퇴",
                    "회원탈퇴 일자": currentDateFormat(new Date()),
                  };
                } else {
                  return user;
                }
              })
            );

            alert(`${selectedNickname} 회원이 강제 탈퇴되었습니다.`);
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
  const datas = isTableModal ? menuDatas : menuDatas.slice(1);

  return (
    <BasicMenu
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuDatas={datas}
    />
  );
}
