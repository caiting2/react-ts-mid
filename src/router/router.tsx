import { createHashRouter,RouterProvider } from "react-router";
import Home from '../view/Home';
import { Insert } from '../view/Insert';
import { Update } from '../view/Update';
import App from '../view/App';

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/insert",
        element: <Insert />,
    },
    {
        path: "/update/:id",
        element: <Update />,
    },
    {
        path: "/app", 
        element: <App />,
    },
]);

function MainApp() {
  return <RouterProvider router={router} />;
}

export default MainApp;
