
import { Link } from 'react-router-dom'
import { Lang } from '../locales/languagePicker'
import { LoginForm } from '../components/loginForm'
import { LoginJourneyContext } from '../components/wrapper'
import { Confirmation } from '../components/confirmation'

const LoginPage = () => {

    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'

    LoginJourneyContext().setTitle(Lang().signin)

    return (
        LoginJourneyContext().journey !== "confirm" ? 
        <>
            <LoginForm inputStyles={inputStyles} />
            <div className='flex items-left justify-between mt-14'>
                <Link to="/registration" className='cursor-pointer text-sm font-normal text-navyBlue hover:text-navyBlue-light dark:text-white'>
                    {Lang().createacc}
                </Link>
            </div>
        </>
        : <Confirmation />

    )
}

export { LoginPage }
