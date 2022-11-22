const JOURNAL_API_ENDPOINT = "https://73oajmp3pd.execute-api.us-west-1.amazonaws.com/prod"
const JOURNAL_API_KEY = "xOsPBbAKQjAnfmQ11O2haoocwbwXZ7map1cEUcgf"

const RIDE_WITH_GPS_ENDPOINT = "https://www.ridewithgps.com/current.json"
const RIDE_WITH_GPS_API_KEY = "2b2d68c9"


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

export const LoginRWGPS = (Email, Password)=>{
    //https://ridewithgps.com/api
    const login_creds = '?email='+encodeURIComponent(Email)+"&password="+encodeURIComponent(Password)+"&apikey="+RIDE_WITH_GPS_API_KEY+"&version=2"
    return fetch(RIDE_WITH_GPS_ENDPOINT+login_creds).then((response)=>{
        return response.json()
    })
}