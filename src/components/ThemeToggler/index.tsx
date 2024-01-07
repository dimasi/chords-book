import { mdiLightbulbOn, mdiLightbulbOff } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { Button } from '@/components/Button';
import { EButtonTheme } from '@/components/Button/constants';
import { ETheme } from '@/constants';
import { useStores } from '@/stores/rootStoreContext';
import { themeConstants } from '@/themeConstants';
import { useThemeToggler } from './hooks';
import { ThemeTogglerStyled } from './styled';

export const ThemeToggler = observer(() => {
  const {
    settingsStore: { theme },
  } = useStores();

  const { handleThemeTogglerButtonClick } = useThemeToggler();

  return (
    <ThemeTogglerStyled theme={theme}>
      <Button
        buttonTheme={EButtonTheme.transparent}
        icon={theme === ETheme.light ? mdiLightbulbOn : mdiLightbulbOff}
        iconColor={themeConstants[theme].themeTogglerIconColor}
        iconSize={theme === ETheme.light ? 1.04 : 0.82}
        onClick={handleThemeTogglerButtonClick}
      />
    </ThemeTogglerStyled>
  );
});
