import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import Head from 'next/head';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import OrderStyles from './styles/OrderStyles';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
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

export default function SingleOrder({ id }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError>Error: {error.message}</DisplayError>;
  const order = data.Order;
  const orderItems = order.items;

  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - {orderItems.id}</title>
      </Head>

      <p>
        <span>Order Id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>{orderItems.length} items:</span>
      </p>
      {orderItems.map((orderItem) => (
        <div className="order-item" key={orderItem.id}>
          <img
            src={orderItem.photo.image.publicUrlTransformed}
            alt={orderItem.photo.image.altText}
          />
          <div className="item-details">
            <h2>{orderItem.name}</h2>
            <p>Quantity: {orderItem.quantity}</p>
            <p>Each: {formatMoney(orderItem.price)}</p>
            <p>Total: {formatMoney(orderItem.price * orderItem.quantity)}</p>
            <p>{orderItem.description}</p>
          </div>
        </div>
      ))}
      <p>
        <span>Order total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
    </OrderStyles>
  );
}
