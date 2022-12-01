import { ApiProperty } from '@nestjs/swagger';

export class CreatePayment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  product: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  date: string;
}
