import type { Meta, StoryObj } from '@storybook/react';
import ErrorAlert from '../components/error-alert';

const meta = {
	title: 'ErrorAlert',
	component: ErrorAlert,
	tags: ['autodocs'],
} satisfies Meta<typeof ErrorAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		errorText: 'Coś poszło nie tak, spróbuj odświeżyć stronę.',
	},
};
