import { ReactElement } from 'react'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'
import { Lang } from '../utils/languagePicker'

const ConfirmationStates = {
    confirmLogin: 'confirmLogin',
    confirmPasswordRecovery: 'confirmPasswordRecovery',
    confirmRegistration: 'confirmRegistration',
    failedLogin: 'failedLogin',
    failedPasswordRecovery: 'failedPasswordRecovery',
    failedRegistration: 'failedRegistration'
}

type confirmationValues = {
    message: string
    title: string
}

const Confirmation = ({title, message}: confirmationValues): ReactElement => {

    useLoginJourneyContext().setTitle(title)

    return (
        <p className='border-solid rounded-md border-white border-2 text-white mt-4 p-2'>
            {message}
        </p>
    )
}

export { Confirmation, ConfirmationStates }
