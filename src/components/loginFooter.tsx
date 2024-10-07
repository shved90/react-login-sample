import { FunctionComponent, useEffect } from 'react'
import { ReactComponent as Sun } from '../assets/sun.svg'
import { ReactComponent as Moon } from '../assets/moon.svg'
import { useTheme } from '../providers/themeProvider'
import Dropdown from './dropdown'
import { Lang } from '../locales/languagePicker'

const LoginFooter: FunctionComponent = () => {

    const { dispatchTheme } = useTheme()
    let bodyClasses = document.querySelector('body')!.classList

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            bodyClasses.add('dark')
            dispatchTheme(true, 'SET_THEME')
        }
    }, [])

    const themeToggle = () => {
        if (localStorage.getItem('theme') === 'dark') {
            bodyClasses.remove('dark')
            localStorage.removeItem('theme')
            dispatchTheme(true, 'SET_THEME')
        } else {
            bodyClasses.add('dark')
            localStorage.setItem('theme', 'dark')
            dispatchTheme(false, 'SET_THEME')
        }
    }

    return (
        <div className='mt-2 flex items-center justify-between'>
            <div className='flex items-center justify-between pl-4'>
                <div className='relative h-8 w-8 p-1.5'>
                    {localStorage.theme === 'dark'
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

export default LoginFooter
