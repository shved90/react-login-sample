import { FunctionComponent, useEffect } from 'react'
import { ReactComponent as Sun } from '../assets/sun.svg'
import { ReactComponent as Moon } from '../assets/moon.svg'
import { useTheme } from '../providers/themeProvider'
import Dropdown from './dropdown'

const LoginFooter: FunctionComponent = (props) => {

    const { dispatch } = useTheme()
    let bodyClasses = document.querySelector<HTMLInputElement>('body')!.classList

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            bodyClasses.add('dark')
            dispatch(true)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const themeToggle = () => {
        if (localStorage.theme === 'dark') {
            bodyClasses.remove('dark')
            localStorage.removeItem('theme')
            dispatch(true, 'SET_THEME')
        } else {
            bodyClasses.add('dark')
            localStorage.theme = 'dark'
            dispatch(false, 'SET_THEME')
        }
    }

    return (
        <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center justify-between pl-4">
                <div className='relative h-8 w-8 p-1.5'>
                    {localStorage.theme === 'dark'
                        ? <Moon className='absolute' onClick={themeToggle} fill='white' width="20px" height='20px' />
                        : <Sun className='absolute' onClick={themeToggle} fill='black' width="20px" height='20px' />
                    }
                </div>
                <Dropdown />
            </div>
            <div className="flex items-center justify-between space-x-4">
                <p className='text-black text-xs dark:text-white'>Help</p>
                <p className='text-black text-xs dark:text-white'>Privacy</p>
                <p className='text-black text-xs dark:text-white'>Terms</p>
            </div>
        </div>

    )
}

export default LoginFooter
