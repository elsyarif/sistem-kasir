import { Suppliers } from '@entities/suppliers.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';

@Module({
    imports: [TypeOrmModule.forFeature([Suppliers])],
    exports: [TypeOrmModule],
    providers: [SuppliersService],
    controllers: [SupplierController]
})
export class SuppliersModule {}
