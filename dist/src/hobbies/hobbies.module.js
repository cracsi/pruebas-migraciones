"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbiesModule = void 0;
const common_1 = require("@nestjs/common");
const hobbies_service_1 = require("./hobbies.service");
const hobbies_controller_1 = require("./hobbies.controller");
const hobby_entity_1 = require("./entities/hobby.entity");
const typeorm_1 = require("@nestjs/typeorm");
let HobbiesModule = class HobbiesModule {
};
exports.HobbiesModule = HobbiesModule;
exports.HobbiesModule = HobbiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hobby_entity_1.HobbieEntity])],
        controllers: [hobbies_controller_1.HobbiesController],
        providers: [hobbies_service_1.HobbiesService],
    })
], HobbiesModule);
//# sourceMappingURL=hobbies.module.js.map