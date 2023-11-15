import MovementType from "./MovementType";
import randomID from "../../utils/randomID";

const fieldKey = () => randomID(); 

const inventoryFields = [
  {
    key: fieldKey(),
    labelText: "Tipo de Registro",
    labelFor: "type",
    id: "type",
    name: "type",
    type: "select",
    autoComplete: "type",
    isRequired: true,
    placeholder: "Tipo de Registro",
    options: MovementType.map((item) => ({ value: item, label: item })),
  },
  {
    key: fieldKey(),
    labelText: "Fecha",
    labelFor: "date",
    id: "date",
    name: "date",
    type: "date",
    autoComplete: "date",
    isRequired: true,
    placeholder: "Fecha",
  },
  {
    key: fieldKey(),
    labelText: "Insumo",
    labelFor: "item",
    id: "item",
    name: "item",
    type: "select",  // Cambiado a un campo de selección para insumos
    autoComplete: "item",
    isRequired: true,
    placeholder: "Insumo",
    // Las opciones se poblarán dinámicamente desde la API backend
    options: [],
  },
  {
    key: fieldKey(),
    labelText: "Lugar",
    labelFor: "place",
    id: "place",
    name: "place",
    type: "text",
    autoComplete: "place",
    isRequired: false,
    placeholder: "Lugar",
  },
  {
    key: fieldKey(),
    labelText: "Responsable",
    labelFor: "responsable",
    id: "responsable",
    name: "responsable",
    type: "text",
    autoComplete: "responsable",
    isRequired: false,
    placeholder: "Responsable",
  },
  {
    key: fieldKey(),
    labelText: "Comentario",
    labelFor: "comment",
    id: "comment",
    name: "comment",
    type: "textarea",
    autoComplete: "comment",
    isRequired: false,
    placeholder: "Comentario",
  },
];

export { inventoryFields };