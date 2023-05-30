import { SpotifyWidget } from "../../Widgets/Spotify/SpotifyWidget";

export default {
  title: 'Widgets',
  argTypes: {
    // text: { control: 'text' },
  },
};

export const Spotify = {
  args: {
    // text: 'This is h1 text',
  },
  render: ({}) => <SpotifyWidget />
};