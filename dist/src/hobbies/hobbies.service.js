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
exports.HobbiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hobby_entity_1 = require("./entities/hobby.entity");
const typeorm_2 = require("typeorm");
let HobbiesService = class HobbiesService {
    constructor(hobbieRepository) {
        this.hobbieRepository = hobbieRepository;
    }
    async findAll() {
        return await this.hobbieRepository.find({ relations: ["usuarios"] });
    }
    async findOne(id) {
        const hobbie = await this.hobbieRepository.findOne({ where: { id }, relations: ["usuarios"] });
        return hobbie;
    }
    async create(hobbie) {
        return await this.hobbieRepository.save(hobbie);
    }
    async update(id, hobbie) {
        const persistedHobbie = await this.hobbieRepository.findOne({ where: { id } });
        return await this.hobbieRepository.save({ ...persistedHobbie, ...hobbie });
    }
    async delete(id) {
        const hobbie = await this.hobbieRepository.findOne({ where: { id } });
        await this.hobbieRepository.remove(hobbie);
    }
};
exports.HobbiesService = HobbiesService;
exports.HobbiesService = HobbiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hobby_entity_1.HobbieEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HobbiesService);
//# sourceMappingURL=hobbies.service.js.map