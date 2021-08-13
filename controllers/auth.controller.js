const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario.model');
const { generarJWT } = require('../helpers/jwt');

const login = async( req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuarioDB = await Usuario.findOne( {email} );

        //Verificar Email
        if( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            })
        }

        //Verificar Contraseña
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );

        if ( !validPassword ){
            res.status(400).json({
                ok: false,
                msg: 'Contraseña invalida'
            })
        }

        //Generar el token JWT
        const token = await generarJWT( usuarioDB.id );
        

        res.json({
            ok: true,
            token
        })

    }catch ( error ) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}






module.exports = {
    login,
}