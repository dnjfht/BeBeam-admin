import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../../button/Button";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { btnBasicStyle } from "../../../constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#eeeeee",
  borderRadius: 4,
  boxShadow: 8,
};

export default function UserForcedResignReasonModal({
  isForcedResign,
  selectedNickname,
}) {
  const [forcedResignReason, setForcedResignReason] =
    useState("강제 탈퇴 사유 선택");

  const handleReasonChange = (event) => {
    setForcedResignReason(event.target.value);
  };

  return (
    <div className={`${isForcedResign ? "block" : "hidden"}`}>
      <Modal
        open={isForcedResign}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mt-4">
            <div className="px-16 py-8">
              <InputLabel
                id="reason-label"
                sx={{ textAlign: "center", marginBottom: 3, color: "#121212" }}
              >
                <span className="text-[#6200ff]">{selectedNickname}</span>님을
                강제 탈퇴시켰습니다.
                <br />
                강제 탈퇴 사유를 선택해주세요.
              </InputLabel>

              <Select
                labelId="reason-label"
                value={forcedResignReason}
                onChange={handleReasonChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value="강제 탈퇴 사유 선택" disabled selected>
                  강제 탈퇴 사유 선택
                </MenuItem>
                <MenuItem value="부적절한 모임 개설">
                  부적절한 의도의 모임 개설
                </MenuItem>
                <MenuItem value="부적절한 후기 댓글 작성">
                  부적절한 후기 댓글 작성
                </MenuItem>
                <MenuItem value="기타">기타</MenuItem>
              </Select>
            </div>

            <Button
              text="제출"
              basicStyles={btnBasicStyle["border"]}
              styles="w-full mt-2 py-4 rounded-md border-t-[1px] border-[#d0d0d0]"
              disabled={forcedResignReason === "강제 탈퇴 사유 선택"}
              onClick={() => {
                // 강제 탈퇴 기능 아직 없심
                // setUsers((prev) =>
                //   prev.map((user) => {
                //     if (user.id === selectedId) {
                //       return {
                //         ...user,
                //         "강제탈퇴 사유": forcedResignReason,
                //       };
                //     } else {
                //       return user;
                //     }
                //   })
                // );
                // alert("제출되었습니다!");
                // setIsForcedResign(false);
                // setForcedResignReason("강제 탈퇴 사유 선택");
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
