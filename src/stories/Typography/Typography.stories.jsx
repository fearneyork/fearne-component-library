import { Heading1 } from "../../Typography/Typography.jsx";

export default {
  title: 'Typography',
  argTypes: {
    text: { control: 'text' },
  },
};

export const Title = {
  args: {
    text: 'This is paragraph text',
  },
  render: ({text}) => <Heading1>{text}</Heading1>
};

export const SecTitle = {
render: () => <Heading1>This is text</Heading1>
};
