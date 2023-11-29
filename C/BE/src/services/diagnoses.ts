import { diagnosesData } from "../../data/diagnosesData";
import { Diagnoses } from "../../types";

const getDiagnoses = (): Diagnoses[] => {
	return diagnosesData;
};

export default {
	getDiagnoses,
};
