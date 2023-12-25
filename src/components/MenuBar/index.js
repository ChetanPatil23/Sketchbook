import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { showToolBox } from "@/slices/toolBoxSlice";
import { menuIcons } from "./menuIcons";
import {
  handleActionMenuItemClick,
  handleMenuItemClick,
} from "@/slices/menuSlice";
import { MENU_ICONS } from "@/constants";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuBar = () => {
  const { activeMenuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  useEffect(() => {
    if (isAuthenticated && !isLoading)
      toast.success("Welcome! " + user.name.split("@")[0]);
  }, [isAuthenticated, isLoading]);

  const iconClickHandlers = [
    () => handlePencilClick(),
    () => handleEraserClick(),
    () => handleUndoClick(),
    () => handleRedoClick(),
    () => handleDownloadClick(),
    () => handleClearAllClick(),
    () => authenticateUser(),
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
    if (isAuthenticated) {
      dispatch(handleActionMenuItemClick(MENU_ICONS.DOWNLOAD));
    } else {
      toast.error("Please Sign Up to download the file");
    }
  };
  const handleClearAllClick = () => {
    dispatch(handleActionMenuItemClick(MENU_ICONS.CLEAR_ALL));
  };

  const authenticateUser = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      toast.success("You are being logged out");
      setTimeout(() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }, 2000);
    }
  };

  return (
    <>
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
              {icon.name === "USER" && (
                <span className="ml-2">
                  {isAuthenticated ? user.name.split("@")[0] : "Guest"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MenuBar;
