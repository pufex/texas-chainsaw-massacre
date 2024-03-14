import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home"
import Bestof from "./pages/Bestof"
import NotFound from "./pages/NotFound"
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Bestof />,
    errorElement: <NotFound />,
  },
  {
    path: '/bestof',
    element: <Home />,
    errorElement: <NotFound />,
  },
  
  
]);

function App() {
  return <>
      <RouterProvider router={router} />
    </>

}

export default App
