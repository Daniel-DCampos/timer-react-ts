import styled from 'styled-components'

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariantColor
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => {
    return props.theme['green-500']
  }};
`
