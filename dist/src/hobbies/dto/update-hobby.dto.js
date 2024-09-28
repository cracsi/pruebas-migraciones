"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHobbyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hobby_dto_1 = require("./create-hobby.dto");
class UpdateHobbyDto extends (0, mapped_types_1.PartialType)(create_hobby_dto_1.CreateHobbieDto) {
}
exports.UpdateHobbyDto = UpdateHobbyDto;
//# sourceMappingURL=update-hobby.dto.js.map