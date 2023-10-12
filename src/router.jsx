import './styles/index.css'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './pages/home';
import Ornek from './pages/ornek';

const routerArray = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "ornek",
        element: <Ornek />
    }
    
]);

export default routerArray