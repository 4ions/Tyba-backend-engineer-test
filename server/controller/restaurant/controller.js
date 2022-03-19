const axios = require('axios');
require('dotenv').config()
const { History } = require('../../models')

const searchCity = async (req, res) => { 
    
}

const searchCoordinates = async (req, res) => { 
    
    const lat = req.params.lat;
    const lon = req.params.lon;
    console.log(lat, lon)
    if (!lat || !lon) {
        return res.status(400).json({error: "Missing longitud or latitud"})
    }
    
    let config = {
      method: 'get',
      url: `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${lon},${lat},2000&bias=proximity:${lon},${lat}&limit=10&apiKey=${process.env.API_KEY}`,
      headers: { }
    };
    
    try {
        axios(config)
            .then(async function (response) {
                await History.create({
                    type: "Coordiantes",
                    lon: lon,
                    lat: lat,
                    status: "Success"
                });
                return res.status(200).json({data:response.data})
        })
            .catch(async function (error) {
                await History.create({
                    type: "Coordiantes",
                    lon: lon,
                    lat: lat,
                    status: "Failed"
                });
                console.log(error);
                return res.status(400).json({ error: error });
        });
        
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    searchCity,
    searchCoordinates
}



