import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Loading from './Loading';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  --repeat: auto-fit;

  @media (min-width: calc(400px * 4)) {
    --repeat: 4;
  }

  display: grid;
  grid-template-columns: repeat(var(--repeat), minmax(400px, 1fr));
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 20px;
  p {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsListStyles>
      {data.allProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ProductsListStyles>
  );
}
