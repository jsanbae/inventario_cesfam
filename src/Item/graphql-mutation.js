import { gql } from '@apollo/client';

export const ADD_ITEM_MUTATION = gql`
  mutation addItem($itemInput: ItemInput!) {
    addItem(itemInput: $itemInput) {
      _id
      type
      name
      brand
      internal_code
      serial_number
      description
      state
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
   mutation updateItem($id: ID!, $itemInput: ItemInput!) {
      updateItem(id: $id, itemInput: $itemInput) {
        _id
        type
        name
        brand
        internal_code
        serial_number
        description
        state
   }
}
`;

export const DELETE_ITEM_MUTATION = gql`
    mutation deleteItem($id: ID!) {
      deleteItem(id: $id)
    }
`;