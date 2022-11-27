import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentRequestBody } from './types/PaymentRequestBody';
import { Response } from 'express';

@Controller('payments')
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
        console.log('payment done successfully');
        response.status(HttpStatus.CREATED).json(res);
      })
      .catch((err) => {
        console.log('payment not done');
        response.status(HttpStatus.BAD_REQUEST).json(err);
      });
  }
}
