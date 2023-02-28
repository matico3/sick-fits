export default function calcTotalPrice(cart) {
  return cart?.reduce((accumulator, cartItem) => {
    if (!cartItem.product) return accumulator; // products can be deleted,
    // but they could still be in your cart
    return accumulator + cartItem.quantity * cartItem.product.price;
  }, 0);
}
