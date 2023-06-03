import { GitHubWidget } from "../../Widgets/GitHub/GitHubWidget";

export default {
  title: 'Widgets',
  argTypes: { 
    data : {
      username: { control: 'text' },
      bio: { control: 'text' },
    },
    isMobile: { control: 'boolean' },
  },
};

const fearneProfileData = {
  username: 'fearneyork',
  bio: '25 // ✏️ 🐁 👨🏻‍💻 🏳️‍⚧️ 🏳️‍🌈 // she/her // Full Stack JS Dev // Serial Procrastinator',
  isMobile: false,
};


export const FearneGitHubWidget = {
  render: (args) => {
    return <GitHubWidget {...fearneProfileData } {...args} />
  }
};
