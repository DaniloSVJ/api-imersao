import { Controller, Post, Body, Get } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() data: CreateLeadDto) {
    return this.leadsService.create(data);
  }

  @Get()
  findAll() {
    return this.leadsService.findAll();
  }

  // @Get('not-purchased')
  // findNotPurchased() {
  //   return this.leadsService.findNotPurchased();
  // }
}
