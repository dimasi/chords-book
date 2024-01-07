import { Icon } from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/rootStoreContext';
import { themeConstants } from '@/themeConstants';
import { SearchInputStyled, SearchStyled } from './styled';
import { ISearchProps } from './types';

export const Search = observer(({ value, onChange }: ISearchProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return (
    <SearchStyled>
      <Icon path={mdiMagnify} size={1} color={themeConstants[theme].searchIconColor} />
      <SearchInputStyled placeholder="Search..." theme={theme} value={value} onChange={onChange} />
    </SearchStyled>
  );
});
