import { ReactElement, useEffect } from 'react'
import { useLang } from '../providers/languagesProvider'
import { Lang, langList } from '../locales/languagePicker'

const Dropdown = ({ }): ReactElement => {

    const { dispatchLang } = useLang()
    const setLanguage = (language: string) => {
        localStorage.setItem('lang', language)
        dispatchLang({ lang: language })
    }

    useEffect(() => {
        if (localStorage.getItem('lang')) {
            dispatchLang({ lang: localStorage.getItem('lang') })
        }
    }, [])

    return (
        <div>
            <div className='relative inline-block text-left dropdown'>
                <button className='inline-flex justify-center w-full px-3 py-1 text-xs font-medium text-black transition duration-150 ease-in-out hover:text-black hover:underline focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 dark:text-white'
                    type='button' aria-haspopup='true' aria-expanded='true' aria-controls='language-dropdown'>
                    <span>{Lang().selectlang}</span>
                    <svg className='w-3 h-3 ml-1 mt-0.5 -mr-1' viewBox='0 0 20 20' fill='currentColor'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                </button>
                <div className='opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'>
                    <div className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none dark:text-white dark:bg-black-light' aria-labelledby='language-dropdown-trigger' id='language-dropdown' role='menu'>
                        <div className='py-1'>
                            {Array.from(langList).map(([shortLang, lang], index) => 
                                <button onClick={() => setLanguage(shortLang)} key={index} tabIndex={index} className='text-black flex justify-between w-full px-4 py-2 text-xs leading-5 text-left dark:text-white hover:underline' role='menuitem'>
                                    {lang.languagename}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Dropdown }
