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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbieEntity = void 0;
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let HobbieEntity = class HobbieEntity {
};
exports.HobbieEntity = HobbieEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HobbieEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HobbieEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HobbieEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_entity_1.UsuarioEntity, (usuario) => usuario.hobbies),
    __metadata("design:type", Array)
], HobbieEntity.prototype, "usuarios", void 0);
exports.HobbieEntity = HobbieEntity = __decorate([
    (0, typeorm_1.Entity)()
], HobbieEntity);
//# sourceMappingURL=hobby.entity.js.map