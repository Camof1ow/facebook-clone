import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/User";
import { getCookieToken, setAccessToken } from "../storage/Cookie";

const Kakao = () => {

    const navigate = useNavigate();
    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    const userToken = getCookieToken();

    React.useEffect(() => {
        if (code) {
            const KakaoLogin = async () => {
                try {
                const data = await axios.get(`https://g10000.shop/oauth/kakao/callback/${code}`);
                console.log(data);
                setAccessToken(data.headers.authorization);

                axios.defaults.headers.common[
                    "Authorization"
                    ] = `${data.headers.authorization}`;
            // if(userToken){
            //     window.location.replace("/")
            // }
                } catch (error) {
                console.log(error);
                alert("login 실패입니다.");
                window.location.href("/login")
                }
            };
    //       const kakaoLogin = async () => {
    //         await axios
    //             // .get(`https://g10000.shop/oauth/kakao/callback?code=${code}`)
    //           .get(
    //             `https://g10000.shop/oauth/kakao/callback/${code}`
    //             )
    //             console.log('DB에 코드 전송')
    //           .then(res => {
    //             console.log(res) //토큰이 넘어온 것
    //             const token = res.headers.authorization.split(' ');
    //             setAccessToken('token', token[1]);
    //             // const ACCESS_TOKEN = res.data.accessToken;
    //             //localStorage.setItem("token", ACCESS_TOKEN);
    //             window.location.href("/");
    //           }).catch((error) => {
    //             console.log('소셜로그인 에러', error);
    //             window.alert("로그인에 실패하였습니다.");
    //             window.location.href("/login");
    //           });
    //       };
          KakaoLogin();
        }
      }, []);
};
export default Kakao;