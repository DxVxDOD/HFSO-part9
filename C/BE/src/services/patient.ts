import { patientsData } from "../../data/patientsData";
import { NoSSNPatientData, Patient } from "../../types";

const getPatients = (): Patient[] => {
	return patientsData;
};

const getPatientsNoSSN = (): NoSSNPatientData => {
	return patientsData.map(
		({ id, name, dateOfBirth, gender, occupation }) => ({
			id,
			name,
			dateOfBirth,
			gender,
			occupation,
		})
	);
};

export default {
	getPatients,
	getPatientsNoSSN,
};
