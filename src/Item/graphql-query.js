import { gql } from '@apollo/client';

export const LIST_ITEMS = gql`
  query listItemsByFilter($pattern: String,  $limit: Int, $skip: Int, $sort_field: String, $sort_order: String) {
    Items (pattern: $pattern, limit: $limit, skip: $skip, sort_field: $sort_field, sort_order: $sort_order) {
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

