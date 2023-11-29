import { diagnosesData } from "../../data/diagnosesData";
import { Diagnoses } from "../../types";

const getEntries = (): Diagnoses[] => {
	return diagnosesData;
};

export default {
	getEntries,
};
