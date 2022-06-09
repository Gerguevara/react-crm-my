import React from "react";
import Formulario from "../components/Formulario";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditarCliente = () => {

  
  const params = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const obtenerCliente = async () => {
      setCargando(true);
      try {
        const url = `http://localhost:3001/clientes/${params.id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(!cargando);
      }, 500);
    };
    obtenerCliente();
  }, []);


  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar los datos de un cliente
      </p>
      {cliente?.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p className="mt-3">Cliente id no válido</p>
      )}
    </>
  );
};

export default EditarCliente;