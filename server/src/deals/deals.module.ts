import { Module } from '@nestjs/common';
import { DealsService } from './dto/deals-service';
import { MongooseModule } from '@nestjs/mongoose';
import { DealsController } from './deals.controller';
import { Deals, DealsSchema } from './schemas/deals.schema';

@Module({
  providers: [DealsService],
  controllers: [DealsController],
  imports: [
    MongooseModule.forFeature([{ name: Deals.name, schema: DealsSchema }]),
  ],
})
export class DealsModule {}
