import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { currentDateFormat2, handleMeetingNameClick } from "../../common";
import { allMeetingDataFetch, deleteMeetingDataFetch } from "../../api/meeting";

import Table from "../../components/table/Table";
import BasicMenu from "../../components/menu/BasicMenu";
import { Toast } from "../../components/toast/Toast";
import Button from "../../components/button/Button";
import { btnBasicStyle } from "../../constants";
import MeetingDetailModal from "../../components/modal/meeting/MeetingDetailModal";
import CreateMeetingModal from "../../components/modal/meeting/CreateMeetModal";
import EditMeetingDetailsModal from "../../components/modal/meeting/EditMeetingDetailsModal";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function CreateRegMeetings({ accessToken }) {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [isMeetingDetailsModalOpen, setIsMeetingDetailsModalOpen] =
    useState(false);
  const [isEditMeetingDetailsModalOpen, setIsEditMeetingDetailsModalOpen] =
    useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
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

  const menuDatas = [
    {
      text: "모임 상세 정보",
      onClick: () => {
        setIsMeetingDetailsModalOpen(true);
        setAnchorEl(null);
      },
    },
    {
      text: "모임 수정",
      onClick: () => {
        setIsEditMeetingDetailsModalOpen(true);
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
  const filterMenuDatas = isMeetingDetailsModalOpen
    ? menuDatas.slice(1)
    : menuDatas;
  const totalPages = datas?.pageInfo?.totalPages;

  const deleteMeetingMutation = useMutation({
    mutationFn: () => deleteMeetingDataFetch(accessToken, selectedId),
    onSuccess: () => {
      Toast("모임을 삭제하였습니다.");
      return queryClient.invalidateQueries(["meetingDatas", page]);
    },
  });

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

      <CreateMeetingModal
        accessToken={accessToken}
        isModalOpen={open}
        setIsModalOpen={setOpen}
        page={page}
      />
      <MeetingDetailModal
        accessToken={accessToken}
        isModalOpen={isMeetingDetailsModalOpen}
        setIsModalOpen={setIsMeetingDetailsModalOpen}
        selectedId={selectedId}
        setAnchorEl={setAnchorEl}
      />
      <EditMeetingDetailsModal
        accessToken={accessToken}
        isModalOpen={isEditMeetingDetailsModalOpen}
        setIsModalOpen={setIsEditMeetingDetailsModalOpen}
        selectedId={selectedId}
        page={page}
      />
    </div>
  );
}
