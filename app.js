const  argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){
      case 'listar':
            listarTabla(argv.base, argv.limit);
      break;
      case 'crear':
            crearArchivo(argv.base, argv.limit)
                  .then( archivo => console.log(`Archivo creado:${archivo}`))
                  .catch(err => console.log(err));
      break;
      default:
            console.log('comando no reconocido');
}



// let base = 1;

// let argv2 = process.argv;

// console.log('Limite',argv.limit);


// crearArchivo(base)
//       .then( archivo => console.log(`Archivo creado:${archivo}`))
//       .catch(err => console.log(err));