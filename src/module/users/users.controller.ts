import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { User, UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/database/entities/user.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('')
    @UseGuards(AuthGuard)
    async findAll(): Promise<User[]> {
        return this.usersService.findOne('john');
    }

    @Post()
    async create(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.usersService.create(createUser);
    }
}
