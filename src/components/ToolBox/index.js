import React from "react";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeBrushSize, changeColor } from "@/slice/toolBoxSlice";
import cx from "classnames";


const ToolBox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.ERASER || activeMenuItem == MENU_ITEMS.PENCIL;

  const {color,size} = useSelector((state) => state.toolbox[activeMenuItem])
  const dispatch = useDispatch();

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };

  return (
    <div className={styles.toolBoxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={updateColor(COLORS.BLACK)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={updateColor(COLORS.BLUE)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
              onClick={updateColor(COLORS.RED)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={updateColor(COLORS.ORANGE)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={updateColor(COLORS.GREEN)}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={updateColor(COLORS.YELLOW)}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size {activeMenuItem}</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBox;
