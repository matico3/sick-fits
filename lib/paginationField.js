import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we'll take care of everything
    read(existing = [], { args, cache }) {
      // when apollo gets instructed to fetch the items, it asks this read
      // function for those items
      // we can do one of two things:
      // 1. return the items because we already have them in our cache
      // 2. return false and apollo will go fetch them from the network

      const { first, skip } = args;

      // Read the number of items on the page from cache

      const data = cache.readQuery({ query: PAGINATION_QUERY });

      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items

      const items = existing.slice(skip, skip + first).filter((x) => x);

      // If we're on the last page
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We dont have any items, we must go to the network to fetch

        // console.log('No items in the cache, fetching from network!');
        return false;
      }

      // If there are items, just return them from the cache and we don't
      // need to go to the network
      if (items.length) {
        // console.log(
        //   `There are ${items.length} items in the cache! Gonna send them to Apollo,`
        // );
        return items;
      }
      // console.log('No items in the cache, fetching from network!');
      return false; // Fallback to network
    },
    merge(existing = [], incoming, { args }) {
      const { first, skip } = args;
      // apollo comes back from the network with results from the fetch

      // console.log(`Merging items from the network ${incoming.length}`);

      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
