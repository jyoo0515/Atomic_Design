import React from 'react';
import Atoms from '../../atoms';
import styled from 'styled-components';

interface Props {
  fieldName: string;
  readOnly?: boolean;
}

function InputBox({ fieldName, readOnly }: Props) {
  return (
    <Container>
      <Atoms.Label label={fieldName} />
      <Atoms.Input placeholder={fieldName} readOnly={readOnly} />
    </Container>
  );
}

export default InputBox;

const Container = styled.div`
  display: inline-block;
`;
