import { Module } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ExternalController } from './external.controller';

@Module({
    controllers: [ExternalController],
    providers: [ExternalService],
})
export class ExternalModule {}
