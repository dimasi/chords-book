import { observer } from 'mobx-react-lite';
import { Outlet, useMatch } from 'react-router-dom';
import { Avatar } from '@/components/Avatar';
import { InstrumentSwitcher } from '@/components/InstrumentSwitcher';
import { ThemeToggler } from '@/components/ThemeToggler';
import {
  DefaultLayoutAppNavStyled,
  DefaultLayoutAppNavItemStyled,
  DefaultLayoutAppNavActiveItemStyled,
  DefaultLayoutAppTitleStyled,
  DefaultLayoutHeaderAvatarStyled,
  DefaultLayoutHeaderStyled,
  DefaultLayoutPageStyled,
  DefaultLayoutStyled,
  DefaultLayoutThemeTogglerStyled,
} from '@/layouts/Default/styled';
import { useStores } from '@/stores/rootStoreContext';

export const LayoutDefault = observer(() => {
  const {
    settingsStore: { theme },
  } = useStores();

  const appNavLinks = [
    {
      title: 'Songs list',
      url: '/songs',
    },
    {
      title: 'About',
      url: '/about',
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isActiveLink = (url: string) => Boolean(useMatch(url));

  return (
    <DefaultLayoutStyled theme={theme}>
      <DefaultLayoutHeaderStyled theme={theme}>
        <DefaultLayoutAppTitleStyled theme={theme}>CHORDS BOOK</DefaultLayoutAppTitleStyled>

        <InstrumentSwitcher />

        <DefaultLayoutAppNavStyled>
          {appNavLinks.map(({ title, url }) =>
            isActiveLink(url) ? (
              <DefaultLayoutAppNavActiveItemStyled key={url} theme={theme} to={url}>
                {title}
              </DefaultLayoutAppNavActiveItemStyled>
            ) : (
              <DefaultLayoutAppNavItemStyled key={url} theme={theme} to={url}>
                {title}
              </DefaultLayoutAppNavItemStyled>
            ),
          )}
        </DefaultLayoutAppNavStyled>

        <DefaultLayoutThemeTogglerStyled>
          <ThemeToggler />
        </DefaultLayoutThemeTogglerStyled>

        <DefaultLayoutHeaderAvatarStyled>
          <Avatar src="/images/avatar.jpg" />
        </DefaultLayoutHeaderAvatarStyled>
      </DefaultLayoutHeaderStyled>

      <DefaultLayoutPageStyled>
        <Outlet />
      </DefaultLayoutPageStyled>
    </DefaultLayoutStyled>
  );
});
