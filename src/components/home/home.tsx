import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestType } from 'helps/const';
import { useAppDispatch } from 'hooks';
import { useEffect } from 'react';
import { selectGenre } from 'store/action';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(selectGenre(QuestType['allQuests']));
    }
    return () => {
      isMounted = false;
    };
  });
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;
