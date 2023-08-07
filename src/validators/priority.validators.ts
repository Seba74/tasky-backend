import { check } from 'express-validator';
import { validateResult } from '../helpers/validate.helper';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export const createPriorityValidator: RequestHandler[] = [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    check('level', 'El nivel es requerido').not().isEmpty(),
    check('level', 'El nivel debe ser un numero').isNumeric(),
    check('color', 'El color es requerido').not().isEmpty(),
    check('color', 'El color debe tener al menos 3 caracteres').isLength({ min: 3 }),
    check('color_code', 'El codigo de color es requerido').not().isEmpty(),
    check('color_code', 'El codigo de color debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const getPriorityByNameValidator = [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const getPriorityByIdValidator = [
    check('id', 'El id es requerido').not().isEmpty(),
];

export const getPriorityByLevelValidator = [
    check('level', 'El nivel es requerido').not().isEmpty(),
];

export const updatePriorityValidator = [
    check('id', 'El id es requerido').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];