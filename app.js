

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv; // le pongo el argv para obtener los argumentos

//lugar.getLugarLatLong(argv.direccion)
//.then(console.log); // esto regresa una prmesa e lugar.js

//clima.getClima(40.750000, -74.000000)
//.then(console.log)
//.catch(console.log)

const getInfo = async(direccion) =>{

    try {

        const coord = await lugar.getLugarLatLong(direccion);

        const temp = await clima.getClima(coord.lat, coord.long);

        return `El clima de ${coord.direccion} es de ${temp}.`; 

    } catch (e) {
        
        return `no se pudo determiar el clima de ${direccion}`; //mando el objeto como lo recibo
    }
 
    //salida

}

getInfo (argv.direccion)
.then(console.log)
.catch(console.log);