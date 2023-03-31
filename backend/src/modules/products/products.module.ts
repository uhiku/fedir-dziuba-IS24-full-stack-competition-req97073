import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { ProductGeneratorService } from 'src/core';

@Module({
  providers: [ProductService, ProductGeneratorService],
  controllers: [ProductController],
})
export class ProductModule {}
