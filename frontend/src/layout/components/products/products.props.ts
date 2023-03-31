import { ProductModel } from "../../../models";

export type ProductsProps = {
  products: ProductModel[];
  onDelete: (item: ProductModel) => void;
  onEdit: (item: ProductModel) => void;
};
