import { useLang } from '../providers/languagesProvider'
import english from './en/login.json'
import latvian from './lv/login.json'
import russian from './ru/login.json'

interface langType {
    languagename: string,
    signin: string;
    signup: string;
    forgotpassword: string;
    createacc: string;
    email: string;
    password: string;
    name: string;
    address: string;
    selectlang: string;
    help: string;
    privacy: string;
    terms: string;
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

export {langList, langType, Lang}