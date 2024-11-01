import { useState } from "react";

import CreateMeetingModal from "../../components/modal/contents/meeting/CreateMeetModal";
import Table from "../../components/table/Table";
import { Menu, MenuItem } from "@mui/material";
import MeetingModal from "../../components/modal/contents/meeting/MeetingDetailModal";
import { currentDateFormat2, handleMeetingNameClick } from "../../common";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AccessTokenState } from "../../recoil/login";
import { useRecoilValue } from "recoil";
import { allMeetingDataFetch, deleteMeetingDataFetch } from "../../api/meeting";
import BasicMenu from "../../components/menu/BasicMenu";
import { Toast } from "../../components/toast/Toast";
import Button from "../../components/button/Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { btnBasicStyle } from "../../constants";

export default function CreateRegMeetings() {
  const queryClient = useQueryClient();
  const accessToken = useRecoilValue(AccessTokenState);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const { data: datas } = useQuery({
    queryKey: ["regularMeetingDatas", accessToken, page],
    queryFn: async () => {
      const result = await allMeetingDataFetch(accessToken, page, 10, {
        search: "",
        status: "recruiting",
        type: "regular",
      });
      return result;
    },
  });

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "thumbnailImage",
      headerName: "썸네일 이미지",
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row["thumbnailImage"]}
          alt="thumbnailImage"
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: "10px",
            border: "1px solid #8d8d8d",
          }}
        />
      ),
    },
    {
      field: "name",
      headerName: "모임명",
      width: 200,
      renderCell: (params) => (
        <span
          onClick={(e) =>
            handleMeetingNameClick(e, params.row, setAnchorEl, setSelectedId)
          }
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    { field: "recruitmentType", headerName: "모임 형태", width: 90 },
    { field: "recruitmentStatus", headerName: "모임 상태", width: 90 },
    { field: "selectionType", headerName: "선발 형태", width: 90 },
    { field: "location", headerName: "개최 장소", width: 150 },
    {
      field: "meetingDatetime",
      headerName: "모집 마감일",
      width: 120,
      renderCell: (params) => (
        <p>{currentDateFormat2(params.row["meetingDatetime"])}</p>
      ),
    },
    { field: "minParticipants", headerName: "최소 모집인원", width: 90 },
    { field: "maxParticipants", headerName: "최대 모집인원", width: 90 },
    { field: "participantCount", headerName: "수락된 인원", width: 90 },
    { field: "paymentAmount", headerName: "참가비", width: 120 },
  ];

  const deleteMeetingMutation = useMutation({
    mutationFn: () => deleteMeetingDataFetch(accessToken, selectedId),
    onSuccess: () => {
      Toast("모임을 삭제하였습니다.");
      return queryClient.invalidateQueries(["meetingDatas", page]);
    },
  });

  const menuDatas = [
    {
      text: "모임 상세 정보",
      onClick: () => {
        setIsModalOpen(true);
        setAnchorEl(null);
      },
    },
    {
      text: "모임 삭제",
      onClick: () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
          try {
            deleteMeetingMutation.mutate();
          } catch (error) {
            Toast("모임 삭제를 실패하였습니다.");
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
  const filterMenuDatas = isModalOpen ? menuDatas.slice(1) : menuDatas;
  const totalPages = datas?.pageInfo?.totalPages;

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">정기모임 개설</h1>
      <div className="flex justify-end w-full mb-3">
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-2 bg-[#121212] rounded-lg text-white"
        >
          정기모임 개설하기
        </button>
      </div>

      <CreateMeetingModal
        accessToken={accessToken}
        open={open}
        setOpen={setOpen}
        page={page}
      />

      <Table columns={columns} datas={datas?.meetings}>
        <BasicMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          menuDatas={filterMenuDatas}
        />

        <p className="absolute left-3 bottom-[14px]">
          {page}/{totalPages} pages
        </p>

        <div className="absolute bottom-[10px] right-3 text-[1.4rem] flex items-center gap-x-2">
          <Button
            icon={<HiChevronLeft />}
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            basicStyles={btnBasicStyle.basic}
            styles="p-1 rounded-lg"
            disabled={page === 1}
            enableStyles="bg-[#282828] text-white"
          />
          <Button
            icon={<HiChevronRight />}
            onClick={() => {
              if (totalPages > page) {
                setPage((prev) => prev + 1);
              }
            }}
            basicStyles={btnBasicStyle.basic}
            styles="p-1 rounded-lg"
            disabled={page >= totalPages}
            enableStyles="bg-[#282828] text-white"
          />
        </div>
      </Table>

      <MeetingModal
        accessToken={accessToken}
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedId={selectedId}
        setAnchorEl={setAnchorEl}
      />
    </div>
  );
}
