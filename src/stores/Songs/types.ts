export interface IAddSongParams {
  name: string;
  author?: string;
}

export interface IAddChordToSongParams {
  songId: number;
  chordName: string;
}

export interface IRemoveChordToSongParams {
  songId: number;
  chordName: string;
}

export interface IToggleChordToSongParams {
  songId: number;
  chordName: string;
}
