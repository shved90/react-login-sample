import { LoginJourneyContextTypes } from '../utils/loginJourneyContext'

const mockRequest = (formData: FormData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(formData)
        }, 2000)
    })
}

const FetchData = async (formData: FormData, failedMessage: string, state: LoginJourneyContextTypes): Promise<FormData> => {
    try {
        state.setJourney("loading")
        let result = await mockRequest(formData) as FormData
        return result
    } catch (error) {
        state.setJourney(failedMessage)
        return formData
    }
}

const ApplyData = (fetchedData: FormData, state: LoginJourneyContextTypes) => {
    state.setJourney("loaded")
    const data: { [key: string]: FormDataEntryValue } = {}
    for (let [key, value] of fetchedData.entries()) {
        data[key] = value
    }
}

export { FetchData, ApplyData }