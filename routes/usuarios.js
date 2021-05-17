
const { Router } = require('express');
const { check } = require('express-validator');


const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosPatch,
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de tener mas de 6 letras').not().isEmpty(),
    check('correo', 'escribe bien el correo').isEmail(),
    check('correo').custom (emailExiste),
    //check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom (esRoleValido),
    validarCampos
], usuariosPost);

router.put('/:id',[
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom (esRoleValido),
    validarCampos
],
 usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id',[
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
],
 usuariosDelete);



module.exports = router;



