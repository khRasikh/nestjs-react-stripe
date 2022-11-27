import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBController } from './mongodb.controller';
import { MongoDBService } from './mongodb.service';
import { Payment, PaymentSchema } from './payment.schema';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/payment`),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  controllers: [MongoDBController],
  providers: [MongoDBService],
})
export class MongoDBModule {}
