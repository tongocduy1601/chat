import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/database/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserConstant } from 'src/common/constant/user.constant';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
export type User = any;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}
    saltOrRounds = 10;
    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.find({
            where: { username: username },
        });
    }

    async create(createUser: CreateUserDto): Promise<UserEntity> {
        const userAlreadyExists = await this.userRepository
            .createQueryBuilder('user')
            .where('user.username = :username', {
                username: createUser.username,
            })
            .orWhere('user.email = :email', { email: createUser.email })
            .orWhere('user.phone = :phone', { phone: createUser.phone })
            .getOne();
        if (
            userAlreadyExists &&
            userAlreadyExists.username === createUser.username
        ) {
            throw new BadRequestException(UserConstant.AlreadyExist);
        }
        if (userAlreadyExists && userAlreadyExists.email === createUser.email) {
            throw new BadRequestException(UserConstant.EmailAlreadyExist);
        }
        if (userAlreadyExists && userAlreadyExists.phone === createUser.phone) {
            throw new BadRequestException(UserConstant.PhoneAlreadyExist);
        }
        const user = Object.assign(new UserEntity(), createUser);
        user.password = await bcrypt.hash(user.password, this.saltOrRounds);
        return this.userRepository.save(user);
    }

    async findByUsername(username: string): Promise<UserEntity> {
        return this.userRepository.findOne({
            where: { username: username },
        });
    }

    async update(updateUser: UpdateUserDto): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { id: updateUser.id },
        });
        if (!user) {
            throw new BadRequestException(UserConstant.NotFound);
        }
        if (updateUser.password) {
            updateUser.password = await bcrypt.hash(
                updateUser.password,
                this.saltOrRounds,
            );
        }
        return this.userRepository.save({ ...user, ...updateUser });
    }
}
