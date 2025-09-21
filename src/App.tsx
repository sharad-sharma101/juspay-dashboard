import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { MainLayout } from './components/Layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);



function App() {
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App