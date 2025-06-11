import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Goback } from '../assets/leftarrow.svg'
import { ReactComponent as Reset } from '../assets/reset.svg'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'
import { useTheme } from '../utils/themeProvider';

const Header = ({ }): ReactElement => {
    const loginState = useLoginJourneyContext()
    const { state } = useTheme()
    const navigate = useNavigate();
    const reset = () => {
        localStorage.clear()
        navigate("/")
        loginState.setJourney('')
    }

    useEffect(() => {
        console.log(state.theme)
    }, [state.theme])

    const darkTheme = state.theme === 'dark'
    console.log(state.theme)
    return (
        <div className='flex flex-col justify-start'>
            <div className="flex flex-row justify-between">
                <div className='h-12 w-16'>
                    <Logo title="Logo of login demo site" role="img" />
                </div>
                <div className="flex gap-x-4">
                    <button onClick={() => navigate(-1)} className='h-8 w-8'>
                        <Goback title="go back a page" className='max-h-full max-w-full' fill={darkTheme?'white':'dark'} />
                    </button>
                    <button onClick={() => reset()} className='h-8 w-8'>
                        <Reset title="Reset the whole app to default" className='max-h-full max-w-full' fill={darkTheme?'white':'dark'} />
                    </button>
                </div>
            </div>
            <h4 className='mt-6 text-left text-2xl font-normal text-black-500 dark:text-white'>
                {useLoginJourneyContext().title}
            </h4>
        </div>

    )
}

export { Header }
