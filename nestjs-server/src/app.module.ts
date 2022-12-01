import { Module } from '@nestjs/common';
import { MongoDBModule } from './mongodb/mongodb.module';
import { PaymentsModule } from './payments/payments.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    PaymentsModule,
    MongoDBModule,
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
