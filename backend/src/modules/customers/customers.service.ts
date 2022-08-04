import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCustomersDto } from "./dto/create-customers.dto";
import { UpdateCustomersDto } from "./dto/update-customers.dto";
import { Customers } from "@entities/customers.entity";

@Injectable()
export class CustomersService{
    constructor(
        @InjectRepository(Customers)
        private customerRepository: Repository<Customers>
    ){}

    async create(createDto: CreateCustomersDto){
        const customer = new Customers()
        customer.name = createDto.name
        customer.email = createDto.email
        customer.address = createDto.address
        customer.phone = createDto.phone
        customer.group = createDto.group

        return await this.customerRepository.save(customer)
    }

    async findAll(){
        return  await this.customerRepository.find({
            order: {
                name: 'ASC'
            }
        })
    }

    async findOne(id: string){
        const customer = await this.customerRepository.findOneBy({
            id: id
        })

        if(!customer){
            throw new NotFoundException('customer not found')
        }

        return customer
    }

    async update(id: string, updateDto: UpdateCustomersDto){
        const customer = await this.findOne(id)
        customer.name = updateDto.name
        customer.email = updateDto.email
        customer.address = updateDto.address
        customer.phone = updateDto.phone

        return await this.customerRepository.save(customer)
    }
    async remove(id){
        const customer = await this.findOne(id)

        return await this.customerRepository.remove(customer)
    }
}