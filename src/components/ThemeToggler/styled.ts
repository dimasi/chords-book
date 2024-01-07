import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const ThemeTogglerStyled = styled.div<IStyledWithThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transform: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].themeTogglerTransform};
  border-radius: 15px;
  background: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].themeTogglerBackgroundColor};
`;
