import * as S from './style'
import logo from './logo.svg'

function Aside() {
  return (
    <S.Container>
      <S.LogoContent>
        <S.LinkLogo href="#">
          <S.Logo src={logo} alt="Logo escrito Orkut" />
        </S.LinkLogo>
      </S.LogoContent>
      <S.ProfileWrapper></S.ProfileWrapper>
    </S.Container>
  )
}

export { Aside }
