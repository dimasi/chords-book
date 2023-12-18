import { mdiStepForward } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/stores/rootStoreContext';
import { TSong } from '@/domain/types';
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
  SongsListPageAddFormExistedSongErrorStyled,
  SongsListPageAddFormFieldStyled,
  SongsListPageAddFormFooterStyled,
  SongsListPageAddFormGoToSongButtonStyled,
  SongsListPageAddFormStyled,
  SongsListPageContentStyled,
  SongsListPageHeaderStyled,
  SongsListPageHeaderTitleStyled,
  SongsListPageSongsStyled,
  SongsListPageStyled,
} from './styled';
import { SearchNoResults } from '@/components/Search/components/NoResults';

export const SongsListPage = observer(() => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [songName, setSongName] = useState('');
  const [songAuthor, setSongAuthor] = useState('');

  const {
    songsStore: {
      sortedSongs,
      sortBy,
      sortDirection,
      setSortBy,
      setSortDirection,
      addSong,
      existedSongError,
      resetExistedSongError,
    },
  } = useStores();

  const [songsList, setSongsList] = useState<TSong[]>(sortedSongs);
  const [noSongsFound, setNoSongsFound] = useState(false);
  const [showSongAlreadyExistAlert, setShowSongAlreadyExistAlert] = useState(false);

  useEffect(() => {
    setNoSongsFound(false);

    if (search.length > 1) {
      const LCSearch = search.toLowerCase();

      const filteredSongs = sortedSongs.filter(
        ({ name, author }) =>
          name.toLowerCase().indexOf(LCSearch) > -1 || (author && author.toLowerCase().indexOf(LCSearch) > -1),
      );

      setSongsList(filteredSongs);

      if (!filteredSongs.length) {
        setNoSongsFound(true);
      }
    } else {
      setSongsList(sortedSongs);
    }
  }, [search, sortedSongs]);

  const handleSort = ({ sortBy: nextSortBy, sortDirection: nextSortDirection }: TOnSortParams<ESongsSortBy>) => {
    setSortBy(nextSortBy);
    setSortDirection(nextSortDirection);
  };

  const handleSongNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongName(event.target?.value);

    if (existedSongError) {
      setShowSongAlreadyExistAlert(false);
      resetExistedSongError();
    }
  };

  const handleSongAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSongAuthor(event.target?.value);

    if (existedSongError) {
      setShowSongAlreadyExistAlert(false);
      resetExistedSongError();
    }
  };

  const handleAddSongButtonClick = () => {
    const newSongId = addSong({
      name: songName,
      author: songAuthor,
    });

    if (!newSongId) {
      setShowSongAlreadyExistAlert(true);
    } else {
      navigate(`/songs/${newSongId}`);
    }
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleGoToSongButtonClick = () => {
    resetExistedSongError();
    navigate(`/songs/${existedSongError?.id}`);
  };

  return (
    <SongsListPageStyled>
      <SongsListPageContentStyled>
        <SongsListPageHeaderStyled>
          <Search value={search} onChange={handleSearchChange} />
          <Sort<ESongsSortBy> sortItems={sortItems} sortBy={sortBy} sortDirection={sortDirection} onSort={handleSort} />
        </SongsListPageHeaderStyled>

        <SongsListPageSongsStyled>
          {noSongsFound ? <SearchNoResults text="No songs found" onClickReset={() => setSearch('')} /> : null}

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
        <SongsListPageHeaderStyled>
          <SongsListPageHeaderTitleStyled>Add new song</SongsListPageHeaderTitleStyled>
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
              theme={EButtonTheme.success}
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
