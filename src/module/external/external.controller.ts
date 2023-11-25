import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import { ExternalService } from './external.service';
import { CreateExternalDto } from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';

@Controller('external')
export class ExternalController {
    constructor(private readonly externalService: ExternalService) {}

    @Post()
    create(@Body() createExternalDto: CreateExternalDto) {
        return this.externalService.create(createExternalDto);
    }

    @Get()
    findAll() {
        return this.externalService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.externalService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateExternalDto: UpdateExternalDto,
    ) {
        return this.externalService.update(+id, updateExternalDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.externalService.remove(+id);
    }

    @Get('call-back/zalo')
    callBackZalo(@Query('query') query: any) {
        return this.externalService.callBackZalo(query);
    }
}
