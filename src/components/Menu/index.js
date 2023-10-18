import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
import { setHoveredDiv } from "@/slice/menuHoverSlice";

import { MENU_ITEMS } from "@/constants";
const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActioItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  // For showing the content when Hovered
  const hoveredDiv = useSelector((state) => state.hover.hoveredDiv);

  const handleMouseEnter = (divId) => {
    dispatch(setHoveredDiv(divId));
  };

  const handleMouseLeave = () => {
    dispatch(setHoveredDiv(null));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
        onMouseEnter={() => handleMouseEnter(MENU_ITEMS.PENCIL)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        {hoveredDiv === MENU_ITEMS.PENCIL && (
          <div className={styles.hoverContent}>Draw</div>
        )}
      </div>

      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
        onMouseEnter={() => handleMouseEnter(MENU_ITEMS.ERASER)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
        {hoveredDiv === MENU_ITEMS.ERASER && (
          <div className={styles.hoverContent}>Erase</div>
        )}
      </div>

      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}
        onMouseEnter={() => handleMouseEnter(MENU_ITEMS.UNDO)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
        {hoveredDiv === MENU_ITEMS.UNDO && (
          <div className={styles.hoverContent}>Undo</div>
        )}
      </div>

      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}
        onMouseEnter={() => handleMouseEnter(MENU_ITEMS.REDO)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
        {hoveredDiv === MENU_ITEMS.REDO && (
          <div className={styles.hoverContent}>Redo</div>
        )}
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}
        onMouseEnter={() => handleMouseEnter(MENU_ITEMS.DOWNLOAD)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faDownload} className={styles.icon} />
        {hoveredDiv === MENU_ITEMS.DOWNLOAD && (
          <div className={styles.hoverContent}>Dwonload</div>
        )}
      </div>
    </div>
  );
};

export default Menu;
