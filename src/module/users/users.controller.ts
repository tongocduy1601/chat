import { Controller, Get, Post, Body } from '@nestjs/common';
import { User, UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/database/entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('')
    async findAll(): Promise<User[]> {
        return this.usersService.findOne('john');
    }

    @Post()
    async create(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.usersService.create(createUser);
    }
}
