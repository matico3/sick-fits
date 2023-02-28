import SingleItemQuery from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  console.log(query);

  return <SingleItemQuery id={query.id} />;
}
