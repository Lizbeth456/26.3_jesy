//Instanciar con una constatnte para activar la libreria
const mongoose = require('mongoose')
const url_bd = 'mongodb://localhost:27017'

mongoose.connect(url_bd)
//promesa (if)
.then(() => {
    console.log('Conexión exitosa a la base de datos')
})
.catch((err) => {
    console.log('Conexión fallida')
})

//Esqueleto/esquema de la tabla lo que va dentro
const alumnos_esqueleto = new mongoose.Schema(
    {
        name: {
            type: String
        },
        apepat: {
            type:String
        },
        apemat:{
            type:String
        },
        numtel:{
            type: Number
        }
    }
)
//Constante para crear una tabla, no darle un nombre (MODELO)
const alumnos = new mongoose.model('Tabla de registro de estudiantes', alumnos_esqueleto)

alumnos.create(
    {
        name:'Saharai',
        apepat:'Salazar',
        apemat:'De Lira',
        numtel: 446556265,
        email: 'kvkvm@gmail.com'

    }
)