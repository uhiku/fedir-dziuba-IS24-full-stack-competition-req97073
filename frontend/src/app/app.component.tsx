import "./app.styles.scss";
import { useAppHook } from "./app.hook";
import { AppProps } from "./app.props";
import { FC } from "react";

export const App: FC<AppProps> = () => {
  useAppHook();
  return <h1>App</h1>;
};
