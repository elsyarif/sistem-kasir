import { Permissions } from "@entities/permissions.entity";
import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePermissionsDto } from "./dto/create-permissions.dto";
import { UpdatePermissionsDto } from "./dto/update-permissions.dto";

@Injectable()
export class PermissionsService{
    private readonly logger = new Logger(PermissionsService.name)

    constructor(
        @InjectRepository(Permissions)
        private repository: Repository<Permissions>
    ){}

    async create(createDto: CreatePermissionsDto){
        const permission = new Permissions()
        permission.name = createDto.name
        permission.description = createDto.description

        return await this.repository.save(permission)
    }

    async findAll(){
        return await this.repository.find()
    }

    async findOne(id: string){
        const permission = await this.repository.findOneBy({
            id: id
        })

        if(!permission){
            throw new NotFoundException('permisssions not found')
        }

        return permission
    }

    async update(id: string, updateDto: UpdatePermissionsDto){
        const permission = await this.findOne(id)
        permission.name = updateDto.name
        permission.description = updateDto.description
        permission.update_at = new Date()
        
        return await this.repository.save(permission)
    }

    async remove(id: string){
        const permission = await this.findOne(id)

        return await this.repository.remove(permission)
    }
}