const state = {
}

export async function fetchAndStore(url, key) {
    try {
        const dataStream = await fetch(url)
        const dataJson = await dataStream.json()

        state[key] = dataJson
    } catch (error) {
        console.log(error)
    }
}



export default state