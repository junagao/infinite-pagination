import styled from '@emotion/styled'

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => `${theme.space[6]} ${theme.space[0]}`};
`

export default Text
