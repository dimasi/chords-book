import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const DefaultLayoutStyled = styled.div<IStyledWithThemeProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].defaultLayoutBackground};
`;

export const DefaultLayoutHeaderStyled = styled.div<IStyledWithThemeProps>`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  border-bottom: 2px solid
    ${(props: IStyledWithThemeProps) => themeConstants[props.theme].defaultLayoutHeaderBorderBottomColor};
`;

export const DefaultLayoutAppTitleStyled = styled.div<IStyledWithThemeProps>`
  margin: 0 20px 0 0;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].defaultLayoutAppTitleColor};
  font-size: 20px;
  font-weight: 700;
`;

export const DefaultLayoutAppNavStyled = styled.div`
  margin: 0 0 0 auto;
`;

export const DefaultLayoutAppNavItemStyled = styled(NavLink)<IStyledWithThemeProps>`
  margin: 0 0 0 20px;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].defaultLayoutAppNavItemColor};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
`;

export const DefaultLayoutAppNavActiveItemStyled = styled(DefaultLayoutAppNavItemStyled)<IStyledWithThemeProps>`
  font-weight: 700;
`;

export const DefaultLayoutThemeTogglerStyled = styled.div`
  margin: 0 0 0 15px;
`;

export const DefaultLayoutHeaderAvatarStyled = styled.div`
  margin: 0 0 0 15px;
`;

export const DefaultLayoutPageStyled = styled.div`
  height: calc(100vh - 56px);
`;
