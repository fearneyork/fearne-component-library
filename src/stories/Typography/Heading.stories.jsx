import { Heading } from "../../Typography/Heading";

// More on how to set up stories at: https://storybook.js.org/docs/preact/writing-stories/introduction
export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    sizeTag: { control: 'sizeTag' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/preact/writing-stories/args
export const Primary = {
  args: {
    sizeTag: 'h1',
  },
};
