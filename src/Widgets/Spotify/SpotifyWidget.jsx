import styled, { keyframes } from "styled-components";
import SpotifyIcon from "../../assets/SpotifyIcon";
import { Body, Heading2 } from "../../Typography/Typography";

const animate = keyframes`
  0% { background-position: 0% 75% };
  50% { background-position: 100% 50% };
  100% { background-position: 0% 75% };
`

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 260px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 30px;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: ${animate} 5s linear infinite;
  `

const ArtworkContainer = styled.div`
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
  background-color: rgba(0,0,0,0.4);
  border: 0px;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  justify-content: space-between;
  flex-direction: column;
`

const TrackPlayState = styled(Heading2)`
  font-family: helvetica;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 0px;
  opacity: 100%;
  color: rgba(0, 214, 76, 1);
  margin: 0;
  align-content: center;
  `
  
  const TrackTitle = styled(Body)`
  font-family: helvetica;
  font-size: 14px;
  font-weight: 500;
  padding: 3px 0px;
  opacity: 100%;
  color: rgba(255, 255, 255, 1);
  margin: 0;
`

const TrackSubtitle = styled(Body)`
  font-family: helvetica;
  font-size: 10px;
  font-weight: 500;
  opacity: 100%;
  color: rgb(255, 255, 255);
  margin: 0;
`

const IconContainer = styled.div`
  flex-direction: row;
  align-self: end;
  color: rgb(255, 255, 255);
  margin: 10px 10px 0px 0px;
`

export const SpotifyWidget = ({data}) => {
  const {isCurrentlyPlaying, trackName, artistAndTrack, trackUrl } = data;
  const TrackPlayStateText = isCurrentlyPlaying ? 'Currently Playing' : 'Recently Played';

  return (
    <BorderContainer>
      <ArtworkContainer source={trackUrl}>
        <IconContainer>
          <SpotifyIcon />
        </IconContainer>
        <TrackInfoContainer>
          <TrackPlayState>{TrackPlayStateText}</TrackPlayState>
          <TrackTitle>{trackName}</TrackTitle>
          <TrackSubtitle>{artistAndTrack}</TrackSubtitle>
        </TrackInfoContainer>
      </ArtworkContainer>
    </BorderContainer>
  )
}