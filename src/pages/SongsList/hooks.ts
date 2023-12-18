import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useStores } from '@/stores/rootStoreContext';
import { TSong } from '@/domain/types';
import { TOnSortParams, TSortItem } from '@/components/Sort/types';
import { ESongsSortBy } from '@/stores/Songs/constants';

export const useSongsList = () => {
  const navigate = useNavigate();

  const {
    songsStore: { existedSongError, sortedSongs, addSong, resetExistedSongError, setSortBy, setSortDirection },
  } = useStores();

  const [noSongsFound, setNoSongsFound] = useState(false);
  const [search, setSearch] = useState('');
  const [showSongAlreadyExistAlert, setShowSongAlreadyExistAlert] = useState(false);
  const [songAuthor, setSongAuthor] = useState('');
  const [songName, setSongName] = useState('');
  const [songsList, setSongsList] = useState<TSong[]>(sortedSongs);

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
    if (!songName) return;

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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleGoToSongButtonClick = () => {
    resetExistedSongError();
    navigate(`/songs/${existedSongError?.id}`);
  };

  return {
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
  };
};
