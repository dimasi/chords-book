import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStores } from '@/stores/rootStoreContext';
import { TChord, TSong } from '@/domain/types';
import { TChordsByGroups } from '@/pages/Song/types';
import { TChordWithActiveFlag } from '@/components/Chord/types';

export const useSong = () => {
  const { songId } = useParams();
  const {
    chordsStore: { chords: allChords, chordsByGroups: allChordsByGroups },
    settingsStore: { instrument },
    songsStore: { songs, toggleChordInSong, removeChordFromSong },
  } = useStores();

  const song = songs.find(({ id }) => `${id}` === songId) as TSong;

  const chords = song.chords.map((chordName) => allChords[instrument].find((chord) => chord.name === chordName));

  const [chordsSearch, setChordsSearch] = useState('');
  const [noChordsFound, setNoChordsFound] = useState(false);
  const [listChordsWithGroups, setListChordsWithGroups] = useState<TChordsByGroups>(allChordsByGroups[instrument]);

  const isActiveChord = (chord: TChord) => song.chords.includes(chord.name);

  useEffect(() => {
    setNoChordsFound(false);

    if (!chordsSearch.length) {
      setListChordsWithGroups(allChordsByGroups[instrument]);
    } else {
      const filteredListChordsWithGroups = Object.entries(allChordsByGroups[instrument]).reduce(
        (acc: TChordsByGroups, [group, groupChords]) => {
          const filteredGroupChords = groupChords.filter(
            (groupChord: TChordWithActiveFlag) =>
              groupChord.name.toLowerCase().indexOf(chordsSearch.toLowerCase()) > -1,
          );

          if (filteredGroupChords.length) {
            acc[group] = filteredGroupChords;
          }

          return acc;
        },
        {},
      );

      setListChordsWithGroups(filteredListChordsWithGroups);

      if (!Object.keys(filteredListChordsWithGroups).length) {
        setNoChordsFound(true);
      }
    }
  }, [chordsSearch, allChordsByGroups, instrument]);

  const handleChordClick = (chord: TChord) => {
    toggleChordInSong({
      songId: song.id,
      chordName: chord.name,
    });
  };

  const handleChordRemoveButtonClick = (chord: TChord) => {
    removeChordFromSong({
      songId: song.id,
      chordName: chord.name,
    });
  };

  const handleChordsSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChordsSearch(event.target.value);
  };

  return {
    chords,
    chordsSearch,
    listChordsWithGroups,
    noChordsFound,
    song,
    handleChordClick,
    handleChordRemoveButtonClick,
    handleChordsSearchChange,
    isActiveChord,
    setChordsSearch,
  };
};
