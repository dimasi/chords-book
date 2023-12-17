import { ESortDirection } from '@/constants';

export type TOnSortParams<T = string> = {
  sortBy: T | null;
  sortDirection: ESortDirection;
};

export type TSortItem<T> = {
  title: string;
  value: T;
};

export interface ISortItemProps<T> {
  item: TSortItem<T>;
  isActive: boolean;
  sortDirection: ESortDirection;
  onClick: (params: TSortItem<T>) => void;
}

export interface ISortProps<T = string> {
  sortItems: TSortItem<T>[];
  sortBy: T | null;
  sortDirection: ESortDirection;
  onSort: (params: TOnSortParams<T>) => void;
}
