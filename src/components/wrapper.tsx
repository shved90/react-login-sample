import { ReactElement, useState, useMemo } from 'react'
import { Header } from './header'
import { LoginFooter } from './loginFooter'
import { LoginJourneyDefaults } from '../utils/loginJourneyContext'
import { ConfirmationStates } from './confirmation'

interface MainWrapperProps {
    children: React.ReactNode
}

const MainWrapper = ({ children }: MainWrapperProps): ReactElement => {

    const [title, setTitle] = useState<string>('')
    const [journey, setJourney] = useState<string>('')

    const loginValues = useMemo(() => ({
        title, setTitle, journey, setJourney
    }), [title, journey])

    const widthVal = journey === "loading" ? "25%" : journey === "loaded" ? "100%" : '0'
    const isConfirmed = journey === (ConfirmationStates.confirmLogin || ConfirmationStates.confirmPasswordRecovery || ConfirmationStates.confirmRegistration)
    
    return (
        <LoginJourneyDefaults.Provider value={loginValues}>
            <div className='flex items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-black-light bg-white'>
                <div className='flex flex-col max-w-sm w-full'>
                    <div className='shadow-standard rounded-12px py-12 px-4 overflow-hidden relative sm:px-6 lg:px-8 dark:bg-black-dark'>
                        {!isConfirmed && <div className="w-full h-2.5 absolute top-0 left-0">
                            <div className="bg-blue-600 h-2.5" style={{ "width": widthVal }}></div>
                        </div>}
                        <Header />
                        <div className={`${journey.includes('load') && 'loader-overlay'}`}>
                            {children}
                        </div>
                    </div>
                    <LoginFooter />
                </div>
            </div>
        </LoginJourneyDefaults.Provider>

    )
}

export { MainWrapper, MainWrapperProps }
