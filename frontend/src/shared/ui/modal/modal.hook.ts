import clsx from "clsx";
import styles from "./modal.module.scss";
import { useEffect, useMemo, useRef, useState } from "react";

export const useModalHook = () => {
  const [clickOutside, setClickOuteside] = useState(false);

  const modalOverlayRef = useRef<HTMLDivElement>(null);

  const classes = useMemo(
    () =>
      clsx({
        [styles["modal-overlay"]]: true,
        [styles["modal-overlay-animate"]]: clickOutside,
      }),
    [clickOutside]
  );

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        modalOverlayRef.current &&
        !modalOverlayRef.current.contains(event.target as Node)
      ) {
        setClickOuteside(true);
      }
    });
  }, []);

  return { classes, modalOverlayRef, setClickOuteside };
};
