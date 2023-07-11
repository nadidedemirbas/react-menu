import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page.jsx";
import Menu from "./routes/menu.jsx"
import Android from "./routes/elektronik/android.jsx";
import Apple from "./routes/elektronik/apple.jsx";
import Dizustu from "./routes/elektronik/dizustu.jsx";
import Masaustu from "./routes/elektronik/masaustu.jsx";
import Elbise from "./routes/tekstil/elbise.jsx";
import Tisort from "./routes/tekstil/tisort.jsx";
import TopukluAyakkabi from "./routes/tekstil/topuklu-ayakkabi.jsx";
import Sneaker from "./routes/tekstil/sneaker.jsx";
import GozMakyaji from "./routes/kozmetik/goz-makyaji.jsx";
import TenMakyaji from "./routes/kozmetik/ten-makyaji.jsx";
import Sampuan from "./routes/kozmetik/sampuan.jsx";
import SacKremi from "./routes/kozmetik/sac-kremi.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
        children: [
            //Elektronik
            {
                path: "elektronik/android",
                element: <Android />,
            },
            {
                path: "elektronik/apple",
                element: <Apple />,
            },
            {
                path: "elektronik/dizustu",
                element: <Dizustu />,
            },
            {
                path: "elektronik/masaustu",
                element: <Masaustu />,
            },
            //Tekstil
            {
                path: "tekstil/elbise",
                element: <Elbise />,
            },
            {
                path: "tekstil/tisort",
                element: <Tisort />,
            },
            {
                path: "tekstil/topuklu-ayakkabi",
                element: <TopukluAyakkabi />,
            },
            {
                path: "tekstil/sneaker",
                element: <Sneaker />,
            },
            //Kozmetik
            {
                path: "kozmetik/goz-makyaji",
                element: <GozMakyaji />,
            },
            {
                path: "kozmetik/ten-makyaji",
                element: <TenMakyaji />,
            },
            {
                path: "kozmetik/sampuan",
                element: <Sampuan />,
            },
            {
                path: "kozmetik/sac-kremi",
                element: <SacKremi />,
            }
        ]
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
