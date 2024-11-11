import type { ReactNode, Dispatch } from 'react'
import { useContext, createContext, useReducer, useMemo } from "react"


type State = { lang: string }

const LangContext = createContext<
    { state: State, dispatchLang: Dispatch<State> } | undefined
>(undefined)

const langReducer = (state: State, action: State) => {
    return { lang: action.lang }
}

export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatchLang] = useReducer(langReducer, { lang: 'en' })

    const langValue = useMemo(() => ({
        state, dispatchLang
      }), [state]);

    return (
        <LangContext.Provider value={langValue}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => {
    const context = useContext(LangContext)
    if (!context) throw new Error('useLang must be used inside a LangProvider')
    return context
}
