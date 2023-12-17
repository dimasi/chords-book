import { IInputProps } from './types';
import { InputStyled } from './styled';

export const Input = ({ value, onChange }: IInputProps) => <InputStyled value={value} onChange={onChange} />;
