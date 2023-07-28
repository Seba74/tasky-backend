import { check } from 'express-validator';
import { validateResult } from '../helpers/validate.helper';
import { Request, Response, NextFunction } from "express";

export const loginValidator = [
    check('email', 'El Correo es requerido').not().isEmpty(),
    check('email', 'El Correo no es valido').isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const registerValidator = [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    check('lastname', 'El apellido es requerido').not().isEmpty(),
    check('lastname', 'El apellido debe tener al menos 3 caracteres').isLength({ min: 3 }),
    check('username', 'El nombre de usuario es requerido').not().isEmpty(),
    check('username', 'El nombre de usuario debe tener al menos 5 caracteres').isLength({ min: 5 }),
    check('username', 'El nombre de usuario no puede contener espacios ni caracteres especiales').matches(/^(?!.*tasky)(?!.*\s)[0-9a-zA-Z]+$/, "i"),
    check('email', 'El Correo es requerido').not().isEmpty(),
    check('email', 'El Correo no es valido').isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 8 caracteres').isLength({ min: 8 }),
    check('password', 'La contraseña debe tener al menos 1 digito, 1 minuscula, 1 mayuscula y 1 caracter especial').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, "i"),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];