import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useUser } from './User';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import Checkout from './Checkout';
import { useEffect, useRef } from 'react';

const CartItemStyles = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product?.photo.image.publicUrlTransformed}
        alt={'blabla'}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const User = useUser();
  const ref = useRef();

  const { cartOpen, closeCart, setRefForCartFocus } = useCart();

  useEffect(() => {
    setRefForCartFocus(ref);
  }, []);

  if (!User) return null;
  return (
    <CartStyles open={cartOpen} ref={ref} onBlur={closeCart} tabIndex={0}>
      <header>
        <Supreme>{User.name}'s cart</Supreme>
        <CloseButton type="button" onClick={closeCart}>
          &times;
        </CloseButton>
      </header>
      <ul>
        {User.cart.map((cartItem) => (
          <div>
            <CartItem cartItem={cartItem} key={cartItem.id} />
          </div>
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(User.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
