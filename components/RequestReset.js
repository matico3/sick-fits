import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: '',
  });

  const [signup, { data, error }] = useMutation(REQUEST_RESET_MUTATION, {
    variables: inputs,

    // Refetch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await signup().catch(console.error);

    // Router.push({
    //   pathname: '/',
    // });
  }
  console.log(data);

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Error error={error} />
      <p>Forgot your password?</p>
      <h2>Request A Password Reset</h2>
      {data?.sendUserPasswordResetLink === null && (
        <p>Success! Check your email for a link!</p>
      )}
      <fieldset disabled={data?.createUser} aria-busy={false}>
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

        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  );
}
