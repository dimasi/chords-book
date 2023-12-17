import { mdiStepForward } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/stores/rootStoreContext';
import { ESongsSortBy } from '@/stores/Songs/constants';
import { EButtonTheme } from '@/components/Button/constants';
import { TOnSortParams, TSortItem } from '@/components/Sort/types';
import { Button } from '@/components/Button';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/FormField/components/Input';
import { Search } from '@/components/Search';
import { SongListItem } from '@/components/SongListItem';
import { Sort } from '@/components/Sort';
import {
  SongsListPageAddFormContainerStyled,
  SongsListPageAddFormFieldStyled,
  SongsListPageAddFormFooterStyled,
  SongsListPageAddFormStyled,
  SongsListPageContentStyled,
  SongsListPageHeaderStyled,
  SongsListPageHeaderTitleStyled,
  SongsListPageSongsStyled,
  SongsListPageStyled,
} from './styled';

export const SongsListPage = observer(() => {
  const navigate = useNavigate();

  const {
    songsStore: { sortedSongs, sortBy, sortDirection, setSortBy, setSortDirection },
  } = useStores();

  const handleSort = ({ sortBy: nextSortBy, sortDirection: nextSortDirection }: TOnSortParams<ESongsSortBy>) => {
    setSortBy(nextSortBy);
    setSortDirection(nextSortDirection);
  };

  const sortItems: TSortItem<ESongsSortBy>[] = [
    {
      title: 'Name',
      value: ESongsSortBy.name,
    },
    {
      title: 'Author',
      value: ESongsSortBy.author,
    },
  ];

  return (
    <SongsListPageStyled>
      <SongsListPageContentStyled>
        <SongsListPageHeaderStyled>
          <Search />

          <Sort<ESongsSortBy> sortItems={sortItems} sortBy={sortBy} sortDirection={sortDirection} onSort={handleSort} />
        </SongsListPageHeaderStyled>

        <SongsListPageSongsStyled>
          {sortedSongs.map(({ author, id, name, chords }) => (
            <SongListItem key={id} author={author} name={name} chords={chords} onClick={() => navigate(id)} />
          ))}
        </SongsListPageSongsStyled>
      </SongsListPageContentStyled>

      <SongsListPageAddFormStyled>
        <SongsListPageHeaderStyled>
          <SongsListPageHeaderTitleStyled>Add new song</SongsListPageHeaderTitleStyled>
        </SongsListPageHeaderStyled>

        <SongsListPageAddFormContainerStyled>
          <SongsListPageAddFormFieldStyled>
            <FormField label="Song name">
              <Input />
            </FormField>
          </SongsListPageAddFormFieldStyled>

          <SongsListPageAddFormFieldStyled>
            <FormField label="Author">
              <Input />
            </FormField>
          </SongsListPageAddFormFieldStyled>

          <SongsListPageAddFormFooterStyled>
            <Button theme={EButtonTheme.success} text="Add chords" icon={mdiStepForward} />
          </SongsListPageAddFormFooterStyled>
        </SongsListPageAddFormContainerStyled>
      </SongsListPageAddFormStyled>
    </SongsListPageStyled>
  );
});
