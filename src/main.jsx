import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import Movies from "./movies/movies.jsx";
import DetailMovie from "./movies/detailMovie/DetailMovie";
import Bienvenida from "./home/bienvenida/bienvenida.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <img className="text-center" src="https://img.freepik.com/vector-premium/plantilla-pagina-web-error-404-lindo-gato_540634-1.jpg?w=2000" alt="" width="50%" />,
    children: [
      {
        path: "/",
        element: <Bienvenida/>,
      },
      {
        path: "/comedia",
        element: <Movies genero="comedia" key={"comedia"} />,
      },
      {
        path: "/independientes",
        element: <Movies genero="independientes" key={"independientes"} />,
        children: [
          {
            path: "independientes/:pelicula",
            element: <DetailMovie key={1} />,
          },
        ],
      },
    ],
  },
  {
    path: ":genero/:pelicula",
    element: <DetailMovie key={2} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
