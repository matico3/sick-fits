import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  console.log(query.token);
  if (!query?.token) {
    return (
      <div>
        <p>Sorry, you must supply a token</p>;<RequestReset></RequestReset>;
      </div>
    );
  }
  return (
    <div>
      <p>ResetPage {query.token}</p>
      <Reset token={query.token}></Reset>
    </div>
  );
}
