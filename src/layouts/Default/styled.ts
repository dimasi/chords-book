import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DefaultLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const DefaultLayoutHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: 2px solid #242424;
`;

export const DefaultLayoutAppTitleStyled = styled.div`
  margin: 0 20px 0 0;
  color: #121212;
  font-size: 20px;
  font-weight: 700;
`;

export const DefaultLayoutAppNavStyled = styled.div`
  margin: 0 0 0 auto;
`;

export const DefaultLayoutAppNavItemStyled = styled(NavLink)`
  margin: 0 0 0 20px;
  color: #121212;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
`;

export const DefaultLayoutAppNavActiveItemStyled = styled(DefaultLayoutAppNavItemStyled)`
  font-weight: 700;
`;

export const DefaultLayoutHeaderAvatarStyled = styled.div`
  margin: 0 0 0 20px;
`;

export const DefaultLayoutPageStyled = styled.div`
  height: calc(100vh - 50px);
`;
