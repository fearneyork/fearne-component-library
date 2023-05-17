import Text from "../../Typography/Text";

export default {
  component: Text,
  argTypes: {
    tag: { control: 'text' },
    text: { control: 'text' },
  },
};

const style = { color: 'blue'};

export const Paragraph = {
  args: {
    tag: 'p',
    text: 'This is paragraph text',
    style,
  },
};
export const Title = {
  args: {
    tag: 'h1',
    text: 'This is a h1',
    style,
  },
};
export const Emphasis = {
  args: {
    tag: 'em',
    text: 'This is a h1',
    style,
  },
};
