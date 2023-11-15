import React from 'react'

export default function FormBuilder({formFields, onChangeHandler}) {
  return (
    <>
        {formFields.map((formItem) => {
            return (
                <div className="mb-10" key={formItem.key}>
                    <label 
                        className="block text-gray-700 text-sm font-bold mb-2" 
                        htmlFor={formItem.labelFor}
                    >
                        {formItem.labelText} { formItem.isRequired && <span className="text-red-500">*</span>}
                    </label>

                { formItem.type !== 'select' &&
                    <input 
                        className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" 
                        type={formItem.type} 
                        name={formItem.name} 
                        id={formItem.name} 
                        placeholder={formItem.placeholder} 
                        required={formItem.isRequired}
                        onChange={onChangeHandler}
                    />
                }

                { formItem.type === 'select' &&
                    <select 
                        className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" 
                        name={formItem.name} 
                        id={formItem.name} 
                        required={formItem.isRequired}
                        onChange={onChangeHandler}
                    >
                        <option value="">Seleccione una opción</option>
                        { formItem.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>) }
                    </select>
                }
                </div>
            )
        })}
    </>
  )
}
