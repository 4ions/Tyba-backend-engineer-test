const axios = require('axios');
const { History } = require('../../models')
const store = require('./store');

const searchCity = async (req, res) => {
    const city = req.params.city;

    if (!city) {
        return res.status(400).json({error: "Missing city"})
    }

    let config = {
        method: 'get',
      url: `https://api.geoapify.com/v1/geocode/search?text=${city}&format=json&apiKey=${process.env.API_KEY}`,
      headers: { }
    }
    store.axiosRequest(config, 0)
        .then((resData) => {
            if (typeof resData.results[0] !== "undefined") {
                const data = {
                    lat: resData.results[0].lat,
                    lon: resData.results[0].lon
                }
                store.getRestaurants(data, "City")
                    .then((resData) => {
                        return res.status(200).json(resData)
                      })
                    .catch((err) => {
                    return res.status(500).json({error: err})
                    });
            }
      })
        .catch((err) => {
            console.log(err);
        });
        
}

const searchCoordinates = async (req, res) => { 
    
    const lat = req.params.lat;
    const lon = req.params.lon;
    console.log(lat, lon)
    if (!lat || !lon) {
        return res.status(400).json({error: "Missing longitud or latitud"})
    }
    
    data = {
        lon: lon,
        lat: lat
    }

    
    store.getRestaurants(data, "Coordinates")
        .then((resData) => {
        return res.status(200).json(resData)
      })
        .catch((err) => {
        return res.status(500).json({error: err})
      });
    
    
}

module.exports = {
    searchCity,
    searchCoordinates
}



