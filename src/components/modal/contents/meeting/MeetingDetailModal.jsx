import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  acceptOrRejectMeetingParticipantsFetch,
  detailDataFetch,
  meetingParticipantsFetch,
} from "../../../../api/meeting";
import { currentDateFormat2, handleConsoleError } from "../../../../common";

import BasicModal from "../../BasicModal";
import BasicTab2 from "../../../tab/BasicTab2";
import TabContent from "../../../tab/TabContent";
import MeetingSmallContentWrap from "../../../../pages/meetings/MeetingSmallContentWrap";
import Table from "../../../table/Table";
import Button from "../../../button/Button";
import { btnBasicStyle } from "../../../../constants";
import { Toast } from "../../../toast/Toast";

import {
  CiLocationOn,
  CiHeart,
  CiFaceSmile,
  CiBookmarkCheck,
} from "react-icons/ci";
import { PiMoneyWavyThin } from "react-icons/pi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const MeetingDetailModal = ({
  accessToken,
  isOpen,
  setIsModalOpen,
  selectedId,
  setAnchorEl,
}) => {
  const queryClient = useQueryClient();

  const [tabCount, setTabCount] = useState("1");
  const [participantsState, setParticipantsState] = useState("");
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery({
    queryKey: ["meetingDetailDatas", isOpen],
    queryFn: async () => {
      const result = await detailDataFetch(`meetings/${selectedId}`);
      return result;
    },
  });

  useEffect(() => {
    if (data?.state === "모집중") {
      setParticipantsState("status=applied&status=confirmed");
    } else {
      setParticipantsState("status=participating&status=completed");
    }
  }, [data?.state]);

  const { data: meetingParticipantDatas } = useQuery({
    queryKey: ["meetingParticipantDatas", isOpen, participantsState],
    queryFn: async () => {
      const result = await meetingParticipantsFetch(
        accessToken,
        selectedId,
        participantsState,
        page
      );
      return result;
    },
  });

  const comment = handleConsoleError(isLoading, error, data);

  const acceptMeetingParticipantsMutation = useMutation({
    mutationFn: (id) =>
      acceptOrRejectMeetingParticipantsFetch(accessToken, id, "accept"),
    onSuccess: () => {
      Toast("신청을 수락하였습니다.");
      return queryClient.invalidateQueries([
        "meetingParticipantDatas",
        isOpen,
        participantsState,
      ]);
    },
  });
  const rejectMeetingParticipantsMutation = useMutation({
    mutationFn: (id) =>
      acceptOrRejectMeetingParticipantsFetch(accessToken, id, "reject"),
    onSuccess: () => {
      Toast("신청을 거절하였습니다.");
      return queryClient.invalidateQueries([
        "meetingParticipantDatas",
        isOpen,
        participantsState,
      ]);
    },
  });

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "profileImage",
      headerName: "프로필 이미지",
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row["profileImage"]}
          alt="thumbnailImage"
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: "100%",
            border: "1px solid #8d8d8d",
          }}
        />
      ),
    },
    { field: "nickname", headerName: "닉네임", width: 90 },
    { field: "joinReason", headerName: "신청 사유", width: 120 },
    { field: "name", headerName: "이름", width: 70 },
    { field: "gender", headerName: "성별", width: 70 },
    { field: "birthday", headerName: "생일", width: 90 },
    { field: "phoneNumber", headerName: "전화번호", width: 90 },
    { field: "participationStatus", headerName: "상태", width: 90 },
    {
      field: "actions",
      headerName: "수락/거절",
      width: 90,
      sortable: false,
      renderCell: (params) =>
        data?.state === "모집중" ? (
          <div className="flex flex-col w-full mx-auto gap-y-1">
            <Button
              text="수락"
              basicStyles={btnBasicStyle["black-bg"]}
              styles="px-4 py-2 rounded-lg"
              onClick={() => {
                if (window.confirm("신청을 수락하시겠습니까?")) {
                  try {
                    acceptMeetingParticipantsMutation.mutate(params.row["id"]);
                  } catch (error) {
                    Toast("신청을 수락하지 못하였습니다.");
                  }
                }
              }}
            />
            <Button
              text="거절"
              basicStyles={btnBasicStyle["black-bg"]}
              styles="px-4 py-2 rounded-lg"
              onClick={() => {
                if (window.confirm("신청을 거절하시겠습니까?")) {
                  try {
                    rejectMeetingParticipantsMutation.mutate(params.row["id"]);
                  } catch (error) {
                    Toast("신청을 거절하지 못하였습니다.");
                  }
                }
              }}
            />
          </div>
        ) : (
          <Button
            text="내보내기"
            basicStyles={btnBasicStyle["black-bg"]}
            styles="px-4 py-2 rounded-lg"
          />
        ),
    },
  ];

  const totalPages = meetingParticipantDatas?.pageInfo?.totalPages ?? 1;
  console.log(data, meetingParticipantDatas?.participants, totalPages);
  console.log(data?.state);

  return (
    <BasicModal
      isModalOpen={isOpen}
      setIsModalOpen={setIsModalOpen}
      setAnchorEl={setAnchorEl}
    >
      <div className="mt-6 flex items-center w-full gap-x-2 text-[#8a8a8a]">
        <img
          className="object-cover w-20 h-20 rounded-lg aspect-square border-[1px] border-solid border-[#8d8d8d]"
          src={data?.thumbnailImage}
          alt="thumbnailImage"
        />

        <div>
          <p className="text-[0.875rem]">{data?.finish_type}</p>
          <h1 className="text-[#282828] font-bold">{data?.name}</h1>
          <div className="flex items-center gap-x-1">
            <CiHeart />
            <p className="text-[0.75rem]">{`좋아요 ${data?.likesCount}명`}</p>
          </div>
        </div>
      </div>

      <BasicTab2
        tabList={[
          "모임 상세정보",
          data?.state === "모집중" ? "신청자 리스트" : "참여자 리스트",
          "리뷰 리스트",
        ]}
        tab={tabCount}
        setTab={setTabCount}
        mtStyle={3}
      >
        {comment}
        <TabContent value="1">
          <MeetingSmallContentWrap
            subTitle="모임"
            img={data?.thumbnailImage}
            text={data?.name}
            des={data?.introduction}
          />
          <MeetingSmallContentWrap
            styles="mt-4"
            subTitle="모임상태"
            icon={<CiBookmarkCheck className="text-[1.6rem]" />}
            text={`${data?.state} | ${data?.selection_type}`}
            des={
              data?.state === "모집중"
                ? currentDateFormat2(data?.meetingDatetime) + " 마감"
                : null
            }
          />
          <MeetingSmallContentWrap
            styles="mt-4"
            subTitle="호스트"
            img={data?.hostImage}
            text={data?.hostName}
            des={data?.hostDescription}
          />
          <MeetingSmallContentWrap
            styles="mt-4"
            subTitle="개최장소"
            icon={<CiLocationOn className="text-[1.6rem]" />}
            text={data?.location}
          />
          <MeetingSmallContentWrap
            styles="mt-4"
            subTitle="모집인원"
            icon={<CiFaceSmile className="text-[1.6rem]" />}
            text={`최소 : ${data?.minParticipants}명 | 최대 : ${data?.maxParticipants}명 | 현재 총 ${data?.participantCount}명이 참여중`}
          />
          <MeetingSmallContentWrap
            styles="mt-4"
            subTitle="참여비"
            icon={<PiMoneyWavyThin className="text-[1.6rem]" />}
            text={`월 ${data?.paymentAmount}원`}
            des={
              data?.paymentAmount === 0
                ? null
                : "토스뱅크 1000-5552-9626(비빔모임용_김성원)"
            }
          />
          <MeetingSmallContentWrap styles="mt-4" subTitle="모임사진">
            <div className="grid w-full grid-cols-4 gap-2 mt-1">
              {data?.meetingImages?.map((img) => (
                <img
                  className="object-cover w-full h-full rounded-lg aspect-square border-[1px] border-solid border-[#8d8d8d]"
                  src={img}
                  alt="meetingImage"
                />
              ))}
            </div>
          </MeetingSmallContentWrap>
          <MeetingSmallContentWrap styles="mt-4" subTitle="활동일정">
            {data?.schedules?.map((schedule, index) => (
              <div className="flex items-center w-full gap-x-1 px-3 py-2 box-border border-[1px] border-solid border-[#8d8d8d] rounded-md my-2">
                <p>{`${index + 1}회차 : `}</p>
                <p>
                  {currentDateFormat2(schedule?.schedule)} | {schedule?.content}
                </p>
              </div>
            ))}
          </MeetingSmallContentWrap>
          <MeetingSmallContentWrap styles="mt-4" subTitle="안내사항">
            <div className="mt-1 px-3 py-2 box-border border-[1px] border-solid border-[#8d8d8d] rounded-md">
              {data?.info?.map((i, index) => (
                <p key={index} className="mb-2">
                  - {i}
                </p>
              ))}
            </div>
          </MeetingSmallContentWrap>
          <MeetingSmallContentWrap
            styles="mt-4"
            subTitle="문의사항"
            icon={<PiMoneyWavyThin className="text-[1.6rem]" />}
            text="DM(@bebeam_busan), 이메일(oddodd2020@naver.com)"
          />
        </TabContent>

        <TabContent value="2">
          <Table
            columns={columns}
            datas={meetingParticipantDatas?.participants}
            height="60vh"
          >
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
        </TabContent>

        <TabContent value="3"></TabContent>
      </BasicTab2>
    </BasicModal>
  );
};

export default MeetingDetailModal;
