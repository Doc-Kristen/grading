import * as S from './footer.styled';

const Footer = (): JSX.Element => (
  <S.StyledFooter>
    <S.Socials>
      <S.SocialItem>
        <S.SocialLink target="_blank" href="https://vk.com">
          <S.StyledVkIcon />
          <S.HiddenText>Вконтакте</S.HiddenText>
        </S.SocialLink>
      </S.SocialItem>
    </S.Socials>
  </S.StyledFooter>
);

export default Footer;
