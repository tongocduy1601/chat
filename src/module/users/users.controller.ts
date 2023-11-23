import { Controller, Get } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('')
    async findAll(): Promise<User[]> {
        return this.usersService.findOne('john');
    }
}
