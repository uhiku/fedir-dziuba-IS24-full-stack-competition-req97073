import styles from "./app.module.scss";
import { useAppHook } from "./app.hook";
import { AppProps } from "./app.props";
import { FC } from "react";
import { Layout } from "../layout";

export const App: FC<AppProps> = () => {
  useAppHook();
  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
};
