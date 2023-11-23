import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { UsersController } from './module/users/users.controller';

@Module({
    imports: [UsersModule],
    controllers: [AppController, UsersController],
    providers: [AppService],
})
export class AppModule {}
