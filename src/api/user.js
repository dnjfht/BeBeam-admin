import axios from "axios";

// 로그인 기능
export const fetchAdminLogin = async (id, pw) => {
  try {
    const res = await axios({
      method: "post",
      url: "https://prod.be-beam.site/api/admin-x8kp62iw/v1/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: id,
        password: pw,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error("Error fetching Login:", error);
    throw error;
  }
};
