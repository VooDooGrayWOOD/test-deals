import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealsModule } from './deals/deals.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DealsModule,
    MongooseModule.forRoot(
      `mongodb+srv://voodoo:god2356less@cluster0.r8mcomi.mongodb.net/products?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
