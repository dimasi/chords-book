import styled from 'styled-components';

export const SongListItemStyled = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  padding: 0 15px;
  margin: 0 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #aaa;
  cursor: pointer;
`;

export const SongListItemTitleStyled = styled.div`
  flex: 0 0 auto;
`;

export const SongListItemNameStyled = styled.div`
  font-weight: 700;
`;

export const SongListItemAuthorStyled = styled.div``;

export const SongListItemChordsStyled = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px 0 auto;
`;

export const SongListItemChordContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 55px;
  position: relative;
`;

export const SongListItemChordsMoreStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  color: #aaa;
  font-size: 20px;
  font-weight: 700;
`;

export const SongListItemSpacerStyled = styled.div`
  width: 3px;
  height: 42px;
  border: 1px solid #242424;
`;

export const SongListItemRemoveStyled = styled.div`
  margin: 0 0 0 10px;
`;
