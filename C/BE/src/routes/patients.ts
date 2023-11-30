import express from "express";
import patientService from "../services/patient";

const router = express.Router();

router.get("/", (_req, res) => {
	const allPatients = patientService.getPatientsNoSSN();

	res.json(allPatients);
});

router.post("/", (req, res) => {
	const {} = req.body;
});

export default router;
