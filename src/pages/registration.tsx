import { RegisterForm } from '../components/RegisterForm'
import { Lang } from '../utils/languagePicker'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'
import { Confirmation, ConfirmationStates } from "../components/Confirmation"

const RegistrationPage = () => {

    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'

    const state = useLoginJourneyContext()
    state.setTitle(Lang().createacc)

    return (
        state.journey !== ConfirmationStates.confirmRegistration ? 
            <RegisterForm inputStyles={inputStyles} />
            : <Confirmation title={Lang().confirmcreteacc} message={`Registration successful`}/>
    )
}

export { RegistrationPage }
