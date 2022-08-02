import { Categories } from "@entities/categories.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {UpdateCategoriesDto} from "./dto/update-categories.dto"
import { CreateCategoriesDto } from "./dto/create-categories.dto";

@Injectable()
export class CategoriesService{
    constructor(
        @InjectRepository(Categories)
        private categoriesRepositor: Repository<Categories>
    ){}

    //TODO: create a category and save image to public dir
    async create(createDto: CreateCategoriesDto){}

    async findAll(){}

    async findOne(id: string){}

    async update(id: string, updateDto: UpdateCategoriesDto){}

    async remove(id: string){}
}