/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";
import DetailRecipes from "../pages/DetailRecipes";
import ErrorPage from "../pages/ErrorPage";
import Home from "./../pages/Home";

const rooter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/plat/:id",
        element: <DetailRecipes />,
    },
]);

export default rooter;
