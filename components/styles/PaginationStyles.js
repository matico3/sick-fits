import styled from 'styled-components';

const PaginationStyles = styled.div`
  /* display: inline-grid; */
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  /* align-self: center; */
  /* justify-self: center; */
  margin: 1.5rem auto;

  border: 1px solid var(--lightGray);
  border-radius: 10px;
  font-weight: bold;
  font-size: medium;
  text-decoration-style: wavy;
  & > * {
    margin: 0;
    /* padding: 15px 30px; */

    text-align: center;
    vertical-align: middle;
    line-height: 70px;
    width: 130px;
    height: 70px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  p {
    font-size: 14px;
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  a {
    font-size: 40px;
    transition: all 0.3s;
    &:hover {
      text-decoration: none;

      color: var(--red);
    }
  }

  @media only screen and (max-width: 700px) {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, 50px);
    padding: 0 5px 0 5px;
    margin: 0 auto 2rem;
    a {
      grid-row: 1;
    }
    p {
      align-self: center;
    }
    justify-content: center;

    & > * {
      height: 50px;
      &:nth-last-child(2) {
        border-right: 0;
      }
    }
  }
`;

export default PaginationStyles;
