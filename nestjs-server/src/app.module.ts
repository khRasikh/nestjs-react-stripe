import { Module } from '@nestjs/common';
import { MongoDBModule } from './mongodb/mongodb.module';
import { PaymentsModule } from './payments/payments.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PaymentsModule,
    MongoDBModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
