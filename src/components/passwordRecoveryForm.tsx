import { ReactElement, useState, useEffect } from 'react'
import { Lang } from '../locales/languagePicker'

interface PasswordRecoveryFormProps {
    inputStyles: string;
}

const PasswordRecoveryForm = ({ inputStyles }: PasswordRecoveryFormProps): ReactElement => {

    const [loginData, setLoginData] = useState({})

    const submitPasswordRecovery: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const loginData: { [key: string]: FormDataEntryValue } = {}
        for (let [key, value] of formData.entries()) {
            loginData[key] = value
        }
        localStorage.setItem("loginData", JSON.stringify(loginData));
    }

    const existingLogin = JSON.parse(localStorage.getItem('loginData') || "{}")

    useEffect(() => {
        if (localStorage.getItem('loginData')) {
            try {
                setLoginData(existingLogin)
                console.log("loginData", loginData)
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
