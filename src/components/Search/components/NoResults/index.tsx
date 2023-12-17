import { SearchNoResultsStyled, SearchNoResultsResetSearchStyled } from './styled';
import { ISearchNoResultsProps } from '@/components/Search/components/NoResults/types';

export const SearchNoResults = ({ text, onClickReset }: ISearchNoResultsProps) => (
  <SearchNoResultsStyled>
    {text}.<SearchNoResultsResetSearchStyled onClick={onClickReset}>Reset search</SearchNoResultsResetSearchStyled>
  </SearchNoResultsStyled>
);
