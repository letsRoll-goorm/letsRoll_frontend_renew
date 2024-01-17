import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function NaverLogin() {
  const naverId = import.meta.env.VITE_NAVER_CLIENT_ID
  const naverCallbackUrl = import.meta.env.VITE_NAVER_CALLBACK_URL

  const { naver } = window;

  const STATE = 'asdfasdfasdfasdf'

  const initNaverLogin = () => {
  	const naverLogin = new naver.LoginWithNaverId({
			clientId: naverId,
			callbackUrl: naverCallbackUrl,
			isPopup: false,
			loginButton: { color: 'green', type: 5, height: 60 },
			callbackHandle: true,
		})
    naverLogin.init();
  }

  useEffect(() => {
    initNaverLogin()
  }, [])

  // const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=`
  // const NAVER_AUTH_URL =
  //   authUrl +`${naverId}&redirect_uri=${naverCallbackUrl}&state=${STATE}`
  
  // const naverLoginPopup = () =>
  //   window.location.href = NAVER_AUTH_URL
  // //   // navigate('/oauth')

  return (
    // <div id="naverIdLogin" onClick={naverLoginPopup}></div>
    <div id="naverIdLogin"></div>
  )
}

export default NaverLogin