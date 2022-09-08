import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { Quest } from '../../../../types/quest'
import { AppRoute } from 'helps/const';

type QuestItemProps = {
  quest: Quest;
}

const QuestItem = ({ quest }: QuestItemProps): JSX.Element => (
  <S.QuestItem>
    <S.QuestItemLink to={AppRoute.DetailedQuest}>
      <S.Quest>
        <S.QuestImage
          src={quest.previewImg}
          width="344"
          height="232"
          alt={quest.title}
        />

        <S.QuestContent>
          <S.QuestTitle>{quest.title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {quest.peopleCount} чел
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {quest.level}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
);

export default QuestItem;
