export default function getData({ url, text, options, search }) {
	const receivedUrl = url + search + text;
	const response = fetch(`${receivedUrl}`, {
		...options,
		method: 'GET',
	}).then((answer) => {
		if (answer.ok) {
			return answer.json();
		}

		return answer.json().then((error) => {
			const err = new Error('Oops..., something went wrong');
			err.data = error;
			throw err;
		});
	});

	return response;
}