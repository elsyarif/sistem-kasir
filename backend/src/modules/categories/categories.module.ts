import { Categories } from '@entities/categories.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([Categories])],
    exports: [TypeOrmModule],
    providers: [CategoriesService],
    controllers: []
})
export class CategoriesModule {}
