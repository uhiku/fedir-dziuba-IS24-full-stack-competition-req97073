import styles from "./modal.module.scss";
import { FC } from "react";
import { useModalHook } from "./modal.hook";
import { ModalProps } from "./modal.props";

export const Modal: FC<ModalProps> = ({ children, title }) => {
  const { classes, modalOverlayRef, setClickOuteside } = useModalHook();

  return (
    <div className={styles["modal"]}>
      <div
        className={classes}
        ref={modalOverlayRef}
        onAnimationEnd={() => setClickOuteside(false)}
      >
        <div className={styles["modal-overlay-header"]}>
          <h5>{title}</h5>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
