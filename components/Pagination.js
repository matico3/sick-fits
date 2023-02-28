import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import styled from 'styled-components';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

const ProductsPageStyles = styled.div`
  justify-content: center;
`;

export default function Pagination({ page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if (loading) return <></>;
  if (error) return <DisplayError error={error} />;
  const count = data?._allProductsMeta.count;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits | Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page === 1}>←</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page === pageCount}>→</a>
      </Link>
    </PaginationStyles>
  );
}
