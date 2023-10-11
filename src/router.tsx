import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundError from "./pages/error/NotFoundError";
import Layout from "./components/layout/Layout";
import FavouritePage from "./pages/favorites/FavouritePage";
import CharitySearchPage from "./pages/charity/CharitySearchPage";
import CharityDetailPage from "./pages/charity/CharityDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
              <App />
            </Layout>
        ),
        errorElement: <NotFoundError />,
    },
    {
        path: "/search/:keyword",
        element: (
            <Layout>
                <CharitySearchPage />
            </Layout>
        ),
        errorElement: <NotFoundError />
    },
    {
        path: "/favorites",
        element: (
            <Layout>
                <FavouritePage />
            </Layout>
        ),
        errorElement: <NotFoundError />
    },
    {
        path: "/charity/:keyword",
        element: (
            <Layout>
                <CharityDetailPage />
            </Layout>
        ),
        errorElement: <NotFoundError />
    },
])