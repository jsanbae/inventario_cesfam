import { gql } from '@apollo/client';

export const LOGIN_USER_MUTATION = gql`
  mutation login(
    $loginInput: LoginInput!
  ) {
    loginUser(
      loginInput: $loginInput
    ) {
      id:_id
      name
      email
      photo
      role
      token
   }
  }
`;