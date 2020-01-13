const axios = require('axios');


const getClima = async(lat, long) =>{ //poq en la url tiene que variar la latitud y longitud

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5054bf9ce9b7ae716f37567595118b49
   `)

     return resp.data.main.temp;

}
module.exports = {

    getClima
}