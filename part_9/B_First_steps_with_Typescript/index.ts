import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.use(express.json());

app.post("/exercises", (req, res) => {
	const {
		daily_exercises,
		target,
	}: { daily_exercises: number[]; target: number } = req.body;

	if (!daily_exercises || !target) {
		res.status(400).json({
			error: "Missing parameters!",
		});
	}

	if (isNaN(Number(target))) {
		res.status(400).json({
			error: "Malformatted parameters!",
		});
	}

	for (let i = 0; i < daily_exercises.length; i++) {
		if (isNaN(Number(daily_exercises[i]))) {
			res.status(400).json({
				error: "Malformatted parameters!",
			});
		}
	}

	const result = calculateExercises(daily_exercises, Number(target));

	res.json(result);
});

app.get("/bmi", (req, res) => {
	const urlInfo = req.query;

	if (isNaN(Number(urlInfo.height))) {
		res.send({
			error: "Malformated parameters",
		});
	}

	if (isNaN(Number(urlInfo.weight))) {
		res.send({
			error: "Malformated parameters",
		});
	}

	const height = Number(urlInfo.height);
	const weight = Number(urlInfo.weight);

	res.send({
		weight,
		height,
		bmi: calculateBmi(height, weight),
	});
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
