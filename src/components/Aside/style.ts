import styled from 'styled-components'

export const Container = styled.aside`
  width: 16.85rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LogoContent = styled.div`
  width: 100%;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkLogo = styled.a``

export const Logo = styled.img`
  width: auto;
  height: 40px;
`

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 600px;

  border-radius: 30px;
  border: 1px border ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.body};
`
