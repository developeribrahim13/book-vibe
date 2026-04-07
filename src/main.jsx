import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './components/pages/Homepage/Homepage.jsx';
import Books from './components/pages/Books/Books.jsx';
import Error from './components/pages/error/Error.jsx';
import BookDetails from './components/pages/bookDetails/BookDetails.jsx';
import BookProvider from './context/BookProvider.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index:true,
        element: <Homepage/>,
      },
      {
        path:"/books",
        element:<Books/>
      },
      {
        path:"/bookDetails/:id",
        element: <BookDetails/>,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <Error/>
  },
]);


createRoot(document.getElementById('root')).render(
  <BookProvider>
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer/>
  </BookProvider>
)
