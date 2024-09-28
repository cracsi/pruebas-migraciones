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
exports.UsuariosHobbiesService = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const typeorm_1 = require("@nestjs/typeorm");
const hobby_entity_1 = require("../hobbies/entities/hobby.entity");
const typeorm_2 = require("typeorm");
let UsuariosHobbiesService = class UsuariosHobbiesService {
    constructor(usuarioRepository, hobbieRepository) {
        this.usuarioRepository = usuarioRepository;
        this.hobbieRepository = hobbieRepository;
    }
    async addHobbie(usuarioId, hobbieId) {
        const hobbie = await this.hobbieRepository.findOne({ where: { id: hobbieId }, relations: ["usuarios"] });
        const usuario = await this.usuarioRepository.findOne({ where: { id: usuarioId }, relations: ["hobbies"] });
        usuario.hobbies = [...usuario.hobbies, hobbie];
        hobbie.usuarios = [...hobbie.usuarios, usuario];
        return [await this.usuarioRepository.save(usuario), await this.hobbieRepository.save(hobbie)];
    }
    async deleteHobbie(usuarioId, hobbieId) {
        const hobbie = await this.hobbieRepository.findOne({ where: { id: hobbieId }, relations: ["usuarios"] });
        const usuario = await this.usuarioRepository.findOne({ where: { id: usuarioId }, relations: ["hobbies"] });
        const hobbiee = usuario.hobbies.find(e => e.id === hobbie.id);
        const usuarioo = hobbie.usuarios.find(e => e.id === usuario.id);
        usuario.hobbies = usuario.hobbies.filter(e => e.id !== hobbieId);
        hobbie.usuarios = hobbie.usuarios.filter(e => e.id !== usuarioId);
        return [await this.usuarioRepository.save(usuario), await this.hobbieRepository.save(hobbie)];
    }
};
exports.UsuariosHobbiesService = UsuariosHobbiesService;
exports.UsuariosHobbiesService = UsuariosHobbiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(hobby_entity_1.HobbieEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsuariosHobbiesService);
//# sourceMappingURL=usuarios-hobbies.service.js.map