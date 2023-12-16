import { Outlet, useMatch } from 'react-router-dom';
import { Avatar } from '@/components/Avatar';
import { InstrumentSwitcher } from '@/components/InstrumentSwitcher';
import {
  DefaultLayoutAppNavStyled,
  DefaultLayoutAppNavItemStyled,
  DefaultLayoutAppNavActiveItemStyled,
  DefaultLayoutAppTitleStyled,
  DefaultLayoutHeaderAvatarStyled,
  DefaultLayoutHeaderStyled,
  DefaultLayoutStyled,
  DefaultLayoutPageStyled,
} from '@/layouts/Default/styled';

export const LayoutDefault = () => {
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
    <DefaultLayoutStyled>
      <DefaultLayoutHeaderStyled>
        <DefaultLayoutAppTitleStyled>CHORDS BOOK</DefaultLayoutAppTitleStyled>

        <InstrumentSwitcher />

        <DefaultLayoutAppNavStyled>
          {appNavLinks.map(({ title, url }) =>
            isActiveLink(url) ? (
              <DefaultLayoutAppNavActiveItemStyled key={url} to={url}>
                {title}
              </DefaultLayoutAppNavActiveItemStyled>
            ) : (
              <DefaultLayoutAppNavItemStyled key={url} to={url}>
                {title}
              </DefaultLayoutAppNavItemStyled>
            ),
          )}
        </DefaultLayoutAppNavStyled>

        <DefaultLayoutHeaderAvatarStyled>
          <Avatar src="/images/avatar.jpg" />
        </DefaultLayoutHeaderAvatarStyled>
      </DefaultLayoutHeaderStyled>

      <DefaultLayoutPageStyled>
        <Outlet />
      </DefaultLayoutPageStyled>
    </DefaultLayoutStyled>
  );
};
