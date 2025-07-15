import "./styles.css";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Service from "./Components/Services";
import Error from "./Components/Error";
import RestItem from "./Components/RestItems";
import loggedIn from "./Components/utils/logged";
import { useState } from "react";
import { Provider } from "react-redux";
import Appstore from "./Components/utils/Store/AppStore";
import Cart from "./Components/Cart";

function App() {
  const [name, setName] = useState("Nazia");

  return (
    <Provider store={Appstore}>
      <loggedIn.Provider value={{ userName: name, setName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </loggedIn.Provider>
    </Provider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/rest/:id",
        element: <RestItem />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
