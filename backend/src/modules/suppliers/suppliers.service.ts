import { Suppliers } from "@entities/suppliers.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSupplierDto } from "./dto/create-suppliers.dto";
import { UpdateSupplierDto } from "./dto/update-suppliers.dto";

@Injectable()
export class SuppliersService{
    constructor(
        @InjectRepository(Suppliers)
        private supplierRepository: Repository<Suppliers>
    ){}

    async create(createDto: CreateSupplierDto){
        const supplier = new Suppliers()
        supplier.name = createDto.name
        supplier.email = createDto.email
        supplier.address = createDto.address
        supplier.phone = createDto.phone
        supplier.group = createDto.group

        return await this.supplierRepository.save(supplier)
    }

    async findAll(){
        return  await this.supplierRepository.find({
            order: {
                name: 'ASC'
            }
        })
    }

    async findOne(id: string){
        const supplier = await this.supplierRepository.findOneBy({
            id: id
        })

        if(!supplier){
            throw new NotFoundException('supplier not found')
        }

        return supplier
    }

    async update(id: string, updateDto: UpdateSupplierDto){
        const supplier = await this.findOne(id)
        supplier.name = updateDto.name
        supplier.email = updateDto.email
        supplier.address = updateDto.address
        supplier.phone = updateDto.phone

        return await this.supplierRepository.save(supplier)
    }
    async remove(id){
        const supplier = await this.findOne(id)

        return await this.supplierRepository.remove(supplier)
    }
}