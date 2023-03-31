import clsx from "clsx";
import styles from "./manage-product.module.scss";
import { useFormik } from "formik";
import { array, object, string } from "yup";
import { ProductModel } from "../../../models";
import { MouseEvent, useEffect } from "react";
import { ManageProductProps } from "./manage-product.props";

export const useManageProductHook = ({
  product,
  handleAddProduct,
  handleEditProduct,
}: ManageProductProps) => {
  /**
   * Make startDate field readonly to simplify (not install additional date/time pickers)
   */
  const formik = useFormik<Omit<ProductModel, "productId">>({
    initialValues: {
      productName: "",
      scrumMasterName: "",
      methodology: "agile",
      productOwnerName: "",
      startDate: "2023-07-30T02:10:47.912Z",
      developers: [],
    },
    validationSchema: object().shape({
      productName: string().required().max(35),
      scrumMasterName: string().required().max(35),
      methodology: string().oneOf(["agile", "scrum"]).required(),
      productOwnerName: string().required().max(35),
      startDate: string().required(),
      developers: array().of(string().required()).max(5).required(),
    }),
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      if (product) {
        await handleEditProduct?.(values);
      } else {
        await handleAddProduct?.(values);
      }
      helpers.setSubmitting(true);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    if (product) {
      formik.setValues(product);
    }
  }, []);

  const onAddDeveloper = () => {
    formik.setFieldValue(
      "developers",
      [...formik.values.developers, ""],
      false
    );
  };

  const onRemoveDeveloper = (e: MouseEvent, index: number) => {
    e.stopPropagation(); // disable bubble up event triggering animation because X pos is absolute
    formik.setFieldValue(
      "developers",
      formik.values.developers.filter((_, i) => i !== index),
      false
    );
  };

  const classes = (field: string) =>
    clsx("u-full-width", {
      [styles["manage-product-error"]]: !!formik.getFieldMeta(field).error,
    });

  return { classes, formik, onAddDeveloper, onRemoveDeveloper };
};
