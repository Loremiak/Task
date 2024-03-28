import type { Meta, StoryObj } from '@storybook/react';
import SimpleSelect from '../components/simple-select';

const meta = {
	title: 'SimpleSelect',
	component: SimpleSelect,
	tags: ['autodocs'],
} satisfies Meta<typeof SimpleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FewMenuItem: Story = {
	args: {
		label: 'SimpleSelect',
		menuItem: ['1', '2', '3'],
		onChange: () => {},
		selectedValue: '1',
	},
};

export const ALotOfMenuItem: Story = {
	args: {
		label: 'SimpleSelect',
		menuItem: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16'],
		onChange: () => {},
		selectedValue: '1',
	},
};

export const LastSelected: Story = {
	args: {
		label: 'SimpleSelect',
		menuItem: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16'],
		onChange: () => {},
		selectedValue: '16',
	},
};
