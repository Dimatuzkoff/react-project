// react
import { FC } from "react";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {}

export const Button: FC<ButtonProps> = ({}) => {
  return <div className={styles.Button}></div>;
};
