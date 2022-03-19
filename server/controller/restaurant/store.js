const axios = require('axios');
const { History } = require('../../models')
require('dotenv').config()


function getRestaurants(data, type) {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'get',
            url: `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${data.lon},${data.lat},2000&bias=proximity:${data.lon},${data.lat}&limit=10&apiKey=${process.env.API_KEY}`,
            headers: { }
          };
      
          data = {
              type: type,
              lon: data.lon,
              lat: data.lat
        }
        
        axiosRequest(config, data, 1)
            .then((resData) => {
                resolve(resData)
            })
            .catch((err) => {
                reject(err)
            });


    })
}

function axiosRequest(config, data, requestType) {
    //requestType se usa para diferenciar que funcion consulta a esta: 1 para guardar datos, 0 para no guardar
    return new Promise((resolve, reject) => {
        try {
            axios(config)
                .then(async function (response) {
                    if (requestType === 1) {
                        await saveHistory(data, "Success")
                    }
                    resolve(response.data)
            })
                .catch(async function (error) {
                    if (requestType === 1) {
                        await saveHistory(data, "Failed");
                    }
                    console.log(error);
                    reject(error);
            });
            
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
  
async function saveHistory(data, status) {
    try {
        const create = await History.create({
            type: data.type,
            lon: data.lon,
            lat: data.lat,
            status: status
        });
        return create;
    } catch (error) {
        console.log(error.message)        
        return;
    }
}
module.exports = {
    axiosRequest,
    getRestaurants
}