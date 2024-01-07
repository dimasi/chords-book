import { ETheme } from '@/constants';
import { useStores } from '@/stores/rootStoreContext';

export const useThemeToggler = () => {
  const {
    settingsStore: { theme, switchTheme },
  } = useStores();

  const handleThemeTogglerButtonClick = () => {
    switchTheme(theme === ETheme.light ? ETheme.dark : ETheme.light);
  };

  return {
    theme,
    handleThemeTogglerButtonClick,
  };
};
