import { check } from 'express-validator';
import { validateResult } from '../helpers/validate.helper';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export const createTaskValidator: RequestHandler[] = [
    check('title', 'El titulo es requerido').not().isEmpty(),
    check('title', 'El titulo debe tener al menos 3 caracteres').isLength({ min: 3 }),
    check('deadline', 'La fecha limite es requerida').not().isEmpty(),
    check('idDate', 'El ID de fecha es obligatorio').not().isEmpty(),
    check('idPriority', 'El ID de prioridad es obligatorio').not().isEmpty(),
    check('idUser', 'El ID de usuario es obligatorio').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const getTaskByIdValidator = [
    check('id', 'El id es requerido').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const getTasksByUserValidator = [
    check('idUser', 'El id es requerido').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const updateTaskValidator = [
    check('id', 'El id es requerido').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export const getUserTasksByDateValidator = [
    check('idUser', 'El id es requerido').not().isEmpty(),
    check('idDate', 'El id es requerido').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
]