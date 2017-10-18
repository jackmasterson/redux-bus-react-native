// needs to be update per IP address
import url from '../api/database';

export const getDataFromDatabase = () => {
    return fetch(url)
        .then(res => res.json());
}

export const postDataToDatabase = (data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    })
    .then(res => res.json());
}