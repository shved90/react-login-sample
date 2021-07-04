import { FunctionComponent } from 'react'
import LoginComponent from './components/loginComponent'
import MainWrapper from './components/wrapper'
import { ThemeProvider } from './providers/themeProvider'

const LoginSample: FunctionComponent = () => {

  return (
    <ThemeProvider>
      <MainWrapper>
        <LoginComponent />
      </MainWrapper>
    </ThemeProvider>
  )
}

export default LoginSample
