import { PartialType } from '@nestjs/mapped-types';
import { CreateOvenDto } from './create-oven.dto';

export class UpdateOvenDto extends PartialType(CreateOvenDto) {}
