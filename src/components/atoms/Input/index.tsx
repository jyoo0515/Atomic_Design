import React from 'react';
import styled from 'styled-components';

interface Props {
  placeholder?: string;
  readOnly?: boolean;
}

function Input({ placeholder, readOnly = false }: Props) {
  return <StyledInput placeholder={placeholder} readOnly={readOnly} />;
}

export default Input;

const StyledInput = styled.input``;
