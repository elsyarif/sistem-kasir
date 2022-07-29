import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateRoleDto } from "./dto/create-role.dto"
import { UpdateRoleDto } from "./dto/update-role.dto"
import { Roles } from "@entities/roles.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

@Injectable()
export class RolesService {
	constructor(
		@InjectRepository(Roles)
		private roleRepository: Repository<Roles>
	) {}
	async create(createRoleDto: CreateRoleDto) {
		const role = new Roles()
		role.name = createRoleDto.name
		role.description = createRoleDto.description

		return await this.roleRepository.save(role)
	}

	async findAll() {
		return await this.roleRepository.find()
	}

	async findOne(id: string) {
		const role = await this.roleRepository.findOneBy({
			id: id
		})

		if (!role) {
			throw new NotFoundException()
		}

		return role
	}

	async update(id: string, updateRoleDto: UpdateRoleDto) {
		const role = await this.findOne(id)
		role.name = updateRoleDto.name
		role.description = updateRoleDto.description
		role.updated_at = new Date()

		return await this.roleRepository.save(role)
	}

	async remove(id: string) {
		const role = await this.findOne(id)

		return await this.roleRepository.remove(role)
	}
}
