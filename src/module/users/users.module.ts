import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    providers: [UsersService, UsersController],
    exports: [UsersService],
})
export class UsersModule {}
