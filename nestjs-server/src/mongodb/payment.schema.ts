import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop({ default: 100 })
  id: number;

  @Prop({ required: true })
  product: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ default: new Date() })
  date: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
