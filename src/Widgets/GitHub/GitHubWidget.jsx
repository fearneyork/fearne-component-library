import styled from "styled-components";
import SpotifyIcon from "../../assets/SpotifyIcon";
import { Heading2 } from "../../Typography/Typography";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: pink;
  border: 0px;
  border-radius: 25px;
`
const TrackInfoContainer = styled.section`
  width: 233px;
  height: 75px;
  background-color: grey;
  border: 0px;
  border-radius: 20px;
  opacity: 50%;
  margin-bottom: 10px;
`

const TrackInfoHeading = styled(Heading2)`
  font-family: helvetica
`

const IconContainer = styled.section`
flex-direction: row;
align-self: end;
margin: 10px 10px 0px 0px;
`

export const GitHubWidget = () => {
  return (
    <Container>
      <IconContainer>
        <SpotifyIcon />
      </IconContainer>
      <TrackInfoContainer>
        <TrackInfoHeading>Currently Playing</TrackInfoHeading>
      </TrackInfoContainer>
    </Container>
  )
}