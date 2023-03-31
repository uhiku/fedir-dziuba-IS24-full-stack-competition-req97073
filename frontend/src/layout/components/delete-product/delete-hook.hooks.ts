import { http } from "../../../services";
import { DeleteProductProps } from "./delete-product.props";

export const useDeleteHook = ({ product, onClose }: DeleteProductProps) => {
  const onSubmit = async () => {
    await http.delete(`products/${product.productId}`);
    onClose();
  };

  return { onSubmit };
};
