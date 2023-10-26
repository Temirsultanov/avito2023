export function transformToValueLabel(obj: { [index: string]: string }) {
	return Object.entries(obj).map((entry) => ({
		value: entry[0],
		label: entry[1],
	}))
}

export function transformToSearchParams(sorting: string, platform: string, tags: string[]) {
	const searchParams: { [index: string]: string } = {}

	if (sorting) searchParams['sort-by'] = sorting
	if (platform) searchParams['platform'] = platform
	if (tags.length > 0) searchParams['tag'] = tags.join('.')

	return searchParams
}
