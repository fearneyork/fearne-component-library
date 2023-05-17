import { GitHubWidget } from "../../Widgets/GitHub/GitHubWidget.jsx";

export default {
  title: 'Widgets',
  argTypes: {
    // text: { control: 'text' },
  },
};

export const GitHub = {
  args: {
    // text: 'This is h1 text',
  },
  render: ({}) => <GitHubWidget />
};