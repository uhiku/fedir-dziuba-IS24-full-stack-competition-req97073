import styles from "./products.module.scss";
import { FC } from "react";
import { useProductsHook } from "./products.hook";
import { ProductsProps } from "./products.props";

export const Products: FC<ProductsProps> = ({ onDelete, onEdit, products }) => {
  useProductsHook();
  return (
    <div className={styles.products}>
      <table className={styles["products-table"]}>
        <thead>
          <tr>
            <th>No</th>
            <th>Product name</th>
            <th>Scrum master</th>
            <th>Product owner</th>
            <th>Developers</th>
            <th>Start date</th>
            <th>Methodology</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product.productId}>
              <td>{i + 1}</td>
              <td>{product.productName}</td>
              <td>{product.scrumMasterName}</td>
              <td>{product.productOwnerName}</td>
              <td>{product.developers.join(", ")}</td>
              <td>
                {new Intl.DateTimeFormat().format(new Date(product.startDate))}
              </td>
              <td>{product.methodology}</td>
              <td>
                <button className={styles["products-table-action"]}>...</button>
                <div className={styles["products-table-dropdown"]}>
                  <button onClick={() => onEdit(product)}>Edit</button>
                  <button onClick={() => onDelete(product)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
