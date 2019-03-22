const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'X-RapidAPI-Key': '9aa4ed50c5mshce92dd29e5e6dc4p145d91jsn11d77f052e8e'
        }
    });

    const resp = await instance.get();
    const data = resp.data.Results;

    if (data.length === 0) {
        throw new Error(`No Existen Resultados para ${direccion}`);
    }

    const direccion = data[0].name;
    const lat = data[0].lat;
    const lng = data[0].lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}