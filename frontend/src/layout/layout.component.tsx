import { FC } from "react";
import { DeleteProduct, Products } from "./components";
import { ManageProduct } from "./components/manage-product";

import { useLayoutHook } from "./layout.hook";
import { LayoutProps } from "./layout.props";

export const Layout: FC<LayoutProps> = () => {
  const {
    products,
    classNames,
    addProduct,
    editProduct,
    handleAddModal,
    handleEditModal,
    selectedProduct,
    handleDeleteModal,
    isManageModalOpen,
    isDeleteModalOpen,
  } = useLayoutHook();

  return (
    <>
      <div className={classNames}>
        <button className="button-primary" onClick={handleAddModal}>
          New product
        </button>
        <Products
          products={products}
          onDelete={handleDeleteModal}
          onEdit={handleEditModal}
        />
      </div>
      {isDeleteModalOpen && selectedProduct && (
        <DeleteProduct product={selectedProduct} onClose={handleDeleteModal} />
      )}
      {isManageModalOpen && (
        <ManageProduct
          product={selectedProduct}
          handleAddProduct={addProduct}
          handleEditProduct={editProduct}
        />
      )}
    </>
  );
};
