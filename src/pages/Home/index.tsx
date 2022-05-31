import * as S from './style'
import { Aside } from '../../components/AsideUser'
import { Search } from '../../components/Search'

function Home() {
  return (
    <S.Container>
      <Aside />
      <Search />
    </S.Container>
  )
}

export { Home }
