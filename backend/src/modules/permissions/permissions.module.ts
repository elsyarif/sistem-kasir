import { Permissions } from '@entities/permissions.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';

@Module({
    imports: [TypeOrmModule.forFeature([Permissions])],
    exports: [TypeOrmModule],
    providers: [PermissionsService],
    controllers: [PermissionsController]
})
export class PermissionsModule {}
