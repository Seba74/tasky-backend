"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_auth_1 = require("../middleware/token.auth");
const isAdmin_1 = require("../middleware/isAdmin");
const priority_controller_1 = require("../controllers/priority.controller");
const priority_validators_1 = require("../validators/priority.validators");
const router = (0, express_1.Router)();
const priorityController = new priority_controller_1.PriorityController();
// Create Priority
router.post("/", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, priority_validators_1.createPriorityValidator, priorityController.createPriority.bind(priorityController));
// Get Priorities
router.get("/", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, priorityController.getPriorities.bind(priorityController));
// Get Priority by Id
router.get("/:id", token_auth_1.tokenAuthMiddleware, priority_validators_1.getPriorityByIdValidator, priorityController.getPriorityById.bind(priorityController));
// Get Priority by Name
router.get("/name/:name", token_auth_1.tokenAuthMiddleware, priority_validators_1.getPriorityByNameValidator, priorityController.getPriorityByName.bind(priorityController));
// Get Priority by Level
router.get("/level/:level", token_auth_1.tokenAuthMiddleware, priority_validators_1.getPriorityByLevelValidator, priorityController.getPriorityByLevel.bind(priorityController));
// Update Priority
router.put("/:id", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, priority_validators_1.updatePriorityValidator, priorityController.updatePriority.bind(priorityController));
// Delete Priority
router.delete("/:id", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, priority_validators_1.getPriorityByIdValidator, priorityController.deletePriority.bind(priorityController));
exports.default = router;
