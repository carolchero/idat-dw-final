const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');
const EditarCategoriaPage = require('./pages/editar-categoria');
const AgregarPeliculaPage = require('./pages/agregar-pelicula');
const NuevaCategoriaPage = require('./pages/nueva-categoria');
const VerCategoriaPage = require('./pages/ver-categoria');
const HomePage = require('./pages/home');

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/editar-categoria/:id', element: <EditarCategoriaPage /> },
    { path: '/nueva-pelicula', element: <AgregarPeliculaPage /> },
    { path: '/ver-categoria/:id', element: <VerCategoriaPage /> },
    { path: '/nueva-categoria', element: <NuevaCategoriaPage /> },
])



ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('react'))
