const API_ENDPOINT = "https://73oajmp3pd.execute-api.us-west-1.amazonaws.com/prod"
const API_KEY = "xOsPBbAKQjAnfmQ11O2haoocwbwXZ7map1cEUcgf"

export const SubmitData = (Data)=>{
    return fetch(API_ENDPOINT, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY
        },
        body: JSON.stringify(Data)
    }) 
}