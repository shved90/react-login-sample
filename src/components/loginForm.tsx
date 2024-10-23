import { ReactElement, useState, useEffect } from 'react'
import { Lang } from '../locales/languagePicker'

interface LoginFormProps {
    inputStyles: string;
}

const LoginForm = ({ inputStyles }: LoginFormProps): ReactElement => {

    const [loginData, setLoginData] = useState({})

    const submitLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const loginData: { [key: string]: any } = {}
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
        <form className='mt-8' onSubmit={submitLogin} method='POST'>
            <div>
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
                <div className='mt-2'>
                    <label htmlFor='password' className='sr-only'>
                        {Lang().password}*
                    </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='on'
                        minLength={8}
                        required
                        className={inputStyles}
                        placeholder={`${Lang().password}*`}
                    />
                </div>
            </div>

            <div className='mt-2 flex items-center justify-between'>
                <p className='text-sm font-normal cursor-pointer text-navyBlue hover:text-navyBlue-light dark:text-white'>
                    {Lang().forgotpassword}
                </p>
                <div>
                    <button
                        type='submit'
                        className='group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-12px text-white bg-blue hover:bg-blue-light focus:outline-none focus:bg-blue-dark focus:ring-blue-light'
                    >
                        {Lang().signin}
                    </button>
                </div>
            </div>
        </form>
    )
}

export { LoginForm, LoginFormProps }
