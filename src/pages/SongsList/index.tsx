import React from 'react';
import { mdiStepForward } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/stores/rootStoreContext';
import { ESongsSortBy } from '@/stores/Songs/constants';
import { EButtonTheme } from '@/components/Button/constants';
import { Button } from '@/components/Button';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/FormField/components/Input';
import { Search } from '@/components/Search';
import { SearchNoResults } from '@/components/Search/components/NoResults';
import { SongListItem } from '@/components/SongListItem';
import { Sort } from '@/components/Sort';
import { useSongsList } from './hooks';
import {
  SongsListPageAddFormContainerStyled,
  SongsListPageAddFormExistedSongErrorStyled,
  SongsListPageAddFormFieldStyled,
  SongsListPageAddFormFooterStyled,
  SongsListPageAddFormGoToSongButtonStyled,
  SongsListPageAddFormStyled,
  SongsListPageContentStyled,
  SongsListPageHeaderStyled,
  SongsListPageHeaderTitleStyled,
  SongsListPageNoSongs,
  SongsListPageSongsStyled,
  SongsListPageStyled,
} from './styled';

export const SongsListPage = observer(() => {
  const {
    settingsStore: { theme },
  } = useStores();

  const navigate = useNavigate();

  const {
    songsStore: { existedSongError, sortBy, sortDirection },
  } = useStores();

  const {
    noSongsFound,
    search,
    showSongAlreadyExistAlert,
    songAuthor,
    songName,
    songsList,
    sortItems,
    handleAddSongButtonClick,
    handleGoToSongButtonClick,
    handleSearchChange,
    handleSongAuthorChange,
    handleSongNameChange,
    handleSort,
    setSearch,
  } = useSongsList();

  return (
    <SongsListPageStyled>
      <SongsListPageContentStyled theme={theme}>
        <SongsListPageHeaderStyled theme={theme}>
          <Search value={search} onChange={handleSearchChange} />
          <Sort<ESongsSortBy> sortItems={sortItems} sortBy={sortBy} sortDirection={sortDirection} onSort={handleSort} />
        </SongsListPageHeaderStyled>

        <SongsListPageSongsStyled>
          {noSongsFound ? <SearchNoResults text="No songs found" onClickReset={() => setSearch('')} /> : null}

          {!songsList.length ? <SongsListPageNoSongs>There are no songs yet</SongsListPageNoSongs> : null}

          {songsList.map(({ author, id, name, chords }) => (
            <SongListItem
              key={id}
              id={id}
              author={author}
              name={name}
              chords={chords}
              onClick={() => navigate(`${id}`)}
              searchWords={search.length > 1 ? [search] : ['']}
            />
          ))}
        </SongsListPageSongsStyled>
      </SongsListPageContentStyled>

      <SongsListPageAddFormStyled>
        <SongsListPageHeaderStyled theme={theme}>
          <SongsListPageHeaderTitleStyled theme={theme}>Add new song</SongsListPageHeaderTitleStyled>
        </SongsListPageHeaderStyled>

        <SongsListPageAddFormContainerStyled>
          <SongsListPageAddFormFieldStyled>
            <FormField label="Song name">
              <Input value={songName} onChange={handleSongNameChange} />
            </FormField>
          </SongsListPageAddFormFieldStyled>

          <SongsListPageAddFormFieldStyled>
            <FormField label="Author">
              <Input value={songAuthor} onChange={handleSongAuthorChange} />
            </FormField>
          </SongsListPageAddFormFieldStyled>

          <SongsListPageAddFormFooterStyled>
            <Button
              buttonTheme={EButtonTheme.success}
              text="Add chords"
              icon={mdiStepForward}
              onClick={handleAddSongButtonClick}
            />
          </SongsListPageAddFormFooterStyled>

          {showSongAlreadyExistAlert ? (
            <SongsListPageAddFormExistedSongErrorStyled>
              Song
              <SongsListPageAddFormGoToSongButtonStyled onClick={handleGoToSongButtonClick}>
                {existedSongError?.name}
                {existedSongError?.author ? ` by ${existedSongError?.author}` : null}
              </SongsListPageAddFormGoToSongButtonStyled>
              already exists.
            </SongsListPageAddFormExistedSongErrorStyled>
          ) : null}
        </SongsListPageAddFormContainerStyled>
      </SongsListPageAddFormStyled>
    </SongsListPageStyled>
  );
});
