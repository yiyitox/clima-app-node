const axios = require('axios');

const getLugarLatLong = async ( dir ) =>{

    const encodedUrl = encodeURI(dir); //encodeURI transforma la peticion en un url seguro

    console.log(encodedUrl);
    
    //AXIOS TRABAJA POR MEDIO DE PROMESAS
    // REQUEST TRABAJA POR MEDIO DE CALLBACKS
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
    
        headers: {'x-rapidapi-key': '324b0cb441mshbea9e9375412671p11bdc4jsnf7f02d3ecf67'}
    
      });

    //ejecutamos la instancia

      const resp = await instance.get();

      if(resp.data.Results.length === 0){
          throw new Error(`No hay resusltado para ${dir}`);

      }

      const data = resp.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const long = data.lon;


              return{
                  direccion,
                  lat,
                  long
              }

}

module.exports = {
    getLugarLatLong
}