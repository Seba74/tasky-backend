"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_helper_1 = require("../helpers/validate.helper");
exports.loginValidator = [
    (0, express_validator_1.check)('email', 'El Correo es requerido').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El Correo no es valido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es requerida').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.registerValidator = [
    (0, express_validator_1.check)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.check)('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (0, express_validator_1.check)('lastname', 'El apellido es requerido').not().isEmpty(),
    (0, express_validator_1.check)('lastname', 'El apellido debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (0, express_validator_1.check)('username', 'El nombre de usuario es requerido').not().isEmpty(),
    (0, express_validator_1.check)('username', 'El nombre de usuario debe tener al menos 5 caracteres').isLength({ min: 5 }),
    (0, express_validator_1.check)('username', 'El nombre de usuario no puede contener espacios ni caracteres especiales').matches(/^(?!.*tasky)(?!.*\s)[0-9a-zA-Z]+$/, "i"),
    (0, express_validator_1.check)('email', 'El Correo es requerido').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El Correo no es valido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es requerida').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña debe tener al menos 8 caracteres').isLength({ min: 8 }),
    (0, express_validator_1.check)('password', 'La contraseña debe tener al menos 1 digito, 1 minuscula, 1 mayuscula y 1 caracter especial').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, "i"),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
