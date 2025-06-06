import { PasswordRecoveryForm } from "../components/PasswordRecoveryForm"
import { Link } from 'react-router-dom'
import { Lang } from '../utils/languagePicker'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'
import { Confirmation, ConfirmationStates } from "../components/Confirmation"

const PasswordRecoverPage = () => {

    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'
    const passwordRecoveryData = JSON.parse(localStorage.getItem('passwordRecovery') || "{}")

    const state = useLoginJourneyContext()
    state.setTitle(Lang().forgotpassword)

    return (
        state.journey !== ConfirmationStates.confirmPasswordRecovery ?
            <>
                <PasswordRecoveryForm inputStyles={inputStyles} />
                <div className='flex items-left justify-between mt-14'>
                    <Link to="/registration" className='cursor-pointer text-sm font-normal text-navyBlue hover:text-navyBlue-light dark:text-white'>
                        {Lang().createacc}
                    </Link>
                </div>
            </>
            : <Confirmation title={Lang().confirmforgotpassword}  message={`Your password recovery request has been processed, check your email at ${passwordRecoveryData.email}`}/>
    )
}

export { PasswordRecoverPage }
