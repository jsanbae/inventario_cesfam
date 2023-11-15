import { gql } from '@apollo/client';

export const LIST_INVENTORY_MOVEMENTS = gql`
  query {
    InventoryMovements {
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
      createdAt
      updatedAt
    }
  }
`;