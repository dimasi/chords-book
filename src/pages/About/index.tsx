import { mdiArrowLeft } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { EButtonTheme } from '@/components/Button/constants';
import { Button } from '@/components/Button';
import { useBackButton } from '@/hooks/useBackButton';
import { useStores } from '@/stores/rootStoreContext';
import { themeConstants } from '@/themeConstants';
import {
  AboutPageBackButtonStyled,
  AboutPageContentStyled,
  AboutPageHeaderStyled,
  AboutPageParagraphStyled,
  AboutPageStyled,
  AboutPageTitleStyled,
  AboutPageTitle2Styled,
} from './styled';

export const AboutPage = observer(() => {
  const {
    settingsStore: { theme },
  } = useStores();

  const { handleBackButtonClick } = useBackButton();

  return (
    <AboutPageStyled>
      <AboutPageHeaderStyled theme={theme}>
        <AboutPageBackButtonStyled>
          <Button
            buttonTheme={EButtonTheme.transparent}
            icon={mdiArrowLeft}
            iconColor={themeConstants[theme].aboutPageBackButtonColor}
            iconSize={0.8}
            onClick={handleBackButtonClick}
          />
        </AboutPageBackButtonStyled>

        <AboutPageTitleStyled theme={theme}>About</AboutPageTitleStyled>
        <AboutPageTitle2Styled theme={theme}>this project</AboutPageTitle2Styled>
      </AboutPageHeaderStyled>

      <AboutPageContentStyled>
        <AboutPageParagraphStyled theme={theme}>
          {`Quisque maximus risus sed erat sodales fermentum. Nulla dignissim est felis, vitae ornare ipsum blandit at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a scelerisque sapien. Mauris vitae 
          consequat justo. Donec hendrerit odio sed purus aliquet feugiat. Duis at quam tellus. Phasellus rhoncus,
          augue in efficitur rhoncus, lacus lorem convallis magna, id ornare nunc nunc at est. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur mattis
          sagittis metus, non vestibulum tellus lacinia ut. Vestibulum accumsan urna arcu, et efficitur metus
          sollicitudin in. Nullam ut arcu purus. Suspendisse eu vestibulum dolor, eget gravida ligula. Nunc
          porttitor sollicitudin orci, vel vestibulum ipsum tempor ut. Pellentesque quis tempor erat, in mollis orci.`}
        </AboutPageParagraphStyled>

        <AboutPageParagraphStyled theme={theme}>
          {`Fusce tristique, velit in mattis ornare, libero massa cursus tellus, vitae mattis velit ligula eget
          lorem. Pellentesque ac enim ut erat laoreet convallis in nec nulla. Praesent aliquet sed lorem vulputate
          pharetra. Mauris tincidunt lectus sit amet dui dapibus tempus. Nunc convallis, velit in fringilla
          consequat, urna risus faucibus libero, in lacinia mauris diam id eros. Phasellus semper egestas purus
          eu faucibus. Nam aliquet ligula nisl, ac luctus tortor lobortis sit amet. Donec rutrum velit nulla,
          et euismod mauris convallis at. Curabitur accumsan nunc id ligula sodales fermentum. Sed quis felis erat.
          Sed at massa sed purus vehicula faucibus vel eu magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Nullam nec lorem erat. Phasellus tincidunt pulvinar pulvinar. Vestibulum tempus aliquam
          enim, quis pretium sem fermentum maximus.`}
        </AboutPageParagraphStyled>
      </AboutPageContentStyled>
    </AboutPageStyled>
  );
});
