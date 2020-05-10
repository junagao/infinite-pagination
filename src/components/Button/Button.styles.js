import styled from '@emotion/styled'

const ButtonStyled = styled.button`
  border: ${({ theme }) => theme.borders.none};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.text.body};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  outline: none;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[0]}`};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  width: 100vw;
  &:hover {
    color: ${({ disabled, theme }) =>
      disabled ? theme.colors.disabled : theme.colors.background};
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.background : theme.colors.text.body};
  }
`

export default ButtonStyled
