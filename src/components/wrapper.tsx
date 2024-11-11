import { ReactElement, useState, useMemo } from 'react'
import { Header } from './header'
import { LoginFooter } from './loginFooter'
import { LoginJourneyDefaults } from '../utils/loginJourneyContext'

interface MainWrapperProps {
    children: React.ReactNode
}

const MainWrapper = ({ children }: MainWrapperProps): ReactElement => {

    const [title, setTitle] = useState<string>('')
    const [journey, setJourney] = useState<string>('')

    const loginValues = useMemo(() => ({
        title, setTitle, journey, setJourney
    }), [title, journey]);

    return (
        <LoginJourneyDefaults.Provider value={loginValues}>
            <div className='flex items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-black-light bg-white'>
                <div className='flex flex-col max-w-sm w-full'>
                    <div className='shadow-standard rounded-12px py-12 px-4 sm:px-6 lg:px-8 dark:bg-black-dark'>
                        <Header />
                        {children}
                    </div>
                    <LoginFooter />
                </div>
            </div>
        </LoginJourneyDefaults.Provider>

    )
}

export { MainWrapper, MainWrapperProps }
