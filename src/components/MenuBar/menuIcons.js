import {
  faPencil,
  faRotateRight,
  faRotateLeft,
  faEraser,
  faFileArrowDown,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { MENU_ICONS } from "@/constants";

export const menuIcons = [
  { name: MENU_ICONS.PENCIL, icon: faPencil },
  { name: MENU_ICONS.ERASER, icon: faEraser },
  { name: MENU_ICONS.UNDO, icon: faRotateLeft },
  { name: MENU_ICONS.REDO, icon: faRotateRight },
  { name: MENU_ICONS.DOWNLOAD, icon: faFileArrowDown },
  { name: MENU_ICONS.CLEAR, icon: faXmark },
  { name: MENU_ICONS.USER, icon: faUser },
];
