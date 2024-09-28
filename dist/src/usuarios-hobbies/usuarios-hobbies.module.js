"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosHobbiesModule = void 0;
const common_1 = require("@nestjs/common");
const usuarios_hobbies_service_1 = require("./usuarios-hobbies.service");
const usuarios_hobbies_controller_1 = require("./usuarios-hobbies.controller");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const hobby_entity_1 = require("../hobbies/entities/hobby.entity");
let UsuariosHobbiesModule = class UsuariosHobbiesModule {
};
exports.UsuariosHobbiesModule = UsuariosHobbiesModule;
exports.UsuariosHobbiesModule = UsuariosHobbiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.UsuarioEntity, hobby_entity_1.HobbieEntity])],
        controllers: [usuarios_hobbies_controller_1.UsuariosHobbiesController],
        providers: [usuarios_hobbies_service_1.UsuariosHobbiesService],
    })
], UsuariosHobbiesModule);
//# sourceMappingURL=usuarios-hobbies.module.js.map