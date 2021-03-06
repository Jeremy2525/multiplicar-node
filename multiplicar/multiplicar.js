const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
      
      console.log("=============");
      console.log(`Tabla de ${base}`.green);
      console.log("=============");

      for(let i = 1; i <= limite; i++){
            console.log(`${base} * ${i} = ${base * i}`);
      }
}

let crearArchivo = (base, limite = 10) => {

      return new Promise((resolve,reject) => {
            if(!Number(base)){
                  return reject(`El valor introducido ${base} no es un número`);
            }
            
            let data = '';

            for(var i = 1; i <= limite; i++){
                  data +=`${base} * ${i} = ${base * i}\n`;
            }
            
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                  if (err) reject(err);
                  return resolve(`tabla-${base}-al-${limite}.txt`.green);
            });
      })
}

module.exports = {
      crearArchivo,
      listarTabla
}
