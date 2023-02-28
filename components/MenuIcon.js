import styled from 'styled-components';

const MenuIconStyles = styled.div`
  display: inline-block;
  cursor: pointer;
  justify-self: end;
  margin-right: 50px;
  align-self: center;
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change1 {
    transform: translate(0, 11px) rotate(-45deg);
  }

  .change2 {
    opacity: 0;
  }

  .change3 {
    transform: translate(0, -11px) rotate(45deg);
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

export default function MenuIcon({ toggled, setToggled }) {
  return (
    <MenuIconStyles onClick={() => setToggled(!toggled)}>
      <div className={`bar1 ${toggled ? 'change' : ''}1`}></div>
      <div className={`bar2 ${toggled ? 'change' : ''}2`}></div>
      <div className={`bar3 ${toggled ? 'change' : ''}3`}></div>
    </MenuIconStyles>
  );
}
