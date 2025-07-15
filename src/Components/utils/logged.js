import { createContext } from "react";

const loggedIn = createContext({
  userName: "Default",
});

export default loggedIn;
