import axios from "axios";




const kakaoLogin = async (code) => {
    try {
            const data = await axios.get(
                `https://g10000.shop/oauth/kakao/callback?code=${code}`
              );
              console.log(data);
        
            } catch (error) {
              console.log(error);
            }
          };

    //   axios({
    //     method: "GET", //GET
    //     url: `https://g10000.shop/oauth/kakao/callback?code=${code}`,
    //   })
    //     .then((res) => {
    //       console.log(res); // 토큰이 넘어올 것임
    //       const ACCESS_TOKEN = res.data.accessToken;
    //       localStorage.setItem("token", ACCESS_TOKEN);
    //       window.location.href("/")

    //       }).catch((err) => {
    //       console.log("소셜로그인 에러", err);
    //       window.alert("로그인에 실패하였습니다.");
    //       history.replace("/login");
    //       })
    //   }
//   };
  //유저정보 다시 세팅?

  const actionCreators = {kakaoLogin}
  export {actionCreators}

  
  