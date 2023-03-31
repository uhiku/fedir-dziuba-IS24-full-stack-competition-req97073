export type ProductModel = {
  productId: string;
  productName: string;
  productOwnerName: string;
  developers: string[];
  scrumMasterName: string;
  startDate: string;
  methodology: "agile" | "scrum";
};
