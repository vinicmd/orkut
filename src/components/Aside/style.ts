import styled from 'styled-components'

export const Container = styled.aside`
  width: 270px;
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

  padding: 40px;

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.body};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileBorder = styled.div`
  width: 130px;
  height: 130px;

  border-radius: 50%;

  background: linear-gradient(315deg, #0094ff 0%, #ed2590 100%),
    linear-gradient(0deg, #ed2590, #ed2590);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfilePic = styled.img`
  width: 127px;
  height: 127px;

  border: 4px solid ${({ theme }) => theme.colors.body};

  border-radius: 50%;
`

export const ProfileName = styled.div`
  margin-top: 16px;
  margin-bottom: 6px;
  display: flex;
`

export const ProfileText = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 4px;

  color: ${({ theme }) => theme.colors.text};
`

export const VerifiedStamp = styled.img`
  width: 16px;
  height: auto;
`

export const DescriptionWrapper = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
`
