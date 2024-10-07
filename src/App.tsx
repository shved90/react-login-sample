import { FunctionComponent } from 'react'
import LoginComponent from './components/loginComponent'
import MainWrapper from './components/wrapper'
import { ThemeProvider } from './providers/themeProvider'
import { LangProvider } from './providers/languagesProvider'

const LoginSample: FunctionComponent = () => {

  return (
    <ThemeProvider>
      <LangProvider>
        <MainWrapper>
          <LoginComponent />
        </MainWrapper>
      </LangProvider>
    </ThemeProvider>
  )
}

export default LoginSample
