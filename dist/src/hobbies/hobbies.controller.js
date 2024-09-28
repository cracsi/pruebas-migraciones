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
exports.HobbiesController = void 0;
const common_1 = require("@nestjs/common");
const hobbies_service_1 = require("./hobbies.service");
const create_hobby_dto_1 = require("./dto/create-hobby.dto");
const class_transformer_1 = require("class-transformer");
const hobby_entity_1 = require("./entities/hobby.entity");
let HobbiesController = class HobbiesController {
    constructor(hobbiesService) {
        this.hobbiesService = hobbiesService;
    }
    async findAll() {
        return await this.hobbiesService.findAll();
    }
    async findOne(hobbieId) {
        return await this.hobbiesService.findOne(hobbieId);
    }
    async create(hobbieDto) {
        const hobbie = (0, class_transformer_1.plainToInstance)(hobby_entity_1.HobbieEntity, hobbieDto);
        return await this.hobbiesService.create(hobbie);
    }
    async update(hobbieId, hobbieDto) {
        const hobbie = (0, class_transformer_1.plainToInstance)(hobby_entity_1.HobbieEntity, hobbieDto);
        return await this.hobbiesService.update(hobbieId, hobbie);
    }
    async delete(hobbieId) {
        return await this.hobbiesService.delete(hobbieId);
    }
};
exports.HobbiesController = HobbiesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':hobbieId'),
    __param(0, (0, common_1.Param)('hobbieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hobby_dto_1.CreateHobbieDto]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':hobbieId'),
    __param(0, (0, common_1.Param)('hobbieId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_hobby_dto_1.CreateHobbieDto]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':hobbieId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('hobbieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HobbiesController.prototype, "delete", null);
exports.HobbiesController = HobbiesController = __decorate([
    (0, common_1.Controller)('hobbies'),
    __metadata("design:paramtypes", [hobbies_service_1.HobbiesService])
], HobbiesController);
//# sourceMappingURL=hobbies.controller.js.map