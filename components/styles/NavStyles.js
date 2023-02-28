import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0 0 0 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;

  @media only screen and (min-width: 1025px) {
    a,
    button {
      color: var(--midGrey);
      padding: 1rem 3rem;
      display: flex;
      align-items: center;
      position: relative;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 1em;
      background: none;
      border: 0;
      transition: all 0.2s;
      cursor: pointer;

      &:before {
        content: '';
        width: 2px;
        background: var(--lightGray);
        height: 100%;
        left: 0;
        position: absolute;
        transform: skew(-20deg);
        top: 0;
        bottom: 0;
      }
      &:after {
        height: 2px;
        background: red;
        content: '';
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 2rem;
      }
      &:hover,
      &:focus {
        text-decoration: none;
        color: #262626;
        transform: scale(1.04);
      }

      @media (max-width: 1025px) {
        font-size: 10px;
        padding: 0 10px;
      }
      &:active {
        color: black;
      }
    }
  }
  @media only screen and (max-width: 1025px) {
    width: 100%;
    position: absolute;
    top: 15rem;
    right: 0;
    z-index: 1;
    display: grid;
    justify-items: stretch;
    grid-template-rows: repeat(6, 90px);
    @media (max-height: 800px) {
      grid-template-rows: repeat(6, 25%);
    }
    position: relative;
    position: fixed;
    transform: translateX(100%);
    opacity: 0%;
    transition: all 0.3s;
    background: linear-gradient(#ff575a, #f56262);

    ${(props) =>
      props.open &&
      `
    opacity: 100%;
    transform: translateX(0);`};

    a,
    button {
      display: grid;
      justify-items: center;
      align-items: center;
      position: relative;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 1em;
      background: none;
      border: 0;
      border-bottom: 2px solid var(--grey);
      grid-auto-flow: column;
      justify-content: space-evenly;
      cursor: pointer;
      transition: 0.2s;
      &:hover,
      &:focus {
        outline: none;
        text-decoration: none;
        font-size: 25px;
      }
      color: var(--grey);
      text-shadow: 2px 2px rgba(256, 256, 256, 0.2);
    }
  }
`;

export default NavStyles;
