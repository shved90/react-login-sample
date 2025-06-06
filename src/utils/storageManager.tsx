

const storeData = (dataName: string, dataValue: FormData) => {
    const JSONData = JSON.stringify(Object.fromEntries(dataValue.entries()))
    localStorage.setItem(dataName, JSONData)
}

const getData = (dataName: string) => {
    return localStorage.getItem(dataName)
}


export { storeData, getData }