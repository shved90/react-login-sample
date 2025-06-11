import { ReactElement, useEffect } from 'react'
import { ReactComponent as Sun } from '../assets/sun.svg'
import { ReactComponent as Moon } from '../assets/moon.svg'
import { useTheme } from '../utils/themeProvider'
import { Dropdown } from './Dropdown'
import { Lang } from '../utils/languagePicker'

const LoginFooter = ({ }): ReactElement => {

    const { state, dispatch } = useTheme()
    const isDark = state.theme === 'dark'

    const themeToggle = () => {
        dispatch({ type: 'TOGGLE_THEME' })
    }

    return (
        <div className='mt-2 flex items-center justify-between'>
            <div className='flex items-center justify-between pl-4'>
                <div className='relative h-8 w-8 p-1.5'>
                    {isDark
                        ? <Moon className='absolute' onClick={themeToggle} fill='white' width='20px' height='20px' />
                        : <Sun className='absolute' onClick={themeToggle} fill='black' width='20px' height='20px' />
                    }
                </div>
                <Dropdown />
            </div>
            <div className='flex items-center justify-between space-x-4'>
                <p className='text-black text-xs dark:text-white'>{Lang().help}</p>
                <p className='text-black text-xs dark:text-white'>{Lang().privacy}</p>
                <p className='text-black text-xs dark:text-white'>{Lang().terms}</p>
            </div>
        </div>
    )
}

export { LoginFooter }
