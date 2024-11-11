import { FunctionComponent } from 'react'
import { MainWrapper } from './components/wrapper'
import { ThemeProvider } from './utils/themeProvider'
import { LangProvider } from './utils/langProvider'
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

const LoginSample: FunctionComponent = () => {

  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <MainWrapper>
            <Router />
          </MainWrapper>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  )
}

export default LoginSample
