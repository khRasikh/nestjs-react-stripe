import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentRequestBody } from './types/PaymentRequestBody';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('payments')
@ApiTags('Payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Post()
  createPayments(
    @Res() response: Response,
    @Body() paymentRequestBody: PaymentRequestBody,
  ) {
    this.paymentService
      .createPayment(paymentRequestBody)
      .then((res) => {
        Logger.log('payment done successfully');
        response.status(HttpStatus.CREATED).json(res);
      })
      .catch((err) => {
        Logger.log('payment not done');
        response.status(HttpStatus.BAD_REQUEST).json(err);
      });
  }
}
