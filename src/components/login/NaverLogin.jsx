import { useEffect } from "react"

function NaverLogin(){

  const { naver } = window
  const naverId = import.meta.env.VITE_NAVER_CLIENT_ID
  const naverCallbackUrl = import.meta.env.VITE_NAVER_CALLBACK_URL

  const initNaverLogin = () => {
  	const naverLogin = new naver.LoginWithNaverId({
			clientId: naverId,
			callbackUrl: naverCallbackUrl,
			isPopup: false,
			loginButton: { color: 'green', type: 5, height: 60 },
			callbackHandle: true,
		})
		naverLogin.init()
  }

  useEffect(() => {
    initNaverLogin()
  },[])

  return (
      <div id="naverIdLogin"></div>
  )
}

export default NaverLogin