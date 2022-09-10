import * as S from './quests-catalog.styled';
import QuestItem from '../quest-item/quest-item';
import { useAppSelector } from 'hooks';
import Filter from '../filter/filter';

const QuestsCatalog = (): JSX.Element => {

  const { filteredQuestList } = useAppSelector((state) => state);

  return (
    <>
      <Filter />
      <S.QuestsList>
        {
          filteredQuestList.map((quest) => (
            <QuestItem
              key={quest.id}
              quest={quest}
            />
          ))
        }

      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
