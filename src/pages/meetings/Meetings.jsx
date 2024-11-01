import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { dataFetch, deleteMeetingDataFetch } from "../../api/meeting";
import { useRecoilState, useRecoilValue } from "recoil";
import { AnchorElState, SelectedIdState } from "../../recoil/user";
import { AccessTokenState } from "../../recoil/login";
import { currentDateFormat2, handleMeetingNameClick } from "../../common";

import Table from "../../components/table/Table";
import Button from "../../components/button/Button";
import BasicMenu from "../../components/menu/BasicMenu";
import MeetingDetailModal from "../../components/modal/contents/meeting/MeetingDetailModal";
import { btnBasicStyle } from "../../constants";
import { Toast } from "../../components/toast/Toast";

import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

export default function Meetings() {
  const queryClient = useQueryClient();
  const accessToken = useRecoilValue(AccessTokenState);

  const [filterMeetingDatas, setFilterMeetingDatas] = useState([]);
  const [filterStatus, setFilterStatus] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useRecoilState(SelectedIdState);
  const [anchorEl, setAnchorEl] = useRecoilState(AnchorElState);
  const [page, setPage] = useState(1);

  const { data: datas } = useQuery({
    queryKey: ["meetingDatas", page],
    queryFn: async () => {
      const result = await dataFetch("meetings", page);
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

  const filterDatas = ["전체", "모집중", "모집마감"];

  useEffect(() => {
    if (datas) {
      if (filterStatus !== "전체") {
        setFilterMeetingDatas(
          datas?.meetings?.filter(
            (meeting) => meeting.recruitmentStatus === filterStatus
          )
        );
      } else {
        setFilterMeetingDatas(datas?.meetings);
      }
    }
  }, [datas, setFilterMeetingDatas, filterStatus]);

  const totalPages = datas?.pageInfo?.totalPages;

  console.log(filterMeetingDatas);

  return (
    <div>
      <h1 className="mb-4 text-[1.5rem] font-bold">모임 리스트</h1>

      <div className="flex items-center justify-end mb-3 gap-x-2">
        {filterDatas.map((filter, index) => (
          <Button
            key={index}
            text={filter}
            basicStyles={btnBasicStyle["black-bg"]}
            styles="px-4 py-3 rounded-lg"
            onClick={() => setFilterStatus(filter)}
          />
        ))}
      </div>

      <Table columns={columns} datas={filterMeetingDatas}>
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

      <MeetingDetailModal
        accessToken={accessToken}
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedId={selectedId}
        setAnchorEl={setAnchorEl}
      />
    </div>
  );
}
