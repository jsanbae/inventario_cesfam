import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {RiAddCircleLine} from 'react-icons/ri';
import OffCanvas from 'src/components/Offcanvas';
import { useOffCanvasContext, useOffCanvasToggleContext } from "src/context/OffCanvasContext";
import ListInventoryMovements from 'src/Inventory/components/ListInventoryMovements';
import InventoryForm from 'src/Inventory/components/InventoryForm';
import { inventoryFields } from 'src/Inventory/constants/formFields';
import { useAddRegistry } from 'src/Inventory/custom-hooks';
import { useListItems } from "src/Item/custom-hooks";

export default function Inventario() {

  const [formFields, setformFields] = useState(inventoryFields);
  const [dataLength, setDataLength] = useState(0);
  const [formType, setFormType] = useState(null);
  const [formErrors, setFormErrors] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [onSubmitHandler, setOnSubmitHandler] = useState(null);
  const [getItems, result] = useListItems();

  const isOpen = useOffCanvasContext();
  const toggleOffCanvas = useOffCanvasToggleContext();

  const [addInventoryMovement, {isLoading}] = useAddRegistry(formValues);

  //Actualiza el listado de items en el form
  useEffect(() => {
    getItems().then((response) => {
      if (response.hasOwnProperty('errors') && response.errors?.graphQLErrors.length > 0) {
        console.log(response.errors.graphQLErrors);
        setFormErrors(prev => [...response.errors.graphQLErrors]);
        
        return;
      }

      const itemOptions = [];
      for (const item of response.data.Items) {
        itemOptions.push({value:item._id, label:`${item.name} (${item.brand}) - ${item.internal_code}`});
      }

      const fieldWithItems = formFields.map((field) => {
        if (field.name === 'item') field.options = itemOptions;
        return field;
      })

      setformFields(fieldWithItems);
    });
  },[formType]);

  // Configuracion inicial del formulario 
  useEffect(() => {
    if (formType === 'new') {
      const initialValues = formFields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {})
      
      setFormValues(initialValues);
      setOnSubmitHandler(() => onSubmitHandlerNewRegistry);
    }
  },[formType]);

  // Muestra los errores de validacion del formulario
  useEffect(() => {
    // console.log('formErrors', formErrors);
    if (formErrors.length === 0) return;
    formErrors.map((error) => toast.error(error.message));
  }, [formErrors]);
    
  // Gestiona el ingreso de un nuevo registro
  const onSubmitHandlerNewRegistry = () => {
    
    addInventoryMovement().then((response) => {
      console.log('response', response);

      if (response.hasOwnProperty('errors') && response.errors?.graphQLErrors.length > 0) {
        console.log(response.errors.graphQLErrors);
        setFormErrors(prev => [...response.errors.graphQLErrors]);
        
        return;
      }
      
      toast.success(`Nuevo Registro de ${response.data.addInventoryMovement.type} para ${response.data.addInventoryMovement.item} ha sido creado`);

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
    <Fragment>
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-8">Movimientos de Inventario</h1>
      
      {/* Button to Add New Registry */}
          <a href="#" 
            className="w-60 bg-purple-600 text-white rounded-lg font-bold hover:bg-yellow-400 p-1 ml-2 flex items-center transition-all 1s"
            onClick={() => {setFormType('new');toggleOffCanvas();}}>
              <RiAddCircleLine className="text-purple-100 font-bold mr-1 space-x-2" />
              <span>Registrar Movimiento</span>
         </a>

      {/* Card */}
      <div className="bg-white rounded-xl p-8 my-4 flex flex-col gap-8 w-full shadow-sm">

        {/* List of Inventory Movements */}
        <ListInventoryMovements />
      
      </div>
    
      {
        isOpen && <OffCanvas offCanvasContent={<InventoryForm formFields={formFields} setFormValues={setFormValues} formValues={formValues} onSubmitHandler={onSubmitHandler} formErrors={formErrors} />} />
      }
    </Fragment>
  )
}
