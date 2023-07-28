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
exports.PriorityRepository = void 0;
const priority_1 = require("../../models/priority");
class PriorityRepository {
    getPriorityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const priority = yield priority_1.PriorityModel.findById(id);
            return priority;
        });
    }
    getPriorityByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const priority = yield priority_1.PriorityModel.findOne({ name });
            return priority;
        });
    }
    getPriorityByLevel(level) {
        return __awaiter(this, void 0, void 0, function* () {
            const priority = yield priority_1.PriorityModel.findOne({ level });
            return priority;
        });
    }
    getPriorities() {
        return __awaiter(this, void 0, void 0, function* () {
            const priorities = yield priority_1.PriorityModel.find();
            return priorities;
        });
    }
    createPriority(priorityDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const priority = yield priority_1.PriorityModel.create(priorityDto);
            return priority;
        });
    }
    updatePriority(id, priorityDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const priorityUpdated = yield priority_1.PriorityModel.findByIdAndUpdate(id, priorityDto, { new: true });
            return priorityUpdated;
        });
    }
    deletePriority(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const priorityDeleted = yield priority_1.PriorityModel.findByIdAndDelete(id);
            return priorityDeleted;
        });
    }
    priorityIdExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const priority = yield priority_1.PriorityModel.findById(id);
            if (priority) {
                return true;
            }
            return false;
        });
    }
    priorityExists(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const priority = yield priority_1.PriorityModel.findOne({ name });
            if (priority) {
                return true;
            }
            return false;
        });
    }
}
exports.PriorityRepository = PriorityRepository;
