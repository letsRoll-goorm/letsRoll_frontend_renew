import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function NaverLogin() {
  const naverId = import.meta.env.VITE_NAVER_CLIENT_ID;
  const naverCallbackUrl = import.meta.env.VITE_NAVER_CALLBACK_URL;
  const STATE = import.meta.env.VITE_NAVER_STATE;

  const { naver } = window;

  const userAccessToken = () => {
		window.location.href.includes('access_token') && getToken()
	}
        
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0]
    console.log(token);

	}

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
    userAccessToken()
  })

  return (
    <div id="naverIdLogin"></div>
  )
}

export default NaverLogin