import { useQuery } from '@tanstack/react-query';

type TagsType = {
	page: number;
	pageSize: string;
	order: string;
	sort: string;
};

const BASE_URL = 'https://aapi.stackexchange.com/2.3/tags';

const getTags = ({ page, pageSize, order, sort }: TagsType) => {
	const tags = useQuery({
		queryKey: ['tags', page, pageSize, order, sort],
		queryFn: () =>
			fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`)
				.then(res => res.json())
				.catch(error => console.error('Błąd podczas pobierania danych: ', error)),
	});

	return tags;
};

export default getTags;
