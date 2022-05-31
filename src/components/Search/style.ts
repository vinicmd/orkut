import { ImHome } from 'react-icons/im'
import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.body};
`

export const HomeIcon = styled(ImHome)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.textGrey};
`
