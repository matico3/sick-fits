import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';

const InnerStyles = styled.div`
  /* max-width: var(--maxWidth);
  margin: 0 auto; */
  padding: 2rem;
  /* display: grid;
  grid-template-columns: 1fr; */
`;

export default function Page({ children }) {
  return (
    <div>
      <Head>
        <title>Sick Fits</title>
      </Head>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
