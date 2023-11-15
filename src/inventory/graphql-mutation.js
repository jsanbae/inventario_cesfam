import { gql } from '@apollo/client';

export const ADD_INVENTORY_REGISTRY_MUTATION = gql`
  mutation addInventoryMovement($inventoryMovementInput: InventoryMovementInput!) {
    addInventoryMovement(inventoryMovementInput: $inventoryMovementInput) {
      _id
      type
      date
      item {
        _id
        name
        type
        internal_code
        description
      }
      place
      responsable
      comment
    }
  }
`;

export const UPDATE_INVENTORY_REGISTRY_MUTATION = gql`
  mutation updateInventoryMovement($id: ID!, $inventoryMovementInput: inventoryMovementInput!) {
    updateItupdateInventoryMovementem(id: $id, inventoryMovementInput: $inventoryMovementInput) {
      _id
      type
      date
      item {
        _id
        name
        type
        internal_code
        description
      }
      place
      responsable
      comment
  }
}
`;

export const DELETE_INVENTORY_REGISTRY_MUTATION = gql`
    mutation deleteInventoryMovement($id: ID!) {
      deleteInventoryMovement(id: $id)
    }
`;