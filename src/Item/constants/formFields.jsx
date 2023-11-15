import ItemsState from "src/Item/constants/ItemsState"
import ItemsTypeEnum from "src/Item/constants/ItemsTypeEnum"
import randomID from "src/utils/randomID";

const fieldKey = () => randomID();

const insumoFields = [
    {
        key:fieldKey(),
        labelText:"Tipo",
        labelFor:"type",
        id:"type",
        name:"type",
        type:"select",
        autoComplete:"type",
        isRequired:true,
        placeholder:"Tipo",
        options: ItemsTypeEnum.map((item) => ({value: item, label: item}))
    },
    {
        key:fieldKey(),
        labelText:"Nombre",
        labelFor:"name",
        id:"name",
        name:"name",
        type:"text",
        autoComplete:"name",
        isRequired:true,
        placeholder:"Nombre"   
    },
    {
        key:fieldKey(),
        labelText:"Código Interno",
        labelFor:"internal_code",
        id:"internal_code",
        name:"internal_code",
        type:"text",
        autoComplete:"internal_code",
        isRequired:true,
        placeholder:"Código Interno"   
    },
    {
        key:fieldKey(),
        labelText:"Descripción",
        labelFor:"description",
        id:"description",
        name:"description",
        type:"text",
        autoComplete:"description",
        isRequired:false,
        placeholder:"Descripción"   
    },
    {
        key:fieldKey(),
        labelText:"Marca",
        labelFor:"brand",
        id:"brand",
        name:"brand",
        type:"text",
        autoComplete:"brand",
        isRequired:false,
        placeholder:"Marca"
    },
    {
        key:fieldKey(),
        labelText:"Número de Serie",
        labelFor:"serial_number",
        id:"serial_number",
        name:"serial_number",
        type:"text",
        autoComplete:"serial_number",
        isRequired:false,
        placeholder:"Número de Serie"
    },
    {
        key:fieldKey(),
        labelText:"Estado",
        labelFor:"state",
        id:"state",
        name:"state",
        type:"select",
        autoComplete:"state",
        isRequired:false,
        placeholder:"Estado",
        options: ItemsState.map((item) => ({value: item, label: item}))
    }
]

export {
    insumoFields
}

