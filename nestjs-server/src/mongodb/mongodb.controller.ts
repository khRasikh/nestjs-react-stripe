import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePayment } from './dto/createPayment.dto';
import { MongoDBService } from './mongodb.service';
import { Payment } from './payment.schema';

@Controller('mongodb')
export class MongoDBController {
  constructor(private readonly mongoDB: MongoDBService) {}

  @Post()
  async createTask(@Body() createData: CreatePayment) {
    return this.mongoDB.create(createData);
  }

  @Get()
  getAll(): Promise<Payment[]> {
    return this.mongoDB.findAll();
  }

  @Get(':id')
  getSingle(@Param('id') id: string): Promise<Payment[]> {
    return this.mongoDB.findOne(id);
  }

  @Put(':id')
  updateSingle(@Param('id') id: string): Promise<Payment[]> {
    return this.mongoDB.updateOne(id);
  }

  @Delete(':id')
  deleteSingle(@Param('id') id: string): Promise<Payment[]> {
    return this.mongoDB.deleteOne(id);
  }
}
