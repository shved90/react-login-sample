import { FunctionComponent } from 'react'
import LoginComponent from './components/loginComponent'
import MainWrapper from './components/wrapper'

const LoginSample: FunctionComponent = () => {
  return (
    <MainWrapper>
      <LoginComponent />
    </MainWrapper>
  )
}

export default LoginSample
