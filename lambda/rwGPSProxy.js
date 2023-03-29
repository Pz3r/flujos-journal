export const handler = async(event) => {
    
    let username = event.queryStringParameters.username
    let password = event.queryStringParameters.password
    let apikey = process.env.RWGPS_KEY
    
    var login_creds = '?email='+encodeURIComponent(username)+"&password="+encodeURIComponent(password)+"&apikey="+apikey+"&version=2"
    console.log(login_creds)
    let url_to_fetch = "https://www.ridewithgps.com/users/current.json"+login_creds
    console.log(url_to_fetch)
    
    const res = await fetch(url_to_fetch)
    console.log(res)
    
    let response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };

    if (res.ok) {
        const data = await res.json();
        response.body = JSON.stringify(data)
    } else {
        response.statusCode = 401
    }
    
    return response;
};