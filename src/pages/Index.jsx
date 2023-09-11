import { useLoaderData } from "react-router-dom";

export function loader(){
    const clientes = [
        {
            id: 1,
            nombre: 'Leonardo',
            telefono: 102013313,
            email: "leonardo@leonardo.com",
            empresa: 'Xenon Indrustrial'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@leonardo.com",
            empresa: 'Xenon Indrustrial'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@leonardo.com",
            empresa: 'Xenon Indrustrial'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@leonardo.com",
            empresa: 'Xenon Indrustrial'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@leonardo.com",
            empresa: 'Xenon Indrustrial'
        },
    ];
    return clientes;
}

const Index = () => {

    const clientes = useLoaderData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>
        </>
    )
}

export default Index