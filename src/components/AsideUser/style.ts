import styled from 'styled-components'
import { ImHome, ImUsers, ImHeart, ImImage, ImTrophy } from 'react-icons/im'

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
  width: 124px;
  height: 124px;

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

export const GreyLine = styled.div`
  width: 100%;
  height: 1px;

  margin: 30px 0 10px 0;

  background: ${({ theme }) => theme.colors.textGrey};
`

export const MenuButton = styled.button`
  width: 100%;

  padding: 8px 0;

  background: none;
  border: none;
  border-radius: 30px;

  text-align: left;

  color: ${({ theme }) => theme.colors.text};

  margin: 5px 0;

  transition: color 0.2s ease;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.greyTransparence};
  }
`

export const ButtonText = styled.p`
  font-size: 1.2rem;
`

export const HomeIcon = styled(ImHome)`
  color: ${({ theme }) => theme.colors.icons};
  margin: 0 1rem;
`

export const FriendIcon = styled(ImUsers)`
  color: ${({ theme }) => theme.colors.icons};
  margin: 0 1rem;
`

export const StatementsIcon = styled(ImHeart)`
  color: ${({ theme }) => theme.colors.icons};
  margin: 0 1rem;
`

export const GalleryIcon = styled(ImImage)`
  color: ${({ theme }) => theme.colors.icons};
  margin: 0 1rem;
`

export const GameIcon = styled(ImTrophy)`
  color: ${({ theme }) => theme.colors.icons};
  margin: 0 1rem;
`
