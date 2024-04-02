import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from '../components/number-input';

const meta = {
	title: 'NumberInput',
	component: NumberInput,
	tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'NumberInput',
		onChange: () => {},
		defaultValue: '5',
		helperText: '',
		error: false,
	},
};

export const MaxError: Story = {
	args: {
		label: 'NumberInput',
		onChange: () => {},
		defaultValue: '99',
		helperText: 'Maksymalna wartość wynosi 30',
		error: true,
	},
};

export const MinError: Story = {
	args: {
		label: 'NumberInput',
		onChange: () => {},
		defaultValue: '0',
		helperText: 'Minimalna wartość wynosi 1',
		error: true,
	},
};

export const NumberRequired: Story = {
	args: {
		label: 'NumberInput',
		onChange: () => {},
		defaultValue: 'test',
		helperText: 'Wartość musi być liczbą',
		error: true,
	},
};
