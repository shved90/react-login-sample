import { Link } from 'react-router-dom'
import { Lang } from '../utils/languagePicker'
import { LoginForm } from '../components/LoginForm'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'
import { Confirmation, ConfirmationStates } from '../components/Confirmation'

const LoginPage = () => {

    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'

    const state = useLoginJourneyContext()
    state.setTitle(Lang().signin)

    return (
        state.journey !== ConfirmationStates.confirmLogin ?
            <>
                <LoginForm inputStyles={inputStyles} />
                <div className='flex items-left justify-between mt-14'>
                    <Link to="/registration" className='cursor-pointer text-sm font-normal text-navyBlue hover:text-navyBlue-light dark:text-white'>
                        {Lang().createacc}
                    </Link>
                </div>
            </>
            : <Confirmation title={Lang().confirmcreteacc}  message={"You have successfully loggen in"} />

    )
}

export { LoginPage }
