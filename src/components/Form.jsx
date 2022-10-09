import { useState } from "react";
import StepFour from "../UI/formSteps/StepFour";
import StepOne from "../UI/formSteps/StepOne";
import StepThree from "../UI/formSteps/StepThree";
import StepTwo from "../UI/formSteps/StepTwo";
import Title from "../UI/Title";
import FormContent from "./FormContent";
import Stepper from "./Stepper";

function Form() {
	const [steps, setSteps] = useState(1);

	function changeSteps() {
		if (steps > 3) return;

		setSteps((prev) => prev + 1);
	}

	return (
		<div className="w-full">
			<form>
				<Title />
				<Stepper steps={steps} />
				<FormContent steps={steps} />
				<div className="md:max-w-sm mx-auto">
					{steps === 1 && <StepOne />}
					{steps === 2 && <StepTwo />}
					{steps === 3 && <StepThree />}
					{steps === 4 && <StepFour />}
					<button
						type={"button"}
						onClick={changeSteps}
						className="bg-violet-700 bg-opacity-80 mt-4 py-3 px-4 inline-block w-full text-indigo-50 capitalize rounded-md border-none outline-none">
						{steps === 4 ? "launch Eden" : "create workspace"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
