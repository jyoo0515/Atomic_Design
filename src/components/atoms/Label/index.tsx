import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  label: string;
}

function Label({ label }: LabelProps) {
  return <StyledLabel>{label}</StyledLabel>;
}

export default Label;

const StyledLabel = styled.label`
  border-radius: 25%;
`;
