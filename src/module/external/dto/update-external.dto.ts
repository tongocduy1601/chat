import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalDto } from './create-external.dto';

export class UpdateExternalDto extends PartialType(CreateExternalDto) {}
