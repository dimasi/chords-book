import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import {
  SortActiveItemChevronStyled,
  SortActiveItemStyled,
  SortItemStyled,
  SortStyled,
  SortTitleStyled,
} from './styled';

export const Sort = () => (
  <SortStyled>
    <SortTitleStyled>Sort by:</SortTitleStyled>
    <SortActiveItemStyled>
      Song
      <SortActiveItemChevronStyled>
        <Icon path={mdiChevronUp} size={0.8} color="#232323" />
      </SortActiveItemChevronStyled>
    </SortActiveItemStyled>
    <SortItemStyled>Author</SortItemStyled>
  </SortStyled>
);
