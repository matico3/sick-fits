import styled from 'styled-components';
import { useUser } from './User';

const AccountStyles = styled.div`
  p {
    font-size: 4rem;
    margin-left: 2rem;
    padding: 1rem;
    margin-right: 3rem;
    position: relative;
    z-index: 3;
    transform: skew(-7deg);
    background: var(--red);
  }
  span {
    color: white;
  }
`;

export default function Account() {
  const user = useUser();
  if (!user) return <p>You must log in!</p>;
  return (
    <AccountStyles>
      <p>
        Username: <span>{user.name}</span>
      </p>
      <p>
        Email: <span>{user.email}</span>
      </p>
    </AccountStyles>
  );
}
