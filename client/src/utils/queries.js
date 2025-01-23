import { gql } from "@apollo/client";
export const GET_ME = gql`
  query Me {
    me {
      username
      bookCount
      email
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
      _id
    }
  }
`;
