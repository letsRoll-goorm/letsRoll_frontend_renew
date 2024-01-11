import { useState } from 'react'
import {s} from './style'
import MainLogin from '../mainLogin/MainLogin'

const MainSide = () => {

  const [currentNav, setCurrentNav] =  useState('Proceeding')

  return (
    <s.MainNavWrapper>
      <MainLogin/>
      <s.MainNavBtn
        $isSelected={"Proceeding" == currentNav}
        onClick={() => setCurrentNav("Proceeding")}>
        진행중인 프로젝트
      </s.MainNavBtn>
      <s.MainNavBtn
        $isSelected={"Done" == currentNav}
        onClick={() => setCurrentNav("Done")}>
        완료한 프로젝트
      </s.MainNavBtn>
    </s.MainNavWrapper>
  )

}

export default MainSide