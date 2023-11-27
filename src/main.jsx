import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/addCoffee.jsx';
import UpdateCoffee from './components/updateCoffee.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader:()=>fetch(`http://localhost:5000/coffee`)
  },
  {
    path:"addCoffee",
    element:<AddCoffee/>
  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffee/>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:"coffee/:id",
    element:<ProductDetails/>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
