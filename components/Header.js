import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  padding: 1rem;
  margin-right: 3rem;
  position: relative;
  z-index: 3;
  transform: skew(-7deg);
  background: var(--red);

  @media only screen and (max-width: 390px) {
    font-size: 2rem;
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }

  transition: all 0.4s;

  &:hover {
    outline: none;
    a {
      text-decoration: none;
    }
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 2px solid var(--grey, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    /* display: grid;
    grid-template-columns: 1fr auto; */
    border-bottom: 2px solid var(--grey, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyles>
  );
}
