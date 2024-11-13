import axios from "axios";

// 모임들 데이터 받아오기
export const allMeetingDataFetch = async (
  accessToken,
  page,
  sizeNum = 10,
  filter
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/web/v1/meetings?page=${page}&size=${sizeNum}&search=${filter.search}&status=${filter.status}&type=${filter.type}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching All Meeting Data Fetch:", error);
    throw error;
  }
};

// 툴킷 데이터 받아오기
export const dataFetch = async (detailUrl, pageNum, sizeNum = 10) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/web/v1/${detailUrl}?page=${pageNum}&size=${sizeNum}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching Data Fetch:", error);
    throw error;
  }
};

// 특정 모임, 툴킷 데이터 받아오기
export const detailDataFetch = async (detailUrl) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/web/v1/${detailUrl}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching Detail Data Fetch:", error);
    throw error;
  }
};

// 특정 모임 상세정보 받아오기
export const getSpecificMeetingDetailDataFetch = async (
  accessToken,
  meetingId
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/meetings/${meetingId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error getting specific meeting detail data:", error);
    throw error;
  }
};

// 정기모임 삭제
export const deleteMeetingDataFetch = async (accessToken, meetingId) => {
  try {
    const res = await axios({
      method: "delete",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/meetings/${meetingId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching Detail Data Fetch:", error);
    throw error;
  }
};

// 정기모임 생성
export const createRegularMeeting = async (
  accessToken,
  thumbnailImage,
  meetingName,
  meetingDes,
  recruitmentStatus,
  recruitmentType,
  selectionType,
  minParticipants,
  maxParticipants,
  deadlineDate,
  location,
  hostImage,
  hostName,
  hostDes,
  price,
  meetingImageList,
  schedules,
  guidances,
  selectedTags
) => {
  try {
    const formData = new FormData();

    formData.append("thumbnailImage", thumbnailImage);

    meetingImageList.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("hostImage", hostImage);

    formData.append(
      "data",
      new Blob(
        [
          JSON.stringify({
            name: meetingName,
            recruitmentStatus: recruitmentStatus,
            recruitmentType: recruitmentType,
            selectionType: selectionType,
            minParticipants: minParticipants,
            maxParticipants: maxParticipants,
            meetingDatetime: deadlineDate,
            location: location,
            paymentAmount: price,
            introduction: meetingDes,
            schedules: schedules,
            hashtags: selectedTags,
            info: guidances,
            hostName: hostName,
            hostDescription: hostDes,
          }),
        ],
        { type: "application/json" }
      )
    );

    const res = await axios({
      method: "post",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/meetings`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: formData,
    });
    return res.data.result;
  } catch (error) {
    console.error("Error Create Meeting:", error);
    throw error;
  }
};

// 전체모임 신청자들/참여자들 데이터 받아오기
export const allMeetingParticipantsFetch = async (
  accessToken,
  status,
  page = 1,
  size = 10
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/participants?page=${page}&size=${size}&${status}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching All Meeting Participants Data Fetch:", error);
    throw error;
  }
};

// 특정모임 신청자들/참여자들 데이터 받아오기
export const meetingParticipantsFetch = async (
  accessToken,
  meetingId,
  status,
  page = 1,
  size = 10
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/meetings/${meetingId}/participants?page=${page}&size=${size}&${status}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching All Meeting Participants Data Fetch:", error);
    throw error;
  }
};

// 신청자 수락/거절하기
export const acceptOrRejectMeetingParticipantsFetch = async (
  accessToken,
  participationId,
  status
) => {
  try {
    const res = await axios({
      method: "post",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/participations/${participationId}/${status}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error(
      `Error fetching ${
        status === "accept" ? "Accept" : "Reject"
      } Meeting Participants Data Fetch:`,
      error
    );
    throw error;
  }
};

// 전체 리뷰 가져오기
export const allMeetingReviewDatasFetch = async (
  accessToken,
  page,
  sizeNum = 10,
  filter
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/reviews?search=${filter.search}&sort=${filter.sort}&type=${filter.type}&recruitmentType=${filter.recruitmentType}&page=${page}&size=${sizeNum}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error importing all meeting review data:", error);
    throw error;
  }
};

// 특정 모임 리뷰 가져오기
export const meetingReviewDataFetch = async (
  accessToken,
  selectedId,
  page,
  sizeNum = 10,
  filter
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/web/v1/meetings/${selectedId}/reviews?search=${filter.search}&sort=${filter.sort}&type=${filter.type}&page=${page}&size=${sizeNum}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error importing certain meeting review data:", error);
    throw error;
  }
};

// 특정 모임 리뷰 삭제하기
export const deleteMeetingReviewDataFetch = async (accessToken, reviewId) => {
  try {
    const res = await axios({
      method: "delete",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/reviews/${reviewId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error("Error deleting a specific review:", error);
    throw error;
  }
};

// 삭제한 모임 리뷰 가져오기
export const getDeleteMeetingReviewDatasFetch = async (
  accessToken,
  page,
  sizeNum = 10
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/reviews/delete?page=${page}&size=${sizeNum}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error importing deleted meeting review data:", error);
    throw error;
  }
};

// 삭제한 모임 가져오기
export const getDeleteMeetingDataFetch = async (
  accessToken,
  page,
  sizeNum = 10
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/meetings?page=${page}&size=${sizeNum}&status=inactive`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching Delete Meeting Review Data Fetch:", error);
    throw error;
  }
};
