import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [signup, { data, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,

    // Refetch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await signup().catch(console.error);

    console.log(error);
    // Router.push({
    //   pathname: '/',
    // });
  }

  // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Error error={error} />
      <p>Don't yet have an account with us?</p>
      <h2>Sign Up For An Account</h2>
      {data?.createUser && (
        <p>
          Signed up with {data.createUser.email} - Please go ahead and sign in!
        </p>
      )}
      <fieldset disabled={data?.createUser} aria-busy={false}>
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={inputs.name}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            autoComplete="email"
            onChange={handleChange}
            value={inputs.email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
            value={inputs.password}
          />
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>
    </Form>
  );
}
