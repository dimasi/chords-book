import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/rootStoreContext';
import { IInputProps } from './types';
import { InputStyled } from './styled';

export const Input = observer(({ value, onChange }: IInputProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return <InputStyled theme={theme} value={value} onChange={onChange} />;
});
