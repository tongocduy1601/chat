import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
    username: string;

    firstName?: string;

    middleName?: string;

    lastName?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    phone?: string;

    avatar?: string;

    password: string;
}
