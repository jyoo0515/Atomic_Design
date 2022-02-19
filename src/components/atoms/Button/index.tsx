import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

interface StyleProps {
  primary?: boolean;
}

function Button({ primary, size, label, ...props }: ButtonProps) {
  return (
    <StyledButton primary={primary} onClick={props.onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<StyleProps>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.gray_1 : props.theme.colors.blue};
  /* color: ${(props) => props.theme.colors.white}; */
  border: none;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
`;
