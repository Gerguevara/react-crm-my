import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VerCLiente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();
  // el nombre proviene de el nombre dado al congigurar la ruta
  //   const { id } = useParams();

  useEffect(() => {
    const obtenerCliente = async () => {
      setCargando(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/${params.id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(false);
      }, 500);
    };
    obtenerCliente();
  }, []);

  return Object.keys(cliente).length === 0 ? <h2>No valid id</h2> : (
    <div>
      { cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver Cliente: {cliente.nombre}
          </h1>
          <p className="mt-3">Información del cliente</p>
          {cliente.nombre && (
            <p className="text-2xl text-gray-600 mt-10">
              <span className="text-gray-800 uppercase font-bold">
                Cliente:{" "}
              </span>
              {cliente.nombre}
            </p>
          )}
          {cliente.email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Email: </span>
              {cliente.email}
            </p>
          )}
          {cliente.telefono && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Teléfono:{" "}
              </span>
              {cliente.telefono}
            </p>
          )}
          {cliente.empresa && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">
                Empresa:{" "}
              </span>
              {cliente.empresa}
            </p>
          )}
          {cliente.notas && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas: </span>
              {cliente.notas}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCLiente;
