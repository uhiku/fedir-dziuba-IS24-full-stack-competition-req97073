import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto, ProductIdParamDto } from './products.validation';

@Controller('products')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}
  @Get()
  public getProducts() {
    return this._productService.getProducts();
  }

  @Get('/:id')
  public getProduct(@Param() param: ProductIdParamDto) {
    return this._productService.getProduct(param.id);
  }

  @Post()
  public addProduct(@Body() payload: ProductDto) {
    return this._productService.addProduct(payload);
  }

  @Put('/:id')
  public editProduct(
    @Param() param: ProductIdParamDto,
    @Body() payload: ProductDto,
  ) {
    return this._productService.editProduct(param.id, payload);
  }

  @Delete('/:id')
  public deleteProduct(@Param() param: ProductIdParamDto) {
    this._productService.deleteProduct(param.id);
    return {
      message: 'ok',
    };
  }
}
