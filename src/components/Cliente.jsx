import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, handleEliminar }) => {

  const navigate = useNavigate();

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="p-3">{cliente.nombre}</td>
      <td className="p-3">
        <p className="text-gray-800 uppercase font-bold">
          Email: <span>{cliente.email}</span>
        </p>
        <p className="text-gray-800 uppercase font-bold">
          Tel: <span>{cliente.telefono}</span>
        </p>
      </td>
      <td className="p-3">{cliente.empresa}</td>
      <td className="p-3">
        <button
          className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs mb-2"
          type="button"
          onClick={() => navigate(`/clientes/${cliente.id}`)}
        >
          Ver
        </button>

        <button
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mb-2"
          type="button"
          onClick={() => navigate(`/clientes/editar/${cliente.id}`)}
        >
          Editar
        </button>

        <button
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs"
          type="button"
          onClick={() => handleEliminar(cliente.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
export default Cliente;
