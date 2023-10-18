import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from '@/slice/menuSlice';
import ToolboxReducer from '@/slice/toolBoxSlice';
import HoverDiv from '@/slice/menuHoverSlice';


export const store = configureStore({
    reducer: {
      menu: MenuReducer,
      toolbox: ToolboxReducer,
      hover: HoverDiv
    },
  })