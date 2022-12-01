import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import {
  ApiExtraModels,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

@Controller('product')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly product: ProductService) {}

  @Post()
  @ApiExtraModels(CreateProductDto)
  async createTask(@Body() createData: CreateProductDto) {
    return this.product.create(createData);
  }

  @Get()
  @ApiResponse({
    schema: {
      $ref: getSchemaPath(CreateProductDto),
    },
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: { type: 'number', enum: [HttpStatus.NOT_FOUND] },
      },
    },
    status: HttpStatus.NOT_FOUND,
  })
  getAll(): Promise<Product[]> {
    return this.product.findAll();
  }

  @Get(':id')
  @ApiResponse({
    schema: {
      $ref: getSchemaPath(CreateProductDto),
    },
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: { type: 'number', enum: [HttpStatus.NOT_FOUND] },
      },
    },
    status: HttpStatus.NOT_FOUND,
  })
  getSingle(@Param('id') id: string): Promise<Product[]> {
    return this.product.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    schema: {
      $ref: getSchemaPath(CreateProductDto),
    },
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: { type: 'number', enum: [HttpStatus.NOT_FOUND] },
      },
    },
    status: HttpStatus.NOT_FOUND,
  })
  updateSingle(@Param('id') id: string): Promise<Product[]> {
    return this.product.updateOne(id);
  }

  @Delete(':id')
  @ApiResponse({
    schema: {
      $ref: getSchemaPath(CreateProductDto),
    },
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: { type: 'number', enum: [HttpStatus.NOT_FOUND] },
      },
    },
    status: HttpStatus.NOT_FOUND,
  })
  deleteSingle(@Param('id') id: string): Promise<Product[]> {
    return this.product.deleteOne(id);
  }
}
