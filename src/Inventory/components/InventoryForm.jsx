import { useState, useEffect } from 'react';
import FormBuilder from 'src/components/FormBuilder';
import useForm from 'src/hooks/useForm';
import randomID from 'src/utils/randomID';

export default function InventoryForm({ formFields, setFormValues, formValues, onSubmitHandler, formErrors }) {
  const [errors, setErrors] = useState([]);

  const { onChange, onSubmit, currentFormValues } = useForm(onSubmitHandler, formValues);

  useEffect(() => {
    // console.log('change formValues', currentFormValues);
    setFormValues((prev) => ({ ...prev, ...currentFormValues }));
  }, [currentFormValues]);

  function formSubmit(e) {
    e.preventDefault();
    onSubmitHandler(e);
  }

  return (
    <div className="pl-10 pr-10">
      <h1 className="text-3xl font-semibold mb-8">Crear Registro de Inventario</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        {errors.length > 0 && (
          <div className="flex flex-col rounded-md py-3 px-3 mb-5 bg-red-600">
            <ul>
              {errors.map((error, index) => (
                <li key={randomID} className="text-white">
                  {error.message}
                </li>
              ))}
            </ul>
          </div>
        )}
        <FormBuilder formFields={formFields} onChangeHandler={onChange} />
        <div className="flex justify-end">
          <button
            className="bg-purple-600 text-white rounded-lg font-bold hover:bg-yellow-400 p-2 ml-2 flex items-center transition-all 1s"
            type="submit"
          >
            <span>Guardar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
