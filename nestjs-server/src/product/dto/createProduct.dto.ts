import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  info: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  currency: string;
  published_date: string;
}
