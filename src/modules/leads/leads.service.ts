import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  private leads = [];
  constructor(private prisma: PrismaService) {}

  create(data: CreateLeadDto) {
    return this.prisma.lead.create({
      data: {
        ...data,
        purchased: false,
      },
    });
  }

  findAll() {
    return this.prisma.lead.findMany();
  }

  // findNotPurchased() {
  //   return this.prisma.lead.findMany({
  //     where: {
  //       purchased: false,
  //     },
  //   });
  // }
}
