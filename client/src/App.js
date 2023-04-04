import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

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
