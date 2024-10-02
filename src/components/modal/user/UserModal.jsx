// 유저에서 사용하는 공통된 모달

import BasicModal from "../BasicModal";
import UserDetails from "../contents/User/UserDetails";

export default function UserModal({
  isModalOpen,
  setIsModalOpen,
  setAnchorEl,
  selectedId,
  datas,
}) {
  return (
    <BasicModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      setAnchorEl={setAnchorEl}
    >
      <UserDetails
        userId={selectedId}
        datas={datas}
        setIsModalOpen={setIsModalOpen}
      />
    </BasicModal>
  );
}
