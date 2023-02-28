import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: '',
    password: '',
    token: token,
  });

  const [resetPassword, { data, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await resetPassword();

    // Router.push({
    //   pathname: '/',
    // });
  }
  console.log(data);

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Error error={error || successfulError} />
      <h2>Reset Your Password</h2>
      {data?.redeemUserPasswordResetToken === null && (
        <p>Success! You can now sign in with your new password.</p>
      )}
      <fieldset disabled={false} aria-busy={false}>
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

        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  );
}
