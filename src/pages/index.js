import Board from "@/components/Board";
import MenuBar from "@/components/MenuBar";
import ToolBox from "@/components/ToolBox";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <MenuBar />
      <ToolBox />
      <Board />
    </Provider>
  );
}
