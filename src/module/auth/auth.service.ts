import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserConstant } from 'src/common/constant/user.constant';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}
    saltOrRounds = 10;

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByUsername(username);
        if (!user) {
            throw new BadRequestException(UserConstant.NotFound);
        }

        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            throw new UnauthorizedException(UserConstant.InvalidPassword);
        }
        const payload = { sub: user.id, username: user.username };
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return {
            ...user,
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
