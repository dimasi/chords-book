import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { SearchInputStyled, SearchStyled } from './styled';

export const Search = () => (
  <SearchStyled>
    <Icon path={mdiMagnify} size={1} color="#232323" />
    <SearchInputStyled placeholder="Search..." />
  </SearchStyled>
);
