import Router from 'next/router';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const END_SESSION = gql`
  mutation END_SESSION {
    endSession
  }
`;

export default function SignOut({ children }) {
  const [signout, { error }] = useMutation(END_SESSION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleClick() {
    Router.push({
      pathname: `/`,
    });
    const res = await signout();
  }
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
