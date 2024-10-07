import { FunctionComponent, useState } from 'react'
import { ReactComponent as Logo } from '../assets/kidsloop_min_logo.svg'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'
import LoginFooter from './loginFooter'
import { Lang } from '../locales/languagePicker'

const LoginComponent: FunctionComponent = () => {
    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'

    const [isRegistration, setIsRegistration] = useState(false)

    return (
        <div className='flex flex-col max-w-sm w-full'>
            <div className='shadow-standard rounded-12px py-12 px-4 sm:px-6 lg:px-8 dark:bg-black-dark'>
                <div className='flex flex-col justify-start'>
                    <div className='h-12 w-16'>
                        <Logo />
                    </div>
                    <h4 className='mt-6 text-left text-2xl font-normal text-black-500 dark:text-white'>
                        {isRegistration ? Lang().signup : Lang().signin}
                    </h4>
                </div>
                {isRegistration ? <RegisterForm inputStyles={inputStyles} /> :
                    <><LoginForm inputStyles={inputStyles} />
                        <div className='flex items-left justify-between mt-14'>
                            <p onClick={() => setIsRegistration(true)} className='cursor-pointer text-sm font-normal text-navyBlue hover:text-navyBlue-light dark:text-white'>
                                {Lang().createacc}
                            </p>
                        </div></>}
            </div>
            <LoginFooter />
        </div>
    )
}

export default LoginComponent
