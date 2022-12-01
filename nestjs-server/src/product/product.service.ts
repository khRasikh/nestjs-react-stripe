import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    const result = this.productModel.find().exec();
    return result;
  }

  async findOne(id: string): Promise<Product[]> {
    return this.productModel.findById(id);
  }

  async updateOne(id: string): Promise<Product[]> {
    return this.productModel.findByIdAndUpdate(id);
  }
  async deleteOne(id: string): Promise<Product[]> {
    return this.productModel.findByIdAndDelete(id);
  }
}
