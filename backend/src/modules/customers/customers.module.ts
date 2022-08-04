import { Customers } from '@entities/customers.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';

@Module({
    imports: [TypeOrmModule.forFeature([Customers])],
    exports: [TypeOrmModule],
    providers: [CustomersService],
    controllers: []
})
export class CustomersModule {}
