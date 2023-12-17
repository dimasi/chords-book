import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import { ISortItemProps, ISortProps, TSortItem } from './types';
import {
  SortActiveItemChevronStyled,
  SortActiveItemStyled,
  SortItemStyled,
  SortStyled,
  SortTitleStyled,
} from './styled';
import { ESortDirection } from '@/constants';

const SortItem = <T,>({ item, isActive, sortDirection, onClick }: ISortItemProps<T>) => {
  if (isActive) {
    return (
      <SortActiveItemStyled onClick={() => onClick(item)}>
        {item.title}
        <SortActiveItemChevronStyled>
          <Icon
            path={sortDirection === ESortDirection.asc ? mdiChevronUp : mdiChevronDown}
            size={0.8}
            color="#232323"
          />
        </SortActiveItemChevronStyled>
      </SortActiveItemStyled>
    );
  }

  return <SortItemStyled onClick={() => onClick(item)}>{item.title}</SortItemStyled>;
};

export const Sort = <T,>({ sortItems, sortBy, sortDirection, onSort }: ISortProps<T>) => {
  const handleItemClick = (item: TSortItem<T>) => {
    if (item.value !== sortBy) {
      onSort({
        sortBy: item.value,
        sortDirection: ESortDirection.asc,
      });
    } else if (item.value === sortBy && sortDirection === ESortDirection.asc) {
      onSort({
        sortBy: item.value,
        sortDirection: ESortDirection.desc,
      });
    } else {
      onSort({
        sortBy: null,
        sortDirection: ESortDirection.asc,
      });
    }
  };

  return (
    <SortStyled>
      <SortTitleStyled>Sort by:</SortTitleStyled>
      {sortItems.map((item) => (
        <SortItem<T>
          key={item.title}
          item={item}
          sortDirection={sortDirection}
          isActive={item.value === sortBy}
          onClick={handleItemClick}
        />
      ))}
    </SortStyled>
  );
};
