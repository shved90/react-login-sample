import { ReactElement } from 'react'
import { ReactComponent as Logo } from '../assets/kidsloop_min_logo.svg'
import { LoginJourneyContext } from './wrapper'

const Header = ({ }): ReactElement => {

    return (
        <div className='flex flex-col justify-start'>
            <div className='h-12 w-16'>
                <Logo />
            </div>
            <h4 className='mt-6 text-left text-2xl font-normal text-black-500 dark:text-white'>
                {LoginJourneyContext().title}
            </h4>
        </div>

    )
}

export { Header }
