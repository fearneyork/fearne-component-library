import styled from "styled-components";
import GitHubIcon from "../../assets/GitHubIcon";
import { Body, Heading2 } from "../../Typography/Typography";

const WidgetContainer = styled.div`
  height: 250px;
  width: 250px;
`

const BorderContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
  border: 0px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(125,45,190,1), rgba(15,120,190,1));
  background-size: 100% 100%;
  `

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => !props.isMobile ? '240px' : '340px'};
  height: 240px;
  border: 0px;
  border-radius: 25px;
  opacity: 100%;
  background-color: rgba(30,30,30,1);
  `

const UserInfoContainer = styled.div`
  width: ${(props) => !props.isMobile ? '220px' : '320px'};
  height: 194px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  flex-direction: column;
  justify-content: space-between;
`

const Username = styled(Heading2)`
  font-family: helvetica;
  font-size: 18px;
  font-weight: 500;
  opacity: 100%;
  color: rgba(0, 214, 76, 1);
  margin-top: 10px;
  margin-bottom: 10px;
  align-content: center;
`

  const BioText = styled(Body)`
  font-family: helvetica;
  font-size: ${(props) => !props.isMobile ? '14px' : '18px'};
  font-weight: 500;
  padding: 3px 0px;
  opacity: 100%;
  color: rgba(255, 255, 255, 1);
  margin: 0px 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TileText = styled(Body)`
  font-family: helvetica;
  font-size: ${(props) => !props.isMobile ? '10px' : '14px'};
  font-weight: 500;
  opacity: 100%;
  color: rgb(255, 255, 255);
  margin: 0px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const IconContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 15px;
  margin-left: 210px;
`
const BioContainer = styled.div`
  border: 0px;
  border-radius: 15px 15px 5px 5px;
  background-color: rgba(42,42,42,0.5);
  height: 58px;
  margin-bottom: 7px;
`
const CenterContainer = styled.div`
  display: flex;
  height: 58px;
  flex-direction: row;
  justify-content: space-between;
`

const TileContainer = styled.div`
  width: 68px;
  background-color: rgba(42,42,42,0.5);;
  border: 0px;
  border-radius: 5px;
`

const ContributionContainer = styled.div`
  border: 0px;
  border-radius: 5px 5px 15px 15px;
  background-color: rgba(42,42,42,0.5);
  height: 58px;
  margin-top: 7px;
`

export const GitHubWidget = ({username, bio, isMobile}) => {
  return (
    <WidgetContainer>
      <IconContainer>
        <GitHubIcon />
      </IconContainer>
      <BorderContainer isMobile={isMobile}>
        <BackgroundContainer isMobile={isMobile}>
          <Username isMobile={isMobile}>{username}</Username>
          <UserInfoContainer isMobile={isMobile}>
            <BioContainer>
              <BioText isMobile={isMobile}>{bio}</BioText>
            </BioContainer>
            <CenterContainer>
              <TileContainer>
                <TileText>Test</TileText>
              </TileContainer>
              <TileContainer>
                <TileText>Test</TileText>
              </TileContainer>
              <TileContainer>
                <TileText>Test</TileText>
              </TileContainer>
            </CenterContainer>
            <ContributionContainer />
          </UserInfoContainer>
        </BackgroundContainer>
      </BorderContainer>
    </WidgetContainer>
  );
}