// 재활용할 모달(모달을 만들 거면 이걸 가져다 사용!)

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../button/Button";

import { BsXLg } from "react-icons/bs";
import { RiMore2Line } from "react-icons/ri";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: {
    xs: "90%", // 모바일
    sm: 500, // 작은 화면
    md: 500, // 중간 화면
    lg: 600, // 큰 화면
  },
  height: {
    xs: "60%",
  },
  bgcolor: "#d7dfe5",
  borderRadius: 4,
  boxShadow: 8,
  p: 3,
  overflowY: "scroll",
};

export default function BasicModal({
  isModalOpen,
  setIsModalOpen,
  isMoreMenu = true,
  setAnchorEl,
  children,
}) {
  return (
    <Modal
      open={isModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="relative flex w-full">
          <Button
            icon={<RiMore2Line />}
            styles={`${isMoreMenu ? "" : "hidden"} mr-auto`}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          />
          <Button
            icon={<BsXLg />}
            styles="ml-auto"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </div>

        <div className="mt-4">{children}</div>
      </Box>
    </Modal>
  );
}
