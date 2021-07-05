import { FunctionComponent } from 'react'

const RegisterForm: FunctionComponent = () => {

    return (
        <form className='mt-8' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='space-y-2'>
                <div>
                    <label htmlFor='name' className='sr-only'>
                        Name
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='name'
                        required
                        className='appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'
                        placeholder='Name *'
                    />
                </div>
                <div>
                    <label htmlFor='email-address' className='sr-only'>
                        Email address*
                    </label>
                    <input
                        id='email-address'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'
                        placeholder='Email address *'
                    />
                </div>
                <div>
                    <label htmlFor='address' className='sr-only'>
                        Address
                    </label>
                    <input
                        id='address'
                        name='address'
                        type='text'
                        autoComplete='address'
                        required
                        className='appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'
                        placeholder='Address *'
                    />
                </div>
                <div>
                    <label htmlFor='password' className='sr-only'>
                        Password*
                    </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='new-password'
                        required
                        className='appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm'
                        placeholder='Password *'
                    />
                </div>
            </div>

            <div className='mt-6 flex items-center justify-between'>
                <button
                    type='button'
                    onClick={event => event.preventDefault()}
                    className='group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-12px text-white bg-blue hover:bg-blue-light focus:outline-none focus:bg-blue-dark focus:ring-blue-light'
                >
                    Sign up
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
