import { useQuery } from '@tanstack/react-query';

type TagsType = {
	page: string;
	pageSize: string;
	order: string;
	sort: string;
};

const BASE_URL = 'https://aaapi.stackexchange.com/2.3/tags';

const useGetTags = ({ page, pageSize, order, sort }: TagsType) => {
	const tags = useQuery({
		queryKey: ['tags', page, pageSize, order, sort],
		queryFn: () =>
			fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`)
				.then(res => res.json())
				.catch(error => console.error('Błąd podczas pobierania danych: ', error)),
	});

	return tags;
};

export default useGetTags;
