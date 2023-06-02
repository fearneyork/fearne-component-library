import styled, { keyframes } from "styled-components";
import SpotifyIcon from "../../assets/SpotifyIcon";
import { Body, Heading2 } from "../../Typography/Typography";

const animate = keyframes`
  0% { background-position: 50% 75% };
  20% { background-position: 75% 75% };
  40% { background-position: 75% 25% };
  60% { background-position: 25% 25% };
  80% { background-position: 25% 75% };
  100% { background-position: 50% 75% };
`

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => !props.isMobile ? '250px' : '350px'};
  height: 250px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 30px;
  background: radial-gradient(rgba(0,230,210,1), rgba(0,180,95,1), rgba(0,120,65,1), rgba(0,30,10,1), rgba(0,0,0,1));
  background-size: 400% 400%;
  animation: ${animate} 7s ${(props) => props.animationPlayState} linear infinite reverse;
  `

const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => !props.isMobile ? '240px' : '340px'};
  height: 240px;
  border: 0px;
  border-radius: 25px;
  opacity: 100%;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-size: cover;
  `

const TrackInfoContainer = styled.div`
  display: flex;
  width: ${(props) => !props.isMobile ? '220px' : '320px'};
  height: ${(props) => !props.isMobile ? '80px' : '230px'};
  background-color: rgba(0,0,0,0.5);
  border: 0px;
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  flex-direction: column;
  // justify-content: flex-end;
`

const TrackPlayState = styled(Heading2)`
  font-family: helvetica;
  font-size: ${(props) => !props.isMobile ? '14px' : '18px'};
  font-weight: 500;
  padding: 5px 0px;
  opacity: 100%;
  color: rgba(0, 214, 76, 1);
  margin: 0;
  align-content: center;

`

  const TrackTitle = styled(Body)`
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

const TrackSubtitle = styled(Body)`
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
  flex-direction: row;
  align-self: end;
  color: rgb(255, 255, 255);
  margin: 10px 10px 0px 0px;
`

export const SpotifyWidget = ({isCurrentlyPlaying, trackName, artistAndTrack, trackUrl, isMobile, isLoading}) => {
  const TrackPlayStateText = isCurrentlyPlaying ? 'Currently Playing' : 'Recently Played';
  const animationPlayState = isCurrentlyPlaying ? 'running' : 'paused';

  return (
    <BorderContainer animationPlayState={animationPlayState} isMobile={isMobile}>
      <ArtworkContainer source={trackUrl} isMobile={isMobile}>
        <IconContainer>
          {!isMobile && <SpotifyIcon />}
        </IconContainer>
        <TrackInfoContainer isMobile={isMobile}>
          <TrackPlayState isMobile={isMobile}>{TrackPlayStateText}</TrackPlayState>
          <TrackTitle isMobile={isMobile}>{trackName}</TrackTitle>
          <TrackSubtitle isMobile={isMobile}>{artistAndTrack}</TrackSubtitle>
        </TrackInfoContainer>
      </ArtworkContainer>
    </BorderContainer>
  )
}