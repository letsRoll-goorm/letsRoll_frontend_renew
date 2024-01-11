import React from "react";
import { s } from "./style";
import NaverLogin from "../../components/login/NaverLogin";
import MainSide from "../../components/main/mainSide/MainSide";

function Main() {
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