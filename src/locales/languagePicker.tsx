import { useLang } from '../providers/languagesProvider'
import english from './en/login.json'
import latvian from './lv/login.json'
import russian from './ru/login.json'

export const langList = [
    {langFull: 'english', langShort: 'en'},
    {langFull: 'latvian', langShort: 'lv'},
    {langFull: 'russian', langShort: 'ru'}
]

export const Lang = () => {
    const { state } = useLang()
    
    switch(state.lang) {
        case 'en':
            return english
        case 'lv':
            console.log('latvian selected')
            return latvian
        case 'ru':
            return russian
        default:
            return english
    }
    
}
