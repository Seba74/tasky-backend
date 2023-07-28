"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_helper_1 = require("../helpers/validate.helper");
exports.roleValidator = [
    (0, express_validator_1.check)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.check)('name', 'El nombre debe tener al menos 3 caracteres').isLength({ min: 3 }),
    (req, res, next) => (0, validate_helper_1.validateResult)(req, res, next)
];
