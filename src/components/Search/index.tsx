import * as S from './style'

export function Search() {
  return (
    <S.SearchWrapper>
      <S.HomeWrapper>
        <S.HomeIcon />
      </S.HomeWrapper>

      <S.SearchBar type="text" placeholder="Pesquisar no Orkut" />
    </S.SearchWrapper>
  )
}
