import Pagination from '../components/pagination';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Pagination',
	component: Pagination,
	tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
	args: {
		count: 10,
		page: 1,
		onChange: () => {},
	},
};

export const LastPage: Story = {
	args: {
		count: 10,
		page: 10,
		onChange: () => {},
	},
};

export const FewPages: Story = {
	args: {
		count: 3,
		page: 2,
		onChange: () => {},
	},
};

export const ALofOfPages: Story = {
	args: {
		count: 50,
		page: 25,
		onChange: () => {},
	},
};
