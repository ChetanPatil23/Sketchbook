import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { showToolBox } from "@/slices/toolBoxSlice";
import { menuIcons } from "./menuIcons";
import {
  handleActionMenuItemClick,
  handleMenuItemClick,
} from "@/slices/menuSlice";
import { MENU_ICONS } from "@/constants";
const MenuBar = () => {
  const { activeMenuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const iconClickHandlers = [
    () => handlePencilClick(),
    () => handleEraserClick(),
    () => handleUndoClick(),
    () => handleRedoClick(),
    () => handleDownloadClick(),
    () => handleClearAllClick(),
  ];

  const handlePencilClick = () => {
    dispatch(showToolBox());
    dispatch(handleMenuItemClick(MENU_ICONS.PENCIL));
  };
  const handleEraserClick = () => {
    dispatch(handleMenuItemClick(MENU_ICONS.ERASER));
    dispatch(showToolBox());
  };
  const handleUndoClick = () => {
    dispatch(handleActionMenuItemClick(MENU_ICONS.UNDO));
  };
  const handleRedoClick = () => {
    dispatch(handleActionMenuItemClick(MENU_ICONS.REDO));
  };
  const handleDownloadClick = () => {
    dispatch(handleActionMenuItemClick(MENU_ICONS.DOWNLOAD));
  };
  const handleClearAllClick = () => {
    dispatch(handleActionMenuItemClick(MENU_ICONS.CLEAR_ALL));
  };

  return (
    <div className="absolute top-4 right-1/2 translate-x-1/2">
      <div className="border border-gray-100 bg-gray-50 flex px-5 rounded-full">
        {menuIcons.map((icon, index) => (
          <div
            className={`${
              icon.name === activeMenuItem
                ? "bg-slate-100 border border-b-black"
                : null
            } px-4 py-2 hover:bg-slate-200 cursor-pointer`}
            key={index}
            onClick={iconClickHandlers[index]}
          >
            <FontAwesomeIcon icon={icon.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
