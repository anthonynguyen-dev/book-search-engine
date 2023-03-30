import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query Me {
    me {
      _id
      email
      savedBooks {
        authors
        title
        bookId
        description
        image
        link
      }
      username
    }
  }
`;
