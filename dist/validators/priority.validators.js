"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePriorityValidator = exports.getPriorityByLevelValidator = exports.getPriorityByIdValidator = exports.getPriorityByNameValidator = exports.createPriorityValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_helper_1 = require("../helpers/validate.helper");
exports.createPriorityValidator = [
    (0, express_validator_1.check)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.check)('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (0, express_validator_1.check)('level', 'El nivel es requerido').not().isEmpty(),
    (0, express_validator_1.check)('level', 'El nivel debe ser un numero').isNumeric(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.getPriorityByNameValidator = [
    (0, express_validator_1.check)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.check)('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
exports.getPriorityByIdValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').not().isEmpty(),
];
exports.getPriorityByLevelValidator = [
    (0, express_validator_1.check)('level', 'El nivel es requerido').not().isEmpty(),
];
exports.updatePriorityValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').not().isEmpty(),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
