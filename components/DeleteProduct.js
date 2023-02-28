import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  // UPDATE THE CACHE AND DELETE THE ITEM FROM THE CACHE
  // cache.identify FINDS THE ELEMENT BASED ON THE ____typename ('Product) and id '4235'
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id: id },
    update: update,
  });
  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          // delete the item
          deleteProduct().catch((error) => alert(error.message));
        }
      }}
    >
      {children}
    </button>
  );
}
