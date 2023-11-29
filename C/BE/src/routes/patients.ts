import express from "express";
import patientService from "../services/patient";

const router = express.Router();

router.get("/", (_req, res) => {
	const allPatients = patientService.getPatientsNoSSN();

	res.send(allPatients);
});

export default router;
