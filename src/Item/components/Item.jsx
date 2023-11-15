import { useEffect } from 'react';
import { RiStethoscopeFill, RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri'
import { startAnimation } from '../../utils/startAnimation';

export default function Item({insumo, confirmDelete}) {
  
  useEffect(() => {
      startAnimation();
  },[]);

  return (
    <div className="bg-white rounded-xl p-8 mb-4 flex gap-8 w-full shadow-sm hover:shadow-md hover:border-purple-600 border-2 transition-all duration-300 opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        {/* Icon */}
        <div className="w-[10%] flex items-center justify-center">
          <span >
            <RiStethoscopeFill className="text-7xl bg-purple-100 rounded-sm p-4" />
          </span>
        </div>

        {/* Title */}
        <div className="w-[60%]">
          <h1 className="text-xl flex items-center gap-4 mb-2">
            {insumo.name}
            <span className="text-xs py-1 px-2 bg-yellow-100 font-bold text-yellow-600 rounded-sm">{insumo.type}</span>
          </h1> 
          <p className="text-gray-500">{insumo.brand}</p>
        </div>

        {/* Info */}
        <div className="w-[20%]">
          <h3 className="text-lg text-gray-500 mb-2">{insumo.internal_code}</h3>
          <h3 className="text-lg text-gray-500 mb-2 italic">{insumo.serial_number}</h3>
          <p></p>
        </div>

        {/* Actions */}
        <div className="w-[10%] flex items-center justify-center gap-2">
          <button title="Editar Item">
            <RiEdit2Fill className="text-5xl bg-green-300 rounded-lg p-4 transition-all duration-300 hover:text-6xl" />
          </button>
          <button title="Borrar Item" onClick={(event) => confirmDelete(event)} data-insumo={insumo.name} data-id={insumo._id}>
            <RiDeleteBin5Fill className="text-5xl bg-red-500 rounded-lg p-4 transition-all duration-300 hover:text-6xl" />
          </button>
        </div>

    </div>
  )
}
