"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTasksByDateValidator = exports.updateTaskValidator = exports.getTasksByUserValidator = exports.getTaskByIdValidator = exports.createTaskValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_helper_1 = require("../helpers/validate.helper");
exports.createTaskValidator = [
    (0, express_validator_1.check)('title', 'El titulo es requerido').not().isEmpty(),
    (0, express_validator_1.check)('title', 'El titulo debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (0, express_validator_1.check)('deadline', 'La fecha limite es requerida').not().isEmpty(),
    (0, express_validator_1.check)('idDate', 'El ID de fecha es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPriority', 'El ID de prioridad es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idUser', 'El ID de usuario es obligatorio').not().isEmpty(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.getTaskByIdValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').not().isEmpty(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.getTasksByUserValidator = [
    (0, express_validator_1.check)('idUser', 'El id es requerido').not().isEmpty(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.updateTaskValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').not().isEmpty(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.getUserTasksByDateValidator = [
    (0, express_validator_1.check)('idUser', 'El id es requerido').not().isEmpty(),
    (0, express_validator_1.check)('idDate', 'El id es requerido').not().isEmpty(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
