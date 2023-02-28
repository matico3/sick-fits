import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import OrderItemStyles from './styles/OrderItemStyles';
import Link from 'next/link';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import Loading from './Loading';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const OrdersUI = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;

  a {
    text-decoration: none;
  }
`;

function countItemsInAnOrder(order) {
  return order.items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
}

export default function Orders({ id }) {
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY);

  if (loading) return <Loading />;

  if (error) return <DisplayError>Error: {error.message}</DisplayError>;
  const { allOrders } = data;

  return (
    <>
      <h2>You have {allOrders.length} orders!</h2>
      <OrdersUI>
        <Head>
          <title>Your orders ({allOrders.length})</title>
        </Head>
        {allOrders.map((order) => (
          <OrderItemStyles key={order.id}>
            <Link href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)} item
                    {countItemsInAnOrder(order) === 1 ? '' : 's'}
                  </p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? '' : 's'}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      key={`image-${item.id}`}
                      src={item.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemStyles>
        ))}
      </OrdersUI>
    </>
  );
}
