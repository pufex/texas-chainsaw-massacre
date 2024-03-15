import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home"
import Bestof from "./pages/Bestof"
import Gallery from "./pages/Gallery"
import NotFound from "./pages/NotFound"
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/bestof',
    element: <Bestof />,
    errorElement: <NotFound />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
    errorElement: <NotFound />,
  },
  
  
]);

function App() {
  return <>
      <RouterProvider router={router} />
    </>

}

export default App
