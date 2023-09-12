import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, { loader as clientesLoader } from './pages/Index'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children: [
            {
                index:true,
                element: <Index />,
                loader:clientesLoader
            },
            {
                path:'/clientes/nuevo',
                element: <NuevoCliente />,
                action: nuevoClienteAction
            }
        ]
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

//Comando para correr server fake simulador de un REST API
//> json-server --watch db.json