import styled from '@emotion/styled'

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${(props) => props.theme.colors.text.body};
  padding: ${({ theme }) => `${theme.space[6]} ${theme.space[0]}`};
`

export default Text
