import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { LeadsModule } from './modules/leads/leads.module';
@Module({
  imports: [DatabaseModule, LeadsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
