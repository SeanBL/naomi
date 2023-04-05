import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ""
  }
]);

function App() {
  return (
    <RouterProvider
    router={router}
    fallbackElement={<Home />}
    />
  );
}

export default App;
