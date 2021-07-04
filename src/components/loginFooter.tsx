import { FunctionComponent, useEffect } from 'react'
import { ReactComponent as Sun } from '../assets/sun.svg'
import { ReactComponent as Moon } from '../assets/moon.svg'
import { useTheme } from '../providers/themeProvider'

const LoginFooter: FunctionComponent = (props) => {

    const { state, dispatch } = useTheme()
    let bodyClasses = document.querySelector<HTMLInputElement>('body')!.classList

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            bodyClasses.add('dark')
            dispatch(true)
        }
    }, [])

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
        <div className='relative'>
            {localStorage.theme === 'dark'
                ? <Sun className='absolute' onClick={themeToggle} width="20px" height='20px' />
                : <Moon className='absolute' onClick={themeToggle} width="20px" height='20px' />
            }
        </div>
    )
}

export default LoginFooter
