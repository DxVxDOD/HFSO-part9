export const calculateBmi = (height: number, weight: number): string => {
	const heightInM = Number((height / 100).toFixed(1));
	const bmi = Number((weight / (heightInM * heightInM)).toFixed(1));

	if (bmi <= 16) {
		return "Underweight (Severe thinness)";
	}

	if (bmi > 16 && bmi < 17) {
		return "Underweight (Moderate thinness)";
	}

	if (bmi >= 17 && bmi < 18.5) {
		return "Underweight (Mild thinness)";
	}

	if (bmi >= 18.5 && bmi < 25) {
		return "Normal range";
	}

	if (bmi >= 25 && bmi < 30) {
		return "Overweight (Pre-obese)";
	}

	if (bmi >= 30 && bmi < 35) {
		return "Obese (Class I)";
	}

	if (bmi >= 35 && bmi < 40) {
		return "Obese (Class II)";
	}

	return "Obese (Class III)";
};

const parseArguments = (args: string[]) => {
	if (args.length < 4) {
		throw new Error("Not enough arguments");
	}

	if (args.length > 4) {
		throw new Error("Too many arguments");
	}

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
		return {
			value1: Number(args[2]),
			value2: Number(args[3]),
		};
	}

	throw new Error("Provided values were not numbers");
};

try {
	const { value1: height, value2: weight } = parseArguments(process.argv);
	console.log(calculateBmi(height, weight));
} catch (error) {
	let errorMessage = "Something went wrong: ";
	if (error instanceof Error) {
		errorMessage += error.message;
	}

	console.log(errorMessage);
}
