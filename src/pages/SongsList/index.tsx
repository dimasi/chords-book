import { useNavigate } from 'react-router-dom';
import { mdiStepForward } from '@mdi/js';
import { Button } from '@/components/Button';
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
import { EButtonTheme } from '@/components/Button/constants';
import { FormField } from '@/components/FormField';

const items = [
  {
    id: 'test-id-1',
    author: 'Valentin Strykalo',
    name: '92',
    chords: [
      {
        barre: null,
        dots: [1, 3, 1, 1],
        fret: null,
        group: 'A',
        name: 'A#7sus4',
      },
      {
        barre: null,
        dots: [0, 0, 0, 3],
        fret: null,
        group: 'A',
        name: 'C',
      },
      {
        barre: null,
        dots: [1, 1, 1, 2],
        fret: null,
        group: 'A',
        name: 'Db7',
      },
      {
        barre: null,
        dots: [2, 0, 1, 0],
        fret: null,
        group: 'A',
        name: 'F',
      },
    ],
  },
  {
    id: 'test-id-2',
    author: 'Naik Borzov',
    name: 'Solnce na dne',
    chords: [
      {
        barre: null,
        dots: [0, 0, 0, 3],
        fret: null,
        group: 'A',
        name: 'C',
      },
      {
        barre: null,
        dots: [1, 1, 1, 2],
        fret: null,
        group: 'A',
        name: 'Db7',
      },
      {
        barre: null,
        dots: [2, 0, 1, 0],
        fret: null,
        group: 'A',
        name: 'F',
      },
    ],
  },
];

export const SongsListPage = () => {
  const navigate = useNavigate();

  return (
    <SongsListPageStyled>
      <SongsListPageContentStyled>
        <SongsListPageHeaderStyled>
          <Search />
          <Sort />
        </SongsListPageHeaderStyled>

        <SongsListPageSongsStyled>
          {items.map(({ author, id, name, chords }) => (
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
};
