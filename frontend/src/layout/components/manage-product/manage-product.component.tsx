import styles from "./manage-product.module.scss";
import { Form, FormikProvider } from "formik";
import { FC } from "react";
import { Modal } from "../../../shared";
import { useManageProductHook } from "./manage-product.hook";
import { ManageProductProps } from "./manage-product.props";

export const ManageProduct: FC<ManageProductProps> = (props) => {
  const { classes, formik, onAddDeveloper, onRemoveDeveloper } =
    useManageProductHook(props);

  return (
    <Modal title={"Add new product"}>
      <div className={styles["manage-product"]}>
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="six columns">
                <label htmlFor="productName">Product name</label>
                <input
                  className={classes("productName")}
                  type="text"
                  placeholder="Type here..."
                  {...formik.getFieldProps("productName")}
                />
              </div>
              <div className="six columns">
                <label htmlFor="scrumMasterName">Scrum master</label>
                <input
                  className={classes("scrumMasterName")}
                  type="text"
                  placeholder="Type here..."
                  {...formik.getFieldProps("scrumMasterName")}
                />
              </div>
            </div>
            <div className="row">
              <div className="six columns">
                <label htmlFor="productOwnerName">Owner name</label>
                <input
                  className={classes("productOwnerName")}
                  type="text"
                  placeholder="Type here..."
                  {...formik.getFieldProps("productOwnerName")}
                />
              </div>
              <div className="six columns">
                <label htmlFor="methodology">Methodology</label>
                <select
                  className={classes("methodology")}
                  {...formik.getFieldProps("methodology")}
                >
                  <option value="agile">Agile</option>
                  <option value="scrum">Scrum</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="six columns">
                <label htmlFor="developers">Developers</label>
                {formik.values.developers.map((_, i) => (
                  <div className={styles["manage-product-developer"]} key={i}>
                    <input
                      className={classes(`developers.${i}`)}
                      type="text"
                      placeholder="Type here..."
                      {...formik.getFieldProps(`developers.${i}`)}
                    />
                    <span
                      className={styles["manage-product-developer-remove"]}
                      tabIndex={0}
                      role="button"
                      onClick={(e) => onRemoveDeveloper(e, i)}
                    >
                      x
                    </span>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={onAddDeveloper}
                  disabled={formik.values.developers.length === 5}
                >
                  Add developer
                </button>
              </div>
              <div className="six columns">
                <label htmlFor="startDate">Start date</label>
                <input
                  readOnly
                  className={classes("startDate")}
                  type="text"
                  placeholder="Type here..."
                  {...formik.getFieldProps("startDate")}
                />
              </div>
            </div>

            <div className={styles["manage-product-actions"]}>
              <button type="button" onClick={() => props.handleClose()}>
                Close
              </button>
              <button className="button-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </Modal>
  );
};
