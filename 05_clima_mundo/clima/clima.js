const axios = require('axios');

const getClima = async(lat, lng) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cc235c3fc0f79da55c7ae4cfbb82c1c3&units=metric`
    });

    const resp = await instance.get();
    const data = resp.data;

    if (data.length === 0) {
        throw new Error(`No Existen Resultados para latitud: ${lat} longitud:${lng}`);
    }

    const temp = data.main.temp;

    return {
        temp
    }
}


module.exports = {
    getClima
}