import React from 'react'
import { useListInventoryMovements } from '../custom-hooks';
import { ColorRing } from  'react-loader-spinner'
import TableWithPagination from '../../components/TableWithPaginator';

export default function ListInventoryMovements() {

  const estados_style = {
    'Ingreso': 'bg-green-100 text-green-600',
    'Disponible': 'bg-green-100 text-green-600',
    'En Reparación': 'bg-red-100 text-red-600',
    'En Préstamo': 'bg-blue-100 text-blue-600',
  }

  const { loading, error, data } = useListInventoryMovements();

  if (loading) return (
    <div className="p-8 mb-4 flex gap-8 w-full justify-center">
        <ColorRing
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#784f91', '#e7b63a', '#93bb4d', '#d54062', '#4b8dcf']}
        />
    </div>
  );

  if (error) return <div className="p-8 mb-4 flex gap-8 w-full justify-center">Oh no! un error ha ocurrido... {error.message}</div>;

  return (
    <TableWithPagination titles={['Insumo','Último Estado','Fecha Último Estado','Lugar','Responsable','Acciones']} data={data.InventoryMovements} rowsPerPage="6" />
  )
}
