import { Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Solid = () => (
  <Button text="Solid" variant="solid" size="md" onClick={() => {}} />
);

export const Outline = () => (
  <Button text="Outline" variant="outline" size="md" onClick={() => {}} />
);
