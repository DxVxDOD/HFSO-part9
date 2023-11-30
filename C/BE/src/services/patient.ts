import { patientsData } from "../../data/patientsData";
import { NoSSNPatientData, Patient, NewPatient } from "../../types";
import { v4 as uuidv4 } from "uuid";

const getPatients = (): Patient[] => {
	return patientsData;
};

const getPatientsNoSSN = (): NoSSNPatientData[] => {
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

const addPatient = (patientData: NewPatient): Patient => {
	const newPatient = {
		id: uuidv4() as string,
		...patientData,
	};

	return newPatient;
};

export default {
	getPatients,
	getPatientsNoSSN,
	addPatient,
};
