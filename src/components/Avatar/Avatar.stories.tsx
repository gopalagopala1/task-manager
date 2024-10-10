import { Meta } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

export const Default = () => (
  <Avatar src="/images/background.png" alt="avatar" size="md" />
);
