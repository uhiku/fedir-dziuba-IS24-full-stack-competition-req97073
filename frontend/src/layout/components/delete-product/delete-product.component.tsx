import styles from "./delete-product.module.scss";
import { FC } from "react";
import { Modal } from "../../../shared";
import { DeleteProductProps } from "./delete-product.props";
import { useDeleteHook } from "./delete-hook.hooks";

export const DeleteProduct: FC<DeleteProductProps> = ({ product, onClose }) => {
  const { onSubmit } = useDeleteHook({ product, onClose });
  return (
    <Modal
      title={
        <>
          Delete product <b>{product.productName}</b>
        </>
      }
    >
      <div className={styles["delete-product"]}>
        <button onClick={() => onClose()}>Cancel</button>
        <button className="button-primary" onClick={onSubmit}>
          Confirm
        </button>
      </div>
    </Modal>
  );
};
