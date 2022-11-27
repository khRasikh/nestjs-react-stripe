import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePayment } from './dto/createPayment.dto';
import { Payment, PaymentDocument } from './payment.schema';

@Injectable()
export class MongoDBService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentDto: CreatePayment): Promise<Payment> {
    const createdPayment = new this.paymentModel(createPaymentDto);
    return createdPayment.save();
  }

  async findAll(): Promise<Payment[]> {
    const result = this.paymentModel.find().exec();
    return result;
  }

  async findOne(id: string): Promise<Payment[]> {
    return this.paymentModel.findById(id);
  }

  async updateOne(id: string): Promise<Payment[]> {
    return this.paymentModel.findByIdAndUpdate(id);
  }
  async deleteOne(id: string): Promise<Payment[]> {
    return this.paymentModel.findByIdAndDelete(id);
  }
}
