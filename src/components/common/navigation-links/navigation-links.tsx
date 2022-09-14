import { navigationLinks } from 'helpers/const';
import { useLocation } from 'react-router-dom';
import * as S from '../header/header.styled';

const NavigationLinks = (): JSX.Element => {

  const location = useLocation();

  return (
    <S.Navigation>
      <S.Links>
        {
          navigationLinks.map((linkItem) => (
            <S.LinkItem key={linkItem.title}>
              <S.Link $isActiveLink={linkItem.link === location.pathname ? true : false} to={linkItem.link}>
                {linkItem.title}
              </S.Link>
            </S.LinkItem>
          ))
        }
      </S.Links>
    </S.Navigation>
  );
};

export default NavigationLinks;
