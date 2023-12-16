import { useNavigate } from 'react-router-dom';
import { mdiPlaylistMusicOutline } from '@mdi/js';
import { Button } from '@/components/Button';
import { ErrorPage404Styled, ErrorPageStyled, ErrorPageTitleStyled } from './styled';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorPageStyled>
      <ErrorPage404Styled>404</ErrorPage404Styled>
      <ErrorPageTitleStyled>Oops! Page Not Found.</ErrorPageTitleStyled>
      <Button text="Go to songs" icon={mdiPlaylistMusicOutline} onClick={() => navigate('/songs')} />
    </ErrorPageStyled>
  );
};
