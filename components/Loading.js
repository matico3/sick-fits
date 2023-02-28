import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const LoadingCenteredStyles = styled.div`
  .loading {
    height: 30rem;
    justify-content: center;
    align-items: center;
  }
`;
export default function Loading() {
  return (
    <LoadingCenteredStyles>
      <Oval
        height={120}
        width={120}
        color="#77cae6"
        wrapperStyle={{}}
        wrapperClass="loading"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#3dacd1"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoadingCenteredStyles>
  );
}
