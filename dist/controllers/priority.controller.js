"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityController = void 0;
const priority_service_1 = require("../services/priority.service");
class PriorityController {
    constructor() {
        this.priorityService = new priority_service_1.PriorityService();
    }
    getPriorityById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const priorityResponse = yield this.priorityService.getPriorityById(id);
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getPriorityByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const priorityResponse = yield this.priorityService.getPriorityByName(name);
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getPriorityByLevel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { level } = req.params;
                const priorityResponse = yield this.priorityService.getPriorityByLevel(parseInt(level));
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getPriorities(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priorityResponse = yield this.priorityService.getPriorities();
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    createPriority(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, level } = req.body;
                const newPriority = { name, level };
                const priorityResponse = yield this.priorityService.createPriority(newPriority);
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    updatePriority(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = req.body;
                const priorityResponse = yield this.priorityService.updatePriority(id, data);
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    deletePriority(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const priorityResponse = yield this.priorityService.deletePriority(id);
                return res.status(200).json(priorityResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
}
exports.PriorityController = PriorityController;
