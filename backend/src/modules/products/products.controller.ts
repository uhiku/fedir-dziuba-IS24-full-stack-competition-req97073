import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  public getProducts() {
    return {};
  }

  @Get('/:id')
  public getProduct() {
    return {};
  }

  @Post()
  public addProduct() {
    return {};
  }

  @Put('/:id')
  public editProduct() {
    return {};
  }

  @Delete('/:id')
  public deleteProduct() {
    return {};
  }
}
