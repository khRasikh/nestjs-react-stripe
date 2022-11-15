import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('stripe/checkout')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createOrder() {
    return this.appService.orderPayment();
  }
}
