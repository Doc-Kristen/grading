import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { genres } from '../../../../helps/const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectGenre } from 'store/action';

const Filter = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const { selectedGenre } = useAppSelector((state) => state);

    return (
        <S.Tabs>
            {
                genres.map((genre) => (
                    <S.TabItem key={genre}
                        onClick={() => {
                            dispatch(selectGenre(genre));
                        }}
                    >
                        <S.TabBtn isActive={genre === selectedGenre ? true : false}>
                            <IconAdventures />
                            <S.TabTitle>{genre}</S.TabTitle>
                        </S.TabBtn>
                    </S.TabItem>
                ))

            }
        </S.Tabs>
    );
};
export default Filter;