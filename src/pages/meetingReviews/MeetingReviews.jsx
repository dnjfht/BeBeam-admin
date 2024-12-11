import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { handleNicknameClick, currentDateFormat2 } from "../../common";
import {
  allMeetingReviewDatasFetch,
  deleteMeetingReviewDataFetch,
} from "../../api/meeting";

import Table from "../../components/table/Table";
import UserMenu from "../../components/menu/user/UserMenu";
import UserModal from "../../components/modal/users/UserModal";
import BasicSelect from "../../components/select/BasicSelect";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/button/Button";
import { btnBasicStyle, textInputBasicStyle } from "../../constants";
import MeetingReviewDetailImageModal from "../../components/modal/meetingReviews/MeetingReviewDetailImageModal";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Toast } from "../../components/toast/Toast";

export default function MeetingReviews({ accessToken }) {
  const queryClient = useQueryClient();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [selectedNickname, setSelectedNickname] = useState("");

  const [filter, setFilter] = useState({
    search: "",
    recruitmentType: "all",
    type: "text",
    sort: "recent",
  });
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const { data: datas } = useQuery({
    queryKey: ["meetingReviewDatas", accessToken, page, filter],
    queryFn: async () => {
      const result = await allMeetingReviewDatasFetch(
        accessToken,
        page,
        10,
        filter
      );
      return result;
    },
  });

  const columns = [
    {
      field: "id",
      headerName: "id",
      type: "string",
      width: 70,
    },
    {
      field: "createdAt",
      headerName: "리뷰 생성일",
      type: "string",
      width: 180,
      renderCell: (params) => (
        <p>{currentDateFormat2(params.row["createdAt"])}</p>
      ),
    },
    {
      field: "profileImage",
      headerName: "프로필 이미지",
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.row["profileImage"]}
          alt="profileImage"
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
    {
      field: "nickName",
      headerName: "닉네임",
      width: 150,
      renderCell: (params) => (
        <span
          onClick={(e) =>
            handleNicknameClick(
              e,
              params.row,
              setAnchorEl,
              setSelectedNickname,
              setSelectedId,
              false
            )
          }
          style={{ cursor: "pointer" }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "name",
      headerName: "이름",
      width: 70,
    },
    {
      field: "rating",
      headerName: "별점",
      width: 70,
    },
    {
      field: "text",
      headerName: "리뷰 코멘트",
      width: 400,
    },
    {
      field: "images",
      headerName: "리뷰 이미지",
      width: 300,
      renderCell: (params) => (
        <div className="flex flex-wrap gap-1">
          {params.row["images"].map((img, index) => (
            <img
              key={index}
              onClick={() => {
                setSelectedImageIndex(index);
                setSelectedImages(params.row["images"]);
                setIsModalOpen(true);
              }}
              src={img}
              alt="meetingImage"
              style={{
                width: 50,
                height: 50,
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #8d8d8d",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      ),
    },
    {
      field: "meeting",
      headerName: "모임명",
      width: 200,
      renderCell: (params) => <p>{params.row["meeting"].meetingName}</p>,
    },
    {
      field: "likesCount",
      headerName: "좋아요",
      width: 70,
    },
    {
      field: "actions",
      headerName: "삭제",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Button
          text="삭제하기"
          basicStyles={btnBasicStyle["black-bg"]}
          onClick={() => {
            if (window.confirm("정말 리뷰를 삭제하시겠습니까?")) {
              try {
                deleteDeleteSpecificMeetingReviewMutation.mutate(
                  params.row["id"]
                );
              } catch (error) {
                Toast("리뷰를 삭제하지 못하였습니다.");
              }
            }
          }}
          styles="px-4 py-2 rounded-lg"
        />
      ),
    },
  ];

  const deleteDeleteSpecificMeetingReviewMutation = useMutation({
    mutationFn: (reviewId) =>
      deleteMeetingReviewDataFetch(accessToken, reviewId),
    onSuccess: () => {
      Toast("리뷰를 삭제하였습니다.");
      return queryClient.invalidateQueries([
        "meetingReviewDatas",
        accessToken,
        page,
        filter,
      ]);
    },
  });

  const totalPages = datas?.pageInfo?.totalPages;

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">
        모임 리뷰 리스트(총 {datas?.pageInfo?.totalElements}개)
      </h1>

      <div className="items-center justify-between w-full mb-3 sm:flex">
        <TextInput
          placeHolder="검색하고 싶은 리뷰 코멘트를 입력하세요."
          text={filter.search}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, search: e.target.value }))
          }
          basicStyles={textInputBasicStyle.grayBorder}
          styles="lg:w-[300px] md:w-[200px] sm:w-[120px] 3sm:w-full px-4 py-3"
        />

        <div className="flex sm:mt-0 3sm:mt-4 gap-x-2">
          <BasicSelect
            id="review-type"
            typeText="리뷰 타입"
            value={filter.type}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                type: e.target.value,
              }))
            }
            datas={[
              { value: "text", title: "텍스트" },
              { value: "image", title: "이미지" },
            ]}
          />
          <BasicSelect
            id="meeting-type"
            typeText="모임 타입"
            value={filter.recruitmentType}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                recruitmentType: e.target.value,
              }))
            }
            datas={[
              { value: "all", title: "전체" },
              { value: "regular", title: "정기모임" },
              { value: "small", title: "소모임" },
            ]}
          />
          <BasicSelect
            id="sort"
            typeText="정렬"
            value={filter.sort}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, sort: e.target.value }))
            }
            datas={[
              { value: "recent", title: "선착순" },
              { value: "likes", title: "좋아요순" },
            ]}
          />
        </div>
      </div>

      <Table columns={columns} datas={datas?.reviews}>
        <UserMenu
          setIsModalOpen={setIsModalOpen}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          selectedId={selectedId}
          selectedNickname={selectedNickname}
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

      {/* <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAnchorEl={setAnchorEl}
        data={users.find((user) => user.id === selectedId)}
      /> */}
      <MeetingReviewDetailImageModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedImages={selectedImages}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
    </div>
  );
}
