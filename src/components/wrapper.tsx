import { ReactElement } from 'react'

import { LoginFooter } from './loginFooter'
import { createContext, useContext, useState } from 'react'
import { Header } from './header';

interface MainWrapperProps {
    children: React.ReactNode;
}

interface LoginJourneyContextTypes {
    title: string,
    setTitle: (title: string) => void,
    journey: string,
    setJourney: (journey: string) => void
}

const LoginJourneyDefaults = createContext<LoginJourneyContextTypes> ({
    title: "",
    setTitle: () => {},
    journey: "",
    setJourney: () => {}
})

const LoginJourneyContext = () => useContext(LoginJourneyDefaults)

const MainWrapper = ({ children }: MainWrapperProps): ReactElement => {

    const [title, setTitle] = useState<string>('')
    const [journey, setJourney] = useState<string>('')

    return (
        <LoginJourneyDefaults.Provider value={{ title, setTitle, journey, setJourney }}>
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

export { MainWrapper, MainWrapperProps, LoginJourneyContext, LoginJourneyContextTypes }
