import axios from "axios";

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
