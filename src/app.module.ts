import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { UsersController } from './module/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/typeorm';
import { ExternalModule } from './module/external/external.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        UsersModule,
        ExternalModule,
        AuthModule,
    ],
    controllers: [AppController, UsersController],
    providers: [AppService],
})
export class AppModule {}
