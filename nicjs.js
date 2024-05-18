//Datein hochladen -> event listener + fetch
//Datein runterladen -> fetch
// Cheatsheet: https://www.freecodecamp.org/news/upload-files-with-javascript/
// https://razorfxnetworking.medium.com/how-to-set-up-a-simple-http-server-for-local-file-sharing-with-python-36495f116bb9
//https://itsourcecode.com/javascript-tutorial/list-files-in-directory-javascript-with-examples/
//https://dev.to/nelsonmendezz_/how-to-create-server-of-files-with-fastapi-47d0
//Server: https://razorfxnetworking.medium.com/how-to-set-up-a-simple-http-server-for-local-file-sharing-with-python-36495f116bb9

// IP Raspberry: 192.168.178.32
// Zum connecten zum server im CMD
// cd Documents && python http_server.py
// http://192.168.178.32:8000/

const url = 'http://'

async function dateiholen(){
    const antwort = await fetch('')
    const datein = await response.json()
    console.log(datein.dateiname)
}




