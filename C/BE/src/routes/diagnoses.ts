import express from "express";
import diagnosesService from "../services/diagnosesService";

const router = express.Router();

router.get("/", (_req, res) => {
	const allDiagnoses = diagnosesService.getEntries();

	res.send(allDiagnoses);
});

router.post("/", (_req, res) => {
	res.send("Saving data");
});

export default router;
