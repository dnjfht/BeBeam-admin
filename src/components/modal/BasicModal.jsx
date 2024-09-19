import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../button/Button";

import { BsXLg } from "react-icons/bs";
import { RiMore2Line } from "react-icons/ri";
import UserMenu from "../user/UserMenu";

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
  setAnchorEl,
  children,
}) {
  return (
    <div className={`${isModalOpen ? "block" : "hidden"}`}>
      <Modal
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative flex justify-between w-full">
            <Button
              icon={<RiMore2Line />}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
            />
            <Button
              icon={<BsXLg />}
              onClick={() => {
                setIsModalOpen(false);
              }}
            />
          </div>

          <div className="mt-4">{children}</div>
        </Box>
      </Modal>
    </div>
  );
}
