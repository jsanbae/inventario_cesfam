import React, { Fragment } from 'react'

const inventario = [
  {insumo: 'Otoscopio', estado: 'Disponible', fecha: '01/03/2023', lugar: 'Box 1'},
  {insumo: 'Hemoglucotest', estado: 'En Reparación', fecha: '24/01/2023', lugar: 'Bodega'},
  {insumo: 'Esfigmomanómetro', estado: 'En Préstamo', fecha: '15/02/2023', lugar: 'Box 3'},
];

const estados_style = {
  'Disponible': 'bg-green-100 text-green-600',
  'En Reparación': 'bg-red-100 text-red-600',
  'En Préstamo': 'bg-blue-100 text-blue-600',
}

export default function Inventario() {
  return (
    <Fragment>
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-8">Inventario</h1>
      
      {/* Card */}
      <div className="bg-white rounded-xl p-8 mb-4 flex flex-col gap-8 w-full shadow-sm">

        {/* Table Title */}
        <div className="flex items-center justify-between pb-4">
          <h2 className='text-xl text-left font-semibold leading-loose'>Estado de los Insumos</h2>
        </div>


        <table className='w-full'>
          <thead>
            <tr className='text-sm font-semibold'>
              <td className='py-4 border-b border-purple-500'>Insumo</td>
              <td className='py-4 border-b border-purple-500'>Último Estado</td>
              <td className='py-4 border-b border-purple-500'>Fecha Último Estado</td>
              <td className='py-4 border-b border-purple-500'>Lugar</td>
              <td className='py-4 border-b border-purple-500'>Acciones</td>
            </tr>
          </thead>
          <tbody>
          {
            inventario.map((item, index) => {
              return (
                <tr className='text-sm text-gray-500'>
                  <td className='py-4'>{item.insumo}</td>
                  <td className='py-4'>
                    <span className={`flex justify-center py-1 w-24 font-medium capitalize rounded-full ${estados_style[item.estado]}`}>
                      {item.estado}
                    </span>
                  </td>
                  <td className='py-4'>{item.fecha}</td>
                  <td className='py-4'>{item.lugar}</td>
                  <td className='py-4'></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      
      </div>

    </Fragment>
  )
}
