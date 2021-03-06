import { FunctionComponent, useState } from 'react'
import { ReactComponent as Logo } from '../assets/kidsloop_min_logo.svg'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import LoginFooter from './loginFooter'

const LoginComponent: FunctionComponent = () => {

    const [loginState, updateLoginState] = useState('login')

    return (
        <div className='flex flex-col max-w-sm w-full'>
            <div className='shadow-standard rounded-12px py-12 px-4 sm:px-6 lg:px-8 dark:bg-black-dark'>
                <div className='flex flex-col justify-start'>
                    <div className='h-12 w-16'>
                        <Logo />
                    </div>
                    <h4 className='mt-6 text-left text-2xl font-normal text-black-500 dark:text-white'>
                        {loginState === 'register' ? 'Sign Up' : null}
                        {loginState === 'login' ? 'Sign In' : null}
                    </h4>
                </div>
                {loginState === 'register' ? <RegisterForm /> : null}
                {loginState === 'login' ? <><LoginForm />
                    <div className='flex items-left justify-between mt-14'>
                        <p onClick={() => updateLoginState('register')} className='cursor-pointer text-sm font-normal text-navyBlue hover:text-navyBlue-light dark:text-white'>
                            Create an account
                        </p>
                    </div></>
                    : null}
            </div>
            <LoginFooter />
        </div>
    )
}

export default LoginComponent
