import * as S from './quests-catalog.styled';
import QuestItem from '../quest-item/quest-item';
import { useAppSelector } from 'hooks';
import Filter from '../filter/filter';
import ServerError from 'components/server-error/server-error';
import { filterQuestsByGenre, getServerErrorStatus } from 'store/quest-data/selectors';

const QuestsCatalog = (): JSX.Element => {

  const filteredQuestList = useAppSelector(filterQuestsByGenre);

  const isServerError = useAppSelector(getServerErrorStatus);

  return (
    <>
      <Filter />
      {isServerError ? <ServerError /> : <S.QuestsList>
        {
          filteredQuestList.map((quest) => (
            <QuestItem
              key={quest.id}
              quest={quest}
            />
          ))
        }

      </S.QuestsList>}
    </>
  );
};

export default QuestsCatalog;
