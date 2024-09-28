"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const hobby_entity_1 = require("../../hobbies/entities/hobby.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [usuario_entity_1.UsuarioEntity, hobby_entity_1.HobbieEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),
    typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.UsuarioEntity, hobby_entity_1.HobbieEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=typeorm-testing-config.js.map