import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import CustomError from "./CustomError";
import * as Yup from "yup";

const Formulario = ({ cliente, cargando }) => {
  const navigate = useNavigate();

  // paso 1 Yup
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string().required("Dude please").min(5, "Al menos 5 dude"),
    empresa: Yup.string().required("Dude please Empresa"),
    email: Yup.string().required("Dude please pon un email").email(),
    telefono: Yup.number()
      .integer()
      .positive()
      .typeError("Eso no es un numero cabron"),
  });

  const handleSubmit = async (valores) => {
    try {
      if (cliente?.id) {
        //Editar Registro
        const url = `http://localhost:3001/clientes/${cliente?.id}`;
        const respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(valores),
          headers: {
            "content-Type": "application/json",
          },
        });
        console.log(respuesta);
        const resultado = await respuesta.json();
        console.log(resultado);
        navigate("/clientes");
      } else {
        // Nuevo Registro
        const url = `http://localhost:3001/clientes`;
        const respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(valores),
          headers: {
            "content-Type": "application/json",
          },
        });
        console.log(respuesta);
        const resultado = await respuesta.json();
        console.log(resultado);
        navigate("/clientes");
      }
    } catch (error) {}
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
      </h1>

      {/* setea el state inicial de el formulario de formik, si */}
      <Formik
        initialValues={{
          nombre: cliente?.nombre ?? "",
          empresa: cliente?.empresa ?? "",
          telefono: cliente?.telefono ?? "",
          email: cliente?.email ?? "",
          notas: cliente?.notas ?? "",
        }}
        // enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        // paso 2 yup
        validationSchema={nuevoClienteSchema}
      >
        {/* data es la funcion que recibe el formulario */}
        {(data) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label htmlFor="nombre">Nombre</label>
                <Field
                  id="nombre"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre del Cliente"
                  name="nombre"
                />
                {/* <ErrorMessage name="nombre"/> */}
                {data.errors.nombre && data.touched.nombre ? (
                  <CustomError>{data.errors.nombre}</CustomError>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="empresa">Empresa</label>
                <Field
                  id="empresa"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Empresa del cliente"
                  name="empresa"
                />
                {data.errors.empresa && data.touched.empresa ? (
                  <CustomError>{data.errors.empresa}</CustomError>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="email">E-mail</label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email del cliente"
                  name="email"
                />
                {data.errors.email && data.touched.email ? (
                  <CustomError>{data.errors.email}</CustomError>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="telefono">Telefono</label>
                <Field
                  id="telefono"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Telefono del cliente"
                  name="telefono"
                />
                {data.errors.telefono && data.touched.telefono ? (
                  <CustomError>{data.errors.telefono}</CustomError>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="notas">Notas</label>
                <Field
                  as="textarea"
                  id="notas"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="notas del cliente"
                  name="notas"
                />
              </div>

              <input
                type="submit"
                value={cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"}
                className="mt-5 w-full rounded-xl bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};


//  enableReinitialize={true} es un prop de formitQue vuelve a ejecutar 
// la detaccion de cambios  en este caso no se uso pero puede ser util

// No es necesario en este caso pero se pueden manejar porps por defecto para que
// no sea obligatorio pasarlos 

Formulario.defaultPops =  {
  cliente: {},
  cargando: false
}

export default Formulario;
