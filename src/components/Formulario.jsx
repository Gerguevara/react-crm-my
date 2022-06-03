import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const Formulario = () => {

  // paso 1 Yup
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string().required('Nombre es requerido')
  });

  const handleSubmit = (valores) => {
    console.log(valores);
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Crear Cliente
      </h1>

      {/* setea el state inicial de el formulario de formik */}
      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          telefono: "",
          email: "",
          notas: "",
        }}

        onSubmit={(values) => {
          handleSubmit(values);
        }}

        // paso 2 yup
        validationSchema = { nuevoClienteSchema}
      > {/* function that wraps the form */}
      
        {() => (
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
              value="Agregar Cliente"
              className="text-white bg-blue-700 w-full mt-5 p-3 rounded-xl font-bold uppercase"
            />
          </Form>
        )}
        {/* close the returnin html formit function  */}
      </Formik>
    </div>
  );
};

export default Formulario;
