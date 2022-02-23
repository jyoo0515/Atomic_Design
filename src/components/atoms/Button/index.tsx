import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ type = 'button', disabled = false, ...props }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={props.onClick} disabled={disabled} />
  );
}

export default Button;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.type == 'button'
      ? props.theme.colors.gray_1
      : props.theme.colors.blue};
  /* color: ${(props) => props.theme.colors.white}; */
  border: none;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
`;
