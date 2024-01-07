import { Icon } from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { ESortDirection } from '@/constants';
import { useStores } from '@/stores/rootStoreContext';
import { themeConstants } from '@/themeConstants';
import { ISortItemProps, ISortProps, TSortItem } from './types';
import {
  SortActiveItemChevronStyled,
  SortActiveItemStyled,
  SortItemStyled,
  SortStyled,
  SortTitleStyled,
} from './styled';

const SortItem = observer(<T,>({ item, isActive, sortDirection, onClick }: ISortItemProps<T>) => {
  const {
    settingsStore: { theme },
  } = useStores();

  if (isActive) {
    return (
      <SortActiveItemStyled theme={theme} onClick={() => onClick(item)}>
        {item.title}
        <SortActiveItemChevronStyled theme={theme}>
          <Icon
            path={sortDirection === ESortDirection.asc ? mdiChevronUp : mdiChevronDown}
            size={0.8}
            color={themeConstants[theme].sortActiveItemChevronIconColor}
          />
        </SortActiveItemChevronStyled>
      </SortActiveItemStyled>
    );
  }

  return (
    <SortItemStyled theme={theme} onClick={() => onClick(item)}>
      {item.title}
    </SortItemStyled>
  );
});

export const Sort = observer(<T,>({ sortItems, sortBy, sortDirection, onSort }: ISortProps<T>) => {
  const {
    settingsStore: { theme },
  } = useStores();

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
      <SortTitleStyled theme={theme}>Sort by:</SortTitleStyled>
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
});
