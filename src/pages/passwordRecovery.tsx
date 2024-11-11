import { PasswordRecoveryForm } from "../components/passwordRecoveryForm"
import { Link } from 'react-router-dom'
import { Lang } from '../utils/languagePicker'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'

const PasswordRecoverPage = () => {

    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'

    useLoginJourneyContext().setTitle(Lang().forgotpassword)

    return (
        <><PasswordRecoveryForm inputStyles={inputStyles} />
            <div className='flex items-left justify-between mt-14'>
                <Link to="/registration" className='cursor-pointer text-sm font-normal text-navyBlue hover:text-navyBlue-light dark:text-white'>
                    {Lang().createacc}
                </Link>
            </div></>
    )
}

export { PasswordRecoverPage }
