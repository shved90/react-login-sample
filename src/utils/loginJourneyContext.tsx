import { useContext, createContext } from "react"

interface LoginJourneyContextTypes {
    title: string,
    setTitle: (title: string) => void,
    journey: string,
    setJourney: (journey: string) => void
}

const LoginJourneyDefaults = createContext<LoginJourneyContextTypes>({
    title: "",
    setTitle: () => { },
    journey: "",
    setJourney: () => { }
})

const useLoginJourneyContext = () => useContext(LoginJourneyDefaults)

export { useLoginJourneyContext, LoginJourneyDefaults, LoginJourneyContextTypes }