import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ default: 100 })
  id: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  info: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ default: new Date() })
  published_date: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
