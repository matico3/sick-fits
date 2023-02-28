import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import MenuIcon from './MenuIcon';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import { useState } from 'react';
import styled from 'styled-components';

const MobileNavStyles = styled.div`
  display: grid;
`;

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  const [toggled, setToggled] = useState(false);

  return (
    <MobileNavStyles
      onBlur={() => setToggled(false)}
      onClick={() => (toggled ? setToggled(false) : setToggled(true))}
      tabIndex={0}
    >
      <MenuIcon toggled={toggled} setToggled={setToggled} />
      <NavStyles open={toggled}>
        <Link href="/products">Products</Link>

        {user && (
          <>
            <Link href="/sell">Sell</Link>

            <Link href="/orders">Orders</Link>

            <Link href="/account">Account</Link>

            <SignOut>Sign Out</SignOut>

            <button type="button" onClick={openCart}>
              My Cart
              <CartCount
                count={user.cart.reduce(
                  (accumulator, cartItem) => accumulator + cartItem.quantity,
                  0
                )}
              />
            </button>
          </>
        )}
        {!user && <Link href="/signin">Sign in</Link>}
      </NavStyles>
    </MobileNavStyles>
  );
}
