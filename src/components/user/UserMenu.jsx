// 유저에서 사용하는 공통된 메뉴

import { useState } from "react";
import BasicMenu from "../menu/BasicMenu";
import Button from "../button/Button";
import { currentDateFormat } from "../../common";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { btnBasicStyle } from "../../constants";

export default function UserMenu({
  setIsModalOpen,
  anchorEl,
  setAnchorEl,
  setUsers,
  selectedId,
  selectedNickname,
  isTableModal,
  isResignUser,
  isForcedResign,
  setIsForcedResign,
}) {
  const [forcedResignReason, setForcedResignReason] =
    useState("강제 탈퇴 사유 선택");

  const handleReasonChange = (event) => {
    setForcedResignReason(event.target.value);
  };

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

      <div
        className={`${
          isForcedResign ? "block" : "hidden"
        } w-full h-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 z-[11] flex items-center justify-center`}
      >
        <div className="w-full max-w-[400px] p-4 mx-auto bg-white rounded-lg">
          <InputLabel
            id="reason-label"
            sx={{ textAlign: "center", marginBottom: 3 }}
          >
            {selectedNickname}님 강제 탈퇴 사유 선택
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
            <MenuItem value="부적절한 모임 개설">부적절한 모임 개설</MenuItem>
            <MenuItem value="부적절한 후기 댓글 작성">
              부적절한 후기 댓글 작성
            </MenuItem>
            <MenuItem value="기타">기타</MenuItem>
          </Select>

          <Button
            text="제출"
            basicStyles={btnBasicStyle["black-bg"]}
            styles="w-full mt-2 py-2 rounded-md"
            disabled={forcedResignReason === "강제 탈퇴 사유 선택"}
          />
        </div>
      </div>
    </>
  );
}
