import { Customers } from '@entities/customers.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Customers])],
    exports: [TypeOrmModule],
    providers: [],
    controllers: []
})
export class CustomersModule {}
