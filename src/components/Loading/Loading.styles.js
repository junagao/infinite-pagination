import styled from '@emotion/styled'

const Spinner = styled.div`
  border: 0.25rem solid #f3f3f3;
  border-radius: ${({ theme }) => theme.radii.round};
  border-top: 0.25rem solid #777;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 0.75s linear infinite;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[7]};
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
