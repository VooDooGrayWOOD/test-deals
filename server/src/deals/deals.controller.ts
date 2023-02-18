import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { DealsService } from './dto/deals-service';
import { Deals } from './schemas/deals.schema';
import { createDealsDto } from './dto/create-deals.dto';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  getAll(): Promise<Deals[]> {
    return this.dealsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Deals> {
    return this.dealsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  //   @Header('X-Client-Id', '30878566')
  create(@Body() createDealsDto: createDealsDto): Promise<Deals> {
    return this.dealsService.create(createDealsDto);
  }
}
