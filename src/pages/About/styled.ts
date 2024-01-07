import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const AboutPageStyled = styled.div``;

export const AboutPageHeaderStyled = styled.div<IStyledWithThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  padding: 0 20px;
  position: relative;
  border-bottom: 2px solid
    ${(props: IStyledWithThemeProps) => themeConstants[props.theme].aboutPageHeaderBorderBottomColor};
`;

export const AboutPageBackButtonStyled = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const AboutPageTitleStyled = styled.div<IStyledWithThemeProps>`
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].aboutPageTitleColor};
  flex: 0 0 auto;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const AboutPageTitle2Styled = styled.div<IStyledWithThemeProps>`
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].aboutPageTitle2Color};
  flex: 0 0 auto;
  font-size: 18px;
  text-transform: uppercase;
`;

export const AboutPageContentStyled = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 35px 15px;
`;

export const AboutPageParagraphStyled = styled.div<IStyledWithThemeProps>`
  margin: 0 0 25px;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].aboutPageParagraphColor};
`;
