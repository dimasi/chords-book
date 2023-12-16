import styled from 'styled-components';

export const SortStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 0 auto;
  font-size: 14px;
  white-space: nowrap;
`;

export const SortTitleStyled = styled.div`
  margin: 0 10px 0 0;
`;

export const SortItemStyled = styled.div``;

export const SortActiveItemStyled = styled(SortItemStyled)`
  padding: 0 20px 0 0;
  position: relative;
  font-weight: 700;
`;

export const SortActiveItemChevronStyled = styled(SortItemStyled)`
  position: absolute;
  right: 0;
  top: 0;
  font-weight: 700;
`;
