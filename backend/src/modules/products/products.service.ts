import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProductGeneratorService } from 'src/core';
import { ProductDto } from './products.validation';

@Injectable()
export class ProductService {
  constructor(
    private readonly _productGeneratorService: ProductGeneratorService,
  ) {}

  public getProducts() {
    return this._productGeneratorService.products;
  }

  public getProduct(productId: string) {
    const product = this._productGeneratorService.products.find(
      (product) => product.productId === productId,
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  public addProduct(product: ProductDto) {
    const productToAdd = {
      productId: randomUUID(),
      ...product,
    };

    this._productGeneratorService.products.push(productToAdd);

    return productToAdd;
  }

  public editProduct(productId: string, product: ProductDto) {
    const productToEdit = this._productGeneratorService.products.findIndex(
      (item) => item.productId === productId,
    );

    if (productToEdit === -1) {
      throw new NotFoundException('Product not found');
    }

    /**
     * For the sake of simplicity just rewrite all fields to new ones or old ones as they are submitted anyways
     */

    const editedProduct = {
      productId,
      ...product,
    };

    this._productGeneratorService.products[productToEdit] = editedProduct;

    return editedProduct;
  }

  public deleteProduct(productId: string) {
    const product = this._productGeneratorService.products.find(
      (product) => product.productId === productId,
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    this._productGeneratorService.products =
      this._productGeneratorService.products.filter(
        (item) => item.productId !== productId,
      );
  }
}
