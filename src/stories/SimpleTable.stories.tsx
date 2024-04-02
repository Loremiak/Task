import SimpleTable from '../components/simple-table';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'SimpleTable',
	component: SimpleTable,
	tags: ['autodocs'],
} satisfies Meta<typeof SimpleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isLoading: false,
		tableCells: ['Name', 'Count'],
		dataList: [
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
		],
	},
};

export const WithMoreData: Story = {
	args: {
		isLoading: false,
		tableCells: ['Name', 'Count'],
		dataList: [
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
			{
				name: 'React',
				count: 21122,
			},
			{
				name: 'Vue',
				count: 22,
			},
			{
				name: 'Angular',
				count: 222,
			},
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
			{
				name: 'React',
				count: 21122,
			},
			{
				name: 'Vue',
				count: 22,
			},
			{
				name: 'Angular',
				count: 222,
			},
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
			{
				name: 'React',
				count: 21122,
			},
			{
				name: 'Vue',
				count: 22,
			},
			{
				name: 'Angular',
				count: 222,
			},
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
			{
				name: 'React',
				count: 21122,
			},
			{
				name: 'Vue',
				count: 22,
			},
			{
				name: 'Angular',
				count: 222,
			},
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
			{
				name: 'React',
				count: 21122,
			},
			{
				name: 'Vue',
				count: 22,
			},
			{
				name: 'Angular',
				count: 222,
			},
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
			{
				name: 'React',
				count: 21122,
			},
			{
				name: 'Vue',
				count: 22,
			},
			{
				name: 'Angular',
				count: 222,
			},
		],
	},
};

export const WithMoreCells: Story = {
	args: {
		isLoading: false,
		tableCells: ['Id', 'Name', 'Count', 'Is moderator only', 'Is required', 'Has synonyms'],
		dataList: [
			{
				name: 'Javascript',
				count: 1112211,
			},
			{
				name: 'HTML',
				count: 12132131231,
			},
			{
				name: 'CSS',
				count: 3123123,
			},
		],
	},
};

export const WithLoading: Story = {
	args: {
		isLoading: true,
		tableCells: ['Name', 'Count'],
		dataList: [],
	},
};
