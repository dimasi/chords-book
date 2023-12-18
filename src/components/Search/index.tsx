import { Icon } from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { SearchInputStyled, SearchStyled } from './styled';
import { ISearchProps } from './types';

export const Search = ({ value, onChange }: ISearchProps) => (
  <SearchStyled>
    <Icon path={mdiMagnify} size={1} color="#232323" />
    <SearchInputStyled placeholder="Search..." onChange={onChange} value={value} />
  </SearchStyled>
);
