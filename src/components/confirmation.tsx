import { ReactElement } from 'react'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'
import { Lang } from '../utils/languagePicker'

const loginData = JSON.parse(localStorage.getItem('loginData') || "{}")

const ConfirmationStates = {
    confirmLogin: 'confirmLogin',
    confirmPasswordRecovery: 'confirmPasswordRecovery',
    confirmRegistration: 'confirmRegistration',
    failedLogin: 'failedLogin',
    failedPasswordRecovery: 'failedPasswordRecovery',
    failedRegistration: 'failedRegistration'
}

const ConfirmationMessages = {
    confirmLogin: 'You have successfully loggen in',
    confirmPasswordRecovery: `Your password recovery request has been processed, check your email at ${loginData.email}`,
    confirmRegistration: 'confirmRegistration'
}

const Confirmation = ({ }): ReactElement => {

    useLoginJourneyContext().setTitle(Lang().confirmsignin)

    return (
        <p className='border-solid rounded-md border-white border-2 text-white mt-4 p-2'>{ConfirmationMessages.confirmPasswordRecovery}</p>
    )
}

export { Confirmation, ConfirmationStates }
