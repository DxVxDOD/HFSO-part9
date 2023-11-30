import express from "express";
import diagnosesService from "../services/diagnoses";

const router = express.Router();

router.get("/", (_req, res) => {
	const allDiagnoses = diagnosesService.getDiagnoses();

	res.json(allDiagnoses);
});

router.post("/", (_req, res) => {
	res.send("Saving data");
});

export default router;
