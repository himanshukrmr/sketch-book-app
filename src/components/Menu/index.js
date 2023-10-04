import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { MENU_ITEMS } from "@/constants";
import { menuitemClick } from "@/slice/menuSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const handleMenuCLick = (itemName) => {
    dispatch(menuitemClick(itemName));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuCLick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuCLick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuCLick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuCLick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuCLick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
}
