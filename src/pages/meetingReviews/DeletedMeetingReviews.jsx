import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { currentDateFormat2, handleNicknameClick } from "../../common";
import { getDeleteMeetingReviewDatasFetch } from "../../api/meeting";

// import UserModal from "../../components/modal/user/UserModal";
import UserMenu from "../../components/menu/user/UserMenu";
import Table from "../../components/table/Table";
import Button from "../../components/button/Button";
import { btnBasicStyle } from "../../constants";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import MeetingReviewDetailImageModal from "../../components/modal/meetingReviews/MeetingReviewDetailImageModal";

export default function DeletedMeetingReviews({ accessToken }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [selectedNickname, setSelectedNickname] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const { data: datas } = useQuery({
    queryKey: ["deletedMeetingReviewDatas", page],
    queryFn: async () => {
      const result = await getDeleteMeetingReviewDatasFetch(
        accessToken,
        page,
        10
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
      width: 120,
      renderCell: (params) => (
        <p>{currentDateFormat2(params.row["createdAt"])}</p>
      ),
    },
    {
      field: "deletedAt",
      headerName: "리뷰 삭제일",
      type: "string",
      width: 120,
      renderCell: (params) => (
        <p>{currentDateFormat2(params.row["deletedAt"])}</p>
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
      width: 120,
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
    // {
    //   field: "actions",
    //   headerName: "복구",
    //   width: 120,
    //   sortable: false,
    //   renderCell: (params) => (
    //     <Button
    //       text="복구하기"
    //       basicStyles={btnBasicStyle["black-bg"]}
    //       onClick={() => {
    //         if (window.confirm("정말 삭제된 리뷰를 복구하시겠습니까?")) {
    //         }
    //       }}
    //       styles="px-4 py-2 rounded-lg"
    //     />
    //   ),
    // },
    // 강제 삭제된 모임 리뷰 리스트로 옮기기
  ];

  const totalPages = datas?.pageInfo?.totalPages;

  return (
    <div>
      <h1 className="mb-6 text-[1.5rem] font-bold">
        삭제된 모임 리뷰 리스트(총 {datas?.pageInfo?.totalElements}개)
      </h1>

      <Table columns={columns} datas={datas?.reviews} height="80vh">
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
