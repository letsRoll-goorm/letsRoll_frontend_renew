import React, { useEffect } from "react";
import { s } from "./style";
import NaverLogin from "../../components/login/NaverLogin";
import MainSide from "../../components/main/mainSide/MainSide";
import { redirect } from "react-router-dom";

function Main() {

  const checkToken = () => {
    const tokenCheck = window.location.href.includes("#access_token");

    if(!tokenCheck) return

    let token = window.location.href.split('=')[1].split('&')[0]
    window.localStorage.setItem('token', token);
    return redirect('');
  }
  
  useEffect(() => {
    checkToken()
  },[])
  
  return (
    <s.MainPageWrapper>
      <s.MainTitle>가치 구름</s.MainTitle>
      <s.MainWrapper>
        <MainSide/>
      </s.MainWrapper>
    </s.MainPageWrapper>
  );
}

export default Main;