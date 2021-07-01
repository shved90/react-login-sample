import { FunctionComponent } from 'react'

const LoginForm: FunctionComponent = () => {

    return (
        <form className="mt-8" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address*
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm"
                        placeholder="Email address *"
                    />
                </div>
                <div className='mt-2'>
                    <label htmlFor="password" className="sr-only">
                        Password*
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-12px block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-navyBlue focus:border-navyBlue focus:z-10 sm:text-sm"
                        placeholder="Password *"
                    />
                </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
                <a href="#" className="text-sm font-normal text-navyBlue hover:text-navyBlue-light">
                    Forgot your password?
                </a>
                <div>
                    <button
                        type="submit"
                        className="group w-full flex justify-center py-2 px-4 text-sm font-medium rounded-12px text-white bg-blue hover:bg-blue-light focus:outline-none focus:bg-blue-dark focus:ring-blue-light"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
