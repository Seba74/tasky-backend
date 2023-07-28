import { check } from 'express-validator';
import { validateResult } from '../helpers/validate.helper';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export const roleValidator: RequestHandler[] = [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];