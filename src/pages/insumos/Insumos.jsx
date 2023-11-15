import { useState, useEffect } from 'react';
import { RiArrowDownLine, RiAddCircleLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import ListItems from 'src/Item/components/ListItems';
import ItemForm from 'src/Item/components/ItemForm';
import { useAddItem } from 'src/Item/custom-hooks';
import { insumoFields } from 'src/Item/constants/formFields';
import OffCanvas from 'src/components/OffCanvas';
import { useOffCanvasContext, useOffCanvasToggleContext } from "src/context/OffCanvasContext";

export default function Insumos() {

  const formFields = insumoFields;
  const [dataLength, setDataLength] = useState(0);
  const [formType, setFormType] = useState(null);
  const [formErrors, setFormErrors] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [onSubmitHandler, setOnSubmitHandler] = useState(null);

  const isOpen = useOffCanvasContext();
  const toggleOffCanvas = useOffCanvasToggleContext();

  const [addItem, {isLoading}] = useAddItem(formValues);

  useEffect(() => {
    if (formType === 'new') {
      const initialValues = formFields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {})
      
      setFormValues(initialValues);
      setOnSubmitHandler(() => onSubmitHandlerNewItem);
    }
  },[formType]);

  useEffect(() => {
    // console.log('formErrors', formErrors);
    if (formErrors.length === 0) return;
    formErrors.map((error) => toast.error(error.message));
  }, [formErrors]);
    
  const onSubmitHandlerNewItem = () => {
    
    addItem().then((response) => {
      // console.log('response', response);

      if (response.hasOwnProperty('errors') && response.errors?.graphQLErrors.length > 0) {
        console.log(response.errors.graphQLErrors);
        setFormErrors(prev => [...response.errors.graphQLErrors]);
        
        return;
      }
      
      toast.success(`Nuevo Insumo ${response.data.addItem.name} ha sido creado`);

      toggleOffCanvas();
      setFormValues({});
      setFormErrors([]);
    })
    .catch((error) => {
      console.log(error);
      setFormErrors([{message: 'Error de Aplicacion: error.message'}]);
    });

    console.log('grabando callback');
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mb-8">Insumos</h1>

      {/* Resultados */}
      <div className="flex justify-between align-middle py-4">
        
        <p className='text-gray-500 flex items-center'>
          {/* Tenemos <span className='text-purple-600 font-bold'>{ data.Items.length }</span> insumos. */}
          <span>Tenemos <span className='text-purple-600 font-bold'>{ dataLength }</span> insumos.</span>
          <a href="#" 
            className="bg-purple-600 text-white rounded-lg font-bold hover:bg-yellow-400 p-1 ml-2 flex items-center transition-all 1s"
            onClick={() => {setFormType('new');toggleOffCanvas();}}>
            <RiAddCircleLine className="text-purple-100 font-bold mr-1 space-x-2" />
            <span>Agregar nuevo Insumo</span>
          </a>
        </p>
        
        <p className='flex items-center gap-2'>
          Ordenar por:{" "}
          <span className='text-purple-600 font-bold hover:cursor-pointer'>Nombre</span>{" "}
          <RiArrowDownLine />
        </p>

      </div>

      <div className="insumos-results">
        <ListItems setDataLength={setDataLength} />
      </div>

      {
        isOpen && <OffCanvas offCanvasContent={<ItemForm formFields={formFields} setFormValues={setFormValues} formValues={formValues} onSubmitHandler={onSubmitHandler} formErrors={formErrors} />} />
      }
    </>
  )

}
