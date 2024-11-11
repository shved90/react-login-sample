import { useLang } from './langProvider'
import english from '../locales/en/login.json'
import latvian from '../locales/lv/login.json'
import russian from '../locales/ru/login.json'

interface LangType {
    languagename: string,
    signin: string,
    signup: string,
    forgotpassword: string,
    createacc: string,
    submit: string,
    email: string,
    password: string,
    name: string,
    address: string,
    selectlang: string,
    help: string,
    privacy: string,
    terms: string
}

const langList =new Map([
    ['en', english],
    ['lv', latvian],
    ['ru', russian],
])

const Lang = () => {
    const { state } = useLang()
    const selectedLang = langList.get(state.lang)
    return selectedLang !== undefined ? selectedLang : english
}

export {langList, LangType, Lang}