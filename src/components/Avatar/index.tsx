import { AvatarStyled } from './styled';
import { IAvatarProps } from './types';

export const Avatar = ({ src }: IAvatarProps) => <AvatarStyled style={{ backgroundImage: `url(${src})` }} />;
