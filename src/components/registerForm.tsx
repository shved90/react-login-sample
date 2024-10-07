import { FunctionComponent, useState, useEffect } from 'react'
import { Lang } from '../locales/languagePicker'

const RegisterForm: FunctionComponent<{ inputStyles: string }> = (props) => {

    const [registrationData, setRegistrationData] = useState({})

    const submitRegistration: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const registrationData: { [key: string]: any } = {}
        for (let [key, value] of formData.entries()) {
            registrationData[key] = value
        }
        localStorage.setItem("registrationData", JSON.stringify(registrationData));
    }

    useEffect(() => {
        if (localStorage.getItem('registrationData')) {
            setRegistrationData(JSON.parse(localStorage.getItem('registrationData') || "{}"))
            console.log('fetched registration data from localstorage for further use', JSON.parse(localStorage.getItem('registrationData') || "{}"))
        }
    }, [])

    console.log(registrationData)

    return (
        <form className='mt-8' onSubmit={submitRegistration} method='POST'>
            <div className='space-y-2'>
                <div>
                    <label htmlFor='name' className='sr-only'>
                        {Lang().name}*
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='name'
                        required
                        className={props.inputStyles}
                        placeholder={`${Lang().name}*`}
                    />
                </div>
                <div>
                    <label htmlFor='email' className='sr-only'>
                        {Lang().email}*
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className={props.inputStyles}
                        placeholder={`${Lang().email}*`}
                    />
                </div>
                <div>
                    <label htmlFor='address' className='sr-only'>
                        {Lang().address}*
                    </label>
                    <input
                        id='address'
                        name='address'
                        type='text'
                        autoComplete='address'
                        required
                        className={props.inputStyles}
                        placeholder={`${Lang().address}*`}
                    />
                </div>
                <div>
                    <label htmlFor='password' className='sr-only'>
                        {Lang().password}*
                    </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='new-password'
                        minLength={8}
                        required
                        className={props.inputStyles}
                        placeholder={`${Lang().password}*`}
                    />
                </div>
            </div>

            <div className='mt-6 flex items-center justify-between'>
                <button
                    type='button'
                    onClick={event => event.preventDefault()}
                    className='group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-12px text-white bg-blue hover:bg-blue-light focus:outline-none focus:bg-blue-dark focus:ring-blue-light'
                >
                    {Lang().signup}
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
