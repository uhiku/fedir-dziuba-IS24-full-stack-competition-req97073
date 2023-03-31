import { ProductModel } from "../../../models";

export type ManageProductProps = {
  handleAddProduct?: (
    product: Omit<ProductModel, "productId">
  ) => Promise<void>;

  handleEditProduct?: (
    product: Omit<ProductModel, "productId">
  ) => Promise<void>;

  product?: ProductModel;
};
