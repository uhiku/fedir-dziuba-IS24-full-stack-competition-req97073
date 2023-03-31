import styles from "./layout.module.scss";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { ProductModel } from "../models";
import { http } from "../services";

export const useLayoutHook = () => {
  const classNames = useMemo(() => clsx("container", styles.layout), []);

  const [products, setProducts] = useState<ProductModel[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    ProductModel | undefined
  >();
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModal = (item?: ProductModel) => {
    if (item) {
      setSelectedProduct(item);
      setIsDeleteModalOpen(true);
    } else {
      setSelectedProduct(item);
      setIsDeleteModalOpen(false);
    }
  };

  const handleEditModal = (item?: ProductModel) => {
    if (item) {
      setSelectedProduct(item);
      setIsManageModalOpen(true);
    } else {
      setSelectedProduct(item);
      setIsManageModalOpen(false);
    }
  };

  const handleAddModal = () => {
    setIsManageModalOpen(!isManageModalOpen);
  };

  const getProducts = async () => {
    try {
      const result = await http.get("products");

      const body = await result.json<ProductModel[]>();
      setProducts(body);
    } catch (error) {
      // TODO: display alert
    }
  };

  const addProduct = async (product: Omit<ProductModel, "productId">) => {
    try {
      const result = await http.post("products", { json: product });
      const json = await result.json<ProductModel>();

      setProducts([...products, json]);
      handleAddModal();
    } catch (error) {
      // display alert
    }
  };

  const editProduct = async (product: Omit<ProductModel, "productId">) => {
    try {
      const result = await http.put(`products/${selectedProduct?.productId}`, {
        json: product,
      });
      const json = await result.json<ProductModel>();

      const updated = products.map((item) => {
        if (item.productId === selectedProduct!.productId) {
          item = json;
          return item;
        } else {
          return item;
        }
      });

      setProducts(updated);
      handleEditModal();
    } catch (error) {
      // display alert
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
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
  };
};
