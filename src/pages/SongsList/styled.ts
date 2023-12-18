import styled from 'styled-components';

const SIDE_PANEL_WIDTH = '460px';

export const SongsListPageStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const SongsListPageContentStyled = styled.div`
  flex: 0 0 auto;
  width: calc(100% - ${SIDE_PANEL_WIDTH});
  border-right: 2px solid #242424;
`;

export const SongsListPageSongsStyled = styled.div`
  height: calc(100% - 40px);
  overflow: auto;
  padding: 20px;
`;

export const SongsListPageAddFormStyled = styled.div`
  flex: 0 0 auto;
  width: ${SIDE_PANEL_WIDTH};
`;

export const SongsListPageAddFormContainerStyled = styled.div`
  padding: 30px;
`;

export const SongsListPageHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 40px;
  padding: 0 20px;
  border-bottom: 2px solid #242424;
`;

export const SongsListPageHeaderTitleStyled = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;

export const SongsListPageAddFormFieldStyled = styled.div`
  margin: 0 0 12px;
`;

export const SongsListPageAddFormFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 0 0;
`;

export const SongsListPageAddFormExistedSongErrorStyled = styled.div`
  margin: 10px 0 0;
  padding: 10px;
  background: #e34d4d;
  color: #fff;
  font-size: 14px;
  font-style: italic;
  text-align: center;
`;

export const SongsListPageAddFormGoToSongButtonStyled = styled.button`
  margin: 0 5px;
  padding: 0;
  border: 0 none;
  background: transparent;
  color: #fff;
  font-size: inherit;
  font-style: italic;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
`;
