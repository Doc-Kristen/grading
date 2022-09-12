import logo from 'assets/img/logo.svg';
import NavigationLinks from '../navigation-links/navigation-links';
import * as S from './header.styled';

const Header = (): JSX.Element => (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>
      <NavigationLinks />
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
