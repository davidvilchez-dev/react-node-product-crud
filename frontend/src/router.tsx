import { createBrowserRouter } from "react-router";
import { Layout } from "./layouts/Layout";
import { loader as productsLoader, Product, action as updateAvailabilityAction } from "./views/Product";
import { action as newProductAction, NewProduct } from "./views/NewProduct";
import { loader as editProductLoader, EditProduct, action as editProductAction } from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: '/productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar',  // ROA Pattern - Resource oriented design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])