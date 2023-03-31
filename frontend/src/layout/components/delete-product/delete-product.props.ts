import { ProductModel } from "../../../models";

export type DeleteProductProps = {
  product: ProductModel;
  onClose: () => void;
};
