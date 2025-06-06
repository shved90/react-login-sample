import { ReactElement, useState, useEffect } from 'react'
import { Lang } from '../utils/languagePicker'
import { FetchData, ApplyData } from '../utils/mockApi'
import { ConfirmationStates } from './Confirmation'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'

interface PasswordRecoveryFormProps {
    inputStyles: string;
}

const PasswordRecoveryForm = ({ inputStyles }: PasswordRecoveryFormProps): ReactElement => {

    const [passwordRecovery, setPasswordRecovery] = useState({})
    const state = useLoginJourneyContext()

    const applyPasswordRecovery = (fetchedData: FormData) => {
        ApplyData(fetchedData, state)

        setTimeout(() => {
            localStorage.setItem("passwordRecovery", JSON.stringify(passwordRecovery))
            state.setJourney(ConfirmationStates.confirmPasswordRecovery)
        }, 500)
    }

    const submitPasswordRecovery: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        FetchData(formData, ConfirmationStates.failedPasswordRecovery, state).then(fetchedData => applyPasswordRecovery(fetchedData)).catch(error => alert(error))
    }

    const existingPasswordRecovery = JSON.parse(localStorage.getItem('passwordRecovery') || "{}")

    useEffect(() => {
        if (localStorage.getItem('passwordRecovery')) {
            try {
                setPasswordRecovery(existingPasswordRecovery)
                console.log("passwordRecovery", passwordRecovery)
            } catch (error) {
                alert(error)
            }
        }
    }, [])

    return (
        <form className='mt-8' onSubmit={submitPasswordRecovery} method='POST'>
            <div className='space-y-2'>
                <div>
                    <label htmlFor='email-address' className='sr-only'>
                        {Lang().email}*
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className={inputStyles}
                        placeholder={`${Lang().email}*`}
                    />
                </div>
            </div>

            <div className='mt-2 flex items-center justify-between'>
                <button
                    type='submit'
                    className='group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-12px text-white bg-blue hover:bg-blue-light focus:outline-none focus:bg-blue-dark focus:ring-blue-light'
                >
                    {Lang().submit}
                </button>
            </div>
        </form>
    )
}

export { PasswordRecoveryForm }
