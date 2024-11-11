import axios from "axios";

export const getAllUsersDataFetch = async (
  accessToken,
  filter,
  page,
  sizeNum = 10
) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://prod.be-beam.site/api/admin-x8kp62iw/v1/users?page=${page}&size=${sizeNum}&status=${filter}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching All Users Data Fetch:", error);
    throw error;
  }
};
