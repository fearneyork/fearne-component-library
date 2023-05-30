import styled from "styled-components";
import SpotifyIcon from "../../assets/SpotifyIcon";
import { Heading2 } from "../../Typography/Typography";

const exampleArtwork = 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/02/10fleetwoodMacRumours201010-2.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 250px;
  border: 0px;
  border-radius: 25px;
  opacity: 100%;
  background-image: url(${(props) => props.source});
  background-size: cover;
  `

const TrackInfoContainer = styled.div`
  width: 233px;
  height: 75px;
  background-color: rgba(0,0,0,0.3);
  border: 0px;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.25);
`

const TrackInfoHeading = styled(Heading2)`
  font-family: helvetica;
  opacity: 100%;
`

const IconContainer = styled.div`
  flex-direction: row;
  align-self: end;
  margin: 10px 10px 0px 0px;
`

export const SpotifyWidget = () => {
  return (
    <Container source={exampleArtwork}>
      <IconContainer>
        <SpotifyIcon />
      </IconContainer>
      <TrackInfoContainer>
        <TrackInfoHeading>Currently Playing</TrackInfoHeading>
      </TrackInfoContainer>
    </Container>
  )
}