const JOURNAL_API_ENDPOINT = "https://flq23jtp9l.execute-api.us-west-1.amazonaws.com/beta"
const JOURNAL_API_KEY = "yqrx6sHO1Y6XYJqUqYANNmAp87XgBpa6Et5Tqibh"

const RIDE_WITH_GPS_ENDPOINT = "https://zcs7uiru7jshapbtht2acdcszy0qmztf.lambda-url.us-west-1.on.aws/"


const PHOTO_ENDPOINT = "https://xuqy0uxnfh.execute-api.us-west-1.amazonaws.com/beta"
const PHOTO_API_KEY = "yqrx6sHO1Y6XYJqUqYANNmAp87XgBpa6Et5Tqibh"

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
    var login_creds = '?username='+encodeURIComponent(Email)+"&password="+encodeURIComponent(Password)
    return fetch(RIDE_WITH_GPS_ENDPOINT+login_creds).then((response)=>{
        return response
    })
}