import {RiStethoscopeFill} from 'react-icons/ri'

export default function Item({insumo}) {
  return (
    <div className="bg-white rounded-xl p-8 mb-4 flex gap-8 w-full shadow-sm hover:shadow-md hover:border-purple-600 border-2 transition-all">
        {/* Icon */}
        <div className="w-[10%] flex items-center justify-center">
          <span >
            <RiStethoscopeFill className="text-7xl bg-purple-100 rounded-sm p-4" />
          </span>
        </div>

        {/* Title */}
        <div className="w-[70%]">
          <h1 className="text-xl flex items-center gap-4 mb-2">
            {insumo.name}
            <span className="text-xs py-1 px-2 bg-yellow-100 font-bold text-yellow-600 rounded-sm">{insumo.categoria}</span>
          </h1> 
          <p className="text-gray-500">{insumo.marca}</p>
        </div>

        {/* Info */}
        <div className="w-[20%]">
          <h3 className="text-lg text-gray-500 mb-2">{insumo.codigo}</h3>
          <p></p>
        </div>

    </div>
  )
}
