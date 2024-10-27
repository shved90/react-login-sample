import { RegisterForm } from '../components/registerForm'
import { Lang } from '../locales/languagePicker'
import { useLoginJourneyContext } from '../components/wrapper'

const RegistrationPage = () => {

    const inputStyles = 'appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'

    useLoginJourneyContext().setTitle(Lang().signup)

    return (
        <RegisterForm inputStyles={inputStyles} />
    )
}

export { RegistrationPage }
