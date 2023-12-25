import Board from "@/components/Board";
import MenuBar from "@/components/MenuBar";
import ToolBox from "@/components/ToolBox";
import { store } from "@/store";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain="dev-chetanpatil08.us.auth0.com"
        clientId="BsnOhQqy5F9ZoC5gmnXEVArIAfsG905a"
        authorizationParams={{
          redirect_uri:
            typeof window !== "undefined" ? window.location.origin : null,
        }}
      >
        <MenuBar />
        <ToolBox />
        <Board />
      </Auth0Provider>
    </Provider>
  );
}
