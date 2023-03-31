import { Injectable, Scope } from '@nestjs/common';
import { generateProducts } from '../helpers';

@Injectable({ scope: Scope.DEFAULT })
export class ProductGeneratorService {
  products: ReturnType<typeof generateProducts>;

  constructor() {
    this.products = generateProducts();
  }

  get length() {
    return this.products.length;
  }
}
