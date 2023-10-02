import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faRotateRight,
  faRotateLeft,
  faEraser,
  faFileArrowDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
  const menuIcons = [
    faPencil,
    faRotateLeft,
    faRotateRight,
    faEraser,
    faFileArrowDown,
    faXmark,
  ];
  return (
    <div className="flex justify-center my-4">
      <div className="border border-gray-100 bg-gray-50 flex px-5 rounded-full">
        {menuIcons.map((icon, index) => (
          <div
            className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
            key={index}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
