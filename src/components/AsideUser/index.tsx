import * as S from './style'
import logo from './logo.svg'
import stamp from './stamp.svg'
import profilePicture from '../../assets/profilePic.jpg'

function AsideUser() {
  return (
    <S.Container>
      <S.LogoContent>
        <S.LinkLogo href="#">
          <S.Logo src={logo} alt={'Logo escrito Orkut'} />
        </S.LinkLogo>
      </S.LogoContent>
      <S.ProfileWrapper>
        <S.ProfileBorder>
          <S.ProfilePic src={profilePicture} alt={'Profile Picture'} />
        </S.ProfileBorder>

        <S.ProfileName>
          <S.VerifiedStamp
            src={stamp}
            title={'Verificado'}
            alt={'Selo de Verificação'}
          />
          <S.ProfileText>{'Erika Kauanny'}</S.ProfileText>
        </S.ProfileName>

        <S.DescriptionWrapper>
          {'femino'}, {'solteiro'}
        </S.DescriptionWrapper>
        <S.DescriptionWrapper>{'Goiânia - Brasil'}</S.DescriptionWrapper>

        <S.GreyLine />

        <S.MenuButton>
          <S.ButtonText>
            <S.HomeIcon />
            Home
          </S.ButtonText>
        </S.MenuButton>

        <S.MenuButton>
          <S.ButtonText>
            <S.FriendIcon />
            Amigos
          </S.ButtonText>
        </S.MenuButton>

        <S.MenuButton>
          <S.ButtonText>
            <S.StatementsIcon />
            Depoimentos
          </S.ButtonText>
        </S.MenuButton>

        <S.MenuButton>
          <S.ButtonText>
            <S.GalleryIcon />
            Galeria
          </S.ButtonText>
        </S.MenuButton>

        <S.MenuButton>
          <S.ButtonText>
            <S.GameIcon />
            Jogos
          </S.ButtonText>
        </S.MenuButton>
      </S.ProfileWrapper>
    </S.Container>
  )
}

export { AsideUser as Aside }
