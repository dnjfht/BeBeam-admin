// 유저에서 사용하는 공통된 모달

import BasicModal from "../BasicModal";
import UserDetails from "../contents/users/UserDetails";

export default function UserModal({
  isModalOpen,
  setIsModalOpen,
  setAnchorEl,
  data,
}) {
  return (
    <BasicModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      setAnchorEl={setAnchorEl}
    >
      <UserDetails data={data} setIsModalOpen={setIsModalOpen} />
    </BasicModal>
  );
}
