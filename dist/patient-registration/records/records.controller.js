"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsController = void 0;
const common_1 = require("@nestjs/common");
const records_service_1 = require("./records.service");
const create_record_dto_1 = require("./dto/create-record.dto");
let RecordsController = class RecordsController {
    constructor(recordsService) {
        this.recordsService = recordsService;
    }
    create(createRecordDto) {
        return this.recordsService.create(createRecordDto);
    }
    findAll() {
        return this.recordsService.findAll();
    }
    findOne(id) {
        return this.recordsService.findOne(+id);
    }
    update(id, createRecordDto) {
        return this.recordsService.update(+id, createRecordDto);
    }
    updateRecordForPatient(patientId, recordId, createRecordDto) {
        return this.recordsService.updateRecordForPatient(+patientId, +recordId, createRecordDto);
    }
    remove(id) {
        return this.recordsService.remove(+id);
    }
};
exports.RecordsController = RecordsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('patient/:patientId/record/:recordId'),
    __param(0, (0, common_1.Param)('patientId')),
    __param(1, (0, common_1.Param)('recordId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "updateRecordForPatient", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "remove", null);
exports.RecordsController = RecordsController = __decorate([
    (0, common_1.Controller)('records'),
    __metadata("design:paramtypes", [records_service_1.RecordsService])
], RecordsController);
//# sourceMappingURL=records.controller.js.map