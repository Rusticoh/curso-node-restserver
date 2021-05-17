
const { Schema, model} = require('mongoose');

const UsuariosSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    
});

UsuariosSchema.methods.toJSON = function() {
    const {__v, password, ...usuario } = this.toObject();
    return usuario;
}





module.exports = model('Usuario', UsuariosSchema);


// {
//     nombre: 'asd',
//     correo: 'asdf',
//     password: 'secreto',
//     img: '123214',
//     rol: '23141',
//     estado: false,
//     google: false
// }