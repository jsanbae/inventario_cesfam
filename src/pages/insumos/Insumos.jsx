import { Fragment } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';

import Item from './Item'

const items = [
    {id: 1, name: 'Hemoglucotest', categoria: 'Hemoglocotest', marca: 'Accu-check', codigo: 1001234},
    {id: 2, name: 'Fonendoescopio', categoria: 'Fonendoescopio', marca: 'Littmann', codigo: 2001234},
    {id: 3, name: 'Esfigmomanómetro', categoria: 'Esfigmomanómetro', marca: 'Adcuff', codigo: 3001234},
    {id: 4, name: 'Otoscopio', categoria: 'Otoscopio', marca: 'Riester', codigo: 4001234},
];

export default function Insumos() {

  return (
    <Fragment>
      <h1 className="text-3xl font-semibold mb-8">Insumos</h1>

      {/* Resultados */}
      <div className="flex items-center justify-between py-4">
        
        <p className='text-gray-500'>
          Tenemos <span className='text-purple-600 font-bold'>{ items.length }</span> insumos.
        </p>
        <p className='flex items-center gap-2'>
          Ordenar por:{" "}
          <span className='text-purple-600 font-bold hover:cursor-pointer'>Nombre</span>{" "}
          <RiArrowDownLine />
        </p>

      </div>

      {
        items.map((insumo, index) => {
          return <Item key={index} insumo={insumo} />
        })
      }

    </Fragment>
  )

}
