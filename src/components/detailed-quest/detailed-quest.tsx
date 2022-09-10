import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchDetailedQuestAction } from 'store/api-actions';
import { QuestType, LevelType } from '../../helps/const';

const DetailedQuest = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const questId = Number(id);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const quest = useAppSelector((state) => state.detailedQuest);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const fetchData = async () => {
        dispatch(fetchDetailedQuestAction(questId));
      };
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, questId]);


  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={quest?.coverImg}
          alt={`Квест ${quest?.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest?.title}</S.PageTitle>
            <S.PageSubtitle>{QuestType[quest ? quest.type : 0]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest?.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {
                    quest?.peopleCount && quest.peopleCount.length > 1 ? `${quest?.peopleCount[0]}–${quest?.peopleCount[quest?.peopleCount.length - 1]}` : quest?.peopleCount
                  } чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{LevelType[quest ? quest.level : 0]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest?.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;