import styled from 'styled-components';

const SIDE_PANEL_WIDTH = '460px';

export const SongPageStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const SongPageContentStyled = styled.div`
  flex: 0 0 auto;
  width: calc(100% - ${SIDE_PANEL_WIDTH});
  border-right: 2px solid #242424;
`;

export const SongPageAddFormStyled = styled.div`
  flex: 0 0 auto;
  width: ${SIDE_PANEL_WIDTH};
`;

export const SongPageHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  padding: 0 20px;
  position: relative;
  border-bottom: 2px solid #242424;
`;

export const SongPageBackButtonStyled = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const SongPageNameStyled = styled.span`
  flex: 0 0 auto;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SongPageAuthorStyled = styled.span`
  flex: 0 0 auto;
  font-size: 18px;
  text-transform: uppercase;
`;

export const SongPageSongChordsContainerStyled = styled.div`
  height: calc(100vh - 50px - 40px);
  overflow: auto;
`;

export const SongPageGridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
`;

export const SongPageGridItemStyled = styled.div`
  width: ${100 / 6}%;
  flex: 0 0 auto;
  padding: 6px;
`;

export const SongPageGridItemHeightHolderStyled = styled.div`
  width: 100%;
  padding-bottom: 120%;
  position: relative;
`;

export const SongPageHeaderTitleStyled = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;

export const SongPageChordSearchContainerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-bottom: 2px solid #242424;
`;

export const SongPageChordsContainerStyled = styled.div`
  height: calc(100vh - 50px - 40px - 40px);
  overflow: auto;
`;

export const SongPageChordsGroupStyled = styled.div`
  padding: 15px 0 0;
`;

export const SongPageChordsGroupTitleStyled = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

export const SongPageChordsGridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
`;

export const SongPageChordsGridItemStyled = styled.div`
  width: ${100 / 6}%;
  flex: 0 0 auto;
  padding: 6px;
`;

export const SongPageChordsGridItemHeightHolderStyled = styled.div`
  width: 100%;
  padding-bottom: 120%;
  position: relative;
`;

export const SongPageChordRemoveButtonStyled = styled.div`
  position: absolute;
  z-index: 2;
  top: -18px;
  right: -24px;
`;
