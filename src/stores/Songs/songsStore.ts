import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { TSong } from '@/domain/types';
import {
  IAddChordToSongParams,
  IAddSongParams,
  IRemoveChordToSongParams,
  IToggleChordToSongParams,
} from '@/stores/Songs/types';
import { ESongsSortBy } from '@/stores/Songs/constants';
import { ESortDirection } from '@/constants';

class SongsStore {
  lastSongId = 2;

  songs: TSong[] = [
    {
      id: 1,
      name: 'Alps',
      author: 'Motorama',
      chords: ['Am', 'Bb', 'Adim'],
    },
    {
      id: 2,
      name: 'Message',
      author: 'Still Corners',
      chords: ['Aaug'],
    },
  ];

  sortBy: ESongsSortBy | null = null;

  sortDirection: ESortDirection = ESortDirection.asc;

  existedSongError: TSong | null = null;

  get sortedSongs() {
    if (!this.sortBy) return this.songs;

    const sortedSongs = this.songs.slice().sort((songA, songB) => {
      const fieldA = songA[this.sortBy as ESongsSortBy]?.toLowerCase();
      const fieldB = songB[this.sortBy as ESongsSortBy]?.toLowerCase();

      if (!fieldA || !fieldB) return 0;
      if (fieldA < fieldB) return -1;
      return fieldA > fieldB ? 1 : 0;
    });

    if (this.sortDirection === ESortDirection.desc) {
      sortedSongs.reverse();
    }

    return sortedSongs;
  }

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'SongsStore',
      properties: ['songs', 'sortBy', 'sortDirection', 'lastSongId'],
      storage: window.localStorage,
    });
  }

  addSong = ({ name, author }: IAddSongParams) => {
    const id = this.lastSongId + 1;

    this.existedSongError =
      this.songs.find(
        (song) =>
          song.name.toLowerCase() === name.toLowerCase().trim() &&
          song.author?.toLowerCase() === author?.toLowerCase().trim(),
      ) || null;

    if (this.existedSongError) return null;

    const newSong = {
      chords: [],
      name: name.trim(),
      author: author?.trim(),
      id,
    };

    this.songs.push(newSong);

    this.lastSongId = id;

    return id;
  };

  removeSong = (id: number) => {
    this.songs = this.songs.filter((song) => song.id !== id);
  };

  resetExistedSongError = () => {
    this.existedSongError = null;
  };

  setSortBy = (sortBy: ESongsSortBy | null) => {
    this.sortBy = sortBy;
  };

  setSortDirection = (sortDirection: ESortDirection) => {
    this.sortDirection = sortDirection;
  };

  addChordToSong = ({ songId, chordName }: IAddChordToSongParams) => {
    const song = this.songs.find(({ id }) => id === songId);
    if (!song) return;
    song.chords.push(chordName);
  };

  removeChordFromSong = ({ songId, chordName }: IRemoveChordToSongParams) => {
    const song = this.songs.find(({ id }) => id === songId);
    if (!song) return;
    song.chords = song.chords.filter((songChordName) => songChordName !== chordName);
  };

  toggleChordInSong = ({ songId, chordName }: IToggleChordToSongParams) => {
    const song = this.songs.find(({ id }) => id === songId);
    if (!song) return;

    if (song.chords.includes(chordName)) {
      this.removeChordFromSong({ songId, chordName });
    } else {
      this.addChordToSong({ songId, chordName });
    }
  };
}

const songsStore = new SongsStore();

export default songsStore;
