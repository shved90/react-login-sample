import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Goback } from '../assets/leftarrow.svg'
import Reset from '../assets/reset.png'
import { useLoginJourneyContext } from '../utils/loginJourneyContext'

const Header = ({ }): ReactElement => {
    const state = useLoginJourneyContext()
    
    const navigate = useNavigate();
    const reset = () => {
        localStorage.clear()
        navigate("/")
        state.setJourney('')
    }

    return (
        <div className='flex flex-col justify-start'>
            <div className="flex flex-row justify-between">
                <div className='h-12 w-16'>
                    <Logo title="Logo of login demo site" role="img" />
                </div>
                <div className="flex gap-x-2">
                    <button onClick={() => navigate(-1)} className='h-8 w-8'>
                        <Goback title="go back a page" className='max-h-full max-w-full' />
                    </button>
                    <button onClick={() => reset()} className='h-8 w-8'>
                        <img src={Reset} alt="reset the whole app to default" className='max-h-full max-w-full' />
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
