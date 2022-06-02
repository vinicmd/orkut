import { ImHome } from 'react-icons/im'
import styled from 'styled-components'

export const SearchWrapper = styled.div`
  width: 560px;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const HomeWrapper = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.body};

  &:hover {
    background: ${({ theme }) => theme.colors.greyTransparence};
  }
`

export const HomeIcon = styled(ImHome)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.textGrey};
`

export const SearchBar = styled.input`
  width: 420px;
  height: 60px;

  border-radius: 30px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.body};

  padding: 20px;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textGrey};

  &::-webkit-input-placeholder {
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.textGrey};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.greyTransparence};
  }
`
