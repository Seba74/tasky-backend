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
exports.PriorityService = void 0;
const priority_repository_1 = require("../repositories/implementation/priority.repository");
class PriorityService {
    constructor() {
        this.priorityRepository = new priority_repository_1.PriorityRepository();
    }
    getPriorityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priority = yield this.priorityRepository.getPriorityById(id);
                if (!priority)
                    throw new Error("priority not found");
                const priorityResponse = {
                    ok: true,
                    message: "priority found",
                    data: priority,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getPriorityByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priority = yield this.priorityRepository.getPriorityByName(name);
                if (!priority)
                    throw new Error("priority not found");
                const priorityResponse = {
                    ok: true,
                    message: "priority found",
                    data: priority,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getPriorityByLevel(level) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priority = yield this.priorityRepository.getPriorityByLevel(level);
                if (!priority)
                    throw new Error("priority not found");
                const priorityResponse = {
                    ok: true,
                    message: "priority found",
                    data: priority,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getPriorities() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priorities = yield this.priorityRepository.getPriorities();
                const priorityResponse = {
                    ok: true,
                    message: "priorities found",
                    data: priorities,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createPriority(priority) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priorityExists = yield this.priorityRepository.priorityExists(priority.name);
                if (priorityExists)
                    throw new Error("priority already exists");
                const newpriority = yield this.priorityRepository.createPriority(priority);
                const priorityResponse = {
                    ok: true,
                    message: "priority created",
                    data: newpriority,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updatePriority(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualPriority = yield this.priorityRepository.getPriorityById(id);
                if (!actualPriority)
                    throw new Error("priority not found");
                const priorityToUpdate = {
                    name: data.name || actualPriority.name,
                    level: data.level || actualPriority.level,
                    color: data.color || actualPriority.color,
                    color_code: data.color_code || actualPriority.color_code,
                };
                const updatedPriority = yield this.priorityRepository.updatePriority(id, priorityToUpdate);
                const priorityResponse = {
                    ok: true,
                    message: "priority updated",
                    data: updatedPriority,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deletePriority(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const priorityExists = yield this.priorityRepository.priorityIdExists(id);
                if (!priorityExists)
                    throw new Error("priority not found");
                const deletedPriority = yield this.priorityRepository.deletePriority(id);
                const priorityResponse = {
                    ok: true,
                    message: "priority deleted",
                    data: deletedPriority,
                };
                return priorityResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.PriorityService = PriorityService;
