import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginStore from '../../../stores/loginStore'
import NaverLogin from '../../login/NaverLogin'
import { s } from './style'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const MainLogin = () => {

  const { isLogin, toggleLogin } = loginStore(state => state);

  const loginCheck = {
    title: isLogin ? '안녕하세요!' : '로그인하세요!',
    content: isLogin ?
      <s.LogoutSvg src='/Logout.svg' /> :
      <s.ContentImg><FontAwesomeIcon icon={faAngleRight}/></s.ContentImg>  
  }
  
  return (
    <>
      <s.Content onClick={toggleLogin}>
        <s.ContentDiv>{loginCheck.title}</s.ContentDiv>
        {loginCheck.content}
      </s.Content>
    </>
  )
}

export default MainLogin