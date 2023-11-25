import { Injectable } from '@nestjs/common';
import { CreateExternalDto } from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';

@Injectable()
export class ExternalService {
    create(createExternalDto: CreateExternalDto) {
        return 'This action adds a new external';
    }

    findAll() {
        return `This action returns all external`;
    }

    findOne(id: number) {
        return `This action returns a #${id} external`;
    }

    update(id: number, updateExternalDto: UpdateExternalDto) {
        return `This action updates a #${id} external`;
    }

    remove(id: number) {
        return `This action removes a #${id} external`;
    }
    callBackZalo(query: any) {
        console.log(query);
        return query;
    }
}
