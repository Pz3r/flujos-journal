const JOURNAL_API_ENDPOINT = "https://73oajmp3pd.execute-api.us-west-1.amazonaws.com/prod"
const JOURNAL_API_KEY = "xOsPBbAKQjAnfmQ11O2haoocwbwXZ7map1cEUcgf"

const PHOTO_ENDPOINT = "https://rme2z0gw62.execute-api.us-west-1.amazonaws.com/prod/"
const PHOTO_API_KEY = "xOsPBbAKQjAnfmQ11O2haoocwbwXZ7map1cEUcgf"

export const SubmitData = (Data)=>{
    return fetch(JOURNAL_API_ENDPOINT, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': JOURNAL_API_KEY
        },
        body: JSON.stringify(Data)
    }) 
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const PutImage = (Name, Data)=>{
    return toBase64(Data).then((data)=>{
        return fetch(PHOTO_ENDPOINT, {
            method: "POST",
            headers:{
                "x-api-key": PHOTO_API_KEY
            },
            body: JSON.stringify({ "name" : Name,  "file": data.split(',')[1] })
        })
    })
}