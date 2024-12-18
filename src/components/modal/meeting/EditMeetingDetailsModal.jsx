import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editRegularMeeting,
  getSpecificMeetingDetailDataFetch,
} from "../../../api/meeting";
import { handleConsoleError } from "../../../common";
import Postcode from "react-daum-postcode";

import BasicModal from "../BasicModal";
import { Input, Modal, TextField } from "@mui/material";
import { Toast } from "../../toast/Toast";

import { BsXLg } from "react-icons/bs";

export default function EditMeetingDetailsModal({
  accessToken,
  isModalOpen,
  setIsModalOpen,
  selectedId,
  page,
}) {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["meetingDetailDatas", isModalOpen],
    queryFn: async () => {
      const result = await getSpecificMeetingDetailDataFetch(
        accessToken,
        selectedId
      );
      return result;
    },
  });
  const comment = handleConsoleError(isLoading, error, data);

  const hashtagOptions = [
    "야외활동",
    "실내활동",
    "친목도모",
    "운동",
    "예술",
    "음악",
    "여행",
    "스터디",
    "취미",
    "요리",
    "음식",
    "맛집",
    "다이어트",
    "카페",
    "공부",
    "코딩",
  ];

  // 이미지
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [hostImage, setHostImage] = useState(null);
  const [meetingImageList, setMeetingImageList] = useState([]);
  const [editMeetingImageList, setEditMeetingImageList] = useState([]);
  const [editBlobMeetingImageList, setEditBlobMeetingImageList] = useState([]);
  const [noEditMeetingImageList, setNoEditMeetingImageList] = useState([]);

  // 프리뷰
  const [thumbnailPreviewImage, setThumbnailPreviewImage] = useState("");
  const [HostPreviewImage, setHostPreviewImage] = useState("");
  const [meetingPreviewImageList, setMeetingPreviewImageList] = useState([]);

  // 콘텐츠
  const [deadlineDate, setDeadlineDate] = useState("");
  const [meetingName, setMeetingName] = useState("");
  const [meetingDes, setMeetingDes] = useState("");
  const [selectionType, setSelectionType] = useState("");
  const [minParticipants, setMinParticipants] = useState(0);
  const [maxParticipants, setMaxParticipants] = useState(0);
  const [location, setLocation] = useState("");
  const [detailLocation, setDetailLocation] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostDes, setHostDes] = useState("");
  const [price, setPrice] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [guidances, setGuidances] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const editRegularMeetingMutation = useMutation({
    mutationFn: () =>
      editRegularMeeting(
        accessToken,
        data?.id,
        thumbnailImage,
        meetingName,
        meetingDes,
        "모집중",
        "정기모임",
        selectionType,
        minParticipants,
        maxParticipants,
        deadlineDate,
        `${location} ${detailLocation}`,
        hostImage,
        hostName,
        hostDes,
        price,
        noEditMeetingImageList,
        editMeetingImageList,
        schedules,
        guidances,
        selectedTags
      ),
    onSuccess: () => {
      Toast("모임을 수정하였습니다.");
      return queryClient.invalidateQueries([
        "regularMeetingDatas",
        accessToken,
        page,
      ]);
    },
  });

  const handleEditMeeting = () => {
    if (deadlineDate === "") {
      alert("모집 마감일을 입력해 주세요.");
      return;
    }

    if (meetingName === "") {
      alert("모임 이름을 입력해 주세요.");
      return;
    }

    if (meetingDes === "") {
      alert("모임 설명을 입력해 주세요.");
      return;
    }

    if (minParticipants <= 0) {
      alert("최소 인원을 설정해 주세요.");
      return;
    }

    if (maxParticipants <= 0) {
      alert("최대 인원을 설정해 주세요.");
      return;
    }

    if (location === "") {
      alert("모임 주소를 입력해 주세요.");
      return;
    }

    if (detailLocation === "") {
      alert("모임 상세 주소를 입력해 주세요.");
      return;
    }

    if (hostName === "") {
      alert("호스트 닉네임을 입력해 주세요.");
      return;
    }

    if (hostDes === "") {
      alert("호스트 설명을 입력해 주세요.");
      return;
    }

    if (meetingPreviewImageList.length === 0) {
      alert("모임 사진을 설정해 주세요.");
      return;
    }

    if (schedules.length === 0) {
      alert("스케줄을 입력해 주세요.");
      return;
    }

    if (guidances.length === 0) {
      alert("안내사항을 입력해 주세요.");
      return;
    }

    if (selectedTags.length === 0) {
      alert("해쉬태그를 설정해 주세요.");
      return;
    }

    try {
      editRegularMeetingMutation.mutate();
    } catch (error) {
      Toast("모임 생성을 실패하였습니다.");
    }

    setIsModalOpen(false);
  };

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setThumbnailPreviewImage(data?.thumbnailImage);
      setDeadlineDate(data?.meetingDatetime);
      setMeetingName(data?.name);
      setMeetingDes(data?.introduction);
      setSelectionType(data?.selection_type);
      setMinParticipants(data?.minParticipants);
      setMaxParticipants(data?.maxParticipants);
      setLocation(data?.location);
      setHostName(data?.hostName);
      setHostPreviewImage(data?.hostImage);
      setHostDes(data?.hostDescription);
      setPrice(data?.paymentAmount);
      setMeetingPreviewImageList(data?.meetingImages);
      setNoEditMeetingImageList(data?.meetingImages);
      setSchedules(data?.schedules);
      setGuidances(data?.info);
      setSelectedTags(data?.hashtags);
    }
  }, [data]);

  return (
    <BasicModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      isMoreMenu={false}
    >
      {comment}
      <div className="w-full mb-5 pb-6 border-b-[1px] border-solid border-[#afafaf] flex items-center gap-x-3">
        <Input
          accept="image/*"
          id="thumbnail-photo-input"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setThumbnailImage(file);
              setThumbnailPreviewImage(URL.createObjectURL(file));
            }
          }}
        />
        <label htmlFor="thumbnail-photo-input">
          <div className="w-[100px] h-[100px] border-[1px] border-solid border-[#a3a3a3] rounded-lg flex items-center justify-center text-[#a3a3a3] overflow-hidden cursor-pointer">
            <img
              src={thumbnailPreviewImage}
              alt="대표 사진"
              className="object-cover w-full h-full"
            />
          </div>
        </label>

        <div className="text-[0.875rem] text-[#8c8c8c]">
          <h1 className="mb-1 text-[1.3rem] text-[#121212] font-bold">
            모임 수정하기
          </h1>
          <p>
            모임 수정에 필요한 정보들을 입력해주세요.
            <br />
            이미지를 수정하고 싶은 경우, 이미지를 클릭해주세요.
            <div className=""></div>
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-[#121212]">모집 마감일</h1>

        <Input
          fullWidth
          type="datetime-local"
          value={deadlineDate}
          onChange={(e) => setDeadlineDate(e.target.value)}
          sx={{ paddingY: 1 }}
        />
      </div>

      <div className="mt-7">
        <h1 className="mb-4 text-[#121212]">모임</h1>

        <TextField
          fullWidth
          label="모임명"
          name="modelName"
          value={meetingName}
          onChange={(e) => setMeetingName(e.target.value)}
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          label="모임 소개"
          name="modelDescription"
          value={meetingDes}
          onChange={(e) => setMeetingDes(e.target.value)}
          multiline
          rows={4}
        />
      </div>

      <div className="mt-7">
        <h1 className="mb-4 text-[#121212]">모집형태: {selectionType}</h1>

        <div className="grid grid-cols-2 gap-x-2">
          {["선발형", "선착순"].map((option) => (
            <button
              key={option}
              className={`${
                selectionType === option
                  ? "bg-[#121212] text-white"
                  : "text-[#121212]"
              } py-3 border-[1px] border-solid border-[#121212] rounded-lg transition-all duration-700`}
              onClick={() => setSelectionType(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 mt-7 gap-x-2">
        <div>
          <h1 className="mb-4 text-[#121212]">최소 인원</h1>
          <TextField
            fullWidth
            label="최소 인원"
            name="minParticipants"
            value={minParticipants}
            onChange={(e) => setMinParticipants(e.target.value)}
          />
        </div>
        <div>
          <h1 className="mb-4 text-[#121212]">최대 인원</h1>
          <TextField
            fullWidth
            label="최대 인원"
            name="maxParticipants"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-7">
        <h1 className="mb-4 text-[#121212]">모임 장소</h1>

        <div className="flex items-center mb-2 gap-x-2">
          <TextField
            fullWidth
            readOnly
            label="모임 장소를 선택해주세요."
            name="modelAddress"
            value={location}
            onChange={(e) => {
              console.log(e.target);
            }}
            placeholder="모임 장소를 선택해주세요."
          />
          <button
            onClick={() => setIsPostcodeVisible(!isPostcodeVisible)}
            className="h-[56px] px-3 bg-[#121212] rounded-lg text-white text-[0.875rem]"
          >
            주소 검색
          </button>
        </div>
        <TextField
          fullWidth
          label="상세 주소를 입력해주세요."
          name="detailedAddress"
          value={detailLocation}
          onChange={(e) => setDetailLocation(e.target.value)}
          placeholder="상세 주소를 입력해주세요."
        />

        {/* 주소 검색창 */}
        {isPostcodeVisible && (
          <Modal
            open={isPostcodeVisible}
            onClose={() => setIsPostcodeVisible(false)}
          >
            <div className="w-[400px] p-4 bg-white shadow-md absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <Postcode
                onComplete={(data) => {
                  setLocation(data.address);
                  setIsPostcodeVisible(false);
                }}
              />
            </div>
          </Modal>
        )}
      </div>

      <div className="mt-7">
        <h1 className="mb-4 text-[#121212]">호스트</h1>

        <div className="flex items-center mb-2 gap-x-2">
          <TextField
            fullWidth
            label="호스트 닉네임"
            name="hostNickname"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
          <div className="w-[56px] h-[56px] border-[1px] border-solid border-[#a3a3a3] rounded-lg flex items-center justify-center text-[#a3a3a3] overflow-hidden cursor-pointer">
            <input
              accept="image/*"
              id="host-photo-input"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setHostImage(file);
                  setHostPreviewImage(URL.createObjectURL(file));
                }
              }}
            />
            <label htmlFor="host-photo-input">
              <img
                src={HostPreviewImage}
                alt="호스트 사진"
                className="object-cover w-full h-full"
              />
            </label>
          </div>
        </div>
        <TextField
          fullWidth
          label="호스트 소개"
          name="hostDescription"
          value={hostDes}
          onChange={(e) => setHostDes(e.target.value)}
          multiline
          rows={3}
        />
      </div>

      <div className="mt-7 text-[#8a8a8a]">
        <h1 className="text-[#121212]">참가비</h1>
        <TextField
          fullWidth
          label="참가비"
          name="entryFee"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          sx={{
            mt: 2.5,
          }}
        />
      </div>

      <div className="mt-7 text-[#8a8a8a]">
        <div
          className={`${
            meetingPreviewImageList.length === 0 ? "mb-0" : "mb-4"
          } flex justify-between items-center`}
        >
          <div>
            <h1 className="text-[#121212]"> 모임 사진 등록</h1>
            <p className="text-[0.875rem]">최대 10개까지 선택 가능합니다.</p>
          </div>

          <button
            className="px-3 py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]"
            onClick={() =>
              document.getElementById("meeting-photo-input").click()
            }
          >
            사진 추가
            <input
              type="file"
              accept="image/*"
              id="meeting-photo-input"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                if (files.length + meetingPreviewImageList.length > 10) {
                  alert("최대 10개의 이미지만 업로드할 수 있습니다.");
                  return;
                }

                setEditMeetingImageList((prev) => [...prev, ...files]);

                const newImages = files.map((file) =>
                  URL.createObjectURL(file)
                );
                setMeetingPreviewImageList((prevImages) => [
                  ...prevImages,
                  ...newImages,
                ]);
                setEditBlobMeetingImageList((prevImages) => [
                  ...prevImages,
                  ...newImages,
                ]);
              }}
              style={{ display: "none" }}
            />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {meetingPreviewImageList.map((photo, idx) => (
            <div className="relative">
              <img
                src={photo}
                alt={`모임 사진 ${idx + 1}`}
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />
              <button
                onClick={() => {
                  setMeetingPreviewImageList((prev) =>
                    prev.filter((_, index) => index !== idx)
                  );
                  setNoEditMeetingImageList((prev) =>
                    prev.filter((img) => img !== meetingPreviewImageList[idx])
                  );
                  setEditBlobMeetingImageList((prev) =>
                    prev.filter((img) => img !== meetingPreviewImageList[idx])
                  );
                  setEditMeetingImageList((prev) =>
                    prev.filter((_, index2) => {
                      const index = editBlobMeetingImageList.indexOf(
                        meetingPreviewImageList[idx]
                      );
                      return index2 !== index;
                    })
                  );
                }}
                className="absolute text-white top-1 right-1"
              >
                <BsXLg />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 text-[#8a8a8a]">
        <h1 className="text-[#121212]">모임 일정 등록</h1>
        <p className="mb-4 text-[0.875rem]">
          모임 회차별 날짜와 소모임 내용을 입력해주세요.
        </p>

        {schedules?.map((schedule, index) => (
          <div
            key={index}
            className="w-full mb-2 p-2 border-box bg-[#e2e6ea] rounded-lg shadow-lg flex items-center gap-x-4"
          >
            <div className="relative w-[10%]">
              <p className="text-center text-[0.875rem] text-[#121212]">
                {index + 1}회차
              </p>
              <div className="absolute right-[-5px] top-1/2 transform -translate-y-1/2 w-[1px] h-[18px] bg-[#b9b9b9]" />
            </div>

            <div className="relative flex items-center justify-between gap-x-5">
              <Input
                type="datetime-local"
                value={schedule.schedule}
                onChange={(e) => {
                  const newSchedule = e.target.value;
                  setSchedules((prev) => {
                    const updatedSchedules = [...prev];
                    updatedSchedules[index] = {
                      ...updatedSchedules[index],
                      schedule: newSchedule,
                    };
                    return updatedSchedules;
                  });
                }}
                sx={{ paddingY: 1 }}
              />

              <Input
                label="모임 내용"
                value={schedule.content}
                onChange={(e) => {
                  const newContent = e.target.value;
                  setSchedules((prev) => {
                    const updatedSchedules = [...prev];
                    updatedSchedules[index] = {
                      ...updatedSchedules[index],
                      content: newContent,
                    };
                    return updatedSchedules;
                  });
                }}
                sx={{ paddingY: 1 }}
              />

              <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-[1px] h-[18px] bg-[#b9b9b9]" />
            </div>

            <button
              onClick={() => {
                setSchedules((prev) => {
                  return prev.filter((_, idx) => idx !== index);
                });
              }}
            >
              <BsXLg />
            </button>
          </div>
        ))}

        <button
          onClick={() => {
            setSchedules((prev) => [...prev, { schedule: null, content: "" }]);
          }}
          className="w-full py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]"
        >
          추가하기
        </button>
      </div>

      <div className="mt-7 text-[#8a8a8a]">
        <h1 className="text-[#121212]">안내사항</h1>
        <p className="mb-4 text-[0.875rem]">
          모임에 참여하기 위하여 반드시 숙지해야 할 사항을 적어주세요.
        </p>

        {guidances?.map((guidance, index) => (
          <div className="w-full mb-2 p-2 border-box bg-[#e2e6ea] rounded-lg shadow-lg flex items-center gap-x-4">
            <Input
              fullWidth
              placeholder="안내사항을 입력해주세요."
              value={guidance}
              onChange={(e) => {
                setGuidances((prev) => {
                  const updatedSchedules = [...prev];
                  updatedSchedules[index] = e.target.value;
                  return updatedSchedules;
                });
              }}
              sx={{ paddingY: 1 }}
            />

            <button
              onClick={() => {
                setGuidances((prev) => {
                  return prev.filter((_, idx) => idx !== index);
                });
              }}
            >
              <BsXLg />
            </button>
          </div>
        ))}

        <button
          onClick={() => setGuidances((prev) => [...prev, ""])}
          className="w-full py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]"
        >
          추가하기
        </button>
      </div>

      <div className="mt-7 text-[#8a8a8a]">
        <h1 className="text-[#121212]">해시태그 선택</h1>
        <p className="mb-4 text-[0.875rem]">최대 3개까지 선택 가능합니다.</p>

        <div className="flex flex-wrap items-center gap-2">
          {hashtagOptions.map((tag) => (
            <button
              key={tag}
              className={`${
                selectedTags.includes(tag)
                  ? "bg-[#121212] text-white"
                  : "text-[#121212]"
              } px-2 py-1 border-[1px] border-solid border-[#121212] rounded-lg transition-all duration-700`}
              onClick={() => handleTagSelect(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleEditMeeting}
        className="w-full mt-8 py-2 bg-[#121212] rounded-lg text-white text-[0.875rem]"
      >
        모임 수정하기
      </button>
    </BasicModal>
  );
}
