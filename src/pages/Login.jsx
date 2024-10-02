import Typewriter from "typewriter-effect";
import Input from "../components/input/TextInput";
import useInput from "../customHook/useInput";
import Button from "../components/button/Button";
import { Toast } from "../components/toast/Toast";

import { btnBasicStyle, btnStyle, textInputStyle } from "../constants";
import { HiOutlineXMark } from "react-icons/hi2";

const Login = ({ isLogin, setIsLogin, setIsAfterLogin }) => {
  const [id, onChangeId, onDeleteId] = useInput();
  const [pw, onChangePW, onDeletePW] = useInput();

  // 임의로 지정된 ID와 PW
  const adminAccount = { id: "admin", pw: "bebeam0000" };

  const handleLogin = (e) => {
    e.preventDefault();

    // 로그인 로직 (예: API 호출) : 나중에

    if (id === adminAccount.id && pw === adminAccount.pw) {
      setIsLogin(true);
      setIsAfterLogin(true);
      localStorage.setItem("isLogin", JSON.stringify(true));
      Toast("🥰로그인 하였습니다.!🥰");
    } else if (!isLogin) {
      setIsLogin(false);
      localStorage.setItem("isLogin", JSON.stringify(false));
      Toast("😬ID 또는 PW가 일치하지 않습니다.!😬");
    }
  };

  return (
    <div className="w-full md:h-[100vh] bg-black md:flex">
      <div className="lg:py-0 sm:py-[100px] py-[60px] flex items-center justify-center w-full lg:h-full xl:w-1/3 md:w-[44%] sm:w-full">
        <div className="w-[80%] h-[80%] text-white">
          <div className="xl:text-[4rem] md:text-[3.4rem] sm:text-[3rem] text-[2.6rem] font-bold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("WELCOME TO BE:BEAM.")
                  .start()
                  .pauseFor(200);
              }}
            />
          </div>

          <p className="xl:text-[1.4rem] md:text-[1.2rem] sm:text-[1.1rem] text-[#969696c8]">
            ADMIN PAGE
          </p>

          <form className="w-full mt-14" onSubmit={handleLogin}>
            <Input
              text={id}
              placeHolder="ID를 입력하세요."
              onChange={onChangeId}
              basicStyles={textInputStyle.login}
              styles="mb-5"
            >
              <Button
                icon={<HiOutlineXMark />}
                onClick={onDeleteId}
                basicStyles={btnBasicStyle["login-delete"]}
                styles={`${btnStyle["login-delete"]} ${
                  id.length === 0 ? "opacity-0" : "opacity-100"
                }`}
              />
            </Input>
            <Input
              type="password"
              text={pw}
              placeHolder="PW를 입력하세요."
              onChange={onChangePW}
              basicStyles={textInputStyle.login}
            >
              <Button
                icon={<HiOutlineXMark />}
                onClick={onDeletePW}
                basicStyles={btnBasicStyle["login-delete"]}
                styles={`${btnStyle["login-delete"]} ${
                  pw.length === 0 ? "opacity-0" : "opacity-100"
                }`}
              />
            </Input>

            <Button
              type="submit"
              onClick={handleLogin}
              basicStyles={btnBasicStyle["border"]}
              styles={`${
                !id || !pw
                  ? "border-[#969696c8] text-[#969696c8]"
                  : "border-white bg-[rgba(255,255,255,0)] hover:bg-white hover:text-black hover:font-bold"
              } w-full 2sm:py-4 py-3 mt-4 border-[1px] rounded-lg`}
              disabled={!id || !pw}
            >
              로그인
            </Button>
          </form>
        </div>
      </div>

      <div className="w-full md:h-full sm:h-[600px] h-[500px] xl:w-2/3 md:w-[56%] sm:w-full">
        <img
          className="object-cover w-full h-full"
          src="/image/login-bg.png"
          alt="space"
        />
      </div>
    </div>
  );
};

export default Login;
