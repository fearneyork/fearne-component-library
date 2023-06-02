import { SpotifyWidget } from "../../Widgets/Spotify/SpotifyWidget";

export default {
  title: 'Widgets',
  argTypes: {
    isCurrentlyPlaying: { options: [true, false], control: 'boolean' },
    trackName: { control: 'text' },
    artistAndTrack: { control: 'text' },
    trackUrl: { control: 'text' },
  },
};

const fleetwoodMacData = {
  isCurrentlyPlaying: true,
  trackName: 'The Chain',
  artistAndTrack: 'Fleetwood Mac - Rumours (Deluxe)',
  trackUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/02/10fleetwoodMacRumours201010-2.jpg',
};

const scottPilgrimData = {
  isCurrentlyPlaying: false,
  trackName: 'We Are Sex Bob-Omb',
  artistAndTrack: 'Scott Pilgrim Vs. The World (Original Motion Picture Soundtrack)',
  trackUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/Scott_Pilgrim_soundtrack_cover.jpg',
};

export const FleetwoodMacSpotifyWidget = {
  render: (args) => {
    return <SpotifyWidget {...fleetwoodMacData } {...args} />
  }
};

export const ScottPilgrimSpotifyWidget = {
  render: (args) => {
    return <SpotifyWidget {...scottPilgrimData } {...args} />
  }
};