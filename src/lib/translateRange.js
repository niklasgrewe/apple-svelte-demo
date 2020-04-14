export function translateRange(
	input,
	inputMin,
	inputMax,
	outputMin,
	outputMax
) {
	let inputMinA = Math.min(inputMin, input);
	let inputMaxA = Math.max(inputMax, input);

	return (
		outputMin +
		((outputMax - outputMin) * (input - inputMinA)) /
			(inputMaxA - inputMinA)
	);
}
