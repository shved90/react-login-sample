import { FunctionComponent } from 'react'

const MainWrapper: FunctionComponent = ({children}) => {
    return (
        <div className='flex items-center justify-center h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-black-light bg-white'>
            {children}
        </div>
    )
}

export default MainWrapper
