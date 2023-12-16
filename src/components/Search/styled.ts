import styled from 'styled-components';

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInputStyled = styled.input`
  flex: 1 0 auto;
  min-width: 0;
  border: 0 none;
  &:hover,
  &:focus {
    outline: 0 none;
  }
`;
