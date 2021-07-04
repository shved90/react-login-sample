import type { ReactNode } from 'react'
import { useContext, createContext, useReducer } from "react"

const defaultTheme = {theme: false}

export type Dispatch = (action: 'SET_THEME') => void
export type State = typeof defaultTheme

const ThemeContext = createContext<
    {state: State; dispatch: any} | undefined
>(undefined)

function themeReducer(state: State, action: 'SET_THEME') {
    console.log(state, action)
    return {theme: state.theme}
}

export function ThemeProvider({ children }: {children: ReactNode}) {
    const [state, dispatch] = useReducer(themeReducer, defaultTheme)
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
  
    if (!context) throw new Error('useTheme must be used inside a ThemeProvider')
  
    return context
  }

// import React, { Context, createContext, useReducer, useEffect } from "react";

// interface DarkModeContext {
//     theme: string;
//     dispatch: React.Dispatch<any>;
//   }

// const darkModeReducer = (theme: string) =>
//   theme

// const DarkModeContext: Context<DarkModeContext> = createContext({} as DarkModeContext)

// const initialState =
//   'dark' || '';

// const DarkModeProvider: React.FC = ({ children }) => {
//   const [theme, dispatch] = useReducer(darkModeReducer, initialState);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <DarkModeContext.Provider
//       value={{
//         theme,
//         dispatch
//       }}
//     >
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export { DarkModeProvider, DarkModeContext };