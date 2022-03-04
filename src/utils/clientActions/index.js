const JOURNAL_API_ENDPOINT = "https://73oajmp3pd.execute-api.us-west-1.amazonaws.com/prod"
const JOURNAL_API_KEY = "xOsPBbAKQjAnfmQ11O2haoocwbwXZ7map1cEUcgf"

const PHOTO_ENDPOINT = "https://8d6ne1wbak.execute-api.us-west-1.amazonaws.com/prod/"
const PHOTO_API_KEY = "xOsPBbAKQjAnfmQ11O2haoocwbwXZ7map1cEUcgf"

export const SubmitData = (Data)=>{
    return fetch(JOURNAL_API_ENDPOINT, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'X-Api-Key': JOURNAL_API_KEY
        },
        body: JSON.stringify(Data)
    }) 
}

export const PutImage = (Name, Data)=>{
    return fetch(PHOTO_ENDPOINT+Name, {
        method: "PUT",
        headers:{
            "x-api-Key": PHOTO_API_KEY
        },
        body: Data
    })
}