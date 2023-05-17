import { Heading1, Heading2, Body } from "../../Typography/Typography.jsx";

export default {
  title: 'Typography',
  argTypes: {
    text: { control: 'text' },
  },
};

export const Title = {
  args: {
    text: 'This is h1 text',
  },
  render: ({text}) => <Heading1>{text}</Heading1>,
};

export const Heading = {
    args: {
    text: 'This is h2 text',
  },
  render: ({text}) => <Heading2>{text}</Heading2>,
};

export const BodyText = {
    args: {
    text: 'This is body text',
  },
  render: ({text}) => <Body>{text}</Body>,
};
